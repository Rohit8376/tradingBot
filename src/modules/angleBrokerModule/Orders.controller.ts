import axios from "axios";
import { Application, Request, Response } from "express";
import { Constants } from "../../constants/constant";
import { CommonUtils } from "../../helpers/CommonUtils";
import { JSONERROR, JSONSUCCESS } from "../../helpers/response.handler";

import { BaseController } from "../BaseController";
const OrderApiUrl: string = Constants.SMART_API_ORDER_URL;
export class OrderController extends BaseController {
  constructor() {
    super();
    this.initialRoutes();
  }
  public register(app: Application): void {
    app.use("/api/angle/order", this.router);
  }
  private initialRoutes(): void {
    this.router.get("/get-order-book", this.getOrderBook);
    this.router.get("/get-trade-book", this.getTradeBook);
    this.router.post("/get-ltp", this.getLtpData);
    this.router.post("/place-order", this.placeOrder);
    this.router.post("/cancel-order", this.cancelOrder);
  }

  public getOrderBook(req: Request, res: Response): any {
    const url: string = OrderApiUrl + "getOrderBook";

    const Authorization: any = Constants.ANGLE_JWT;

    const config: object = CommonUtils.reqParamConfig(
      "get",
      url,
      {},
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
  public getTradeBook(req: Request, res: Response): any {
    var data = "";

    const url: string = OrderApiUrl + "getTradeBook";

    const Authorization: any = Constants.ANGLE_JWT;

    const config: object = CommonUtils.reqParamConfig(
      "get",
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
  public getLtpData(req: Request, res: Response): any {
    const { exchange, tradingsymbol, symboltoken } = req.body;
    var data = JSON.stringify({
      exchange: "NSE",
      tradingsymbol: "SBIN-EQ",
      symboltoken: "3045",
    });

    const Authorization: any = Constants.ANGLE_JWT;
    const url: string = OrderApiUrl + "getLtpData";
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
  public placeOrder(req: Request, res: Response): any {
    const {
      variety,
      tradingsymbol,
      symboltoken,
      transactiontype,
      exchange,
      ordertype,
      producttype,
      duration,
      price,
      squareoff,
      stoploss,
      quantity,
    } = req.body;
    var data = JSON.stringify({
      variety,
      tradingsymbol,
      symboltoken,
      transactiontype,
      exchange,
      ordertype,
      producttype,
      duration,
      price,
      squareoff,
      stoploss,
      quantity,
    });
    // var data = JSON.stringify({
    //   variety: "NORMAL",
    //   tradingsymbol: "SBIN-EQ",
    //   symboltoken: "3045",
    //   transactiontype: "BUY",
    //   exchange: "NSE",
    //   ordertype: "MARKET",
    //   producttype: "INTRADAY",
    //   duration: "DAY",
    //   price: "194.50",
    //   squareoff: "0",
    //   stoploss: "0",
    //   quantity: "10",
    // });
    const Authorization: string =
      "Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VybmFtZSI6IlI0Nzc3NjkiLCJyb2xlcyI6MCwidXNlcnR5cGUiOiJVU0VSIiwiaWF0IjoxNjQ5NDA5NDgwLCJleHAiOjE3MzU4MDk0ODB9.cinKbDwV0x3cF2ayX74snwUxqtCKQwcN8sezJ1Hrrn8l-XcKRawPGao38xTX0NnIudUyel0enrMktcYp6sPKyg";
    const url: string = OrderApiUrl + "placeOrder";
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

  public modifyOrder(req: Request, res: Response): any {
    const {
      variety,
      tradingsymbol,
      symboltoken,
      orderid,
      exchange,
      ordertype,
      producttype,
      duration,
      price,
      quantity,
    } = req.body;
    var data = JSON.stringify({
      variety,
      tradingsymbol,
      symboltoken,
      orderid,
      exchange,
      ordertype,
      producttype,
      duration,
      price,
      quantity,
    });
    // var data = JSON.stringify({
    //   variety: "NORMAL",
    //   orderid: "220408001053631",
    //   ordertype: "LIMIT",
    //   producttype: "INTRADAY",
    //   duration: "DAY",
    //   price: "194.00",
    //   quantity: "55",
    //   tradingsymbol: "SBIN-EQ",
    //   symboltoken: "3045",
    //   exchange: "NSE",
    // });

    const Authorization: string =
      "Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VybmFtZSI6IlI0Nzc3NjkiLCJyb2xlcyI6MCwidXNlcnR5cGUiOiJVU0VSIiwiaWF0IjoxNjQ5NDA5NDgwLCJleHAiOjE3MzU4MDk0ODB9.cinKbDwV0x3cF2ayX74snwUxqtCKQwcN8sezJ1Hrrn8l-XcKRawPGao38xTX0NnIudUyel0enrMktcYp6sPKyg";
    const url: string = OrderApiUrl + "modifyOrder";
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

  // cancel order
  public cancelOrder(req: Request, res: Response): any {
    const { variety, orderid } = req.body;
    var data = JSON.stringify({
      variety: "NORMAL",
      orderid: "220408001019071",
    });

    const Authorization: string =
      "Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VybmFtZSI6IlI0Nzc3NjkiLCJyb2xlcyI6MCwidXNlcnR5cGUiOiJVU0VSIiwiaWF0IjoxNjQ5NDA5NDgwLCJleHAiOjE3MzU4MDk0ODB9.cinKbDwV0x3cF2ayX74snwUxqtCKQwcN8sezJ1Hrrn8l-XcKRawPGao38xTX0NnIudUyel0enrMktcYp6sPKyg";
    const url: string = OrderApiUrl + "cancelOrder";
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
}
