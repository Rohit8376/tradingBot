"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config({ path: "./.env" });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const routes_1 = require("./routes/routes");
const PORT = 8000;
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.initializeMiddlewares();
        this.initializeControllers();
    }
    initializeMiddlewares() {
        const allowedOrigins = ["http://localhost:3000"];
        this.app.use((0, cors_1.default)({
            origin: function (origin, callback) {
                if (!origin)
                    return callback(null, true);
                if (allowedOrigins.indexOf(origin) === -1) {
                    const msg = `The CORS policy for this site does not allow access from the specified Origin`;
                    return callback(new Error(msg), false);
                }
                return callback(null, true);
            },
        }));
        this.app.use(express_1.default.json({ limit: "5mb" }));
        this.app.use(express_1.default.urlencoded({ extended: true, limit: "5mb" }));
        this.app.use((0, helmet_1.default)());
    }
    initializeControllers() {
        (0, routes_1.registerRoutes)(this.app);
    }
    listen() {
        this.app
            .listen(PORT, () => {
            console.log(`Application Running in ${process.env.NODE_ENV} mode on port ${PORT}!`);
        })
            .on("error", (err) => {
            console.log(`Server Encountered an error : ${err.message}`);
        });
    }
}
exports.default = App;
