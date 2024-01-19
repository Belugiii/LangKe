const axios = require('axios');
let data = JSON.stringify({
  "cSystem": "android",
  "h5Get": 1,
  "roleId": 108400113
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://kohcamp.qq.com/operation/action/signin',
  headers: { 
    'Host': 'kohcamp.qq.com', 
    'content-type': 'application/json', 
    'timestamp': '1705552680583', 
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
    'msdktoken': 'TGMaLAyY', 
    'roleid': '81908488', 
    'cclientversionname': '7.91.1115', 
    'gameopenid': '5352F330D3F66C8C36BA985E2A41CF84', 
    'msdkencodeparam': '8AF76306A0968AC021CE2C5D977DAFF8FE72458201A842EA834B25BCEDF78DAFF4633FEFDCB956B0F2219BF766FAACA39555BBFE1033161C38947B252FAEA2D517C6C0640C523A153BDCCCAF3D974BFCA47FF2B8759A2DA1F9FCE1BC980052409A693D46D9AB93436432A5F897153DC9E7CE03C801CB27ED06C01ACA0AF8B2899CC8DAFDADF47FA5761AA9B8843D9EA6EBF7C8A7DD55709BD512173C9886720AC1B45765AE4679B7678BDD59B1F508A5', 
    'csystem': 'android', 
    'gameid': '20001', 
    'sig': 'ea147400881091e13644e98c4d2d9681', 
    'appid': '1105200115', 
    'noencrypt': '1', 
    'token': 'ZFVByVmR', 
    'version': '3.1.96a', 
    'origin': 'https://camp.qq.com', 
    'x-requested-with': 'com.tencent.gamehelper.smoba', 
    'sec-fetch-site': 'same-site', 
    'sec-fetch-mode': 'cors', 
    'sec-fetch-dest': 'empty', 
    'referer': 'https://camp.qq.com/h5/webdist/act-center/index.html?isNavigationBarHidden=1&appVersion=2037871904&role=%E2%81%A2%E3%80%80%E2%81%A0%E2%81%A3%E2%80%85%E2%81%A1&toOpenid=5352F330D3F66C8C36BA985E2A41CF84&icon=https%3A%2F%2Fttwzavatar.kohsocialapp.qq.com%2F21733683%2F7ada6ac6d8642445add0eb12e6f7d5b5s%2F76&serverName=%E6%89%8BQ172%E5%8C%BA&serverId=1182&wi=1&areaName=%E5%AE%89%E5%8D%93&nickname=%E5%B0%B1%E7%A6%BB%E4%BA%86%E4%B8%AA%E5%A4%A7%E8%B0%B1X&qi=1&uin=009C196E362B0BE2BCDB2D3D55480C99&roleLevel=30&gameId=20001&roleId=81908488&uniqueRoleId=108400113&nrid=1182_5352F330D3F66C8C36BA985E2A41CF84&appVersionName=7.91.1115&userId=21733683&gameOpenid=5352F330D3F66C8C36BA985E2A41CF84&isMainRole=1&appOpenid=009C196E362B0BE2BCDB2D3D55480C99&areaId=1&zn=%E5%AE%89%E5%8D%93%E6%89%8BQ172%E5%8C%BA&platid=1&roleJob=%E8%87%B3%E5%B0%8A%E6%98%9F%E8%80%80III&roleName=%E2%81%A2%E3%80%80%E2%81%A0%E2%81%A3%E2%80%85%E2%81%A1&z=1182&algorithm=v2&appid=1105200115&encode=2&openid=009C196E362B0BE2BCDB2D3D55480C99&sig=ea147400881091e13644e98c4d2d9681&source=smoba_zhushou&timestamp=1705552680583&version=3.1.96a&msdkEncodeParam=8AF76306A0968AC021CE2C5D977DAFF8FE72458201A842EA834B25BCEDF78DAFF4633FEFDCB956B0F2219BF766FAACA39555BBFE1033161C38947B252FAEA2D517C6C0640C523A153BDCCCAF3D974BFCA47FF2B8759A2DA1F9FCE1BC980052409A693D46D9AB93436432A5F897153DC9E7CE03C801CB27ED06C01ACA0AF8B2899CC8DAFDADF47FA5761AA9B8843D9EA6EBF7C8A7DD55709BD512173C9886720AC1B45765AE4679B7678BDD59B1F508A5', 
    'accept-encoding': 'gzip, deflate', 
    'accept-language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
