// new Env("王者营地签到")
var unirest = require('unirest');
var req = unirest('POST', 'https://kohcamp.qq.com/operation/action/signin')
  .headers({
    'Host': 'kohcamp.qq.com',
    'content-type': 'application/json',
    'timestamp': '1684816852919',
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
    'msdktoken': 'ATVmAakn',
    'roleid': '81908488',
    'cclientversionname': '7.83.0510',
    'gameopenid': '5352F330D3F66C8C36BA985E2A41CF84',
    'msdkencodeparam': '1619C045F95E74D074D0EB3B7B7580D44EE7CEB284575392090AC4C620A88C3A53A4335A4199E1A9C285D83E0F9DC58A427B8F16ABF450A6FAE04D15710EC7D0202882823615D51574962A7307159B67F602A02F10D869D65B8D9F360E00231202AE7B147185F7D0B717449D254AB013EB658B063D1610BFB93FBE680D42147F5847F722FB31FC3A4CFD3DECDDD383614C680CD74726E5F09670A2F995B59B4461E4E08CD1094C7A3CB181DF8B6DA138',
    'csystem': 'android',
    'gameid': '20001',
    'sig': '80060a0835f08d0692e554338e9202b5',
    'appid': '1105200115',
    'noencrypt': '1',
    'version': '3.1.96a',
    'origin': 'https://camp.qq.com',
    'x-requested-with': 'com.tencent.gamehelper.smoba',
    'sec-fetch-site': 'same-site',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://camp.qq.com/h5/webdist/act-center/index.html?isNavigationBarHidden=1&appVersion=2037853005&role=%E7%8E%85%E7%AB%97%E7%BC%AA%E5%95%8A&toOpenid=5352F330D3F66C8C36BA985E2A41CF84&icon=https%3A%2F%2Fttwzavatar.kohsocialapp.qq.com%2F21733683%2F36da1fe681f8059feb50a7e40773d42d7%2F76&serverName=%E6%89%8BQ172%E5%8C%BA&serverId=1182&wi=1&areaName=%E5%AE%89%E5%8D%93&nickname=%E7%8E%8B%E8%80%85%E4%B8%94%E6%98%9F%E8%80%80&qi=1&uin=009C196E362B0BE2BCDB2D3D55480C99&roleLevel=30&gameId=20001&roleId=81908488&uniqueRoleId=108400113&nrid=1182_5352F330D3F66C8C36BA985E2A41CF84&appVersionName=7.83.0510&userId=21733683&gameOpenid=5352F330D3F66C8C36BA985E2A41CF84&isMainRole=1&appOpenid=009C196E362B0BE2BCDB2D3D55480C99&areaId=1&zn=%E5%AE%89%E5%8D%93%E6%89%8BQ172%E5%8C%BA&platid=1&roleJob=%E8%87%B3%E5%B0%8A%E6%98%9F%E8%80%80I&roleName=%E7%8E%85%E7%AB%97%E7%BC%AA%E5%95%8A&z=1182&algorithm=v2&appid=1105200115&encode=2&openid=009C196E362B0BE2BCDB2D3D55480C99&sig=80060a0835f08d0692e554338e9202b5&source=smoba_zhushou&timestamp=1684816852919&version=3.1.96a&msdkEncodeParam=1619C045F95E74D074D0EB3B7B7580D44EE7CEB284575392090AC4C620A88C3A53A4335A4199E1A9C285D83E0F9DC58A427B8F16ABF450A6FAE04D15710EC7D0202882823615D51574962A7307159B67F602A02F10D869D65B8D9F360E00231202AE7B147185F7D0B717449D254AB013EB658B063D1610BFB93FBE680D42147F5847F722FB31FC3A4CFD3DECDDD383614C680CD74726E5F09670A2F995B59B4461E4E08CD1094C7A3CB181DF8B6DA138',
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
