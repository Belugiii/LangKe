const axios = require('axios');
const notify = require('./sendNotify');
let data = JSON.stringify({
  "paramEncryptedStr": "+2AFPtt/uAwMKOPK0PVwlQ=="
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://wxapi.uni.changan.com.cn/user/signIn',
  headers: { 
    'Host': 'wxapi.uni.changan.com.cn', 
    'Connection': 'keep-alive', 
    'Content-Length': '48', 
    'sign': '5F2E60F4278BA555EEA43857DEFA2134', 
    'timestamp': '1714922656844', 
    'content-type': 'application/json', 
    'codeEncryptedStr': 'N2oRDwlDII5hUJLOKoxtN4JoZwbxZPYKImtFv/eRDCfhOOsVe4IwyTQR7yrU1pneViRdxzR+g5aOp/CoYcXP9Rjtl6WqXjHzk5hdNCYK5dP34DuP5brfyJDdmhjo8CBCxlEbsTHIroe02yh890bDp0xp3w4VkWm4cUBVB/AdLZw=', 
    'token': 'user:token:min:16120154:A24723D06BB5330563BF28E7BD85D5F1', 
    'Accept-Encoding': 'gzip,compress,br,deflate', 
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.44(0x18002c2f) NetType/4G Language/zh_CN', 
    'Referer': 'https://servicewechat.com/wxa85ccd055be3cfbc/214/page-frame.html', 
    'Cookie': 'acw_tc=2f624a4717149227240434862e5c74ba05096c875bfe9eae1295a4fc2e82ca'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
  if(response.data.msg != "操作成功"){
	  notify.sendNotify("引力域", response.data.msg);
  }
})
.catch((error) => {
  console.log(error);
  notify.sendNotify("引力域", error);
});
