// cron: 0 0 * * *
const axios = require('axios');
let data = JSON.stringify({
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
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://bi-mall.meituan.com/api/c/game/walk/convertRedPacket?largeFontSize=false&uuid=18848c59a76c8-1a47957cb3ef8d-0-505c8-18848c59a76c8&utm_medium=wxapp&brand=meituanyouxuan&tenantId=1&utm_term=5.174.0&device_model=iPhone%2012%3CiPhone13%2C2%3E&optimus_risk_level=71&optimus_code=10&poiIdStr=q45DtIPTXofphMjq6jsUoAE&poi=0&stockPois=0&ci=140&bizId=4&fp_user_id=244590252&fp_open_id_cipher=AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM%2Fhf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n%2FGVnwfURonD78PewMUppAAAADjGmtos5YGsGEliHQtcpaZyYRqvGoM2BHvRpn4LK7fZ0wBlkuwPiU%2FkhDNdXdAgNlTimtEwuQcm0Q%3D%3D&openId=oRRr90Pfh7mO5Vp4RUTWyxXY0Rgk&unionId=oNQu9t_H5V42JVkDszofncO7qFGo&routeId=pages%2FuserCenter%2Findex%2CsubPackages%2Fmarketing%2Fsteps%2Fpages%2Findex%2Findex%2CsubPackages%2Fmarketing%2Fsteps%2Fpages%2FconvertCenter%2Findex&sysName=iOS&sysVerion=17.1&app_tag=youxuan&csecappid=wx77af438b3505c00e&csecplatform=3&csecversionname=5.174.0&csecversion=0',
  headers: { 
    'Host': 'bi-mall.meituan.com', 
    'Connection': 'keep-alive', 
    'openId': 'oRRr90Pfh7mO5Vp4RUTWyxXY0Rgk', 
    'content-type': 'application/json', 
    't': 'AgHmIVzfXJsBQLHoSawZfcDkn09BL6KcCp8neFgY94t0VsIFzufgASomtUO3Q4ci9IHd9oG9cAl4XAAAAACBHQAAfWPppO0xVz6d4zEbU5riIRywxc1xTCzu7UpfLdSDcFVWCfsDBIt_qFibtxjvzqp8', 
    'csecuuid': '18848c59a76c8-1a47957cb3ef8d-0-505c8-18848c59a76c8', 
    'mtgsig': '{"a1":"1.2","a2":1705635848393,"a3":"2wv05764x8y759w4y9659z08x59v4zxw81151x40w8187978zz65vx75","a4":"dc5ca7daba613be1daa75cdce13b61ba13078dc3f23cec79","a5":"eQKlxB1MVZuKFyeQJBBT+RQh33ayRoMpKn0Hh/vmPsv7WocRlLOrYi18Lgaw2emsWQjyEygIp9znGh4aSSiS7uL+qE/Cnm0wRVrWiyfcV/pyiulEfF4toYWr9D6D9Sx7tOpERGVdurlSs0dLXxl5KuVVeEZ7SXRtQT9pbh8uoIoyS05ZirP8qVwSnoTUATx0NbCgX9cWZ/xPKpgXlnE5IILikCJ9ajbFCETl6inlwHPsMF+boU2zTfn9x3xLNTySNIj14dG=","a6":"w1.27BHpURZw2CsPZOafrNU2o0+rwHppBX8nML6oCKTglaJyTnlF+2gLnXHKJGS+/b0W3zBrB53Sqv/OS5jAQoerQmvs0R4brlte5jDcQMbEeDYX6OwyM2qO/2Fnxxhq8OKkIkruiBUrU6lsRqPk5cVvqIs7A/t2xV02N7jge9WnaR1vdnv4+pUIB15Txvl7Btht4GPBqd2OX4tu9x/rTgx7zwiPVbAsFlC4cOtHyraHODH4GM/Qsrm81/1rV86Ar2eUubgH18Ai8E+8CgAt4GjyfGLmEMG52I7LPU6Mv6aRZK6eLqxkQZUzPxvkbfnGhUnH1JlMFMLHmMWY32zRo/bPcws6KsKRrTkeZDh1C8Y22rtYAlr7Q6mhfaXSWLZNuEbPcfwOUL1AKfVjk5RPQbVFn+r/Gb7OzDzbXCh4cLMCv20jqIkYtL+R+HBs63JT5b0twL5+czonTBmCPijnBJvpgptiNR5jRHnVZOBmfZH8P7MYq6DrWwNrylL1sBEfhbrVgfTVKHeZlyEEsFJMlU9Ayjik8llmpjjHzdXnSYcP4feIFp1Eu4GUrfEGUCqnKv/E","a7":"wx77af438b3505c00e","x0":3,"d1":"0ef0c9b6e7cec6a3aa1fc26a95fa9b42"}', 
    'token': 'AgHmIVzfXJsBQLHoSawZfcDkn09BL6KcCp8neFgY94t0VsIFzufgASomtUO3Q4ci9IHd9oG9cAl4XAAAAACBHQAAfWPppO0xVz6d4zEbU5riIRywxc1xTCzu7UpfLdSDcFVWCfsDBIt_qFibtxjvzqp8', 
    'openIdCipher': 'AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM/hf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n/GVnwfURonD78PewMUppAAAADjGmtos5YGsGEliHQtcpaZyYRqvGoM2BHvRpn4LK7fZ0wBlkuwPiU/khDNdXdAgNlTimtEwuQcm0Q==', 
    'csecuserid': '244590252', 
    'Accept-Encoding': 'gzip,compress,br,deflate', 
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.44(0x18002c2f) NetType/4G Language/zh_CN', 
    'Referer': 'https://servicewechat.com/wx77af438b3505c00e/1156/page-frame.html'
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
