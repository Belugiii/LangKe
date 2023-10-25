// new Env("v2free签到")
// cron: 30 7 * * *
var unirest = require('unirest');
var req = unirest('POST', 'https://v2free.net/user/checkin')
  .headers({
    'Host': 'v2free.net',
    'Connection': 'keep-alive',
    'Content-Length': '0',
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Origin': 'https://v2free.net',
    'X-Requested-With': 'XMLHttpRequest',
    'User-Agent': 'Mozilla/5.0 (Linux; U; Android 11; zh-cn; MI 9 Build/RKQ1.200826.002) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/79.0.3945.147 Mobile Safari/537.36 XiaoMi/MiuiBrowser/14.3.21',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-Mode': 'cors',
    'Referer': 'https://v2free.net/user',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
    'Cookie': '_ga=GA1.1.1636674257.1659976638; _ga_NC10VPE6SR=GS1.1.1663525324.2.1.1663525521.0.0.0; uid=59162; email=belugi%40foxmail.com; key=ceb3b193e20b707de33d2ce853358b58ac6ac7bf4e7df; ip=b1639a13c92bc7520e9833f8f378d353; expire_in=1699019760; crisp-client%2Fsession%2Fa47ae3dd-53d8-4b15-afae-fb4577f7bcd0=session_7d2b6c71-ccb5-4c39-9ecc-75d982073f4e',
    'Content-Type': 'application/x-www-form-urlencoded'
  })
  .send('https://v2free.net/user/checkin=')
  .end(function (res) { 
    if (res.error) throw new Error(res.error); 
    console.log(res.raw_body);
  });

