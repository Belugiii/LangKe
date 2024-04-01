const axios = require('axios');
let data = JSON.stringify({
  "paramEncryptedStr": "Yzj5uym7bWBADiKYEIjkoA=="
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://wxapi.uni.changan.com.cn/user/signIn',
  headers: { 
    'Host': 'wxapi.uni.changan.com.cn', 
    'Connection': 'keep-alive', 
    'Content-Length': '48', 
    'sign': 'FDF1CECF95D4BACF4371CBC9AB7F471B', 
    'timestamp': '1711990872620', 
    'content-type': 'application/json', 
    'codeEncryptedStr': 'N+whpY2GIuzkvebY3W1WlM49J5RyNtDknlI9t9U82O+lHV23cVuYVsjOy91/hdQUzCDmCOfVsFibjkQXycMPvW8NeUIXgXq1JEYhUt99h1CpAecvco8WRR2AQnF64X1j+hZRRANEo9lWRwZ2018/Wg9sCGvdp+Cs6uoQVf4NHLo=', 
    'token': 'user:token:min:16120154:A24723D06BB5330563BF28E7BD85D5F1', 
    'Accept-Encoding': 'gzip,compress,br,deflate', 
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.44(0x18002c2f) NetType/4G Language/zh_CN', 
    'Referer': 'https://servicewechat.com/wxa85ccd055be3cfbc/212/page-frame.html', 
    'Cookie': 'acw_tc=2f624a4e17119910647718872e0b7e9f0e4a96627f79a2f5d161863a49f7bd'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
