import mongoose from 'mongoose';
const { Schema } = mongoose;

export interface IProject extends mongoose.Document {
  _creator: string;
  name: string;
  description: string;
  image: string;
  technologies: string[];
}

export const projectSchema = new Schema({
  _creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  technologies: [String]
})

const Project = mongoose.model<IProject>('Project', projectSchema);

export default Project;