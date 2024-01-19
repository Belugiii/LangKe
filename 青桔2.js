//new Env("青桔02")
var unirest = require('unirest');
var req = unirest('POST', 'https://htwkop.xiaojukeji.com/gateway?api=prado.play.common.facade.component&apiVersion=1.0.0&appKey=h5appbcd0af7461691c1e30bcd61098f&appVersion=13.4.0&mobileType=Xiaomi&osType=2&osVersion=Android%2011&timestamp=1684297562460&ttid=h5&userRole=1&token=x-p1KH9Je9krQweuwWxphtQsGHpBv7IX2nM7vhrF49EkzDmuwzAMANG7TE0YpERKFm_zF2dpFCBBKsN3DwJXM9XbmUpSF10UYRppwixkDbXvVtJ6jL62PtSiV2E6qcIMEoSfM79kGUN7Wd2bemsh_JNV2Mid1-P9_NvIUDU7hAtpbfUyergJVxIL6-qm6oZwO9k7qccnAAD__w%3D%3D&userId=299072844604665&sign=12de3edf64a0c4a2832aaa5c7de13acd81e9b9ed&wsgsig=dd03-YMcDYPfnzT8gv8%2B9W78WV68sTMz9wQsaX37m%2F5NVTMzaZof2lyntUT0kwx8aZ88cru3pXxjlxwbbpJc%2BUyKs%2FxnnxxpbYz89%2F7cvVxNXwOcHS%2B4fUvJiVHgixTO')
  .headers({
    'Host': 'htwkop.xiaojukeji.com',
    'Connection': 'keep-alive',
    'Content-Length': '451',
    'secdd-authentication': 'a7ac64cd498cc0451ad2a51867d17f03c3d2215336cd95da90518cb03aa2fad1e0c833c84612941602c63b2135831960c9d6f4278801000001000000',
    'charset': 'utf-8',
    'User-Agent': 'Mozilla/5.0 (Linux; Android 11; MI 9 Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.141 Mobile Safari/537.36 XWEB/5075 MMWEBSDK/20230405 MMWEBID/209 MicroMessenger/8.0.35.2360(0x28002357) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android',
    'xpsid': 'f77aa464f5cc45e9ba272b627541f11f',
    'content-type': 'application/json',
    'cityid': '34',
    'Accept-Encoding': 'gzip,compress,br,deflate',
    'secdd-challenge': '3|v1.1.0||||||',
    'xpsid-root': 'f77aa464f5cc45e9ba272b627541f11f',
    'Referer': 'https://servicewechat.com/wx9e9b87595c41dbb7/395/page-frame.html'
  })
  .send("%7B%22cityId%22%3A34%2C%22methodName%22%3A%22signIn%22%2C%22serviceCode%22%3A%22signInComponentService%22%2C%22serviceType%22%3A%22SIMPLE%22%2C%22entryFlag%22%3A%22APP_LETS%22%2C%22classifyCode%22%3A%22SIGN%22%2C%22scene%22%3A%22LLC_WELFARE_CENTER%22%2C%22bizId%22%3A363%2C%22channelId%22%3A3%2C%22miniappversion%22%3A%2213.4.0%22%2C%22klat%22%3A26.107339952256943%2C%22klnt%22%3A119.27228434244792%2C%22accuracy%22%3A225%2C%22hwId%22%3A%2210000%22%7D")
  .end(function (res) { 
    if (res.error) throw new Error(res.error); 
    console.log(res.raw_body);
  });
