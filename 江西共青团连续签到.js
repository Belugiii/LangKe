var unirest = require('unirest');
var year = new Date().getFullYear();
var month = new Date().getMonth() + 1;
var day = new Date().getDate();
var url = "url=" + year + month + day;
var req = unirest('POST', 'https://www.jxqingtuan.cn/pub/pub/vol/member/addScoreInfo')
  .headers({
    'Host': 'www.jxqingtuan.cn',
    'Accept': '*/*',
    'Authorization': '',
    'openid': 'oWtPk5uwtZeiEWnU87uXZUMPw4BA',
    'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
    'Accept-Encoding': 'gzip, deflate, br',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Origin': 'https://www.jxqingtuan.cn',
    'requestType': 'https',
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.41(0x18002930) NetType/WIFI Language/zh_CN miniProgram/wx88ccb2655c6720e2',
    'Referer': 'https://www.jxqingtuan.cn/html/?&accessToken=oWtPk5uwtZeiEWnU87uXZUMPw4BA&openid=oWtPk5uwtZeiEWnU87uXZUMPw4BA&requestType=https',
    'Connection': 'keep-alive',
    'Cookie': 'JSESSIONID=pQNolbEVJT3Hk2KK9g3GX3uz1hP-98KeWglZh-Mj; JSESSIONID=eUyq2iJED7qaKhjvn7KlRdw9o9fyWdapBPF3q6We'
  })
  .send('check=1')
  .send('type=5')
  .send('title=签到打卡')
  .send(url)
  .send('openid=oWtPk5uwtZeiEWnU87uXZUMPw4BA')
  .send('userId=3970690')
  .end(function (res) { 
    if (res.error) throw new Error(res.error); 
    console.log(res.raw_body);
  });
