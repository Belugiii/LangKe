//new Env('青桔3签到');

var unirest = require('unirest');
var req = unirest('POST', 'https://htwkop.xiaojukeji.com/gateway?api=prado.play.common.facade.component&apiVersion=1.0.0&appKey=h5appbcd0af7461691c1e30bcd61098f&appVersion=13.7.0&mobileType=Xiaomi&osType=2&osVersion=Android%2011&timestamp=1688479120349&ttid=h5&userRole=1&token=bkeNpwoBsytQGN-DKOKoQhloksXpO_oKGozftHw6GZ0kjjuuAkEMBO_SsbWyx5839m0esHySQQIRrfbuaNioSx2UasNgFHThhUEYghLCaCh1lok6Ubpn81A3m5-hmDAcBRD-jzmhVCKCk5tqWBPC5adbURvez8_rvKKcWWQnXFESvdtfCifhhoJ0tmbpkbPlfmgfKN6_AQAA__8%3D&userId=316660902336421&sign=f64b08a46eb404f34976bc346a0e2f7cceba7b9a&wsgsig=dd03-Yapn6PeOW%2F%2Bg1xwCVi4fB6Exk9p98HhFXGsCe5Muk9pa3LFMlsKgBTERVq%2Ba3xL0rWW4Cx%2FPXrCbLOA4VgiFd16zVqfD3H58VgQBDOLTVFDa3Y1Ch0zbd6HOU%2Fd')
  .headers({
    'Host': 'htwkop.xiaojukeji.com',
    'Connection': 'keep-alive',
    'Content-Length': '465',
    'secdd-authentication': 'c847c65db2c917ec87214bbf3fc56e1513743854b5ffe3f890cfa1eff4a19d50b53481735a5363cc9a519863aba4cf802cfd31218901000001000000',
    'charset': 'utf-8',
    'User-Agent': 'Mozilla/5.0 (Linux; Android 11; MI 9 Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.141 Mobile Safari/537.36 XWEB/5127 MMWEBSDK/20230405 MMWEBID/9254 MicroMessenger/8.0.35.2360(0x2800235D) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android',
    'xpsid': 'ee667c42ea2b428a93f516cc2acf3670',
    'content-type': 'application/json',
    'cityid': '34',
    'Accept-Encoding': 'gzip,compress,br,deflate',
    'secdd-challenge': '3|v1.1.0||||||',
    'xpsid-root': 'ee667c42ea2b428a93f516cc2acf3670',
    'Referer': 'https://servicewechat.com/wx9e9b87595c41dbb7/401/page-frame.html'
  })
  .send("%7B%22cityId%22%3A34%2C%22methodName%22%3A%22signIn%22%2C%22serviceCode%22%3A%22signInComponentService%22%2C%22serviceType%22%3A%22SIMPLE%22%2C%22entryFlag%22%3A%22APP_LETS%22%2C%22classifyCode%22%3A%22SIGN%22%2C%22scene%22%3A%22LLC_WELFARE_CENTER%22%2C%22bizId%22%3A363%2C%22channelId%22%3A3%2C%22miniappversion%22%3A%2213.7.0%22%2C%22klat%22%3A26.107851019965278%2C%22klnt%22%3A119.2712318250868%2C%22accuracy%22%3A14.901385307312012%2C%22hwId%22%3A%2210000%22%7D")
  .end(function (res) { 
    if (res.error) throw new Error(res.error); 
    console.log(res.raw_body);
  });
