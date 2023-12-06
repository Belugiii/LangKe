var $ = new Env('脚本名称')
var notify = require('./sendNotify');
var Notify = 0; //0为关闭通知，1为打开通知,默认为1
var msg = ''; //需要推送的内容

var unirest = require('unirest');
var req = unirest('POST', 'https://kohcamp.qq.com/operation/action/signin')
  .headers({
    'Host': 'kohcamp.qq.com',
    'content-type': 'application/json',
    'timestamp': '1700630985306',
    'h5get': '1',
    'serverid': '1182',
    'x-client-proto': 'https',
    'accept-encrypt': '',
    'userid': '21733683',
    'algorithm': 'v2',
    'camproleid': '108400113',
    'openid': '009C196E362B0BE2BCDB2D3D55480C99',
    'encode': '2',
    'areaid': '1',
    'source': 'smoba_zhushou',
    'user-agent': 'Mozilla/5.0 (Linux; Android 11; MI 9 Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.141 Mobile Safari/537.36;GameHelper; smobagamehelper; Brand: Xiaomi MI 9$',
    'accept': 'application/json, text/plain, */*',
    'msdktoken': 'FQtqRXtk',
    'roleid': '81908488',
    'cclientversionname': '7.91.1115',
    'gameopenid': '5352F330D3F66C8C36BA985E2A41CF84',
    'msdkencodeparam': 'BBA8859F4BA7AC4AA12E2CB493F95C1DD943130301DA57F142C4D51A2D005458BE974BFDE6ABD2C256502CFD07DE4BECA6E20DE3862710137D165478FDB9BB781BEA5EE93065CFE16373396FE1BA0F1094670F6A81A8D523E6EEA53C3624B2B03670DDF4E9C04675D8BC492ECDFAF0A38D6BA2EB552F4D86264A8448BD570D99843CBBD4EC6AF9B79254C387F29111A630B4489B5419957D9D10956D69D07A27A1175F4DAEB693E7BF71E19C60F5BE86',
    'csystem': 'android',
    'gameid': '20001',
    'sig': 'ccc7a723852d92d9cd993abe44cc85ac',
    'appid': '1105200115',
    'noencrypt': '1',
    'token': 't4G8AvTe',
    'version': '3.1.96a',
    'origin': 'https://camp.qq.com',
    'x-requested-with': 'com.tencent.gamehelper.smoba',
    'sec-fetch-site': 'same-site',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://camp.qq.com/h5/webdist/act-center/index.html?isNavigationBarHidden=1&appVersion=2037871904&role=%E2%81%A2%E3%80%80%E2%81%A0%E2%81%A3%E2%80%85%E2%81%A1&toOpenid=5352F330D3F66C8C36BA985E2A41CF84&icon=https%3A%2F%2Fttwzavatar.kohsocialapp.qq.com%2F21733683%2F7ada6ac6d8642445add0eb12e6f7d5b5s%2F76&serverName=%E6%89%8BQ172%E5%8C%BA&serverId=1182&wi=1&areaName=%E5%AE%89%E5%8D%93&nickname=%E5%B0%B1%E7%A6%BB%E4%BA%86%E4%B8%AA%E5%A4%A7%E8%B0%B1X&qi=1&uin=009C196E362B0BE2BCDB2D3D55480C99&roleLevel=30&gameId=20001&roleId=81908488&uniqueRoleId=108400113&nrid=1182_5352F330D3F66C8C36BA985E2A41CF84&appVersionName=7.91.1115&userId=21733683&gameOpenid=5352F330D3F66C8C36BA985E2A41CF84&isMainRole=1&appOpenid=009C196E362B0BE2BCDB2D3D55480C99&areaId=1&zn=%E5%AE%89%E5%8D%93%E6%89%8BQ172%E5%8C%BA&platid=1&roleJob=%E6%B0%B8%E6%81%92%E9%92%BB%E7%9F%B3II&roleName=%E2%81%A2%E3%80%80%E2%81%A0%E2%81%A3%E2%80%85%E2%81%A1&z=1182&algorithm=v2&appid=1105200115&encode=2&openid=009C196E362B0BE2BCDB2D3D55480C99&sig=ccc7a723852d92d9cd993abe44cc85ac&source=smoba_zhushou&timestamp=1700630985306&version=3.1.96a&msdkEncodeParam=BBA8859F4BA7AC4AA12E2CB493F95C1DD943130301DA57F142C4D51A2D005458BE974BFDE6ABD2C256502CFD07DE4BECA6E20DE3862710137D165478FDB9BB781BEA5EE93065CFE16373396FE1BA0F1094670F6A81A8D523E6EEA53C3624B2B03670DDF4E9C04675D8BC492ECDFAF0A38D6BA2EB552F4D86264A8448BD570D99843CBBD4EC6AF9B79254C387F29111A630B4489B5419957D9D10956D69D07A27A1175F4DAEB693E7BF71E19C60F5BE86',
    'accept-encoding': 'gzip, deflate',
    'accept-language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7'
  })
  .send(JSON.stringify({
    "cSystem": "android",
    "h5Get": 1,
    "roleId": 108400113
  }))
  .end(function (res) { 
    if (res.error){
	    msg += res.error;
	    Notify++;
	    SendMsg(msg)
		throw new Error(res.error)
	}; 
    let res_body = JSON.parse(res.raw_body)
    if(res_body.returnCode != 0){
	    msg += res_body.returnMsg
	    Notify++;
    }
    console.log(res.raw_body);
    SendMsg(msg)
  });


function SendMsg(message) {
     if (Notify > 0) {
         notify.sendNotify($.name, message);
     } else {
         console.log(message);
     }
 }
function Env(name){
	this.name = name;
}