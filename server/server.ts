import express from 'express';
import dotenv from 'dotenv'
import connectDB from './config/db'
import userRoutes from './routes/userRoutes';
import projectRoutes from './routes/projectRoutes';
import reviewRoutes from './routes/reviewRoutes';

dotenv.config({path: '../.env'});
connectDB()

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());


// Routes
app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/reviews', reviewRoutes);

app.get('/', function (req, res) {
  res.send('Hello World!');
  });
  app.listen(PORT, function () {
  console.log(`App is listening on port ${PORT}!`);
  }); 