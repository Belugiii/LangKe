//new Env("酷狗会员兑换");

var axios = require('axios');
var data = '{"gift_id":34,"coins":5000}';

var config = {
  method: 'post',
  url: 'https://gateway.kugou.com/mstc/musicsymbol/v1/gift/excharge?srcappid=2919&clientver=11329&clienttime=1663645975528&mid=938607a06a63a91151ba3ce014c6d31675b4c38d&uuid=938607a06a63a91151ba3ce014c6d31675b4c38d&dfid=3dwHEh1vizOp0BgCce3Zcx4b&appid=1000&userid=2034750050&token=h51DFC1CC7EBE62E12C21DEEBCCDDF8614F0DD9340BDF6173A008F05016469CF42A3830FD193DF2423DA4AAC8E69DA882E459EE6D6724B16964A1C57DD3D39D33BD9160288B5435690D2782DD5C3A70FE8A0210508413298F5379F1F3E56309B6FF36AA452379CFE1223DA4F94AADD2092BF854A3DF3385EE233DA798A69AE4957&from=client&signature=d29ee16445cca28a4ed4fe09a058781f',
  headers: { 
    'Host': 'gateway.kugou.com', 
    'Content-Type': 'text/plain;charset=UTF-8', 
    'Origin': 'https://h5.kugou.com', 
    'Accept-Encoding': 'gzip, deflate, br', 
    'Connection': 'keep-alive', 
    'Accept': '*/*', 
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 - 11329 - KGBrowser KGWebKit/1.0', 
    'Referer': 'https://h5.kugou.com/', 
    'Content-Length': '27', 
    'Accept-Language': 'zh-CN,zh-Hans;q=0.9'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
