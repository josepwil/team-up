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

const getProjectById = (req: Request, res: Response) => {
  const projectId = req.params.id;
  Project.findById(projectId)
    .then(project => {
      if (project) {
        return res.status(200).json(project)
      }
      return res.status(400).json({error: 'No such project'})
    })
    .catch(err => {
      console.log('ERROR: ', err)
    })

}

const createProject = (req: Request, res: Response) => {
  const { _creator, name, description, image, technologies } = req.body;

  Project.findOne({ name })
    .then(project => {
      if (project) {
        return res.status(400).json({error: 'Project with that name already exists'})
      }

      Project.create({_creator, name, description, image, technologies}, (err, project) => {
        if (err) {
          console.log('ERROR: ', err)
          return;
        }
        console.log('Project created')
        return res.status(201).json(project) 
      })
    })
    .catch(err => {
      console.log('ERROR: ', err)
    })
}

const searchForProject = (req: Request, res: Response) => {
    const searchTerm = req.params.searchTerm
    Project.find({ technologies: `${searchTerm}`})
      .then(projects => {
        if (projects) {
          return res.status(200).json(projects)
        }
        return res.status(400).json({error: 'No projects found'})
      })
      .catch(err => {
        console.log('error: ', err)
      })
}

const updateProject = (req: Request, res: Response) => {
  const projectId = req.params.id;
  Project.findById(projectId)
    .then(project => {
      if (!project) {
        return res.status(400).json({error: 'No such project'})
      }
      project.name = req.body.name || project.name;
      project.description = req.body.description || project.description;
      project.image = req.body.image || project.image;
      project.technologies = req.body.technologies || project.technologies
      // nesting .then because if I try to return project.save() I get a type error 
      project.save()
        .then(updatedProject => {
          return res.status(200).json(updatedProject)
        })
    })
    .catch(err => {
      console.log('ERROR: ', err)
    })
}

const deleteProject = (req: Request, res: Response) => {
  const projectId = req.params.id;
  Project.findById(projectId)
    .then(project => {
      return project.remove()
    })
    .then(response => {
      res.status(200).json({message: 'deleted project'});
    })
    .catch(err => {
      console.log('ERROR: ', err)
    })
}


export {getAllProjects, getProjectById, createProject, updateProject, deleteProject, searchForProject};