import express from 'express';
import { createProject, getProjectById, updateProject, getAllProjects, deleteProject, searchForProject} from '../controllers/projectController'

const router = express.Router();

// get all projects
router.get('/', getAllProjects);

// get specific project
router.get('/:id', getProjectById);

// find a project using search term
router.get('/search/:searchTerm?', searchForProject);

// create a new project
router.post('/', createProject);

// edit an existing project
router.put('/:id', updateProject);

// delete an existing project
router.delete('/:id', deleteProject);

export default router;