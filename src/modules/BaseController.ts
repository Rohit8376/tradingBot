import { Application, Router } from "express";

export abstract class BaseController {
  protected router: Router;
  constructor() {
    this.router = Router();
  }
  public abstract register(express: Application): void;
}
