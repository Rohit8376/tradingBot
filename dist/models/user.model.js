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
exports.User = exports.UserRole = void 0;
const mongoose_1 = require("mongoose");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var UserRole;
(function (UserRole) {
    UserRole["admin"] = "ADMIN";
    UserRole["user"] = "USER";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
const userSchema = new mongoose_1.Schema({
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    email: {
        type: String,
    },
    contact_number: {
        type: String,
        unique: true,
        immutable: true,
    },
    password: {
        type: String,
    },
    gender: {
        type: String,
        enum: {
            values: ["Male", "Female", "Other"],
            message: "Invalid Value",
        },
    },
    avatar: {
        type: String,
    },
    role: {
        type: String,
        default: UserRole.user,
    },
}, {
    timestamps: true,
});
userSchema.methods.generateAuthToken = function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const SECRET_KEY = process.env.JWT_SECRET_KEY;
            const user = {
                _id: this._id,
                email: this.email,
                contact_number: this.contact_number,
                role: this.role,
            };
            let token = jsonwebtoken_1.default.sign(user, SECRET_KEY, {
                expiresIn: "600000ms",
            });
            return token;
        }
        catch (err) {
            throw new Error(err);
        }
    });
};
exports.User = (0, mongoose_1.model)("user", userSchema);