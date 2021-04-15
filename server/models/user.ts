import mongoose, { HookNextFunction } from 'mongoose';
import bcrypt from 'bcryptjs'
const { Schema } = mongoose;

const HASH_ROUNDS = 10;

export interface IUser extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  validatePassword(password: string): boolean;
}


const userSchema = new Schema<IUser>({
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


userSchema.pre<IUser>('save', async function (next: HookNextFunction) {
  if (!this.isModified('password')) {
      return next();
  }

  try {
      const salt = await bcrypt.genSalt(HASH_ROUNDS);
      this.password = await bcrypt.hash(this.password, salt);
      return next();
  } catch (e) {
      return next(e);
  }
});

userSchema.methods.validatePassword = async function (pass: string) {
  return bcrypt.compare(pass, this.password);
};

const User = mongoose.model<IUser>('User', userSchema);

export default User;