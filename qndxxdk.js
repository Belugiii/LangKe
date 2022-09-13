var date = new Date();
var year = date.getFullYear();
/*
	new Env("青年大学习打卡")
*/
var month = date.getMonth() + 1;
var day = date.getDate();
if(month < 10){
    month = '0' + month;
}
if(day < 10){
    day = '0' + day;
}

var request = require('request');
var options = {
  'method': 'GET',
  'url': 'http://www.jxqingtuan.cn/pub/vol/daysign/sign?uid=3970690&year='+ year +'&month=' + month +' &day=' + day,
  'headers': {
    'Host': 'www.jxqingtuan.cn',
    'Content-Type': 'application/x-www-form-urlencoded',
    'openid': 'oWtPk5uwtZeiEWnU87uXZUMPw4BA',
    'Cookie': 'JSESSIONID=a_y7-ZVfCejzXFd0J4wqgoeP0so74pDBj6K8bQ5_; JSESSIONID=7pBzi8ZUzd_PImMjcAZuEii9Vnk2STpSIQ5Sq5Pa',
    'Connection': 'keep-alive',
    'Accept': '*/*',
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.28(0x18001c24) NetType/4G Language/zh_CN',
    'Referer': 'http://www.jxqingtuan.cn/html/index.html',
    'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
    'Accept-Encoding': 'gzip, deflate'
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
