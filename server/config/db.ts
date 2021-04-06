import mongoose from 'mongoose';

const connectDB = () => {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(res => {
    console.log(`MongoDB Connected: ${res.connections[0].host}`);
  })
  .catch(error => {
    console.log(`ERROR: ${error.message}`);
    process.exit(1)
  })
}

export default connectDB

