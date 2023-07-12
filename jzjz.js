// cron 0 9 * * *
// new Env("桔子兼职签到")
var unirest = require('unirest');
var req = unirest('GET', 'https://api.juzijianzhi.com/web/user/sign?u=408427')
  .headers({
    'authority': 'api.juzijianzhi.com',
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
    'access-control-request-headers': 'access-token',
    'access-control-request-method': 'GET',
    'origin': 'https://www.juzijianzhi.com',
    'referer': 'https://www.juzijianzhi.com/',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.43',
    'access-token': 'tk.6a41b584c4de4e0f0b81345321c2eef3',
    'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Microsoft Edge";v="114"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'Cookie': 'acw_tc=781bad2316891512730658046e5119d92e264b5669386bcb4e45c6aa2806a3'
  })
  .end(function (res) { 
	  if(res.raw_body == 1){
		  console.log("签到成功");
	  }else{
		  console.log("失败");
		  console.log(res.raw_body);
	  }
  });
