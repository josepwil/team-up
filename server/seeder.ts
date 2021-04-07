import mongoose from 'mongoose';
import dotenv from 'dotenv'
import connectDB from './config/db';

import users from './data/users'
import { projectsOne, projectsTwo } from './data/projects';
import User from './models/user';
import Project from './models/project';
import Review from './models/review';

dotenv.config({path: '../.env'});
connectDB();

Project.deleteMany()
  .then(res => {
    return User.deleteMany();
  })
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
    
    return Project.insertMany([...brianProjects, ...aliceProjects]);
  })
  .then(res => {
    console.log('DATA ADDED')
    console.log(res);
  })
  .catch(error => {
    console.log('ERROR: ', error.message);
    process.exit(1);
  })





