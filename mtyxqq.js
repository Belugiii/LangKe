
// new Env("美团优选抢券")
// cron: 0 0 * * *
var unirest = require('unirest');
var req = unirest('POST', 'https://bi-mall.meituan.com/api/c/game/walk/convertRedPacket?uuid=1833d130dbec8-230e7c54a4e8b4-0-505c8-1833d130dbec8&utm_medium=wxapp&brand=meituanyouxuan&tenantId=1&utm_term=5.117.3&device_model=iPhone%2012%3CiPhone13%2C2%3E&optimus_risk_level=71&optimus_code=10&poiIdStr=Ja-hzmWwkKQIAJU88GwoeAE&poi=0&stockPois=0&ci=140&bizId=4&fp_user_id=244590252&fp_open_id_cipher=AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM%2Fhf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n%2FGVnwfURonD78PewMUppAAAADh02%2Fgxwjl2cBnyYTUxwwwTogYSgL3yjy1oej%2Fh2FvQeJnvIVVDcq3jU8FC0tOrMLv%2Fa1o65YWk6Q%3D%3D&openId=oRRr90Pfh7mO5Vp4RUTWyxXY0Rgk&unionId=oNQu9t_H5V42JVkDszofncO7qFGo&superId=A1-A2-A3-A1-A2-A4-A7-A2-A4-A7&routeId=pages%2FuserCenter%2Findex%2CsubPackages%2Fmarketing%2Fsteps%2Fpages%2Findex%2Findex%2CsubPackages%2Fmarketing%2Fsteps%2Fpages%2FconvertCenter%2Findex&sysName=iOS&sysVerion=16.0&app_tag=youxuan')
    .headers({
        'Host': 'bi-mall.meituan.com',
        'Connection': 'keep-alive',
        'Content-Length': '2888',
        't': 'jK1kbU8JD8U1TQX8rCR46gipKAQAAAAA3BMAAJpsiIYGoO9tH0Vea5Z9zLvvEmfYTzqPxHPy2JDooi94n6DEEuSwJLj7INHMB16O7w',
        'content-type': 'application/json',
        'mtgsig': '{"a1":"1.1","a2":1668528098414,"a3":"2682v4u545xw54121u5y00w97zu316u58166w86892487978xu8zx0uu","a4":"f6b7beb665aa8f31b6beb7f6318faa65d8f2b18ae97d1bef","a5":"dTQ0H7GO+KlumDl1Lvxigi7ViNRP5uQoOs12Y/qsUFqF5N9M87tXzkR0MD6pP6imQ/HidvyRCOiDNLScZrvv0Sy7cM9WzN3uO8rxefgKsQYlg27Lm71XvCva28baBlp9sj6u2fWwXkXwnf1wLWxQZ0nyHGeiKTKh30sXZj3LyDPKZypYagLIgWw5pv6Bpp65OVerkcRDRi7N1oIfvUa8UNnvjVUGamPZAVNM9FoK2KRh3RQqjiJ0NywiF8qWAepHUJ5I59dKJ5Gs/Fi15cbC+jyMRaTplrdmJSGbMzV2HzpDastaJPVIFmzL","a6":"w1.1ArYGuHTZtJJ8g3W/QHOQyZOJoNopxNF7K1w2LH90bpG+QJ5fdya3u+BNZAhGjLcrsxT11FjpJbRuCY4UGSOpCfLeYfk/Q34WU3JZzRSZSptReTi4Ou0kYvn+mGNkJIxUxZ8C++QjilBLuaCffgcaJQGUmMmfYk8Usp5PW6VJInDVJImHxvXg8dNU1AJ2g9crCRpwUYrueeys5ULPTf2XwWJ69cKqsxEIqSIqdU1sOf2xlB7OdYRr+GhYtMn9okrwRGdkVOFWey7Tw4pk0NXfPEQppGrkveobDlsFmO+HyFfdFdUbDQgSTkyBL25C+EyzVSLvLSfrVVIuIXMJlzrz1ZqP375LAVHkEj6WXoBOlnf6HgjgUAFKbrDTj6B2dRo8cdTV31I+KNL6Znilp9IvwrNLsp8irce96d1Q71uaqes+a4iVROCcMvydyLce0/CajSjpFXYS7e/NZGDWKBQg6/MjydcY8ktNPF4CigY9KskjxRnGNQpeeR01aKtGuwtaku9bgX0Banl6KXs+ipzj9EoxXbY1DLWVYnu9UjHCwHWAYQVE5NNkFzwIzwjWy7fop9eGMuNMag9XqL7I7hxTb4hVGFHsbqQL+19oihyooVlhMrV+ppmpMN67rZoTGDy20Kl8yyJGTGNYAr1QDcz54G09JSfjFSY6izP3w3rEGjQg5plf4IQYATF0YlyCjt1Zl/dWq9Canb8dn2MzsybW+J7cOgBN+cZQ/OYBc9D6iZY3iqhdwr0ZiXHGwaSgCxL1jrGKj1xls6ieRLSvbZJddeD8I4+4q9XN1DUtF+f9hYw=","a7":"wx77af438b3505c00e","x0":3,"d1":"5a5bf862e9f57ae890a2e684835f8c86"}',
        'Accept-Encoding': 'gzip,compress,br,deflate',
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.28(0x18001c2e) NetType/4G Language/zh_CN',
        'Referer': 'https://servicewechat.com/wx77af438b3505c00e/976/page-frame.html'
    })
    .send(JSON.stringify({
        "code": 300,
        "healthCoinCount": 100000,
        "rewardId": 6770835,
        "riskCheckModel": {
            "uuid": "1833d130dbec8-230e7c54a4e8b4-0-505c8-1833d130dbec8",
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
