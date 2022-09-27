// new Env('特步签到');
var axios = require('axios');
var data = JSON.stringify({
  "ActId": 789,
  "ActRemindStatus": true
});

var config = {
  method: 'post',
  url: 'https://wxa-tp.ezrpro.com/myvip/Vip/SignIn/SignIn',
  headers: { 
    'Host': 'wxa-tp.ezrpro.com', 
    'Connection': 'keep-alive', 
    'Content-Length': '36', 
    'ezr-client-name': 'EZR.FE.MultiMall.Mini', 
    'content-type': 'application/json', 
    'limitType': '0', 
    'ezr-sv': '1', 
    'ezr-sp': '2', 
    'ezr-userid': 'oMfWKs_U6wvJjj2aaHJbOkxvJpXY', 
    'ezr-brand-id': '254', 
    'ezr-cop-id': '143', 
    'uber-trace-id': '77a8643d155d27ff:77a8643d155d27ff:0:1', 
    'ezr-vuid': '83577248', 
    'ezr-st': '1664088625371', 
    'needLoading': '[object Boolean]', 
    'ezr-source': 'weapp', 
    'ezr-ss': 'a0dd78fbe0e381a638d71ab5576b6556a0568ce2', 
    'Accept-Encoding': 'gzip,compress,br,deflate', 
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.28(0x18001c2c) NetType/4G Language/zh_CN', 
    'Referer': 'https://servicewechat.com/wx12e1cb3b09a0e6f0/81/page-frame.html'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
