//new Env("王者营地签到")
var unirest = require('unirest');
var req = unirest('POST', 'https://kohcamp.qq.com/operation/action/signin')
  .headers({
    'Host': 'kohcamp.qq.com',
    'content-type': 'application/json',
    'timestamp': '1688781813264',
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
    'msdktoken': 'utEAPEJJ',
    'roleid': '81908488',
    'cclientversionname': '7.83.0510',
    'gameopenid': '5352F330D3F66C8C36BA985E2A41CF84',
    'msdkencodeparam': 'FC7DEF5E7592BE4DB54246F30C08542235B67FC6A77C195454A03B70E6593141727B7E4D35107B266C66874751DE895D017471E66BD2E995AD087B2DED4A983DC255EE85C86AF6B687CDB29BF280E0D70338B7545EAC01D0DEFD532FF2AEDC190B8AE1E60E9EDD89A4FFE83E6D58886D44D51359BC4A0647A1B6DE941297ED04E3505127244DB6AEB866987F30687596EDCC47CF8E8A752182F179B7731CCB06C515F2BEB59C8CA4A13FFDDC95785A06',
    'csystem': 'android',
    'gameid': '20001',
    'sig': '098f44ac7e9dbb50dbac5eb9bfdd8572',
    'appid': '1105200115',
    'noencrypt': '1',
    'version': '3.1.96a',
    'origin': 'https://camp.qq.com',
    'x-requested-with': 'com.tencent.gamehelper.smoba',
    'sec-fetch-site': 'same-site',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://camp.qq.com/h5/webdist/act-center/index.html?isNavigationBarHidden=1&appVersion=2037853005&role=%E2%81%A2%E3%80%80%E2%81%A0%E2%81%A3%E2%80%85%E2%81%A1&toOpenid=5352F330D3F66C8C36BA985E2A41CF84&icon=https%3A%2F%2Fttwzavatar.kohsocialapp.qq.com%2F21733683%2F36da1fe681f8059feb50a7e40773d42d7%2F76&serverName=%E6%89%8BQ172%E5%8C%BA&serverId=1182&wi=1&areaName=%E5%AE%89%E5%8D%93&nickname=%E7%8E%8B%E8%80%85%E4%B8%94%E6%98%9F%E8%80%80&qi=1&uin=009C196E362B0BE2BCDB2D3D55480C99&roleLevel=30&gameId=20001&roleId=81908488&uniqueRoleId=108400113&nrid=1182_5352F330D3F66C8C36BA985E2A41CF84&appVersionName=7.83.0510&userId=21733683&gameOpenid=5352F330D3F66C8C36BA985E2A41CF84&isMainRole=1&appOpenid=009C196E362B0BE2BCDB2D3D55480C99&areaId=1&zn=%E5%AE%89%E5%8D%93%E6%89%8BQ172%E5%8C%BA&platid=1&roleJob=%E8%87%B3%E5%B0%8A%E6%98%9F%E8%80%80V&roleName=%E2%81%A2%E3%80%80%E2%81%A0%E2%81%A3%E2%80%85%E2%81%A1&z=1182&algorithm=v2&appid=1105200115&encode=2&openid=009C196E362B0BE2BCDB2D3D55480C99&sig=098f44ac7e9dbb50dbac5eb9bfdd8572&source=smoba_zhushou&timestamp=1688781813264&version=3.1.96a&msdkEncodeParam=FC7DEF5E7592BE4DB54246F30C08542235B67FC6A77C195454A03B70E6593141727B7E4D35107B266C66874751DE895D017471E66BD2E995AD087B2DED4A983DC255EE85C86AF6B687CDB29BF280E0D70338B7545EAC01D0DEFD532FF2AEDC190B8AE1E60E9EDD89A4FFE83E6D58886D44D51359BC4A0647A1B6DE941297ED04E3505127244DB6AEB866987F30687596EDCC47CF8E8A752182F179B7731CCB06C515F2BEB59C8CA4A13FFDDC95785A06',
    'accept-encoding': 'gzip, deflate',
    'accept-language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7'
  })
  .send(JSON.stringify({
    "cSystem": "android",
    "h5Get": 1,
    "roleId": 108400113
  }))
  .end(function (res) { 
    if (res.error) throw new Error(res.error); 
    console.log(res.raw_body);
  });
