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
const axios_1 = __importDefault(require("axios"));
const CommonUtils_1 = require("../../utils/CommonUtils");
const BaseController_1 = require("../BaseController");
class UserController extends BaseController_1.BaseController {
    constructor() {
        super();
        this.initialRoutes();
    }
    /**
     * Mounting express router to the app, to use routes on /api/user
     * @param app - Express Instance
     */
    register(app) {
        app.use("/api/user", this.router);
    }
    initialRoutes() {
        this.router.post("/create-session", this.signIn);
        this.router.post("/genrate-token", this.genrateToken);
        this.router.post("/get-rms", this.getRMS);
        this.router.post("/logout-user", this.logout);
    }
    signIn(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var data = JSON.stringify({
                    clientcode: process.env.CLIENT_CODE,
                    password: process.env.CLIENT_PASSWORD,
                });
                let method = "post";
                let url = "https://apiconnect.angelbroking.com/rest/auth/angelbroking/user/v1/loginByPassword";
                var config = CommonUtils_1.CommonUtils.reqParamConfig(method, url, data);
                let result = yield CommonUtils_1.CommonUtils.axiosHelper(config, req, res);
                if (result.success) {
                    return res.status(201).json({
                        message: "Successfully sign in",
                        data: result.data,
                    });
                }
                else {
                    throw new Error(result.error);
                }
            }
            catch (error) {
                return res.status(501).json({
                    message: "somethings went wrong",
                    errorMessage: error.message,
                });
            }
        });
    }
    genrateToken(req, res) {
        var data = JSON.stringify({
            refreshToken: "eyJhbGciOiJIUzUxMiJ9.eyJ0b2tlbiI6IlJFRlJFU0gtVE9LRU4iLCJpYXQiOjE2NDk0MDQwNDd9.kYy7zzCejjYl_Z3MN1I_OJeH9VzvI-Yg5xepnEWK7FdUSzRHQeuVLzVMIdbuVTIHLKVSZVVsERkVdXGiLC4qgQ",
        });
        let method = "post";
        let url = "https://apiconnect.angelbroking.com/rest/auth/angelbroking/jwt/v1/generateTokens";
        let Authorization = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VybmFtZSI6IlI0Nzc3NjkiLCJyb2xlcyI6MCwidXNlcnR5cGUiOiJVU0VSIiwiaWF0IjoxNjQ5NDA0MDQ3LCJleHAiOjE3MzU4MDQwNDd9.GDHA8__j73F8DuvLkYAeDxadmBbdUY5Egxy2yurfVVESXJ_1xgAhR8RuTD2NVENlIUgGpDs1labhpQDjkpxePg";
        var config = CommonUtils_1.CommonUtils.reqParamConfig(method, url, data, undefined, Authorization);
        (0, axios_1.default)(config)
            .then(function (response) {
            console.log(response.data);
            res.status(201).json({ data: response.data });
        })
            .catch(function (error) {
            console.log(error);
            res.status(500).json({
                message: "something went wrong",
                errorMessage: error.message,
            });
        });
    }
    logout(req, res) {
        var data = JSON.stringify({
            clientcode: process.env.CLIENT_CODE,
        });
        var config = {
            method: "post",
            url: "https://apiconnect.angelbroking.com/rest/secure/angelbroking/user/v1/logout",
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VybmFtZSI6IlI0Nzc3NjkiLCJyb2xlcyI6MCwidXNlcnR5cGUiOiJVU0VSIiwiaWF0IjoxNjQ5NDA0MDQ3LCJleHAiOjE3MzU4MDQwNDd9.GDHA8__j73F8DuvLkYAeDxadmBbdUY5Egxy2yurfVVESXJ_1xgAhR8RuTD2NVENlIUgGpDs1labhpQDjkpxePg",
                "Content-Type": "application/json",
                Accept: "application/json",
                "X-UserType": "USER",
                "X-SourceID": "WEB",
                "X-ClientLocalIP": "CLIENT_LOCAL_IP",
                "X-ClientPublicIP": "CLIENT_PUBLIC_IP",
                "X-MACAddress": "MAC_ADDRESS",
                "X-PrivateKey": "pOqUzX8V",
            },
            data: data,
        };
        (0, axios_1.default)(config)
            .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
            .catch(function (error) {
            console.log(error);
        });
    }
    getRMS(req, res) {
        var config = {
            method: "get",
            url: "https://apiconnect.angelbroking.com/rest/secure/angelbroking/user/v1/getRMS",
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VybmFtZSI6IlI0Nzc3NjkiLCJyb2xlcyI6MCwidXNlcnR5cGUiOiJVU0VSIiwiaWF0IjoxNjQ5NDA0MDQ3LCJleHAiOjE3MzU4MDQwNDd9.GDHA8__j73F8DuvLkYAeDxadmBbdUY5Egxy2yurfVVESXJ_1xgAhR8RuTD2NVENlIUgGpDs1labhpQDjkpxePg",
                "Content-Type": "application/json",
                Accept: "application/json",
                "X-UserType": "USER",
                "X-SourceID": "WEB",
                "X-ClientLocalIP": "CLIENT_LOCAL_IP",
                "X-ClientPublicIP": "CLIENT_PUBLIC_IP",
                "X-MACAddress": "MAC_ADDRESS",
                "X-PrivateKey": "pOqUzX8V",
            },
        };
        (0, axios_1.default)(config)
            .then(function (response) {
            console.log(response.data);
        })
            .catch(function (error) {
            console.log(error);
        });
    }
}
exports.UserController = UserController;
