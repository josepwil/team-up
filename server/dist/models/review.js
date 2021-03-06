"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
exports.reviewSchema = new Schema({
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    review: {
        type: String,
    },
    rating: {
        type: Number,
        required: true
    }
});
const Review = mongoose_1.default.model('Review', exports.reviewSchema);
exports.default = Review;
//# sourceMappingURL=review.js.map