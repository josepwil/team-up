"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProject = exports.updateProject = exports.createProject = exports.getProjectById = exports.getAllProjects = void 0;
const project_1 = __importDefault(require("../models/project"));
const getAllProjects = (req, res) => {
    project_1.default.find({})
        .then(projects => {
        if (!projects) {
            return res.status(400).json({ error: 'There are no projects' });
        }
        return res.status(200).json(projects);
    })
        .catch(err => {
        console.log('ERROR: ', err);
    });
};
exports.getAllProjects = getAllProjects;
const getProjectById = (req, res) => {
    const projectId = req.params.id;
    project_1.default.findById(projectId)
        .then(project => {
        if (project) {
            return res.status(200).json(project);
        }
        return res.status(400).json({ error: 'No such project' });
    })
        .catch(err => {
        console.log('ERROR: ', err);
    });
};
exports.getProjectById = getProjectById;
const createProject = (req, res) => {
    const { _creator, name, description, image, technologies } = req.body;
    project_1.default.findOne({ name })
        .then(project => {
        if (project) {
            return res.status(400).json({ error: 'Project with that name already exists' });
        }
        project_1.default.create({ _creator, name, description, image, technologies }, (err, project) => {
            if (err) {
                console.log('ERROR: ', err);
                return;
            }
            console.log('Project created');
            return res.status(201).json(project);
        });
    })
        .catch(err => {
        console.log('ERROR: ', err);
    });
};
exports.createProject = createProject;
const updateProject = (req, res) => {
    const projectId = req.params.id;
    project_1.default.findById(projectId)
        .then(project => {
        if (!project) {
            return res.status(400).json({ error: 'No such project' });
        }
        project.name = req.body.name || project.name;
        project.description = req.body.description || project.description;
        project.image = req.body.image || project.image;
        project.technologies = req.body.technologies || project.technologies;
        // nesting .then because if I try to return project.save() I get a type error 
        project.save()
            .then(updatedProject => {
            return res.status(200).json(updatedProject);
        });
    })
        .catch(err => {
        console.log('ERROR: ', err);
    });
};
exports.updateProject = updateProject;
const deleteProject = (req, res) => {
    const projectId = req.params.id;
    project_1.default.findById(projectId)
        .then(project => {
        return project.remove();
    })
        .then(response => {
        res.status(200).json({ message: 'deleted project' });
    })
        .catch(err => {
        console.log('ERROR: ', err);
    });
};
exports.deleteProject = deleteProject;
//# sourceMappingURL=projectController.js.map