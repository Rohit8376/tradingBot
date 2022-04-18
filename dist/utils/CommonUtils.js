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
exports.CommonUtils = void 0;
const axios_1 = __importDefault(require("axios"));
class CommonUtils {
    static reqParamConfig(method, url, data, headers, authorization, x_PrivateKey) {
        var config = {
            method: method || "get",
            url: url,
            headers: headers || {
                Authorization: authorization || null,
                Accept: "application/json",
                "Content-Type": "application/json",
                "X-UserType": "USER",
                "X-SourceID": "WEB",
                "X-ClientLocalIP": "CLIENT_LOCAL_IP",
                "X-ClientPublicIP": "CLIENT_PUBLIC_IP",
                "X-MACAddress": "MAC_ADDRESS",
                "X-PrivateKey": x_PrivateKey || "pOqUzX8V", //need change
            },
            data: data || undefined,
        };
        return config;
    }
    static axiosHelper(config, req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield (0, axios_1.default)(config);
                return {
                    success: true,
                    data: response.data,
                };
            }
            catch (error) {
                return {
                    success: false,
                    error,
                };
            }
        });
    }
}
exports.CommonUtils = CommonUtils;
// var config: object = {
//     method: "get",
//     url: "https://apiconnect.angelbroking.com/rest/secure/angelbroking/order/v1/getOrderBook",
//     headers: {
//       Authorization:
//         "Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VybmFtZSI6IlI0Nzc3NjkiLCJyb2xlcyI6MCwidXNlcnR5cGUiOiJVU0VSIiwiaWF0IjoxNjQ5NDA5NDgwLCJleHAiOjE3MzU4MDk0ODB9.cinKbDwV0x3cF2ayX74snwUxqtCKQwcN8sezJ1Hrrn8l-XcKRawPGao38xTX0NnIudUyel0enrMktcYp6sPKyg",
//       "Content-Type": "application/json",
//       Accept: "application/json",
//       "X-UserType": "USER",
//       "X-SourceID": "WEB",
//       "X-ClientLocalIP": "CLIENT_LOCAL_IP",
//       "X-ClientPublicIP": "CLIENT_PUBLIC_IP",
//       "X-MACAddress": "MAC_ADDRESS",
//       "X-PrivateKey": "pOqUzX8V",
//     },
//     data: {},
//   };