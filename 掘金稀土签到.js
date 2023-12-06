//new Env('掘金稀土签到');
var unirest = require('unirest');
var notify = require('./sendNotify');
var req = unirest('POST', 'https://api.juejin.cn/growth_api/v1/check_in?aid=2608^&uuid=7201068787754468868^&spider=0^&a_bogus=Y7UQgOZ-Msm18wfAoXDz9t6ExpW0YW5vgZENx5Dx90oJ')
  .headers({
    'authority': 'api.juejin.cn',
    'pragma': 'no-cache',
    'cache-control': 'no-cache',
    'origin': 'https://juejin.cn',
    'sec-fetch-dest': 'empty',
    'x-secsdk-csrf-token': '00010000000156c763abdc7d73b6f566c86d4308d6cc7f792f9aa81574b439ac8ad658c4998517617f3c302b63c6',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 SE 2.X MetaSr 1.0',
    'dnt': '1',
    'content-type': 'application/json',
    'accept': '*/*',
    'sec-fetch-site': 'same-site',
    'sec-fetch-mode': 'cors',
    'referer': 'https://juejin.cn/user/center/signin?from=main_page',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cookie': '_tea_utm_cache_2608=undefined; __tea_cookie_tokens_2608=^%^257B^%^2522web_id^%^2522^%^253A^%^25227201068787754468868^%^2522^%^252C^%^2522user_unique_id^%^2522^%^253A^%^25227201068787754468868^%^2522^%^252C^%^2522timestamp^%^2522^%^253A1676629494953^%^257D; passport_csrf_token=1b4987f3e8687194217f7d7baa2a0cd1; passport_csrf_token_default=1b4987f3e8687194217f7d7baa2a0cd1; n_mh=hK1U8b4o25p01X0KV0fVOuHB8pnSPV9yPZW7AgUe9sU; sid_guard=014d56de7d3771c1dc85968a1e9b5819^%^7C1681108056^%^7C31536000^%^7CTue^%^2C+09-Apr-2024+06^%^3A27^%^3A36+GMT; uid_tt=bd6269e0a14ff96066c9543450fdd1e1; uid_tt_ss=bd6269e0a14ff96066c9543450fdd1e1; sid_tt=014d56de7d3771c1dc85968a1e9b5819; sessionid=014d56de7d3771c1dc85968a1e9b5819; sessionid_ss=014d56de7d3771c1dc85968a1e9b5819; sid_ucp_v1=1.0.0-KDc5YzFiNWRjY2JmNzY2MGQ1YTVjNzc4NzE5ZGRmYjlhOGVmNzU3MzQKFgjdpZCagI21BRDY2M6hBhiwFDgIQAsaAmxmIiAwMTRkNTZkZTdkMzc3MWMxZGM4NTk2OGExZTliNTgxOQ; ssid_ucp_v1=1.0.0-KDc5YzFiNWRjY2JmNzY2MGQ1YTVjNzc4NzE5ZGRmYjlhOGVmNzU3MzQKFgjdpZCagI21BRDY2M6hBhiwFDgIQAsaAmxmIiAwMTRkNTZkZTdkMzc3MWMxZGM4NTk2OGExZTliNTgxOQ; store-region=cn-gd; store-region-src=uid; _ga=GA1.2.817746028.1681108058; csrf_session_id=40b682e7cf4e7fb36b1077c78be86b8b; msToken=jXd6Gqisd2hXZ7z_tnhPeHpE_LUOHpxoVkslUIyWkZ54rPGlVdMAMQxervFHYAnejTjsJJQPR__ySECn3rY3cct-SLcjT7Kd4ZwLHE1FAJ8=; msToken=Ydo4hosd8G1r0-EX_dGcc8YsAXZKHDZF8Sn7rnQEuMAYwOwTH6bjOuwr4L2RzdwuLUZuH4k4NOqI0nFI2mgypLaZ0JjkKHTnHUauvyBafnI='
  })
  .send("^{^}")
  .end(function (res) { 
	console.log(res.raw_body);
    if (res.error) {
	    notify.sendNotify('掘金稀土签到', res.error);
		throw new Error(res.error)
	}; 
	let msg_body = JSON.parse(res.raw_body)
    if (msg_body.err_no != 0){
	    notify.sendNotify('掘金稀土签到', msg_body.err_msg);
    }
  });
