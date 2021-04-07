import mongoose from 'mongoose';
const { Schema } = mongoose;

const reviewSchema = new Schema({
  review: {
    type: String,
  },
  rating: {
    type: Number,
    required: true
  }
})

const Review = mongoose.model('Review', reviewSchema);
export default Review;