"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutesOfTradingBots = void 0;
const User_controller_1 = require("../../modules/TradingBotModule/User/User.controller");
function registerRoutesOfTradingBots(app) {
    new User_controller_1.UserController().register(app);
}
exports.registerRoutesOfTradingBots = registerRoutesOfTradingBots;
