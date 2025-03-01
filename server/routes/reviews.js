import express from 'express';
import { createReview, deleteReview } from '../Controllers/reviewController.js';
import { verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

router.post('/:tourId', verifyUser, createReview);
router.delete('/:tourId/:reviewId', verifyUser, deleteReview);

export default router;