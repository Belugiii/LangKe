var request = require('request');

var headers = {
    'User-Agent': 'ZZCIOS/black/2.18.1/iPhone 12 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MUID/mr7OtdVGdZwf2elF6wGfyKGOBzWiVidg8bGwaeCJZxo++opQ6nqzpqE1WqaZSEmp',
    'Host': 'market.chuxingyouhui.com',
    'request-body': '%7B%22appId%22%3A%221194494896220667904%22%7D',
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
    'Accept-Encoding': 'gzip, deflate, br',
    'token': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNTU4MjUyNDAyMDY5NjA2ODQxIiwiYm9keSI6IntcImlkZW50aWZpZXJcIjpcIjQ4MTQ0MjY3NVwiLFwibmlja25hbWVcIjpcIumqkeWjq-eJueadg1wiLFwic2V4XCI6MCxcInVzZXJJZFwiOjE1NTgyNTI0MDIwNjk2MDY4NDF9IiwicmFuIjoxMzg4NzU4NzQwfQ.GXSWfBJG_CgYv3GUIOWn3NrUSK5Lw35i9KL-XvtMIroD9gFvtZI8V7QsblZYZKA-ZYruDJ-fTLHmgRpxR7jCUg',
    'Content-Type': 'application/json;charset=utf-8',
    'Origin': 'https://m.black-unique.com',
    'black-token': 'eyJhbGciOiJIUzI1NiJ9.eyJjYXJkX251bWJlciI6NDgxNDQyNjc1LCJob2xkZXIiOiLpqpHlo6vnibnmnYMiLCJ1c2VyX2lkIjo4NzczNDc4MywicGhvbmUiOiIxNTI3MDAxMDA0MSJ9.RaTBefphyrSRcOcsWhrwodc-u0YSM9uJ76Y2_MUw36I',
    'Referer': 'https://m.black-unique.com/',
    'Content-Length': '31',
    'Connection': 'keep-alive'
};

var options = {
    url: 'https://market.chuxingyouhui.com/promo-bargain-api/activity/golden/api/v1_0/click',
    method: 'POST',
    headers: headers
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);
