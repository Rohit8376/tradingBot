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
exports.AuthHelper = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const message_1 = require("../constants/message");
class AuthHelper {
    static guard(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = req.headers.authorization || req.header("x-auth-token");
                if (token) {
                    const SECRET_KEY = process.env.JWT_SECRET_KEY;
                    const auth = jsonwebtoken_1.default.verify(token, SECRET_KEY);
                    if (auth) {
                        req.user = auth.user;
                        next();
                    }
                    else {
                        throw new Error(message_1.Messages.INVALID_CREDENTIALS);
                    }
                }
                else {
                    throw new Error(message_1.Messages.UNAUTHORIZED);
                }
            }
            catch (err) {
                throw new Error(err);
            }
        });
    }
}
exports.AuthHelper = AuthHelper;
