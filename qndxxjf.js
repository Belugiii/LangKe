/*
	new Env("青年大学习签到积分")
*/
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
date = year;
if(month < 10){
    month = '' + 0 + month;
}
if(day < 10){
    day = '' + 0 + day;
}
date = '' + year + month + day;
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://www.jxqingtuan.cn/pub/vol/member/addScoreInfo',
  'headers': {
    'Host': 'www.jxqingtuan.cn',
    'Accept': '*/*',
    'openid': 'oWtPk5uwtZeiEWnU87uXZUMPw4BA',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Origin': 'http://www.jxqingtuan.cn',
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.28(0x18001c24) NetType/4G Language/zh_CN',
    'Connection': 'keep-alive',
    'Referer': 'http://www.jxqingtuan.cn/html/index.html',
    'Content-Length': '121',
    'Cookie': 'JSESSIONID=a_y7-ZVfCejzXFd0J4wqgoeP0so74pDBj6K8bQ5_; JSESSIONID=7pBzi8ZUzd_PImMjcAZuEii9Vnk2STpSIQ5Sq5Pa'
  },
  form: {
    'check': '1',
    'type': '5',
    'title': '签到打卡',
    'url': date,
    'openid': 'oWtPk5uwtZeiEWnU87uXZUMPw4BA',
    'userId': '3970690'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  let result = JSON.parse(response.body);
  if(result.success){
      console.log("签到成功");
  }else{
      console.log("签到失败");
  }
});
