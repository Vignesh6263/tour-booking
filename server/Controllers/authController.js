import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// User register
export const register = async (req, res) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            photo: req.body.photo,
        });

        await newUser.save();

        res.status(200).json({ success: true, message: "Successfully created!" });
    } catch (error) {
        console.error("Register error:", error.stack);
        res.status(500).json({ success: false, message: "Failed to create! Try again." });
    }
};

// User login
export const login = async (req, res) => {
    console.log("Request body:", req.body); // Debug incoming request
    try {
        const email = req.body.email;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found!" });
        }

        const checkCorrectPassword = await bcrypt.compare(req.body.password, user.password);

        if (!checkCorrectPassword) {
            return res.status(401).json({ success: false, message: "Incorrect email or password!" });
        }

        const { password, role, ...rest } = user._doc;

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECURITY_KEY, // Changed to match .env
            { expiresIn: "15d" }
        );

        res.cookie("accessToken", token, {
            httpOnly: true,
            expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // 15 days
        })
        .status(200)
        .json({ token, data: { ...rest }, role });
    } catch (error) {
        console.error("Login error:", error.stack);
        res.status(500).json({ success: false, message: "Failed to login" });
    }
};