"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const reviewSchema = new Schema({
    review: {
        type: String,
    },
    rating: {
        type: Number,
        required: true
    }
});
const Review = mongoose_1.default.model('Review', reviewSchema);
exports.default = Review;
//# sourceMappingURL=review.js.map