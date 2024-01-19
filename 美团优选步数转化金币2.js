// new Env("美团优选_步数兑金币2")
// cron: 30 8 * * *
var unirest = require('unirest');
var req = unirest('POST', 'https://bi-mall.meituan.com/api/c/game/walk/convertHealthCoin?largeFontSize=false&uuid=189548f5eb8c8-a3f06b074c786-0-501db-189548f5eb8c8&utm_medium=wxapp&brand=meituanyouxuan&tenantId=1&utm_term=5.157.10&device_model=MI%209&optimus_risk_level=71&optimus_code=10&poiIdStr=O1Z1zJ5G3ZgLr6AkQEwOlAE&poi=0&stockPois=0&ci=14&bizId=4&fp_user_id=4079009624&fp_open_id_cipher=AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM%2Fhf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n%2FGVnwfURonD78PewMUppAAAADiKsaorQHb3gwpmUSLCW1mrr3geBYw43uC1rNITJL%2BrbaoA3%2FWocHc191bmC%2BBtgG575slYDKMKVA%3D%3D&openId=oRRr90CJ9KrcREPc0hUC5-ncgZOg&unionId=oNQu9t_CT6NfXxmQnQx7ZIXjsTNg&superId=A2-A3&sysName=Android&sysVerion=11&app_tag=youxuan')
  .headers({
    'Host': 'bi-mall.meituan.com',
    'Connection': 'keep-alive',
    'Content-Length': '2952',
    'charset': 'utf-8',
    'mtgsig': '{"a1":"1.2","a2":1694868134423,"a3":"u727y741zu5z59wy042046x8x1yy99u5810451u4w057797850740w23","a4":"89ec2e88b0c9366d882eec896d36c9b09f74ef17f24226a7","a5":"whHRFVXMyX12ZMigsILKPwApAlysQ+dUGuA4SYeBqoNVTqWs42mt997UB1uwjdDyzjgrSOLVmhmOpt11tsbPSezPKbG3F5n2HN/c6JCJRiTrbF+inqOp0oGT01w0QWybUN5XauaGwukOfn58yV2uJcK5oGXA4H4nv3ealK7J295qUtvxAfHZIo3Kc0AH3RhgFwzoIDdt29KoYNh2DKfiXbru2XgOG4TJ9euTRK+vxl9KqfWumvxmAwckz7kszP3I6wD9UPQV/sW1FEDMiVDy2sxUD1F8QQPgKxNTX7XRWW4fCc==","a6":"w1.2ul8vwLmSXu5EXKBhJaUor9tYvGwkGUzhNWhV5Fn3xnCuufuIRFliXwXwJB2h8MNof6dUgvQw0HCd3E8VAghEtSYbfTAgFULZH3HmJiYuUb8t9KSydoB1MuY5YC+BHpZB6ixeKuIh4pvJ90Z3co3/vLnCuftMO7/XsuxB11LOzwjDzHln9hTnRTQBbsl++wfxB2y3v03GEIA3Ds14Bq47GF4icTHqMY733K5I+0RjgM71kl2w1N/vQRw5flBquJPxm/lVdbGzZqKFJLeL8C73mT5wT/J/xKQ9MXMRkbz+dKTrE5W0xX/xRiRakRTCPHQzDGxwfSpG46GrntPTiwfRpvbPDp5YNSFVP3nEf10xLZScuGqAmhkE27wuCX7D1MGSROANt2Nj4Bta0P+/RIR7+inDvv6FcwQfzlW4aV8VZ0WjwlQK9vo6ZkkGzNXlPUZLcGt8sO4gsE2hldhv6o4I/bSlAQNbmP3+mB3Pv2VPWzknQTg8dYMnMEjXo1aGy/tWmhemr83hx1k9pp/AhSVEI4A/uuoQ8vsNf2rutTCLyUgcgewnFlt9MmuD9bmT+TpqpZui1PAOIRcUUcrEwBjBMwkebNWyWh3vqGdtktNS0b5z2w6dtkX+DQ6zgmvhfAbp+4b95eeSGFm5rnwgRS5c2g==","a7":"wx77af438b3505c00e","x0":3,"d1":"6520d5113777721eea9c9d7adeb7abac"}',
    't': 'AgGpIT35gWuG2Lv06_jFDuEkBffh3Ieer9Jzs3h-glif9f-sxjIpAEtVybmvUWXbNjm9r_bgoaw24AAAAAD8GgAAOxNRLdhha9tCbyZ-2SvccZ--IfUEuseeOLEBDZURb7k1P6304ST_OAdA0T3OBTr0',
    'User-Agent': 'Mozilla/5.0 (Linux; Android 11; MI 9 Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5235 MMWEBSDK/20230805 MMWEBID/9254 MicroMessenger/8.0.41.2420(0x28002937) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android',
    'content-type': 'application/json',
    'Accept-Encoding': 'gzip,compress,br,deflate',
    'Referer': 'https://servicewechat.com/wx77af438b3505c00e/1100/page-frame.html'
  })
  .send(JSON.stringify({
    "userStepCount": 5000,
    "code": 200,
    "riskCheckModel": {
      "uuid": "189548f5eb8c8-a3f06b074c786-0-501db-189548f5eb8c8",
      "platform": 13,
      "appletsFingerprint": "WX__ver1.2.0_CCCC_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",
      "fingerprint": "",
      "wxRiskLevel": "{\"openId\":\"oRRr90CJ9KrcREPc0hUC5-ncgZOg\",\"appId\":\"wx77af438b3505c00e\",\"mchid\":\"1399386702\"}"
    }
  }))
  .end(function (res) { 
    if (res.error) throw new Error(res.error); 
    console.log(res.raw_body);
  });
