import { Request, Response } from 'express';
import Project from '../models/project';

const getAllProjects = (req: Request, res: Response) => {
  Project.find({})
    .then(projects => {
      if (!projects) {
        return res.status(400).json({error: 'There are no projects'});
      }
      return res.status(200).json(projects);
    })
    .catch(err => {
      console.log('ERROR: ', err);
    })
}

const getProjectById = () => {

}

const createProject = () => {

}

const updateProject = () => {

}

export {getAllProjects, getProjectById, createProject, updateProject};