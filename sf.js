// new Env('三福签到');
var axios = require('axios');
var data = JSON.stringify({
  "sid": "f7137a85xV2c2bf41beafabef76lL3.64e138c9"
});

var config = {
  method: 'post',
  url: 'https://m.sanfu.com//ms-sanfu-wechat-customer/customer/onSign',
  headers: { 
    'Host': 'm.sanfu.com', 
    'Connection': 'keep-alive', 
    'Content-Length': '49', 
    'cusId': 'FQ281179', 
    'content-type': 'application/json', 
    'Accept-Encoding': 'gzip,compress,br,deflate', 
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.28(0x18001c2c) NetType/4G Language/zh_CN', 
    'Referer': 'https://servicewechat.com/wxfe13a2a5df88b058/162/page-frame.html'
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
