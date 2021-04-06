import express from 'express';
import dotenv from 'dotenv'
import connectDB from './config/db'

dotenv.config({path: '../.env'});

connectDB()


const app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
  });
  app.listen(3000, function () {
  console.log('App is listening on port 3000!');
  }); 