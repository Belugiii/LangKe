var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://mcs-mimp-web.sf-express.com/mcs-mimp/integralTaskSignPlusService/automaticSignFetchPackage',
  'headers': {
    'Host': 'mcs-mimp-web.sf-express.com',
    'Accept': 'application/json, text/plain, */*',
    'timestamp': '1660410404839',
    'sysCode': 'MCS-MIMP-CORE',
    'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
    'Accept-Encoding': 'gzip, deflate, br',
    'signature': '1914df11529d81cd917da877ecbef521',
    'Content-Type': 'application/json;charset=utf-8',
    'Origin': 'https://mcs-mimp-web.sf-express.com',
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.20(0x18001442) NetType/4G Language/zh_CN miniProgram/wxd4185d00bf7e08ac',
    'Referer': 'https://mcs-mimp-web.sf-express.com/taskSystem?from=TASKJFSCHY',
    'Content-Length': '49',
    'Connection': 'keep-alive',
    'Cookie': 'JSESSIONID=node0nud8aaaiowd012zze27c8aiuz343184.node0; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22B9FA55EEC181464E9619A45DAC7EF112%22%2C%22first_id%22%3A%22182982b5aec1e50-054788c06b68658-4946124c-329160-182982b5aed22e7%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22%24device_id%22%3A%22182982b5aec1e50-054788c06b68658-4946124c-329160-182982b5aed22e7%22%7D; sajssdk_2015_cross_new_user=1; _login_mobile_=15270010041; _login_user_id_=B9FA55EEC181464E9619A45DAC7EF112; sessionId=node0nud8aaaiowd012zze27c8aiuz343184'
  },
  body: '{"comeFrom":"vioin","channelFrom":"MINI_PROGRAM"}'

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
