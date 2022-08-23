var request = require('request');

var headers = {
    'User-Agent': 'Apipost client Runtime/+https://www.apipost.cn/',
    'Content-Type': 'application/x-www-form-urlencoded'
};

var options = {
    url: 'https://geoapi.qweather.com/v2/city/lookup?location=赣州&key=95f16ff97aac466f82dcd2c8287bca51',
    headers: headers
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);
