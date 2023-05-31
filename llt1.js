// new Env('遛遛它(账号1)');
var unirest = require('unirest');
var req = unirest('POST', 'https://www.chongpar.cn/member/cp-member-integral/add')
  .headers({
    'Host': 'www.chongpar.cn',
    'Connection': 'keep-alive',
    'Content-Length': '10',
    'source': 'wx-llt',
    'content-type': 'application/json',
    'api-platform': 'h5',
    'api-version': '1.0.0',
    'Safety-Code': '1685547007231',
    'User-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJtZW1iZXJJZCI6IjM0MDk4Njc1OTQyMjgwODA2NCIsInBob25lIjoiMTUyNzAwMTAwNDEiLCJpYXQiOjE2ODUzNzI2MTEsImV4cCI6MTY5MDU1NjYxMX0.0vN_ay7EpWY3Iyzad9ADJ3hC4GdufeaR4wu9Q0Urnho',
    'version': '1.0.20',
    'Safety-Token': '1ea1a617cb614b4356708b19df503695108ba283',
    'Accept-Encoding': 'gzip,compress,br,deflate',
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.28(0x18001c2e) NetType/WIFI Language/zh_CN',
    'Referer': 'https://servicewechat.com/wxf85576319c33dd1b/147/page-frame.html'
  })
  .send(JSON.stringify({
    "type": 0
  }))
  .end(function (res) { 
    if (res.error) throw new Error(res.error); 
    console.log(res.raw_body);
  });
