import { Request, Response } from "express";
import * as HttpStatus from "http-status-codes";

/**
 * Error response
 * @param req
 * @param res
 */
export const JSONERROR = (req: Request, res: Response) => {
  const errorCode: number = res.locals.errorCode || HttpStatus.BAD_REQUEST;
  const obj = {
    status: "failure",
    data: res.locals.data || {},
    errors: res.locals.errors || {},
    message: res.locals.message || "",
  };
  //const err = res.locals.error;
  res.status(errorCode).send(obj);
};

/**
 * Success response
 * @param req
 * @param res
 */
export const JSONSUCCESS = (req: Request, res: Response) => {
  const obj = {
    status: "success",
    data: {},
    errors: {},
    message: "",
  };

  if (res.locals.data) {
    obj.data = res.locals.data;
  }
  if (res.locals.errors) {
    obj.errors = res.locals.errors;
  }
  if (res.locals.message) {
    obj.message = res.locals.message;
  }

  res.status(HttpStatus.StatusCodes.OK).send(obj);
};
