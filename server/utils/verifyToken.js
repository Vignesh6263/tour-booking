import jwt from "jsonwebtoken";

export const verifyUser = (req, res, next) => {
    const token = req.cookies.accessToken; // Extract token from cookie
    console.log("Token from cookie:", token); // Debug log

    if (!token) {
        return res.status(401).json({ success: false, message: "No token provided" });
    }

    jwt.verify(token, process.env.JWT_SECURITY_KEY, (err, decoded) => {
        if (err) {
            console.error("Token verification error:", err.message); // Debug log
            return res.status(403).json({ success: false, message: "Token is invalid" });
        }
        req.user = decoded; 
        next();
    });
};

export const verifyAdmin = (req, res, next) => {
    verifyUser(req, res, () => {
        if (req.user.role === "admin") {
            next();
        } else {
            return res.status(403).json({ success: false, message: "Not authorized as admin" });
        }
    });
};