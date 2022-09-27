//new Env('青桔签到');

var unirest = require('unirest');
var req = unirest('POST', 'https://htwkop.xiaojukeji.com/gateway?api=prado.play.common.facade.component&apiVersion=1.0.0&appKey=h5appbcd0af7461691c1e30bcd61098f&appVersion=11.9.2&mobileType=iPhone&osType=1&osVersion=iOS%2016.0&sign=f0747a3c26d0a8ebeb0a42903153aef1f617ad6b&timestamp=1663850792798&ttid=h5&userRole=1&token=VxgiGjUOQAS9MamkAPdcB3YSXr9dwkr2s9PAPqIIdw0kzDluw0AQBdG7VNwgfk_P4unbeKGXZAzYUETw7oLEqCp6B0sksWkTxnLSjVXIaPLHBumjzTZq6aXUKMaqpIzVSDBer7yRZU4NDZ_Ru3oYH09uJw_-f29_7zvZJPfT-CS993hpGiOMLxJvZUguVcf4vtgfUuc9AAD__w%3D%3D&userId=299070719366063&wsgsig=dd03-3%2BSK3FW12hk%2Btb%2F905SSEapMKadHXgaKF1ryb%2FyJKadIscVDgwHRGBn43rkIssSIDYVXFaD33AZJknqe05VYGaCI1hqMni220IkichyN4B%2F%2BsbUHGw5T0aX54UO')
  .headers({
    'Host': 'htwkop.xiaojukeji.com',
    'Connection': 'keep-alive',
    'Content-Length': '452',
    'xpsid': 'fe99b68c56584f8587c366e5ea1a9f6f',
    'xpsid-root': 'fe99b68c56584f8587c366e5ea1a9f6f',
    'content-type': 'application/json',
    'Cityid': '38',
    'secdd-authentication': '6f3555d73284a35955b25fa574cf524babdbd295e5a32b57a9ecaaf70235e93d1f37025adde85996fb886435fe3cbb30acf53b658301000001000000',
    'secdd-challenge': '3|v1.1.0||||||',
    'Accept-Encoding': 'gzip,compress,br,deflate',
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.28(0x18001c2b) NetType/4G Language/zh_CN',
    'Referer': 'https://servicewechat.com/wx9e9b87595c41dbb7/364/page-frame.html'
  })
  .send("%7B%22cityId%22%3A38%2C%22methodName%22%3A%22signIn%22%2C%22serviceCode%22%3A%22signInComponentService%22%2C%22serviceType%22%3A%22SIMPLE%22%2C%22entryFlag%22%3A%22APP_LETS%22%2C%22classifyCode%22%3A%22SIGN%22%2C%22scene%22%3A%22LLC_WELFARE_CENTER%22%2C%22bizId%22%3A363%2C%22channelId%22%3A3%2C%22miniappversion%22%3A%2211.9.2%22%2C%22klat%22%3A28.662891710069445%2C%22klnt%22%3A115.71600504557291%2C%22accuracy%22%3A4232%2C%22hwId%22%3A%2210000%22%7D")
  .end(function (res) { 
    if (res.error) throw new Error(res.error); 
    console.log(res.raw_body);
  });
