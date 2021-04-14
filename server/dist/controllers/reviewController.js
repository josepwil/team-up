"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReviewsForUser = exports.getAllReviews = void 0;
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
//# sourceMappingURL=reviewController.js.map