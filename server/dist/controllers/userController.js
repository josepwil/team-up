"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.getUser = exports.createUser = void 0;
const user_1 = __importDefault(require("../models/user"));
// to do - replace any with type
const createUser = (req, res) => {
    const { name, email, password } = req.body;
    user_1.default.findOne({ email })
        .then(user => {
        if (user) {
            return res.status(400).json({ error: 'User already exists' });
        }
        user_1.default.create({ name, email, password }, (err, user) => {
            if (err) {
                console.log('ERROR: ', err);
                return;
            }
            console.log('user created');
            return res.status(201).json(user);
        });
    })
        .catch(err => {
        console.log('ERROR', err.message);
    });
};
exports.createUser = createUser;
const getUser = () => {
    console.log('user');
};
exports.getUser = getUser;
const updateUser = () => {
    console.log('user');
};
exports.updateUser = updateUser;
//# sourceMappingURL=userController.js.map