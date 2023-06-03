// cron 0 9 * * *
// new Env("桔子兼职签到")
var unirest = require('unirest');
var req = unirest('GET', 'https://api.juzijianzhi.com/web/user/sign?u=408427')
  .headers({
    'authority': 'api.juzijianzhi.com',
    'pragma': 'no-cache',
    'cache-control': 'no-cache',
    'origin': 'https://www.juzijianzhi.com',
    'sec-fetch-dest': 'empty',
    'access-token': 'tk.c23dfb6aae103c74ca61a7b6a65f40c0',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 SE 2.X MetaSr 1.0',
    'dnt': '1',
    'accept': '*/*',
    'sec-fetch-site': 'same-site',
    'sec-fetch-mode': 'cors',
    'referer': 'https://www.juzijianzhi.com/i/achieve',
    'accept-language': 'zh-CN,zh;q=0.9',
    'Cookie': 'acw_tc=76b20f6b16857840996545576e411f6fa86adf8a0560fd5d6a8d7cfe9f90fe'
  })
  .end(function (res) { 
    if (res.error) throw new Error(res.error); 
    console.log(res.raw_body);
  });
