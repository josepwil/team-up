"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateReview = exports.createReview = exports.getReviewsForUser = exports.getAllReviews = void 0;
const review_1 = __importDefault(require("../models/review"));
const getAllReviews = (req, res) => {
    review_1.default.find({})
        .then(reviews => {
        if (!reviews) {
            return res.status(400).json({ error: 'There are no reviews' });
        }
        return res.status(200).json(reviews);
    })
        .catch(err => {
        console.log('ERROR: ', err);
    });
};
exports.getAllReviews = getAllReviews;
const getReviewsForUser = (req, res) => {
    const userId = req.params.id;
    review_1.default.find({ _user: userId })
        .then(reviews => {
        if (!reviews) {
            return res.status(400).json({ error: 'There are no reviews for this user' });
        }
        return res.status(200).json(reviews);
    })
        .catch(err => {
        console.log('ERROR: ', err);
    });
};
exports.getReviewsForUser = getReviewsForUser;
const createReview = (req, res) => {
    const { _user, review, rating } = req.body;
    review_1.default.create({ _user, review, rating }, (err, review) => {
        if (err) {
            console.log('ERROR: ', err);
            return;
        }
        console.log('Review created');
        return res.status(201).json(review);
    });
};
exports.createReview = createReview;
const updateReview = (req, res) => {
    const reviewId = req.params.id;
    review_1.default.findById(reviewId)
        .then(review => {
        if (!review) {
            return res.status(400).json({ error: 'No such review' });
        }
        review.review = req.body.review || review.review;
        review.rating = req.body.rating || review.rating;
        // nesting .then because if I try to return review.save() I get a type error 
        review.save()
            .then(updatedReview => {
            return res.status(200).json(updatedReview);
        });
    })
        .catch(err => {
        console.log('ERROR: ', err);
    });
};
exports.updateReview = updateReview;
//# sourceMappingURL=reviewController.js.map