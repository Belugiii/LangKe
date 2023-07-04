 //new Env("V2free")
var unirest = require('unirest');
var req = unirest('POST', 'https://v1.v2free.top/user/checkin')
  .headers({
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Content-Length': '0',
    'Cookie': '_ga=GA1.1.1397018342.1688482755; uid=52198; email=belugi%40qq.com; key=4c5640105a31dd4141d71faf2eaf13984ca5a9e0cdcc2; ip=e6ab9463ad3835e9c8d5d0372ca19369; expire_in=1720018781; _gcl_au=1.1.446600133.1688482786; crisp-client%2Fsession%2Fa47ae3dd-53d8-4b15-afae-fb4577f7bcd0=session_d7eddb1e-4345-4e51-abd4-b2eeea567456; _ga_NC10VPE6SR=GS1.1.1688482755.1.1.1688482841.0.0.0',
    'Origin': 'https://v1.v2free.top',
    'Pragma': 'no-cache',
    'Referer': 'https://v1.v2free.top/user',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest',
    'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'authority': 'client.crisp.chat',
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'pragma': 'no-cache',
    'referer': 'https://v1.v2free.top/',
    'sec-fetch-dest': 'script',
    'sec-fetch-mode': 'no-cors',
    'sec-fetch-site': 'cross-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36'
  })
  .end(function (res) { 
    if (res.error) throw new Error(res.error); 
    console.log(res.raw_body);
  });
