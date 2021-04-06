"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = () => {
    mongoose_1.default.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(res => {
        console.log(`MongoDB Connected: ${res.connections[0].host}`);
    })
        .catch(error => {
        console.log(`ERROR: ${error.message}`);
        process.exit(1);
    });
};
exports.default = connectDB;
//# sourceMappingURL=db.js.map