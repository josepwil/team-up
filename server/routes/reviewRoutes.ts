import express from 'express';
import { getAllReviews, getReviewsForUser, createReview, updateReview, deleteReview } from '../controllers/reviewController'

const router = express.Router();

// get all reviews
router.get('/', getAllReviews);

// get all reviews for a specific user
router.get('/:id', getReviewsForUser);

// create a new review
router.post('/', createReview);

// edit an existing review
router.put('/:id', updateReview);

// delete a review
router.delete('/:id', deleteReview);









export default router;