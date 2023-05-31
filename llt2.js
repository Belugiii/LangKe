// new Env('遛遛它(账号2)');
var unirest = require('unirest');
var req = unirest('POST', 'https://www.chongpar.cn/member/cp-member-integral/add')
  .headers({
    'Host': 'www.chongpar.cn',
    'Connection': 'keep-alive',
    'Content-Length': '10',
    'api-version': '1.0.0',
    'charset': 'utf-8',
    'api-platform': 'h5',
    'User-Agent': 'Mozilla/5.0 (Linux; Android 11; MI 9 Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.141 Mobile Safari/537.36 XWEB/5075 MMWEBSDK/20230405 MMWEBID/209 MicroMessenger/8.0.35.2360(0x2800235D) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android',
    'safety-code': '1685548085622',
    'source': 'wx-llt',
    'Accept-Encoding': 'gzip,compress,br,deflate',
    'safety-token': '8b90d3604e82c49c2d9baf5c21c4b6513870f77e',
    'version': '1.0.20',
    'content-type': 'application/json',
    'user-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJtZW1iZXJJZCI6IjMzNTk0NTUwNTkxNTkzMjY3MiIsInBob25lIjoiMTUxNzA0MTAwNDEiLCJpYXQiOjE2ODQ3NzMzNjcsImV4cCI6MTY4OTk1NzM2N30.6CjvE3kcScZoeiN_URSX7sYd-ZQsELqXwMP6qAmxtkU',
    'Referer': 'https://servicewechat.com/wxf85576319c33dd1b/147/page-frame.html'
  })
  .send(JSON.stringify({
    "type": 0
  }))
  .end(function (res) { 
    if (res.error) throw new Error(res.error); 
    console.log(res.raw_body);
  });
