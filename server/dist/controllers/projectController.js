"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProject = exports.createProject = exports.getProjectById = exports.getAllProjects = void 0;
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
const getProjectById = () => {
};
exports.getProjectById = getProjectById;
const createProject = () => {
};
exports.createProject = createProject;
const updateProject = () => {
};
exports.updateProject = updateProject;
//# sourceMappingURL=projectController.js.map