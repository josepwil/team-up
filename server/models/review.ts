import mongoose from 'mongoose';
const { Schema } = mongoose;

export interface IReview extends mongoose.Document {
  _user: string;
  review: string;
  rating: number;
}

export const reviewSchema = new Schema({
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
})

const Review = mongoose.model<IReview>('Review', reviewSchema);
export default Review;