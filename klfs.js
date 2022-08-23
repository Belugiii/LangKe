var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://webapi.qmai.cn/web/catering/activity/boxUserDraw',
  'headers': {
    'Host': 'webapi.qmai.cn',
    'Connection': 'keep-alive',
    'Content-Length': '64',
    'Accept': 'v=1.0',
    'content-type': 'application/json',
    'scene': '1005',
    'qz-gtd': '',
    'Qm-From': 'wechat',
    'channelCode': '',
    'promotion-code': '',
    'Qm-From-Type': 'catering',
    'store-id': '27088',
    'gdt-vid': '',
    'Qm-User-Token': 'ASBC3-pfIFusl-mxAK2AN_ocsnMI47uBalBjHdh8Wan4Yufin6bRiheCXcpP4G_2',
    'Accept-Encoding': 'gzip,compress,br,deflate',
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.20(0x18001442) NetType/4G Language/zh_CN',
    'Referer': 'https://servicewechat.com/wx57da7f4b6d0763b2/170/page-frame.html',
    'Cookie': 'acw_tc=781bad3416604095738942911e32cdf2ed256704c775adeab176041b1a45b4'
  },
  body: JSON.stringify({
    "activityId": "723977993717825537",
    "appid": "wx57da7f4b6d0763b2"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
