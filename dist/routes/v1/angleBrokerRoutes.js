"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutesOfAngle = void 0;
const Orders_controller_1 = require("../../modules/angleBrokerModule/Orders.controller");
const TriggeredPrice_controller_1 = require("../../modules/angleBrokerModule/TriggeredPrice.controller");
const User_controller_1 = require("../../modules/angleBrokerModule/User.controller");
function registerRoutesOfAngle(app) {
    new User_controller_1.UserController().register(app);
    new Orders_controller_1.OrderController().register(app);
    new TriggeredPrice_controller_1.TriggeredPriceController().register(app);
}
exports.registerRoutesOfAngle = registerRoutesOfAngle;
