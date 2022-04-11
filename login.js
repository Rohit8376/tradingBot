
var axios = require('axios');

exports.loginApi = () => {


    var data = JSON.stringify({
        "clientcode": process.env.CLIENT_CODE,
        "password": process.env.CLIENT_PASSWORD
    });

    console.log(data);

    var config = {
        method: 'post',
        url: 'https://apiconnect.angelbroking.com/rest/auth/angelbroking/user/v1/loginByPassword',

        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-UserType': 'USER',
            'X-SourceID': 'WEB',
            'X-ClientLocalIP': 'CLIENT_LOCAL_IP',
            'X-ClientPublicIP': 'CLIENT_PUBLIC_IP',
            'X-MACAddress': 'MAC_ADDRESS',
            'X-PrivateKey': 'pOqUzX8V' // api key
        },
        data: data
    };

    axios(config)
        .then(function (response) {


            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error.errorCode);
        });

}

exports.genrateToeken = () => {

    var data = JSON.stringify({
        "refreshToken": 'eyJhbGciOiJIUzUxMiJ9.eyJ0b2tlbiI6IlJFRlJFU0gtVE9LRU4iLCJpYXQiOjE2NDk0MDQwNDd9.kYy7zzCejjYl_Z3MN1I_OJeH9VzvI-Yg5xepnEWK7FdUSzRHQeuVLzVMIdbuVTIHLKVSZVVsERkVdXGiLC4qgQ'
    });


    var config = {
        method: 'post',
        url: 'https://apiconnect.angelbroking.com/rest/auth/angelbroking/jwt/v1/generateTokens',

        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VybmFtZSI6IlI0Nzc3NjkiLCJyb2xlcyI6MCwidXNlcnR5cGUiOiJVU0VSIiwiaWF0IjoxNjQ5NDA0MDQ3LCJleHAiOjE3MzU4MDQwNDd9.GDHA8__j73F8DuvLkYAeDxadmBbdUY5Egxy2yurfVVESXJ_1xgAhR8RuTD2NVENlIUgGpDs1labhpQDjkpxePg',
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

exports.getProfile = () => {
    var config = {
        method: 'get',
        url: 'https://apiconnect.angelbroking.com/rest/secure/angelbroking/user/v1/getProfile',

        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VybmFtZSI6IlI0Nzc3NjkiLCJyb2xlcyI6MCwidXNlcnR5cGUiOiJVU0VSIiwiaWF0IjoxNjQ5NDA0MDQ3LCJleHAiOjE3MzU4MDQwNDd9.GDHA8__j73F8DuvLkYAeDxadmBbdUY5Egxy2yurfVVESXJ_1xgAhR8RuTD2NVENlIUgGpDs1labhpQDjkpxePg',
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-UserType': 'USER',
            'X-SourceID': 'WEB',
            'X-ClientLocalIP': 'CLIENT_LOCAL_IP',
            'X-ClientPublicIP': 'CLIENT_PUBLIC_IP',
            'X-MACAddress': 'MAC_ADDRESS',
            'X-PrivateKey': 'pOqUzX8V'
        }
    };

    axios(config)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

exports.getRMS = () => {


    var config = {
        method: 'get',
        url: 'https://apiconnect.angelbroking.com/rest/secure/angelbroking/user/v1/getRMS',

        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VybmFtZSI6IlI0Nzc3NjkiLCJyb2xlcyI6MCwidXNlcnR5cGUiOiJVU0VSIiwiaWF0IjoxNjQ5NDA0MDQ3LCJleHAiOjE3MzU4MDQwNDd9.GDHA8__j73F8DuvLkYAeDxadmBbdUY5Egxy2yurfVVESXJ_1xgAhR8RuTD2NVENlIUgGpDs1labhpQDjkpxePg',
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-UserType': 'USER',
            'X-SourceID': 'WEB',
            'X-ClientLocalIP': 'CLIENT_LOCAL_IP',
            'X-ClientPublicIP': 'CLIENT_PUBLIC_IP',
            'X-MACAddress': 'MAC_ADDRESS',
            'X-PrivateKey': 'pOqUzX8V'
        }

    };


    axios(config)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

exports.logout = () => {
    var data = JSON.stringify({
        "clientcode": process.env.CLIENT_CODE
    });

    var config = {
        method: 'post',
        url: 'https://apiconnect.angelbroking.com/rest/secure/angelbroking/user/v1/logout',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VybmFtZSI6IlI0Nzc3NjkiLCJyb2xlcyI6MCwidXNlcnR5cGUiOiJVU0VSIiwiaWF0IjoxNjQ5NDA0MDQ3LCJleHAiOjE3MzU4MDQwNDd9.GDHA8__j73F8DuvLkYAeDxadmBbdUY5Egxy2yurfVVESXJ_1xgAhR8RuTD2NVENlIUgGpDs1labhpQDjkpxePg',
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

