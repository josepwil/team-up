import express from 'express';
import { createProject, getProjectById, updateProject, getAllProjects, deleteProject, searchForProject} from '../controllers/projectController'
import multer from 'multer';
import path from 'path';


const router = express.Router();

// get all projects
router.get('/', getAllProjects);

// get specific project
router.get('/:id', getProjectById);

// find a project using search term
router.get('/search/:searchTerm?', searchForProject);

// create a new project
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `${__dirname}/../../../client/public/images`)
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage })

router.post('/', upload.single('image'), createProject);

// edit an existing project
router.put('/:id', updateProject);

// delete an existing project
router.delete('/:id', deleteProject);

export default router;