//new Env("王者营地签到")
var unirest = require('unirest');
var req = unirest('POST', 'https://kohcamp.qq.com/operation/action/signin')
  .headers({
    'Host': 'kohcamp.qq.com',
    'content-type': 'application/json',
    'timestamp': '1693027812663',
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
    'msdktoken': 'qKpbsmoB',
    'roleid': '81908488',
    'cclientversionname': '7.84.0726',
    'gameopenid': '5352F330D3F66C8C36BA985E2A41CF84',
    'msdkencodeparam': '9BDC2A12149F635E14608820F0C423223669390686945FD077D395290EDF163B0AC74D0127C8404EA61CA1BE60AFF3BDAF96C109B863E012CD5995E511CE958CAAC2463F00620D2959330261CF3AD47182587EB7C88EBBEB56F078CBE1F4367DD514B528D3414CF3FF8F62A577F35FD5345EB96EF0034E58D440F6CA8C7D49C98FCD962999BD065B7EA570C33261E3268B88D4900FCC41630C8F8EBB8988F931C61A37319242550FA0524E7A5BDA18B4',
    'csystem': 'android',
    'gameid': '20001',
    'sig': 'dffee274b882b2a60b459cba86424977',
    'appid': '1105200115',
    'noencrypt': '1',
    'token': 'yvAhU7MU',
    'version': '3.1.96a',
    'origin': 'https://camp.qq.com',
    'x-requested-with': 'com.tencent.gamehelper.smoba',
    'sec-fetch-site': 'same-site',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://camp.qq.com/h5/webdist/act-center/index.html?isNavigationBarHidden=1&appVersion=2037860705&role=%E2%81%A2%E3%80%80%E2%81%A0%E2%81%A3%E2%80%85%E2%81%A1&toOpenid=5352F330D3F66C8C36BA985E2A41CF84&icon=https%3A%2F%2Fttwzavatar.kohsocialapp.qq.com%2F21733683%2F36da1fe681f8059feb50a7e40773d42d7%2F76&serverName=%E6%89%8BQ172%E5%8C%BA&serverId=1182&wi=1&areaName=%E5%AE%89%E5%8D%93&nickname=%E7%8E%8B%E8%80%85%E4%B8%94%E6%98%9F%E8%80%80&qi=1&uin=009C196E362B0BE2BCDB2D3D55480C99&roleLevel=30&gameId=20001&roleId=81908488&uniqueRoleId=108400113&nrid=1182_5352F330D3F66C8C36BA985E2A41CF84&appVersionName=7.84.0726&userId=21733683&gameOpenid=5352F330D3F66C8C36BA985E2A41CF84&isMainRole=1&appOpenid=009C196E362B0BE2BCDB2D3D55480C99&areaId=1&zn=%E5%AE%89%E5%8D%93%E6%89%8BQ172%E5%8C%BA&platid=1&roleJob=%E6%9C%80%E5%BC%BA%E7%8E%8B%E8%80%85&roleName=%E2%81%A2%E3%80%80%E2%81%A0%E2%81%A3%E2%80%85%E2%81%A1&z=1182&algorithm=v2&appid=1105200115&encode=2&openid=009C196E362B0BE2BCDB2D3D55480C99&sig=dffee274b882b2a60b459cba86424977&source=smoba_zhushou&timestamp=1693027812663&version=3.1.96a&msdkEncodeParam=9BDC2A12149F635E14608820F0C423223669390686945FD077D395290EDF163B0AC74D0127C8404EA61CA1BE60AFF3BDAF96C109B863E012CD5995E511CE958CAAC2463F00620D2959330261CF3AD47182587EB7C88EBBEB56F078CBE1F4367DD514B528D3414CF3FF8F62A577F35FD5345EB96EF0034E58D440F6CA8C7D49C98FCD962999BD065B7EA570C33261E3268B88D4900FCC41630C8F8EBB8988F931C61A37319242550FA0524E7A5BDA18B4',
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
