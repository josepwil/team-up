"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const users_1 = __importDefault(require("./data/users"));
const projects_1 = require("./data/projects");
const user_1 = __importDefault(require("./models/user"));
const project_1 = __importDefault(require("./models/project"));
dotenv_1.default.config({ path: '../.env' });
db_1.default();
project_1.default.deleteMany()
    .then(res => {
    return user_1.default.deleteMany();
})
    .then(res => {
    return user_1.default.insertMany(users_1.default);
})
    .then(res => {
    const brianId = res[0]._id;
    const aliceId = res[1]._id;
    const brianProjects = projects_1.projectsOne.map(project => {
        return Object.assign(Object.assign({}, project), { _creator: brianId });
    });
    const aliceProjects = projects_1.projectsTwo.map(project => {
        return Object.assign(Object.assign({}, project), { _creator: aliceId });
    });
    return project_1.default.insertMany([...brianProjects, ...aliceProjects]);
})
    .then(res => {
    console.log('DATA ADDED');
    console.log(res);
})
    .catch(error => {
    console.log('ERROR: ', error.message);
    process.exit(1);
});
//# sourceMappingURL=seeder.js.map