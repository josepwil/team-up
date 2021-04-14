import { Request, Response } from 'express';
import Review from '../models/review';

const getAllReviews = (req: Request, res: Response) => {
  Review.find({})
    .then(reviews => {
      if (!reviews) {
        return res.status(400).json({error: 'There are no reviews'});
      }
      return res.status(200).json(reviews);
    })
    .catch(err => {
      console.log('ERROR: ', err);
    })
}

const getReviewsForUser = (req: Request, res: Response) => {
  const userId = req.params.id;
  Review.find({_user:  userId})
    .then(reviews => {
      if (!reviews) {
        return res.status(400).json({error: 'There are no reviews for this user'});
      }
      return res.status(200).json(reviews);
    })
    .catch(err => {
      console.log('ERROR: ', err);
    })
}

const createReview = (req: Request, res: Response) => {
  const { _user, review, rating } = req.body;

  Review.create({_user, review, rating}, (err, review) => {
    if (err) {
      console.log('ERROR: ', err)
      return;
    }
    console.log('Review created')
    return res.status(201).json(review)
  })
}

const updateReview = (req: Request, res: Response) => {
  const reviewId = req.params.id;
  
  Review.findById(reviewId)
    .then(review => {
      if (!review) {
        return res.status(400).json({error: 'No such review'})
      }
      review.review = req.body.review || review.review;
      review.rating = req.body.rating || review.rating;
      // nesting .then because if I try to return review.save() I get a type error 
      review.save()
        .then(updatedReview => {
          return res.status(200).json(updatedReview)
        })
    })
    .catch(err => {
      console.log('ERROR: ', err)
    })
}

export {getAllReviews, getReviewsForUser, createReview, updateReview}