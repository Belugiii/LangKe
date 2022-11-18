//new Env("美团优选签到")

var unirest = require('unirest');
var req = unirest('POST', 'https://bi-mall.meituan.com/api/c/activity/interact/taskView/task/report?uuid=1833d130dbec8-230e7c54a4e8b4-0-505c8-1833d130dbec8&utm_medium=wxapp&brand=meituanyouxuan&tenantId=1&utm_term=5.118.0&device_model=iPhone%2012%3CiPhone13%2C2%3E&optimus_risk_level=71&optimus_code=10&poiIdStr=7-bCPjZ-I-6KigsXRsHfkwE&poi=0&stockPois=0&ci=140&bizId=4&fp_user_id=244590252&fp_open_id_cipher=AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM%2Fhf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n%2FGVnwfURonD78PewMUppAAAADh02%2Fgxwjl2cBnyYTUxwwwTogYSgL3yjy1oej%2Fh2FvQeJnvIVVDcq3jU8FC0tOrMLv%2Fa1o65YWk6Q%3D%3D&openId=oRRr90Pfh7mO5Vp4RUTWyxXY0Rgk&unionId=oNQu9t_H5V42JVkDszofncO7qFGo&superId=A2-A3-A2-A4-A2-A4&routeId=pages%2FuserCenter%2Findex%2CsubPackages%2Fmarketing%2FearningCenter%2Fpages%2Fmain%2Findex&sysName=iOS&sysVerion=16.0&app_tag=youxuan')
  .headers({
    'Host': 'bi-mall.meituan.com',
    'Connection': 'keep-alive',
    'Content-Length': '3807',
    't': 'jK1kbU8JD8U1TQX8rCR46gipKAQAAAAA3BMAAJpsiIYGoO9tH0Vea5Z9zLvvEmfYTzqPxHPy2JDooi94n6DEEuSwJLj7INHMB16O7w',
    'content-type': 'application/json',
    'mtgsig': '{"a1":"1.1","a2":1668701318871,"a3":"2682v4u545xw54121u5y00w97zu316u58166w86892487978xu8zx0uu","a4":"e3cc3092734c08d79230cce3d7084c73455e95659256d916","a5":"6eFqq9wBwJxBnnvg4OFtWzZaxbPCOX8AElr/WpB4bCpTClUM/cYVA7J7cvvXLevoJE98yOFzz7Ha71mh/ri8UTPOucQVYA3B0q5GcTu9hczzpznZYI4ruC8gxZ2TAhrPryh2Q11vleRSrMEhHmQZxmgkgMVcA2TKwnKuoJfvclS4te2lmzuw13eLnC+mVAzvFhO+LPBABc/spwADrAuX+zDcAyT4bbQ4DzXGcIlq5SGnldLvB2EzAzhB4DbU0LQ7VuTS1ktkYb0CkallQQklSoRA6ArQVrGnpibqXORsSk2kOPFsrJWjZI==","a6":"w1.1XdHWx+4HSDTdh/U9zg0A5lrlWMeXtQxrV5Ofg5iL7AtY8Say8JSh12bsVyBZOp7JBKPI29fCiEcszkpJ259V9Ttq7ptwFtjfMngB6h5f/lzcZESkfYGfUaLTZEpK6iX0gRiz/aQzPj5/yUyhboCyJOZ/XNAdWVC2zKls7fEUISe/htubF/9YlRUIK8s89gwECWm4onPCOA8TEuCLMhoRlWlHPfBX8nHB55LfbUOnWqoQuxtDNIPV4mFt0qhDoHxYmNHXxbaN/QZrzGI7kAsAqZVFU81FDG44y63KiNGnTuBhpYCkclxRvKC4kM3iqPVTPRSJ3r9X5cYObU5Ra2nUsBLwUPEYJXbz/DVhRdp0GhwnZ6G/SuwEt56Ca9z1eUgYlhy/PDy2158sozaR5jxAOtjsDJh/3/9KCuEiBix9/1RBIOAnFszl5kdpDF2pIozHvSJxowGFpdb6/j5e9KSzIKNv7arVwSRAUZYWycXInN2mF7NniH/RjN2d0HBMFdajwinbd4/zi7yTX7y1IPITZVS/0JK6Q7FCe6PyVAAQNJSBUvnq7fX8yBVM//aWd+zs6Q/A0b1Z0WIG12i0C1CSAg==","a7":"wx77af438b3505c00e","x0":3,"d1":"53268c117a3aaa4f790a25a75f733c6c"}',
    'Accept-Encoding': 'gzip,compress,br,deflate',
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.28(0x18001c2e) NetType/4G Language/zh_CN',
    'Referer': 'https://servicewechat.com/wx77af438b3505c00e/977/page-frame.html'
  })
  .send(JSON.stringify({
    "sceneCode": 3,
    "eventType": 24,
    "taskType": 38,
    "needAssign": true,
    "taskConfigId": 7624,
    "outerId": 1668701316230,
    "extra": "{\"currentDate\":\"2022-11-18\"}",
    "riskCheckModel": {
      "uuid": "1833d130dbec8-230e7c54a4e8b4-0-505c8-1833d130dbec8",
      "platform": 13,
      "appletsFingerprint": "WX__ver1.2.0_CCCC_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",
      "fingerprint": "",
      "wxRiskLevel": "{\"openId\":\"oRRr90Pfh7mO5Vp4RUTWyxXY0Rgk\",\"appId\":\"wx77af438b3505c00e\",\"mchid\":\"1399386702\"}",
      "deviceInfoByQQ": "{\"identityInfo\":{\"appid\":\"wx77af438b3505c00e\",\"openid\":\"oRRr90Pfh7mO5Vp4RUTWyxXY0Rgk\"},\"user_type\":\"wx\"}"
    },
    "seqId": 1668701318792,
    "operator": "earingCenter"
  }))
  .end(function (res) { 
    if (res.error) throw new Error(res.error); 
    console.log(res.raw_body);
  });
