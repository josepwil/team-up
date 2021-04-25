"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const projectController_1 = require("../controllers/projectController");
const multer_1 = __importDefault(require("multer"));
const router = express_1.default.Router();
// get all projects
router.get('/', projectController_1.getAllProjects);
// get specific project
router.get('/:id', projectController_1.getProjectById);
// find a project using search term
router.get('/search/:searchTerm?', projectController_1.searchForProject);
// create a new project
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `${__dirname}/../../../client/public/images`);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer_1.default({ storage });
router.post('/', upload.single('image'), projectController_1.createProject);
// edit an existing project
router.put('/:id', projectController_1.updateProject);
// delete an existing project
router.delete('/:id', projectController_1.deleteProject);
exports.default = router;
//# sourceMappingURL=projectRoutes.js.map