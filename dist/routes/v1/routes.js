"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
const angleBrokerRoutes_1 = require("./angleBrokerRoutes");
const tradingBot_1 = require("./tradingBot");
function registerRoutes(app) {
    app.use("/", tradingBot_1.registerRoutesOfTradingBots);
    app.use("/angle", angleBrokerRoutes_1.registerRoutesOfAngle);
}
exports.registerRoutes = registerRoutes;
