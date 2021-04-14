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

export {getAllReviews, getReviewsForUser}