var unirest = require('unirest');
var year = new Date().getFullYear();
var month = new Date().getMonth() + 1;
var day = new Date().getDate();
var url = "https://www.jxqingtuan.cn/pub/pub/vol/daysign/sign?uid=3970690&year=" + year + "&month=" + month + "&day=" + day;

var req = unirest('GET', url)
  .headers({
    'Host': 'www.jxqingtuan.cn',
    'Accept': '*/*',
    'Authorization': '',
    'openid': 'oWtPk5uwtZeiEWnU87uXZUMPw4BA',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
    'Content-Type': 'application/x-www-form-urlencoded',
    'requestType': 'https',
    'Connection': 'keep-alive',
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.41(0x18002930) NetType/WIFI Language/zh_CN miniProgram/wx88ccb2655c6720e2',
    'Referer': 'https://www.jxqingtuan.cn/html/?&accessToken=oWtPk5uwtZeiEWnU87uXZUMPw4BA&openid=oWtPk5uwtZeiEWnU87uXZUMPw4BA&requestType=https',
    'Cookie': 'JSESSIONID=pQNolbEVJT3Hk2KK9g3GX3uz1hP-98KeWglZh-Mj; JSESSIONID=eUyq2iJED7qaKhjvn7KlRdw9o9fyWdapBPF3q6We'
  })
  .end(function (res) { 
    if (res.error) throw new Error(res.error); 
    console.log(res.raw_body);
  });
