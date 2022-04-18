import axios from "axios";
import { Application, Request, Response } from "express";
import { CommonUtils } from "../../helpers/CommonUtils";
import { BaseController } from "../BaseController";
import { Constants } from "../../constants/constant";
import { Messages } from "../../constants/message";
import { JSONSUCCESS, JSONERROR } from "../../helpers/response.handler";
const userApiUrl = Constants.SMART_API_USER_URL;
export class UserController extends BaseController {
  constructor() {
    super();
    this.initialRoutes();
  }
  /**
   * Mounting express router to the app, to use routes on /api/user
   * @param app - Express Instance
   */
  public register(app: Application): void {
    app.use("/api/angle/user", this.router);
  }
  private initialRoutes(): void {
    this.router.post("/create-session", this.loginByPassword);
    this.router.post("/genrate-token", this.genrateTokens);
    this.router.post("/get-rms", this.getRMS);
    this.router.post("/logout-user", this.logout);
  }

  public loginByPassword(req: Request, res: Response): any {
    const { client_code, client_password } = req.body;

    if (!client_code || !client_password)
      throw new Error(Messages.INVALID_CREDENTIALS);
    var data = JSON.stringify({
      clientcode: client_code || process.env.CLIENT_CODE,
      password: client_password || process.env.CLIENT_PASSWORD,
    });

    let url: string = userApiUrl + "loginByPassword";

    var config: object = CommonUtils.reqParamConfig("POST", url, data);
    axios(config)
      .then(function (response) {
        res.locals.data = response.data;
        JSONSUCCESS(req, res);
      })
      .catch(function (error) {
        JSONERROR(req, res);
      });
  }

  public genrateTokens(req: Request, res: Response): any {
    var data = JSON.stringify({
      refreshToken:
        "eyJhbGciOiJIUzUxMiJ9.eyJ0b2tlbiI6IlJFRlJFU0gtVE9LRU4iLCJpYXQiOjE2NDk5Mzc0NDV9.kw9qUwCutJVxqjlFcNZKBCNTo_4oBy_bc_ti-WqT0O4-DbtONHsAca2dhJAMn9LN82enAKzdcJK36yLogMH5SQ",
    });
    let Authorization: string =
      "Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VybmFtZSI6IlI0Nzc3NjkiLCJyb2xlcyI6MCwidXNlcnR5cGUiOiJVU0VSIiwiaWF0IjoxNjQ5OTM3NDQ1LCJleHAiOjE3MzYzMzc0NDV9.4BcmoTu5oZhKfzpfmkQrTLv2tzw3fSrQ1Vb9JpsbZzAP6eb8zTOYzfTZzElgR87tzabJ-eSKahv_EzEE1GEHQQ";
    let url: string =
      "https://apiconnect.angelbroking.com/rest/auth/angelbroking/jwt/v1/generateTokens"; // smart api url

    var config: object = CommonUtils.reqParamConfig(
      "post",
      url,
      data,
      undefined,
      Authorization
    );
    axios(config)
      .then(function (response) {
        res.locals.data = response.data;
        JSONSUCCESS(req, res);
      })
      .catch(function (error) {
        JSONERROR(req, res);
      });
  }

  public logout(req: Request, res: Response): any {
    var data = JSON.stringify({
      clientcode: process.env.CLIENT_CODE,
    });
    let Authorization: string =
      "Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VybmFtZSI6IlI0Nzc3NjkiLCJyb2xlcyI6MCwidXNlcnR5cGUiOiJVU0VSIiwiaWF0IjoxNjQ5NDA0MDQ3LCJleHAiOjE3MzU4MDQwNDd9.GDHA8__j73F8DuvLkYAeDxadmBbdUY5Egxy2yurfVVESXJ_1xgAhR8RuTD2NVENlIUgGpDs1labhpQDjkpxePg";

    let url: string = userApiUrl + "logout";

    const config: object = CommonUtils.reqParamConfig(
      "post",
      url,
      data,
      undefined,
      Authorization
    );

    axios(config)
      .then(function (response) {
        res.locals.data = response.data;
        JSONSUCCESS(req, res);
      })
      .catch(function (error) {
        JSONERROR(req, res);
      });
  }

  public getRMS(req: Request, res: Response): any {
    let Authorization: string =
      "Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VybmFtZSI6IlI0Nzc3NjkiLCJyb2xlcyI6MCwidXNlcnR5cGUiOiJVU0VSIiwiaWF0IjoxNjUwMDEyOTE3LCJleHAiOjE3MzY0MTI5MTd9.ESike3SmvSreIb7t3YIJGKviVT25NZJKfJ3vSHv3K7TNZei0Vqalh2dmbaNG-s0m1NmGTFaLjTHvuL9F0SbMBw";
    let url: string =
      "https://apiconnect.angelbroking.com/rest/secure/angelbroking/user/v1/getRMS";

    const config: object = CommonUtils.reqParamConfig(
      "get",
      url,
      undefined,
      undefined,
      Authorization
    );
    axios(config)
      .then(function (response) {
        res.locals.data = response.data;
        JSONSUCCESS(req, res);
      })
      .catch(function (error) {
        res.locals.errors = error;
        JSONERROR(req, res);
      });
  }
}
