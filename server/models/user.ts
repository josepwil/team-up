import mongoose from 'mongoose';
const { Schema } = mongoose;

export interface IUser extends mongoose.Document {
  name: string;
  email: string;
  password: string;
}

export const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;