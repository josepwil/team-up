"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const users_1 = __importDefault(require("./data/users"));
const projects_1 = require("./data/projects");
const reviews_1 = require("./data/reviews");
const user_1 = __importDefault(require("./models/user"));
const project_1 = __importDefault(require("./models/project"));
const review_1 = __importDefault(require("./models/review"));
dotenv_1.default.config({ path: '../.env' });
db_1.default();
const deleteProjects = project_1.default.deleteMany();
const deleteReviews = review_1.default.deleteMany();
const deleteUsers = user_1.default.deleteMany();
Promise.all([deleteProjects, deleteReviews, deleteUsers])
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
    const brianReviews = reviews_1.reviewsOne.map(review => {
        return Object.assign(Object.assign({}, review), { _user: brianId });
    });
    const aliceReviews = reviews_1.reviewsTwo.map(review => {
        return Object.assign(Object.assign({}, review), { _user: aliceId });
    });
    const insertProjects = project_1.default.insertMany([...brianProjects, ...aliceProjects]);
    const insertReviews = review_1.default.insertMany([...brianReviews, ...aliceReviews]);
    return Promise.all([insertProjects, insertReviews]);
})
    .then(res => {
    console.log('DATA ADDED');
})
    .catch(error => {
    console.log('ERROR: ', error.message);
    process.exit(1);
});
//# sourceMappingURL=seeder.js.map