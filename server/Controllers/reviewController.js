import Tour from "../models/Tour.js";
import Review from "../models/Review.js";

export const createReview = async (req, res) => {
   const tourId = req.params.tourId;
   const user = req.user;

   const existingReview = await Review.findOne({ productId: tourId, username: user.username });
   if (existingReview) {
      return res.status(403).json({ success: false, message: "You have already reviewed this tour" });
   }

   const newReview = new Review({ ...req.body, productId: tourId });

   try {
      const savedReview = await newReview.save();

      await Tour.findByIdAndUpdate(tourId, {
         $push: { reviews: savedReview._id }
      });

      res.status(200).json({ success: true, message: "Review submitted", data: savedReview });
   } catch (error) {
      res.status(500).json({ success: false, message: "Failed to submit" });
   }
};

export const deleteReview = async (req, res) => {
   const { tourId, reviewId } = req.params;
   const user = req.user;

   try {
      const review = await Review.findById(reviewId);
      if (!review) {
         return res.status(404).json({ success: false, message: "Review not found" });
      }
      if (review.username !== user.username) {
         return res.status(403).json({ success: false, message: "You can only delete your own review" });
      }

      await Review.findByIdAndDelete(reviewId);
      await Tour.findByIdAndUpdate(tourId, {
         $pull: { reviews: reviewId }
      });

      res.status(200).json({ success: true, message: "Review deleted" });
   } catch (error) {
      res.status(500).json({ success: false, message: "Failed to delete review" });
   }
};