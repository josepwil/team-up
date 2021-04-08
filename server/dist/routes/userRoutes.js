"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const router = express_1.default.Router();
// get specific user
router.get('/:id', userController_1.getUser);
// create a new user
router.post('/', userController_1.createUser);
// edit an existing user
router.put('/:id', userController_1.updateUser);
exports.default = router;
//# sourceMappingURL=userRoutes.js.map