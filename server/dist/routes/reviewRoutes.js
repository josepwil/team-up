"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const reviewController_1 = require("../controllers/reviewController");
const router = express_1.default.Router();
// get all reviews
router.get('/', reviewController_1.getAllReviews);
// get all reviews for a specific user
router.get('/:id', reviewController_1.getReviewsForUser);
// create a new review
router.post('/', reviewController_1.createReview);
// edit an existing review
router.put('/:id', reviewController_1.updateReview);
// // delete a review
// router.delete('/:id', deleteReview);
exports.default = router;
//# sourceMappingURL=reviewRoutes.js.map