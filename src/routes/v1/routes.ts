import express from "express";
import { OrderController } from "../../modules/Orders.controller";
import { TriggeredPriceController } from "../../modules/TriggeredPrice.controller";
import { UserController } from "../../modules/User.controller";

export function registerRoutes(app: express.Application): void {
  new UserController().register(app);
  new OrderController().register(app);
  new TriggeredPriceController().register(app);
}
