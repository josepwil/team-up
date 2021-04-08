import mongoose from 'mongoose';
import dotenv from 'dotenv'
import connectDB from './config/db';

import users from './data/users'
import { projectsOne, projectsTwo } from './data/projects';
import { reviewsOne, reviewsTwo } from './data/reviews';
import User from './models/user';
import Project from './models/project';
import Review from './models/review';

dotenv.config({path: '../.env'});
connectDB();

const deleteProjects = Project.deleteMany()
const deleteReviews = Review.deleteMany()
const deleteUsers = User.deleteMany()

Promise.all([deleteProjects, deleteReviews, deleteUsers])
  .then(res => {
    return User.insertMany(users)
  })
  .then(res => {
    const brianId = res[0]._id;
    const aliceId = res[1]._id;

    const brianProjects = projectsOne.map(project => {
      return {...project, _creator: brianId}
    })
    const aliceProjects = projectsTwo.map(project => {
      return {...project, _creator: aliceId}
    })
    const brianReviews = reviewsOne.map(review => {
      return {...review, _user: brianId}
    })
    const aliceReviews = reviewsTwo.map(review => {
      return {...review, _user: aliceId}
    })
    
    const insertProjects = Project.insertMany([...brianProjects, ...aliceProjects]);
    const insertReviews = Review.insertMany([...brianReviews, ...aliceReviews]);

    return Promise.all([insertProjects, insertReviews])
  })
  .then(res => {
    console.log('DATA ADDED')
  })
  .catch(error => {
    console.log('ERROR: ', error.message);
    process.exit(1);
  })





