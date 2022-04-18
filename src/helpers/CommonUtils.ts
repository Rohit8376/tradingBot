import axios from "axios";
import { Request, Response } from "express";

export class CommonUtils {
  public static reqParamConfig(
    method: string,
    url: string,
    data?: any,
    headers?: object,
    authorization?: string,
    x_PrivateKey?: string
  ): object {
    var config: object = {
      method: method || "get",
      url: url,
      headers: headers || {
        Authorization: authorization || null,
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-UserType": "USER",
        "X-SourceID": "WEB",
        "X-ClientLocalIP": "CLIENT_LOCAL_IP",
        "X-ClientPublicIP": "CLIENT_PUBLIC_IP",
        "X-MACAddress": "MAC_ADDRESS",
        "X-PrivateKey": x_PrivateKey || "pOqUzX8V", //need change
      },
      data: data || undefined,
    };

    return config;
  }
  public static async axiosHelper(
    config: object,
    req: Request,
    res: Response
  ): Promise<object> {
    try {
      const response = await axios(config);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        error,
      };
    }
  }
}

// var config: object = {
//     method: "get",
//     url: "https://apiconnect.angelbroking.com/rest/secure/angelbroking/order/v1/getOrderBook",
//     headers: {
//       Authorization:
//         "Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VybmFtZSI6IlI0Nzc3NjkiLCJyb2xlcyI6MCwidXNlcnR5cGUiOiJVU0VSIiwiaWF0IjoxNjQ5NDA5NDgwLCJleHAiOjE3MzU4MDk0ODB9.cinKbDwV0x3cF2ayX74snwUxqtCKQwcN8sezJ1Hrrn8l-XcKRawPGao38xTX0NnIudUyel0enrMktcYp6sPKyg",
//       "Content-Type": "application/json",
//       Accept: "application/json",
//       "X-UserType": "USER",
//       "X-SourceID": "WEB",
//       "X-ClientLocalIP": "CLIENT_LOCAL_IP",
//       "X-ClientPublicIP": "CLIENT_PUBLIC_IP",
//       "X-MACAddress": "MAC_ADDRESS",
//       "X-PrivateKey": "pOqUzX8V",
//     },
//     data: {},
//   };
