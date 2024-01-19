var unirest = require('unirest');
var req = unirest('POST', 'https://htwkop.xiaojukeji.com/gateway?api=prado.play.common.facade.component&apiVersion=1.0.0&appKey=h5appbcd0af7461691c1e30bcd61098f&appVersion=14.6.0&mobileType=Xiaomi&osType=2&osVersion=Android%2011&timestamp=1699537366349&ttid=h5&userRole=1&token=UIudxhGVfWh_L2calefXgWXS-vSZgAxf6x4f5s5gUa0kzrtqxUAMhOF3-WthpNVK8eptcnEuzQYSTmX87ofF1XxMMczJVArfdFOEaZQJs1Eeaou-aHuMFunR--o6pcIMCoTXO94ot8zUoc09ezPhg3LhoE7-fx9_7wcVqmaX8ElZjhH-4mnCF4Xt2lsfkWN9-b5nfyi9ngEAAP__&userId=316660902336421&sign=e1d4e9546f1e969753f24dd3559a3c2f2c3095c1&wsgsig=dd03-D%2F5%2BngPq1QqY7iJO8c9SQt%2FlJJAz2gDo5XauzshiJJAy5cnWNDYpRcYt4uqy5syS30etODLt34TxJni%2F7jLSQfSU43Ox5nnyJt1Pycqr2QhS6bmO8cdSRfTm%2B8k')
  .headers({
    'Host': 'htwkop.xiaojukeji.com',
    'Connection': 'keep-alive',
    'Content-Length': '444',
    'secdd-authentication': '0f58a8d52b293ccd805ab1b20f2c9bb509dde456ec886777c8938485aa9cd4928279c1203de7cfb6d2d74fed08a644672de051b48b01000001000000',
    'charset': 'utf-8',
    'User-Agent': 'Mozilla/5.0 (Linux; Android 11; MI 9 Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5317 MMWEBSDK/20231002 MMWEBID/9254 MicroMessenger/8.0.43.2480(0x28002B33) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android',
    'xpsid': '5acd76aa300c42a4a7de37e8f5f5e6f2',
    'content-type': 'application/json',
    'cityid': '102',
    'Accept-Encoding': 'gzip,compress,br,deflate',
    'secdd-challenge': '3|v1.1.0||||||',
    'xpsid-root': '5acd76aa300c42a4a7de37e8f5f5e6f2',
    'Referer': 'https://servicewechat.com/wx9e9b87595c41dbb7/426/page-frame.html'
  })
  .send("%7B%22cityId%22%3A102%2C%22methodName%22%3A%22signIn%22%2C%22serviceCode%22%3A%22signInComponentService%22%2C%22serviceType%22%3A%22SIMPLE%22%2C%22entryFlag%22%3A%22APP_LETS%22%2C%22classifyCode%22%3A%22SIGN%22%2C%22scene%22%3A%22LLC_WELFARE_CENTER%22%2C%22bizId%22%3A363%2C%22channelId%22%3A3%2C%22miniappversion%22%3A%2214.6.0%22%2C%22klat%22%3A25.89234375%2C%22klnt%22%3A114.90710286458334%2C%22accuracy%22%3A30%2C%22hwId%22%3A%2210000%22%7D")
  .end(function (res) { 
    if (res.error) throw new Error(res.error); 
    console.log(res.raw_body);
  });
