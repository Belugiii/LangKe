var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://bi-mall.meituan.com/api/c/game/walk/uploadUserSteps?uuid=182832f8d53c8-17d21020a05c57-0-505c8-182832f8d53c8&utm_medium=wxapp&brand=meituanyouxuan&tenantId=1&utm_term=5.105.2&device_model=iPhone%2012%3CiPhone13%2C2%3E&optimus_risk_level=71&optimus_code=10&poiIdStr=tudjwxjzkChjfkzfxEAceAE&poi=0&stockPois=0&ci=140&bizId=4&fp_user_id=244590252&fp_open_id_cipher=AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM%2Fhf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n%2FGVnwfURonD78PewMUppAAAADgRp8BnjzA2Uge5nzK2lp1KJKWlGK0172oloYN%2B5NWo3xA9lSFH9VfjKWJUBN8jVSKcxypC2JvhHg%3D%3D&openId=oRRr90Pfh7mO5Vp4RUTWyxXY0Rgk&unionId=oNQu9t_H5V42JVkDszofncO7qFGo&superId=A1-A2-A3-A7-A2-A4-A7-A2-A4-A7&routeId=pages%2FuserCenter%2Findex%2CsubPackages%2Fmarketing%2Fsteps%2Fpages%2Findex%2Findex&sysName=iOS&sysVerion=15.5&app_tag=youxuan',
  'headers': {
    'Host': 'bi-mall.meituan.com',
    'Connection': 'keep-alive',
    'Content-Length': '2930',
    't': '3w1huop3noeNc4CUjNrIh-yvkGUAAAAAVhMAAHUoAalxJcfkcWLCsB9nGwVgGlbT_R1KkzNWcAErBV6EZgF450r2SzfoIl19tY-KkA',
    'content-type': 'application/json',
    'mtgsig': '{"a1":"1.1","a2":1660270091345,"a3":"x3x277y2z91w5692yv0575y17v692275817167u1u848797899v635w2","a4":"e8eac43bf8b9b7c13bc4eae8c1b7b9f86ad82567ab6f9c9f","a5":"Kgg041kqPmwOAllz5mIVquKKfdmAQ1jNPOTKVJ8Bt9/PnXng3kVrZOFIr7/QpIBkn5cRu1OFqVwtsAG+QaLVVVeGOhQ6fbn8UP9SIMI1/MevJETWCrM/EXbEAO16AnNGktV+db6IrLxHdkYTTnfiTqKtkgNU/RjQ7f/2WJcPVinBQUV9p52moXyg4Qzke6PP2NNPkHAa+4GVlGt1h8FYtWSRD3oXOiGmKgf8TZMzv0AYPj66VH/ekp+RfIvKiRZd8h0aVitPEjx0kmB8T0k3DkOk+GOeoQfcFTYSn6PeXBlH","a6":"w1.1Vflx+fe4bVlu/AUt1DIayFMuyXccIh1pGD5CjcWtygaEYI0YLv+KIxXkMxiIPU5wSxF5LfoA8Cm2kba8v906hLjWVeAzKiEYzQQL9QgKgjOTs7Q9mzhYNRIhV0naU+clILqNgm6QrwAUKzWRd8mC5r5KyAJEU0+UK4oGe3yKtD6TXESKT8izo1cIY2JaJIlmHAGN1busYqBIhtZu3sKG339YERXwVTZBLfjmplNlmcxTf/UV2AeXV0Appp6jTl/I62FzrQc8xn1GZb246+RIgj9NdZ+sFKoyTB8M4ZEdrx2wDeKheQLz+c0zIdI8QJ3U1CpsZa7Th5R6hZG/Nk8d1auibpiqVKhEKDcQoFVs3Tn9Ca7g1KCbajGpZt5mhxeWdJt7OSOp67lpgnUTWAQWaGoa5D/2+z8DdNdSW4ZELWpIi1LpxgTEb/RA79BdgnPjuxXIkApuctqp/x5xty0RyrD1XaZao0IGVwamyPZ40eECKeecPFguQJ4yXbOJe5SQFeZ9nA4Cb8i3oE23X8jN/mPSwArFxF8ObuZ0dBkuP3U=","a7":"wx77af438b3505c00e","x0":3,"d1":"ad06250a49a287a58f6ab91bb26bc1e3"}',
    'Accept-Encoding': 'gzip,compress,br,deflate',
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.20(0x18001442) NetType/4G Language/zh_CN',
    'Referer': 'https://servicewechat.com/wx77af438b3505c00e/929/page-frame.html'
  },
  body: JSON.stringify({
    "userStepCount": 25984,
    "code": 100,
    "riskCheckModel": {
      "uuid": "182832f8d53c8-17d21020a05c57-0-505c8-182832f8d53c8",
      "platform": 13,
      "appletsFingerprint": "WX__ver1.2.0_CCCC_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",
      "fingerprint": "",
      "wxRiskLevel": "{\"openId\":\"oRRr90Pfh7mO5Vp4RUTWyxXY0Rgk\",\"appId\":\"wx77af438b3505c00e\",\"mchid\":\"1399386702\"}"
    }
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

console.log("=============================")

options = {
  'method': 'POST',
  'url': 'https://bi-mall.meituan.com/api/c/game/walk/convertHealthCoin?uuid=182832f8d53c8-17d21020a05c57-0-505c8-182832f8d53c8&utm_medium=wxapp&brand=meituanyouxuan&tenantId=1&utm_term=5.105.2&device_model=iPhone%2012%3CiPhone13%2C2%3E&optimus_risk_level=71&optimus_code=10&poiIdStr=tudjwxjzkChjfkzfxEAceAE&poi=0&stockPois=0&ci=140&bizId=4&fp_user_id=244590252&fp_open_id_cipher=AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM%2Fhf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n%2FGVnwfURonD78PewMUppAAAADgRp8BnjzA2Uge5nzK2lp1KJKWlGK0172oloYN%2B5NWo3xA9lSFH9VfjKWJUBN8jVSKcxypC2JvhHg%3D%3D&openId=oRRr90Pfh7mO5Vp4RUTWyxXY0Rgk&unionId=oNQu9t_H5V42JVkDszofncO7qFGo&superId=A1-A2-A3-A7-A2-A4-A7-A2-A4-A7&routeId=pages%2FuserCenter%2Findex%2CsubPackages%2Fmarketing%2Fsteps%2Fpages%2Findex%2Findex&sysName=iOS&sysVerion=15.5&app_tag=youxuan',
  'headers': {
    'Host': 'bi-mall.meituan.com',
    'Connection': 'keep-alive',
    'Content-Length': '2929',
    't': '3w1huop3noeNc4CUjNrIh-yvkGUAAAAAVhMAAHUoAalxJcfkcWLCsB9nGwVgGlbT_R1KkzNWcAErBV6EZgF450r2SzfoIl19tY-KkA',
    'content-type': 'application/json',
    'mtgsig': '{"a1":"1.1","a2":1660270092954,"a3":"x3x277y2z91w5692yv0575y17v692275817167u1u848797899v635w2","a4":"d13585af9538b2d9af8535d1d9b2389535a7fa5eec15c2cb","a5":"As3XBK3uYpyOAUtym2A0UN+iIObjnvwwzBFdE16hVu5vxyUa5wHFC7HBStFDtEtO8XNBM6TggpLG03jz4c++NMDRqg4r5WBDMhKwCY7BxBGCkuvOJPhj6FsKeoVrl2Z2bz8L0CsD1jMt1Db2kLU+wkufkifVmFEXM46qs1mkzoa4kCby6MG78yZHGWfKVKgRdm/iUS/8EejUJ/QomsDA84RBcvSav7wh0HTB5FkI+yDHCKdBW5qfUanxxtnfBjjzWAuPpBL6ig/DmUMsp+bxVpwkmXAV4nSwM9gS3jKcxtP+","a6":"w1.1Vflx+fe4bVlu/AUt1DIayFMuyXccIh1pGD5CjcWtygaEYI0YLv+KIxXkMxiIPU5wSxF5LfoA8Cm2kba8v906hLjWVeAzKiEYzQQL9QgKgjOTs7Q9mzhYNRIhV0naU+clILqNgm6QrwAUKzWRd8mC5r5KyAJEU0+UK4oGe3yKtD6TXESKT8izo1cIY2JaJIlmHAGN1busYqBIhtZu3sKG339YERXwVTZBLfjmplNlmcxTf/UV2AeXV0Appp6jTl/I62FzrQc8xn1GZb246+RIgj9NdZ+sFKoyTB8M4ZEdrx2wDeKheQLz+c0zIdI8QJ3U1CpsZa7Th5R6hZG/Nk8d1auibpiqVKhEKDcQoFVs3Tn9Ca7g1KCbajGpZt5mhxeWdJt7OSOp67lpgnUTWAQWaGoa5D/2+z8DdNdSW4ZELWpIi1LpxgTEb/RA79BdgnPjuxXIkApuctqp/x5xty0RyrD1XaZao0IGVwamyPZ40eECKeecPFguQJ4yXbOJe5SQFeZ9nA4Cb8i3oE23X8jN/mPSwArFxF8ObuZ0dBkuP3U=","a7":"wx77af438b3505c00e","x0":3,"d1":"f71c71bfdeb6da856e08321faa691ec0"}',
    'Accept-Encoding': 'gzip,compress,br,deflate',
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.20(0x18001442) NetType/4G Language/zh_CN',
    'Referer': 'https://servicewechat.com/wx77af438b3505c00e/929/page-frame.html'
  },
  body: JSON.stringify({
    "userStepCount": 5000,
    "code": 200,
    "riskCheckModel": {
      "uuid": "182832f8d53c8-17d21020a05c57-0-505c8-182832f8d53c8",
      "platform": 13,
      "appletsFingerprint": "WX__ver1.2.0_CCCC_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",
      "fingerprint": "",
      "wxRiskLevel": "{\"openId\":\"oRRr90Pfh7mO5Vp4RUTWyxXY0Rgk\",\"appId\":\"wx77af438b3505c00e\",\"mchid\":\"1399386702\"}"
    }
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
