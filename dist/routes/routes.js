"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
const Orders_controller_1 = require("../modules/Orders.controller");
const TriggeredPrice_controller_1 = require("../modules/TriggeredPrice.controller");
const User_controller_1 = require("../modules/User.controller");
function registerRoutes(app) {
    new User_controller_1.UserController().register(app);
    new Orders_controller_1.OrderController().register(app);
    new TriggeredPrice_controller_1.TriggeredPriceController().register(app);
}
exports.registerRoutes = registerRoutes;
