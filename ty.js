//new Env('统一签到');


var axios = require('axios');
var data = JSON.stringify({
  "appid": "wx532ecb3bdaaf92f9",
  "basicInfo": {
    "vid": 6013753979957,
    "vidType": 2,
    "bosId": 4020112618957,
    "productId": 146,
    "productInstanceId": 3168798957,
    "productVersionId": "14026",
    "merchantId": 2000020692957,
    "tcode": "weimob",
    "cid": 176205957
  },
  "extendInfo": {
    "wxTemplateId": 6307,
    "childTemplateIds": [
      {
        "customId": 90004,
        "version": "crm@0.0.113"
      },
      {
        "customId": 90002,
        "version": "ec@0.5.46"
      },
      {
        "customId": 90006,
        "version": "hudong@0.0.126"
      },
      {
        "customId": 90008,
        "version": "cms@0.0.145"
      }
    ],
    "youshu": {
      "enable": false
    },
    "bosTemplateId": 1000000502,
    "source": 1,
    "channelsource": 5,
    "refer": "onecrm-signgift",
    "mpScene": 1089,
    "ocdAppId": 2620,
    "uuid": "202209021210-6311880c3b54a5"
  },
  "queryParameter": {
    "tracePromotionId": "100006218",
    "tracepromotionid": "100006218"
  },
  "pid": "4020112618957",
  "storeId": "0",
  "customInfo": {
    "source": 0,
    "wid": 3158589360
  },
  "tracePromotionId": "100006218",
  "tracepromotionid": "100006218"
});

var config = {
  method: 'post',
  url: 'https://xapi.weimob.com/api3/onecrm/mactivity/sign/misc/sign/activity/core/c/sign',
  headers: { 
    'Host': 'xapi.weimob.com', 
    'Connection': 'keep-alive', 
    'Content-Length': '859', 
    'content-type': 'application/json', 
    'x-cmssdk-vidticket': '11462-1664086653.034-saas-w1-1028-6259669936', 
    'cloud-pid': '4020112618957', 
    'wos-x-channel': '0:TITAN', 
    'cloud-bosid': '4020112618957', 
    'weimob-bosId': '4020112618957', 
    'x-cms-sdk-request': '1.1.497-rc.1', 
    'x-component-is': 'onecrm/signgift', 
    'x-page-route': 'onecrm/signgift', 
    'cloud-project-name': 'tongyixiangmu', 
    'Cookie': 'rprm_cuid=3846131173dtdu6rbe8s', 
    'weimob-pid': '4020112618957', 
    'X-WX-Token': '8ac08cefc27443a131ecca4c7156b9aee2769b9d39eb1c73222ead0c04bf6f35fc8c412785b45a8d624c53d386e0fb90', 
    'Accept-Encoding': 'gzip,compress,br,deflate', 
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.28(0x18001c2c) NetType/4G Language/zh_CN', 
    'Referer': 'https://servicewechat.com/wx532ecb3bdaaf92f9/102/page-frame.html'
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
