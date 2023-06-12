//cron 0 0 * * *
// new Env("美团优选10元券")

var unirest = require('unirest');
var req = unirest('POST', 'https://bi-mall.meituan.com/api/c/game/walk/convertRedPacket?uuid=18848c59a76c8-1a47957cb3ef8d-0-505c8-18848c59a76c8&utm_medium=wxapp&brand=meituanyouxuan&tenantId=1&utm_term=5.144.0&device_model=iPhone%2012%3CiPhone13%2C2%3E&optimus_risk_level=71&optimus_code=10&poiIdStr=pIQTiw8JhsHFl-PW6Tox1gE&poi=0&stockPois=0&ci=140&bizId=4&fp_user_id=244590252&fp_open_id_cipher=AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM%2Fhf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n%2FGVnwfURonD78PewMUppAAAADjgvila0DRo3jDe2aGqp33eDW1Wh%2BXfj4WYE3Nur1nTyp%2FW7Y56l0%2BmQOLB4mvJFRyNMqVUwysvzA%3D%3D&openId=oRRr90Pfh7mO5Vp4RUTWyxXY0Rgk&unionId=oNQu9t_H5V42JVkDszofncO7qFGo&superId=A2-A3-A2-A4-A2-A4-A2-A4-A2-A4&routeId=pages%2FuserCenter%2Findex%2CsubPackages%2Fmarketing%2Fsteps%2Fpages%2Findex%2Findex%2CsubPackages%2Fmarketing%2Fsteps%2Fpages%2FconvertCenter%2Findex&sysName=iOS&sysVerion=16.0&app_tag=youxuan')
  .headers({
    'Host': 'bi-mall.meituan.com',
    'Connection': 'keep-alive',
    'Content-Length': '3040',
    't': 'AgExJjaYLy8eI6PgfhEtKxRdfKtuOrR-rYnxcUNxj5CfSc3qz5eRfiYv0zG8XcK1Qs9I0p__dsWClgAAAADiGAAAHUbG67xwsb8s1eykuZ1VtkoAtJ76yJlwhAQ8hzuI3lLEb1v3r5PGtHBGIcx6Nudg',
    'content-type': 'application/json',
    'mtgsig': '{"a1":"1.2","a2":1686242339966,"a3":"2wv05764x8y759w4y9659z08x59v4zxw81151x40w8187978zz65vx75","a4":"d25fe3177ba28b9217e35fd2928ba27b69cfbf49fb441d32","a5":"XPoHGRjpUCUJhslXL8NFG9U4ys+RqEo/e+lgip+12Nposl0yzXYKXa1gSn0agPEF7gg7mCmAO2u9v1C9Vmd05xyyEV149JVAwXA+sE8myklo7lQPOKpfAcBLV5f7kDdddDRRdZnzJvWKFm1RbAzW5YVhLRMhWONsQBFEbzTOgrNn1Vfn8FgadTy4iHCk4eem+jC0lWPnI+TdARTLPkLCAxrIE9FCkzJWn98skUCwpZD3Is+fzZXcEbX2z03M3MOTjbvMwUZVolAoUbgkOqkHGdPmQFNc2/KUEsz9WLDK+lBQzE1ZQG6bx1H=","a6":"w1.2CHj/doPJrneLRgW27JeIe7DFG+Lm18Fi3u69oDPriM/iC7r/Q+505hF02fAGED2qKYwLrqobmYITPsDrd+8oOaQtxy8PvgrwudEA8odPQXnkoR6ZcuOU0vQ4MKKKdE0l3oqVdtiuDn/me9HPEG2/XO72i6m6EjYFRT0WLhmtB2AUvxEhdRjdkuc8IwzJytKOrHBV3EY//mcIt8YFogl20JrtDAVeQhCj5uyOGJGiL3O/sv0+xH32jS9B07Uir4hYLDWB18SpOBkeXj0ysgAcvSwcQSy+qUXnmwgyvWDphgCvj+dZ2l39fwWEOnp9qPLR91gxMWq5if5sq1hiUNOTuVlWCAm8WRxUgF2zMp1MWmT45IJpAzul/Cgj74kSWmd7ymkZCgg+RAkknYt/oH5bowk44DTRjpy/6nzBMI9QbSUp5faZNxwRmkOyy1WYLqXVlX3kZ8sFB+9Ca/AdKY7LIaLKYO6L7eNKX1uugiOJ2lKIQc6vtLPn/EKWcC7wuEDoDDHZahZiluVoOxbyauqBc86RXV8Qqc8rzIZq0ImHP1usJanxX01NNVqHPzGrNglVqNGFNukAgyokoYFz5kNJEBsxRjHlN/6FcVAYfIaWR1qSQL6vjFJvF6aXHesb7aFouMWfOA2vCfOMfrFk3sK9Zg==","a7":"wx77af438b3505c00e","x0":3,"d1":"15d2e524973c811338dd66ac9a74de83"}',
    'Accept-Encoding': 'gzip,compress,br,deflate',
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.28(0x18001c2e) NetType/WIFI Language/zh_CN',
    'Referer': 'https://servicewechat.com/wx77af438b3505c00e/1056/page-frame.html'
  })
  .send(JSON.stringify({
    "code": 300,
    "healthCoinCount": 100000,
    "rewardId": 6770835,
    "riskCheckModel": {
      "uuid": "18848c59a76c8-1a47957cb3ef8d-0-505c8-18848c59a76c8",
      "platform": 13,
      "appletsFingerprint": "WX__ver1.2.0_CCCC_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",
      "fingerprint": "",
      "wxRiskLevel": "{\"openId\":\"oRRr90Pfh7mO5Vp4RUTWyxXY0Rgk\",\"appId\":\"wx77af438b3505c00e\",\"mchid\":\"1399386702\"}"
    }
  }))
  .end(function (res) { 
    if (res.error) throw new Error(res.error); 
    console.log(res.raw_body);
  });
