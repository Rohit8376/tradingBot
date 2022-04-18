"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONSUCCESS = exports.JSONERROR = void 0;
const HttpStatus = __importStar(require("http-status-codes"));
/**
 * Error response
 * @param req
 * @param res
 */
const JSONERROR = (req, res) => {
    const errorCode = res.locals.errorCode || HttpStatus.BAD_REQUEST;
    const obj = {
        status: "failure",
        data: res.locals.data || {},
        errors: res.locals.errors || {},
        message: res.locals.message || "",
    };
    //const err = res.locals.error;
    res.status(errorCode).send(obj);
};
exports.JSONERROR = JSONERROR;
/**
 * Success response
 * @param req
 * @param res
 */
const JSONSUCCESS = (req, res) => {
    const obj = {
        status: "success",
        data: {},
        errors: {},
        message: "",
    };
    if (res.locals.data) {
        obj.data = res.locals.data;
    }
    if (res.locals.errors) {
        obj.errors = res.locals.errors;
    }
    if (res.locals.message) {
        obj.message = res.locals.message;
    }
    res.status(HttpStatus.StatusCodes.OK).send(obj);
};
exports.JSONSUCCESS = JSONSUCCESS;
