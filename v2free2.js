// new Env("v2free2签到")
// cron: 30 7 * * *
const axios = require('axios');

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://v1.v2free.top/user/checkin',
  headers: { 
    'Accept': 'application/json, text/javascript, */*; q=0.01', 
    'Accept-Language': 'zh-CN,zh;q=0.9', 
    'Cache-Control': 'no-cache', 
    'Connection': 'keep-alive', 
    'Content-Length': '0', 
    'Cookie': 'uid=52198; email=belugi%40qq.com; key=55d06fb4345466cfb53d3ec06e2730c813a785eacf0ee; ip=fd43028fabd37f6029569732217e6844; expire_in=1703182740; crisp-client%2Fsession%2Fa47ae3dd-53d8-4b15-afae-fb4577f7bcd0=session_17ee53f5-08ae-4a9e-90c5-4033eca98e1d', 
    'Origin': 'https://v1.v2free.top', 
    'Pragma': 'no-cache', 
    'Referer': 'https://v1.v2free.top/user', 
    'Sec-Fetch-Dest': 'empty', 
    'Sec-Fetch-Mode': 'cors', 
    'Sec-Fetch-Site': 'same-origin', 
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36', 
    'X-Requested-With': 'XMLHttpRequest', 
    'sec-ch-ua': '"Chromium";v="118", "Google Chrome";v="118", "Not=A?Brand";v="99"', 
    'sec-ch-ua-mobile': '?0', 
    'sec-ch-ua-platform': '"Windows"'
  }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
