//  new Env("青桔");
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://htwkop.xiaojukeji.com/gateway?api=prado.play.common.facade.component&apiVersion=1.0.0&appKey=h5appbcd0af7461691c1e30bcd61098f&appVersion=11.6.6&mobileType=iPhone&osType=1&osVersion=iOS%2015.5&sign=bd4d42f8cf83206bf26075c87b80d7236992ad08&timestamp=1660212999554&ttid=h5&userRole=1&token=q5NY513U8TIr42QS3vkPS2z2QXlE0FmhkPsUC5I30IskjDuuwzAMwO7CWQgkObZi3ea9Nv0sLtCiU5C7F0EmciC4MZSkTDopwjDShOFkqWqHFtKidu9d3S2sCGMmVRiVBOHvxD95RC28Nfeu8yJcySKs5Mbn9X1fVrKqmu3CjbTW1M37EsKdxKJF94hmFeFxbp-k7r8AAAD__w%3D%3D&userId=299067266229048&wsgsig=dd03-UVrh93Lpg00lJlFsYmZHNNPuFXXiN%2FYtviSE1pdxFXXjKkLRPfFaL76Sdg0jKFFrxbO6%2BNPTdWJ%2F69IxSchgL4Auf0Kk7eBYTfVILoapB08%2F7F5jYGhbLyPQeX%2F',
  'headers': {
    'Host': 'htwkop.xiaojukeji.com',
    'Connection': 'keep-alive',
    'Content-Length': '451',
    'xpsid': '0af016ce8b064131ba949a06c40f7cac',
    'xpsid-root': '0af016ce8b064131ba949a06c40f7cac',
    'content-type': 'application/json',
    'Cityid': '102',
    'secdd-authentication': 'd52c5febde0149e220c189910f6f9cb7aca9a8033d3df9d80048a328e1d27a69add434724f6cf0797b7c275c9c169b0179c3678c8201000001000000',
    'secdd-challenge': '3|v1.1.0||||||',
    'Accept-Encoding': 'gzip,compress,br,deflate',
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.20(0x18001442) NetType/4G Language/zh_CN',
    'Referer': 'https://servicewechat.com/wx9e9b87595c41dbb7/352/page-frame.html'
  },
  body: '%7B%22cityId%22%3A102%2C%22methodName%22%3A%22signIn%22%2C%22serviceCode%22%3A%22signInComponentService%22%2C%22serviceType%22%3A%22SIMPLE%22%2C%22entryFlag%22%3A%22APP_LETS%22%2C%22classifyCode%22%3A%22SIGN%22%2C%22scene%22%3A%22LLC_WELFARE_CENTER%22%2C%22bizId%22%3A363%2C%22channelId%22%3A3%2C%22miniappversion%22%3A%2211.6.6%22%2C%22klat%22%3A25.851820203993057%2C%22klnt%22%3A114.93054443359375%2C%22accuracy%22%3A38%2C%22hwId%22%3A%2210000%22%7D'

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
