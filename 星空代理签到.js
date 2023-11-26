var unirest = require('unirest');
var req = unirest('POST', 'http://www.xkdaili.com/tools/submit_ajax.ashx?action=user_receive_point')
  .headers({
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Cookie': 'ASP.NET_SessionId=ylcmhgh2zwh0nhzaxdg4azdm; Hm_lvt_d76458121a7604d3e55d998f66ef0be6=1700926674,1700984397; Hm_lpvt_d76458121a7604d3e55d998f66ef0be6=1700984397; dt_cookie_user_name_remember=DTcms=15270010041; dt_cookie_user_pwd_remember=DTcms=1718450639',
    'Origin': 'http://www.xkdaili.com',
    'Pragma': 'no-cache',
    'Referer': 'http://www.xkdaili.com/main/usercenter.aspx',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest'
  })
  .send("type=login")
  .end(function (res) { 
    if (res.error) throw new Error(res.error); 
    console.log(res.raw_body);
  });
