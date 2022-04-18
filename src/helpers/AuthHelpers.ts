import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

import { Messages } from "../constants/message";

export class AuthHelper {
  public static guard(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.headers.authorization || req.header("x-auth-token");
      const SECRET_KEY: any = process.env.JWT_SECRET_KEY;
      if (token) {
        const auth: any = jwt.verify(token.split(" ")[1], SECRET_KEY);
        if (auth) {
          (req as any).user = { ...auth.user };
          next();
        } else {
          throw new Error(Messages.INVALID_CREDENTIALS);
        }
      } else {
        throw new Error(Messages.UNAUTHORIZED);
      }
    } catch (err) {
      throw new Error("Authorization");
    }
  }
}
