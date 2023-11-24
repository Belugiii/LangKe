// new Env("v2free签到")
// cron: 30 7 * * *
var unirest = require('unirest');
var req = unirest('POST', 'https://v1.v2free.top/user/checkin')
  .headers({
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
    'Connection': 'keep-alive',
    'Content-Length': '0',
    'Cookie': 'crisp-client%2Fsession%2Fa47ae3dd-53d8-4b15-afae-fb4577f7bcd0=session_8df4abef-0567-45fe-b666-5ff414ed5654; uid=59162; email=belugi%40foxmail.com; key=7ca6677414843ded077194f8e67adef963ab54ad05e5c; ip=be114608c877b81c58e907e5fdcc4dcf; expire_in=1703440672',
    'Origin': 'https://v1.v2free.top',
    'Referer': 'https://v1.v2free.top/user',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.43',
    'X-Requested-With': 'XMLHttpRequest',
    'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Microsoft Edge";v="114"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"'
  })
  .end(function (res) { 
    if (res.error) throw new Error(res.error); 
    console.log(res.raw_body);
  });
