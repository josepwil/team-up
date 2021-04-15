"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const router = express_1.default.Router();
// get all users
router.get('/', userController_1.getAllUsers);
// get specific user
router.get('/:id', userController_1.getUserById);
// create a new user
router.post('/', userController_1.createUser);
//login a user
router.post('/login', userController_1.loginUser);
// edit an existing user
router.put('/:id', userController_1.updateUser);
exports.default = router;
//# sourceMappingURL=userRoutes.js.map