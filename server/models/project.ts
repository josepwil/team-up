import mongoose from 'mongoose';
const { Schema } = mongoose;

const projectSchema = new Schema({
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
  technologies: [String]
})

const Project = mongoose.model('Project', projectSchema);

export default Project;