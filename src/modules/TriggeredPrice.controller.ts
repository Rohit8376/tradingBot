import axios from "axios";
import { Application, Request, Response } from "express";
import { BaseController } from "./BaseController";

export class TriggeredPriceController extends BaseController {
  constructor() {
    super();
    this.initialRoutes();
  }

  public register(app: Application): void {
    app.use("/api/gtt", this.router);
  }
  private initialRoutes() {
    this.router.post("/genrate-rule", this.genrateRule);
  }
  public genrateRule(req: Request, res: Response): any {
    var data = JSON.stringify({
      tradingsymbol: "SBIN-EQ",
      symboltoken: "3045",
      exchange: "NSE",
      transactiontype: "BUY",
      producttype: "DELIVERY",
      price: "10",
      qty: "5",
      triggerprice: "10",
      disclosedqty: "1",
      timeperiod: "20",
    });

    var config: object = {
      method: "post",
      url: "https://apiconnect.angelbroking.com/rest/secure/angelbroking/gtt/v1/createRule",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VybmFtZSI6IlI0Nzc3NjkiLCJyb2xlcyI6MCwidXNlcnR5cGUiOiJVU0VSIiwiaWF0IjoxNjQ5NDA5NDgwLCJleHAiOjE3MzU4MDk0ODB9.cinKbDwV0x3cF2ayX74snwUxqtCKQwcN8sezJ1Hrrn8l-XcKRawPGao38xTX0NnIudUyel0enrMktcYp6sPKyg",
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-UserType": "USER",
        "X-SourceID": "WEB",
        "X-ClientLocalIP": "CLIENT_LOCAL_IP",
        "X-ClientPublicIP": "CLIENT_PUBLIC_IP",
        "X-MACAddress": "MAC_ADDRESS",
        "X-PrivateKey": "pOqUzX8V",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  public modifyRule(req: Request, res: Response): any {
    var data = JSON.stringify({
      id: "5130853",
      symboltoken: "3045",
      exchange: "NSE",
      price: "20",
      qty: "60",
      triggerprice: "20",
      disclosedqty: "10",
      timeperiod: "20",
    });

    var config: object = {
      method: "post",
      url: "https://apiconnect.angelbroking.com/rest/secure/angelbroking/gtt/v1/modifyRule",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VybmFtZSI6IlI0Nzc3NjkiLCJyb2xlcyI6MCwidXNlcnR5cGUiOiJVU0VSIiwiaWF0IjoxNjQ5NDA5NDgwLCJleHAiOjE3MzU4MDk0ODB9.cinKbDwV0x3cF2ayX74snwUxqtCKQwcN8sezJ1Hrrn8l-XcKRawPGao38xTX0NnIudUyel0enrMktcYp6sPKyg",
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-UserType": "USER",
        "X-SourceID": "WEB",
        "X-ClientLocalIP": "CLIENT_LOCAL_IP",
        "X-ClientPublicIP": "CLIENT_PUBLIC_IP",
        "X-MACAddress": "MAC_ADDRESS",
        "X-PrivateKey": "pOqUzX8V",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  public cancelRule(req: Request, res: Response): any {
    var data = JSON.stringify({
      id: "5130853",
      symboltoken: "3045",
      exchange: "NSE",
    });

    var config: object = {
      method: "post",
      url: "https://apiconnect.angelbroking.com/rest/secure/angelbroking/gtt/v1/cancelRule\n",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VybmFtZSI6IlI0Nzc3NjkiLCJyb2xlcyI6MCwidXNlcnR5cGUiOiJVU0VSIiwiaWF0IjoxNjQ5NDA5NDgwLCJleHAiOjE3MzU4MDk0ODB9.cinKbDwV0x3cF2ayX74snwUxqtCKQwcN8sezJ1Hrrn8l-XcKRawPGao38xTX0NnIudUyel0enrMktcYp6sPKyg",
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-UserType": "USER",
        "X-SourceID": "WEB",
        "X-ClientLocalIP": "CLIENT_LOCAL_IP",
        "X-ClientPublicIP": "CLIENT_PUBLIC_IP",
        "X-MACAddress": "MAC_ADDRESS",
        "X-PrivateKey": "pOqUzX8V",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  public getAll(req: Request, res: Response): any {
    var data = JSON.stringify({
      status: ["NEW", "CANCELLED", "ACTIVE", "SENTTOEXCHANGE", "FORALL"],
      page: 1,
      count: 10,
    });

    var config: object = {
      method: "post",
      url: "https://apiconnect.angelbroking.com/rest/secure/angelbroking/gtt/v1/ruleList",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VybmFtZSI6IlI0Nzc3NjkiLCJyb2xlcyI6MCwidXNlcnR5cGUiOiJVU0VSIiwiaWF0IjoxNjQ5NDA5NDgwLCJleHAiOjE3MzU4MDk0ODB9.cinKbDwV0x3cF2ayX74snwUxqtCKQwcN8sezJ1Hrrn8l-XcKRawPGao38xTX0NnIudUyel0enrMktcYp6sPKyg",
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-UserType": "USER",
        "X-SourceID": "WEB",
        "X-ClientLocalIP": "CLIENT_LOCAL_IP",
        "X-ClientPublicIP": "CLIENT_PUBLIC_IP",
        "X-MACAddress": "MAC_ADDRESS",
        "X-PrivateKey": "pOqUzX8V",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  public getRuleById(req: Request, res: Response): any {
    var data = JSON.stringify({
      id: "5130853",
    });
    var config: object = {
      method: "post",
      url: "https://apiconnect.angelbroking.com/rest/secure/angelbroking/gtt/v1/ruleDetails",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VybmFtZSI6IlI0Nzc3NjkiLCJyb2xlcyI6MCwidXNlcnR5cGUiOiJVU0VSIiwiaWF0IjoxNjQ5NDA5NDgwLCJleHAiOjE3MzU4MDk0ODB9.cinKbDwV0x3cF2ayX74snwUxqtCKQwcN8sezJ1Hrrn8l-XcKRawPGao38xTX0NnIudUyel0enrMktcYp6sPKyg",
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-UserType": "USER",
        "X-SourceID": "WEB",
        "X-ClientLocalIP": "CLIENT_LOCAL_IP",
        "X-ClientPublicIP": "CLIENT_PUBLIC_IP",
        "X-MACAddress": "MAC_ADDRESS",
        "X-PrivateKey": "pOqUzX8V",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
