"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = exports.updateUser = exports.getUserById = exports.createUser = void 0;
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
const getAllUsers = (req, res) => {
    user_1.default.find({})
        .then(users => {
        if (!users.length) {
            return res.status(400).json({ error: 'There are no users' });
        }
        return res.status(200).json(users);
    })
        .catch(err => {
        console.log('ERROR: ', err);
    });
};
exports.getAllUsers = getAllUsers;
const getUserById = (req, res) => {
    const userId = req.params.id;
    user_1.default.findById(userId)
        .then(user => {
        if (user) {
            return res.status(200).json(user);
        }
        return res.status(400).json({ error: 'No such user' });
    })
        .catch(err => {
        console.log('ERROR: ', err);
    });
};
exports.getUserById = getUserById;
const updateUser = () => {
    console.log('user');
};
exports.updateUser = updateUser;
//# sourceMappingURL=userController.js.map