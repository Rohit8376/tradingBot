var axios = require('axios');

//Get Order Status Response 
exports.getOrderBook = () => {
    var config = {
        method: 'get',
        url: 'https://apiconnect.angelbroking.com/rest/secure/angelbroking/order/v1/getOrderBook',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VybmFtZSI6IlI0Nzc3NjkiLCJyb2xlcyI6MCwidXNlcnR5cGUiOiJVU0VSIiwiaWF0IjoxNjQ5NDA5NDgwLCJleHAiOjE3MzU4MDk0ODB9.cinKbDwV0x3cF2ayX74snwUxqtCKQwcN8sezJ1Hrrn8l-XcKRawPGao38xTX0NnIudUyel0enrMktcYp6sPKyg',
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-UserType': 'USER',
            'X-SourceID': 'WEB',
            'X-ClientLocalIP': 'CLIENT_LOCAL_IP',
            'X-ClientPublicIP': 'CLIENT_PUBLIC_IP',
            'X-MACAddress': 'MAC_ADDRESS',
            'X-PrivateKey': 'pOqUzX8V'
        },
        data: {}
    };
    axios(config)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error.message);
        });
}

// it provides the trades for the current day
exports.getTradeBook = () => {
    var data = {};
    var config = {
        method: 'get',
        url: 'https://apiconnect.angelbroking.com/rest/secure/angelbroking/order/v1/getOrderBook',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VybmFtZSI6IlI0Nzc3NjkiLCJyb2xlcyI6MCwidXNlcnR5cGUiOiJVU0VSIiwiaWF0IjoxNjQ5NDA5NDgwLCJleHAiOjE3MzU4MDk0ODB9.cinKbDwV0x3cF2ayX74snwUxqtCKQwcN8sezJ1Hrrn8l-XcKRawPGao38xTX0NnIudUyel0enrMktcYp6sPKyg',
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-UserType': 'USER',
            'X-SourceID': 'WEB',
            'X-ClientLocalIP': 'CLIENT_LOCAL_IP',
            'X-ClientPublicIP': 'CLIENT_PUBLIC_IP',
            'X-MACAddress': 'MAC_ADDRESS',
            'X-PrivateKey': 'pOqUzX8V'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}
// last trade price or perticuler exchange 
exports.getLtp = () => {
    var data = JSON.stringify({
        "exchange": "NSE",
        "tradingsymbol": "SBIN-EQ",
        "symboltoken": "3045"
    });

    var config = {
        method: 'post',
        url: 'https://apiconnect.angelbroking.com/rest/secure/angelbroking/order/v1/getLtpData',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VybmFtZSI6IlI0Nzc3NjkiLCJyb2xlcyI6MCwidXNlcnR5cGUiOiJVU0VSIiwiaWF0IjoxNjQ5NDA5NDgwLCJleHAiOjE3MzU4MDk0ODB9.cinKbDwV0x3cF2ayX74snwUxqtCKQwcN8sezJ1Hrrn8l-XcKRawPGao38xTX0NnIudUyel0enrMktcYp6sPKyg',
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-UserType': 'USER',
            'X-SourceID': 'WEB',
            'X-ClientLocalIP': 'CLIENT_LOCAL_IP',
            'X-ClientPublicIP': 'CLIENT_PUBLIC_IP',
            'X-MACAddress': 'MAC_ADDRESS',
            'X-PrivateKey': 'pOqUzX8V'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

// lets place order for perticular exchange
exports.placeOrder = () => {
    var data = JSON.stringify({
        "variety": "NORMAL",
        "tradingsymbol": "SBIN-EQ",
        "symboltoken": "3045",
        "transactiontype": "BUY",
        "exchange": "NSE",
        "ordertype": "MARKET",
        "producttype": "INTRADAY",
        "duration": "DAY",
        "price": "194.50",
        "squareoff": "0",
        "stoploss": "0",
        "quantity": "10"
    });

    var config = {
        method: 'post',
        url: 'https://apiconnect.angelbroking.com/rest/secure/angelbroking/order/v1/placeOrder',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VybmFtZSI6IlI0Nzc3NjkiLCJyb2xlcyI6MCwidXNlcnR5cGUiOiJVU0VSIiwiaWF0IjoxNjQ5NDA5NDgwLCJleHAiOjE3MzU4MDk0ODB9.cinKbDwV0x3cF2ayX74snwUxqtCKQwcN8sezJ1Hrrn8l-XcKRawPGao38xTX0NnIudUyel0enrMktcYp6sPKyg',
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-UserType': 'USER',
            'X-SourceID': 'WEB',
            'X-ClientLocalIP': 'CLIENT_LOCAL_IP',
            'X-ClientPublicIP': 'CLIENT_PUBLIC_IP',
            'X-MACAddress': 'MAC_ADDRESS',
            'X-PrivateKey': 'pOqUzX8V'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}
// modify order 
exports.modifyOrder = () => {
    var data = JSON.stringify({
        "variety": "NORMAL",
        "orderid": "220408001053631",
        "ordertype": "LIMIT",
        "producttype": "INTRADAY",
        "duration": "DAY",
        "price": "194.00",
        "quantity": "55",
        "tradingsymbol": "SBIN-EQ",
        "symboltoken": "3045",
        "exchange": "NSE"
    });

    var config = {
        method: 'post',
        url: 'https://apiconnect.angelbroking.com/rest/secure/angelbroking/order/v1/modifyOrder',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VybmFtZSI6IlI0Nzc3NjkiLCJyb2xlcyI6MCwidXNlcnR5cGUiOiJVU0VSIiwiaWF0IjoxNjQ5NDA5NDgwLCJleHAiOjE3MzU4MDk0ODB9.cinKbDwV0x3cF2ayX74snwUxqtCKQwcN8sezJ1Hrrn8l-XcKRawPGao38xTX0NnIudUyel0enrMktcYp6sPKyg',
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-UserType': 'USER',
            'X-SourceID': 'WEB',
            'X-ClientLocalIP': 'CLIENT_LOCAL_IP',
            'X-ClientPublicIP': 'CLIENT_PUBLIC_IP',
            'X-MACAddress': 'MAC_ADDRESS',
            'X-PrivateKey': 'pOqUzX8V'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });

}

// cancel order
exports.cancelOrder = () => {
    var data = JSON.stringify({
        "variety": "NORMAL",
        "orderid": "220408001019071"
    });  
    var config = {
        method: 'post',
        url: 'https://apiconnect.angelbroking.com/rest/secure/angelbroking/order/v1/cancelOrder',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VybmFtZSI6IlI0Nzc3NjkiLCJyb2xlcyI6MCwidXNlcnR5cGUiOiJVU0VSIiwiaWF0IjoxNjQ5NDA5NDgwLCJleHAiOjE3MzU4MDk0ODB9.cinKbDwV0x3cF2ayX74snwUxqtCKQwcN8sezJ1Hrrn8l-XcKRawPGao38xTX0NnIudUyel0enrMktcYp6sPKyg',
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-UserType': 'USER',
            'X-SourceID': 'WEB',
            'X-ClientLocalIP': 'CLIENT_LOCAL_IP',
            'X-ClientPublicIP': 'CLIENT_PUBLIC_IP',
            'X-MACAddress': 'MAC_ADDRESS',
            'X-PrivateKey': 'pOqUzX8V'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}
