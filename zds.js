var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://gw.chowtaiseng.com/member/center/signIn',
  'headers': {
    'Host': 'gw.chowtaiseng.com',
    'Connection': 'keep-alive',
    'Content-Length': '4',
    'content-type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NjA0MDY4OTEsImNsaWVudF9pZCI6Im1lbWJlcmNlbnRlciIsIm1lbWJlcnNoaXBfaWQiOiI2MmQxYjA2NTU2NDI1YzdhMGMxMTBkNTkiLCJzY29wZSI6WyJhbGwiXSwiZ3JhbnRfdHlwZSI6InBhc3N3b3JkIiwidG9rZW5fdHlwZSI6ImFjY2VzcyJ9.1U_YuAi5swcovVn1chfO0WVb5GPz5zEDvR_n_aJ6Q7M',
    'Accept-Encoding': 'gzip,compress,br,deflate',
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.20(0x18001442) NetType/4G Language/zh_CN',
    'Referer': 'https://servicewechat.com/wx33566f1b203cb259/47/page-frame.html'
  },
  body: JSON.stringify(null)

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
