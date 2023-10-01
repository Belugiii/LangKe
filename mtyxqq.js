// new Env("美团优选抢券")
// cron: 0 0 * * *
var unirest = require('unirest');
var req = unirest('POST', 'https://bi-mall.meituan.com/api/c/game/walk/convertRedPacket?largeFontSize=false&uuid=18848c59a76c8-1a47957cb3ef8d-0-505c8-18848c59a76c8&utm_medium=wxapp&brand=meituanyouxuan&tenantId=1&utm_term=5.159.0&device_model=iPhone%2012%3CiPhone13%2C2%3E&optimus_risk_level=71&optimus_code=10&poiIdStr=axBtRzrzC0vAJ7_qAsEA3wE&poi=0&stockPois=0&ci=140&bizId=4&fp_user_id=244590252&fp_open_id_cipher=AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM%2Fhf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n%2FGVnwfURonD78PewMUppAAAADiuhqVqN3L3sGjjLtcHn0zjFyx7ZkkV7dmqckxgQfxIOG1e4%2BI1MeCDNotd9gFQ4RbDkeZ%2BdtwCvA%3D%3D&openId=oRRr90Pfh7mO5Vp4RUTWyxXY0Rgk&unionId=oNQu9t_H5V42JVkDszofncO7qFGo&superId=A2-A3-A2-A4-A2-A4-A2-A4-A2-A4&sysName=iOS&sysVerion=16.0&app_tag=youxuan')
  .headers({
    'Host': 'bi-mall.meituan.com',
    'Connection': 'keep-alive',
    'Content-Length': '2912',
    't': 'AgHHIBwSZyE4eygtBzB9NLOnCABM6qmAKUCgfhMSXG-cwqfd2XIi5x3od0ib-NqoNf_68s5F4RE5oQAAAAD8GgAACQeMKC0lNKh8oayZKB7iMAiFzCGppC2Zb2uVJIJknpQxmjZ_OMB2BR3o05BfG7Fl',
    'content-type': 'application/json',
    'mtgsig': '{"a1":"1.2","a2":1695833440397,"a3":"2wv05764x8y759w4y9659z08x59v4zxw81151x40w8187978zz65vx75","a4":"8e0eea0ce2931d390cea0e8e391d93e2812a8259b83711bb","a5":"CuxfqE6Lij6g0Ps+zKYEAadBxGcWI772AVGDpUkINmrw7onPIo6u4O5PmY7IRVcOaTUhS96+rxzjbqresKbiNrhRJ72fk7QOoTGZHHjr3X0skZYvFdblMbJtvoIHyFPwwkgEwI6ZPDrkCcANSt+aPHra7jcEeIHAC5BZSxY33mQcILvKSKRmsP8FFYVkScU7y7K1jsgCeyOmYfbsMbidO78yWjpOiIBjeNZmeh+Bepke1obxhuESKgDhm+nl0JfFStrNTDGQnpz5jwCO/KTBhQAQbNjmLJ7xwlOuNwuuicNK5MoagDwrnhvv","a6":"w1.2niWNwF9iTI3TAYUqmaav6QvtFYiPqYHWdVcgO/Jz8IUQZbjE0qak8JgrSn4zAUqyC6FDTT1gOh/8x64lcywkKaL4v0H2VUbBw1yxwfdxjmy0EuSQu40XMSQKc4TfUs/2xk9Iw/nf6sUKtqk7cYEzfmHiZ37NfmfTR9ijBTuzcYQQyCvhFHM50EXP6yQwcTz0s/j1ZXm0TH5fvCmgI7KgZZzsxbR3ZY/lGlbIOLzsuo807QZYnD0SrRwGWoJOB9ElAxU+ggGFZ8+c06NpQMGw/evRbIVMQWJBjjUJT89NCiQ7rCcdhAiTyURg6d5F71e/pLQthg0fJchrjcEUfHWUHMmJi3NZ57lAtOyyRZZQlGof3i45UmOnEuK75mkWfFCTw1D10Q3uUNAiO+MLhRals8NRbz2rLo98cm8MvFVmM4akKfg4J+DTmIbV+0LFtlWrgtaflQPlsqgHgWgeQ4GuCsVp70Cjf7MDKCGbhxJUMv3sV3VkdNTHbzzy7r3pifFORTijbnbf08dgD/yeo7b7PO1v3CCS8dlHBDEPJWKisgMIZmqFTr/RuCMai79m0ACgXoGK+HcdrTZe/KP+z5DRtywXOrfiwXUA3GLxlpNW72RsgZiZFuRN84eqVGiX49CNMLfkFe9pY0xdpLS5yC3RcHoRAbrx2PDdL+XxE2P4nn+4Ea4qRoYlWDdzK+dIQGk7BINl0N869SaVSmPYDcu1d+tBPy/JldFNHRdAOKf+APiQRUFlfx0Lv1gK41HBvmxwQ2sjRjEku19GOZaYWiRuvn0A0tE9Sh1OHPKOMPcev0Grx5iD3E/1rgofAbXJR9a95TFJjJUbjy+xzivdLO34/3SWpotfnbcMBIBBDYS45PsCGpjVKr/BZFhyg2fgw0Yk","a7":"wx77af438b3505c00e","x0":3,"d1":"f1dcd5960715c042cd2d55f4398c12fa"}',
    'Accept-Encoding': 'gzip,compress,br,deflate',
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.41(0x18002930) NetType/4G Language/zh_CN',
    'Referer': 'https://servicewechat.com/wx77af438b3505c00e/1104/page-frame.html'
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
