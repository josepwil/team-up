import express from 'express';
import { createProject, getProjectById, updateProject, getAllProjects} from '../controllers/projectController'

const router = express.Router();

// get all projects
router.get('/', getAllProjects)

// get specific prodect
router.get('/:id', getProjectById)

// create a new project
router.post('/', createProject)

// edit an existing project
router.put('/:id', updateProject)

export default router;