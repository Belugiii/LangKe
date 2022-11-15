//new Env("青桔01")

var https = require('follow-redirects').https;
var fs = require('fs');

var options = {
    'method': 'POST',
    'hostname': 'htwkop.xiaojukeji.com',
    'path': '/gateway?api=prado.play.common.facade.component&apiVersion=1.0.0&appKey=h5appbcd0af7461691c1e30bcd61098f&appVersion=12.2.0&mobileType=Xiaomi&osType=2&osVersion=Android%252011&timestamp=1668309275104&ttid=h5&userRole=1&token=36dLqWUah2k4xVXAIWLXdAxaSIrVlVM_lSvojIUYqjwkzDuOwkAQBuG7VNyy_p6np2-zD-9CMkggIst3R-CoKvp2pgjyokUY0wk3ZiJylb83E97r6GvrQ157NmYhZMxKgPF15ptIY6intZSm0lo1fj_cRuw8bs_7z0ZUyf0w_ghvbc0aqcn4J_DqXcWl4hiXk70SOl4BAAD__w%253D%253D&userId=299072844604665&sign=8f8f5db0f8a8130836a573540273f68225112069&wsgsig=dd03-bj%252B3bcZExXhwA%252B2uN%252FvY%252Bnwap0avEJduMUCp3Wrfp0auBNqi8ARuNgO0ynhuBzPYKEGmM05GzmwZgQVU%252B9fP%252Biq8z0%252FOeJqT3qvZ%252BXOCzXAOep%252FOLqKz%252BnleQXq',
    'headers': {
        'Host': 'htwkop.xiaojukeji.com',
        'Connection': 'keep-alive',
        'Content-Length': '451',
        'secdd-authentication': '7d61efd8f8e054a58c35ae8f66fec4e9ecdeeb4d9ad8dbc8e105020c86479a2905607e62f78ffea0764d7767aa7b4ed77c12fb6e8401000001000000',
        'charset': 'utf-8',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 11; MI 9 Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4343 MMWEBSDK/20220903 Mobile Safari/537.36 MMWEBID/209 MicroMessenger/8.0.28.2240(0x28001C57) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android',
        'xpsid': '12cb2a5a1be6437da86a53be3ef7de02',
        'content-type': 'application/json',
        'cityid': '102',
        'Accept-Encoding': 'gzip,compress,br,deflate',
        'secdd-challenge': '3|v1.1.0||||||',
        'xpsid-root': '12cb2a5a1be6437da86a53be3ef7de02',
        'Referer': 'https://servicewechat.com/wx9e9b87595c41dbb7/369/page-frame.html'
    },
    'maxRedirects': 20
};

var req = https.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function (chunk) {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
    });

    res.on("error", function (error) {
        console.error(error);
    });
});

var postData =  "%7B%22cityId%22%3A102%2C%22methodName%22%3A%22signIn%22%2C%22serviceCode%22%3A%22signInComponentService%22%2C%22serviceType%22%3A%22SIMPLE%22%2C%22entryFlag%22%3A%22APP_LETS%22%2C%22classifyCode%22%3A%22SIGN%22%2C%22scene%22%3A%22LLC_WELFARE_CENTER%22%2C%22bizId%22%3A363%2C%22channelId%22%3A3%2C%22miniappversion%22%3A%2212.2.0%22%2C%22klat%22%3A25.892251790364583%2C%22klnt%22%3A114.90707411024306%2C%22accuracy%22%3A15%2C%22hwId%22%3A%2210000%22%7D";

req.write(postData);

req.end();