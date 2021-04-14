"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const projectRoutes_1 = __importDefault(require("./routes/projectRoutes"));
const reviewRoutes_1 = __importDefault(require("./routes/reviewRoutes"));
dotenv_1.default.config({ path: '../.env' });
db_1.default();
const app = express_1.default();
const PORT = process.env.PORT || 5000;
app.use(express_1.default.json());
// Routes
app.use('/api/users', userRoutes_1.default);
app.use('/api/projects', projectRoutes_1.default);
app.use('/api/reviews', reviewRoutes_1.default);
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(PORT, function () {
    console.log(`App is listening on port ${PORT}!`);
});
//# sourceMappingURL=server.js.map