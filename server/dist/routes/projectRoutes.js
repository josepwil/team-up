"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const projectController_1 = require("../controllers/projectController");
const router = express_1.default.Router();
// get all projects
router.get('/', projectController_1.getAllProjects);
// get specific prodect
router.get('/:id', projectController_1.getProjectById);
// create a new project
router.post('/', projectController_1.createProject);
// edit an existing project
router.put('/:id', projectController_1.updateProject);
// delete an existing project
router.delete('/:id', projectController_1.deleteProject);
exports.default = router;
//# sourceMappingURL=projectRoutes.js.map