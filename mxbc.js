var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://mxsa.mxbc.net/api/v1/customer/signin?t=1660409111843&appId=d82be6bbc1da11eb9dd000163e122ecb&sign=fMkq_WyBzSsH76W9E2qAiMoHsrDhMLcqzZ2-B-ouT8fRVUDwdasxJYhChjwuiXihVa5_SdPQXvI_bc0RC5RkM_YbnejW9CkybIqjTqqJ3n8tZdvUcU4x324QPpwu0rMRMCG1t7t3UXP_AUx680yLrbyB4GJ97T_ZzKxEmDqGVqZ-Go77vgzgJCBHOeSR8klY146K1haF48UuLu8_fVTSc-nV2qxpIp58pwnr5WMRaQfjiQZHIM4CZ5ium1heF9QwT0QCEc8JXby6eyRGw0-gtvbC6e6JXc1iSQmxtEuH6ZcuoCczL_OdQsnZvq7UjKiieDQ-7h4eXAUlopjJCX612Q%3D%3D',
  'headers': {
    'Host': 'mxsa.mxbc.net',
    'Connection': 'keep-alive',
    'content-type': 'application/json',
    'Access-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ3eG1pbmlfMTU1NTQ1NDE1MjgyNDgxOTcxMyIsImlhdCI6MTY1OTY4NDE0M30.j-oMupDdOey0vztGv03JDtYFMQn0T2L4v5_WJ-mAjGoViNi8gjFQ6q75wKmd6pj4RGwsn1AbTS-RAlEq8ivqKg',
    'Accept-Encoding': 'gzip,compress,br,deflate',
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.20(0x18001442) NetType/4G Language/zh_CN',
    'Referer': 'https://servicewechat.com/wx7696c66d2245d107/40/page-frame.html',
    'Cookie': 'acw_tc=0a324fb316604092525227207e390b65d811caddf5bc52b575bd32410aa24d; aliyungf_tc=3f34bb5e617f104636344854d5c94ecb52a5c2b5ed32e1adf3abb9a007a0e815'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
