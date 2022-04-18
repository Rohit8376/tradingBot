import express from "express";
import { OrderController } from "../../modules/angleBrokerModule/Orders.controller";
import { TriggeredPriceController } from "../../modules/angleBrokerModule/TriggeredPrice.controller";
import { UserController } from "../../modules/angleBrokerModule/User.controller";
import { TBUserController } from "../../modules/TradingBotModule/User/User.controller";

export function registerRoutes(app: express.Application): void {
  new UserController().register(app);
  new OrderController().register(app);
  new TriggeredPriceController().register(app);
  new TBUserController().register(app);
}
