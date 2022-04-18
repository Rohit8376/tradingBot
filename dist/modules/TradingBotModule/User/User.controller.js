"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_model_1 = require("../../../models/user.model");
const BaseController_1 = require("../../BaseController");
const message_1 = require("../../../constants/message");
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserController extends BaseController_1.BaseController {
    constructor() {
        super();
        this.initialRoutes();
    }
    register(app) {
        app.use("/user", this.router);
    }
    initialRoutes() {
        this.router.post("/create-account", this.createAccount);
        this.router.post("/create-session", this.createSession);
    }
    //user sign up
    createAccount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { first_name, last_name, email, contact_number, password, gender } = req.body;
                const isUser = yield user_model_1.User.find({ contact_number });
                if (isUser)
                    return res.status(401).json({
                        message: message_1.Messages.USER_EXISTS,
                    });
                const newUser = yield user_model_1.User.create({
                    first_name,
                    last_name,
                    email,
                    password: yield bcrypt_1.default.hash(password, 10),
                    contact_number,
                    gender,
                });
                res.status(201).json({
                    message: message_1.Messages.SUCCESS_RECEIVED,
                });
            }
            catch (error) {
                res.status(501).json({
                    message: message_1.Messages.SOMETHING_BAD,
                    errorMessage: error.message,
                });
            }
        });
    }
    //user sign
    createSession(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { contact_number, password } = req.body;
                const isUser = yield user_model_1.User.find({ contact_number });
                if (!isUser)
                    throw new Error(message_1.Messages.USER_NOT_FOUND);
                if (isUser.password != password)
                    throw new Error(message_1.Messages.INVALID_CREDENTIALS);
                const token = yield isUser.generateAuthToken();
                res.status(201).json({
                    success: true,
                    token,
                });
            }
            catch (error) {
                res.status(501).json({
                    message: message_1.Messages.SOMETHING_BAD,
                    errorMessage: error.message,
                });
            }
        });
    }
}
exports.UserController = UserController;
