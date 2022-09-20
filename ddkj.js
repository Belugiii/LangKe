/*
	new Env("多多砍价签到")
*/
var request = require('request');

var headers = {
    'User-Agent': 'Apipost client Runtime/+https://www.apipost.cn/',
    'authority': 'kan.xn--viqt40d.cc',
    'accept': 'application/json, text/javascript, */*; q=0.01',
    'sec-fetch-dest': 'empty',
    'x-requested-with': 'XMLHttpRequest',
    'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
    'dnt': '1',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'cors',
    'referer': 'https://kan.xn--viqt40d.cc/user/qiandao.php',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cookie': 'mysid=7b171778378c91064efe2e5080c85d6a; user_token=4152DAptZpNJupnC6xui8IOmF%2FDsxZMkmRYov7xUs3gR4ZRY3SYG1uLXXQZVa1EJ0Y3wH3ZbhkqFo3YioUFH2%2Brf; op=false; PHPSESSID=75cdohkabb7sib3klg1rqt4qov'
};

var options = {
    url: 'https://kan.xn--viqt40d.cc/user/ajax_user.php?act=qiandao',
    headers: headers
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);
