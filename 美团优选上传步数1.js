// cron: 0 8 * * *

const axios = require('axios');
let data = JSON.stringify({
  "userStepCount": 24080,
  "code": 100,
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
  url: 'https://bi-mall.meituan.com/api/c/game/walk/uploadUserSteps?largeFontSize=false&uuid=18848c59a76c8-1a47957cb3ef8d-0-505c8-18848c59a76c8&utm_medium=wxapp&brand=meituanyouxuan&tenantId=1&utm_term=5.173.5&device_model=iPhone%2012%3CiPhone13%2C2%3E&optimus_risk_level=71&optimus_code=10&poiIdStr=eyNQmtIuMZsRA9mJiFZqsQE&poi=0&stockPois=0&ci=140&bizId=4&fp_user_id=244590252&fp_open_id_cipher=AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM%2Fhf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n%2FGVnwfURonD78PewMUppAAAADjGmtos5YGsGEliHQtcpaZyYRqvGoM2BHvRpn4LK7fZ0wBlkuwPiU%2FkhDNdXdAgNlTimtEwuQcm0Q%3D%3D&openId=oRRr90Pfh7mO5Vp4RUTWyxXY0Rgk&unionId=oNQu9t_H5V42JVkDszofncO7qFGo&routeId=pages%2FuserCenter%2Findex%2CsubPackages%2Fmarketing%2Fsteps%2Fpages%2Findex%2Findex&sysName=iOS&sysVerion=17.1&app_tag=youxuan&csecappid=wx77af438b3505c00e&csecplatform=3&csecversionname=5.173.5&csecversion=0',
  headers: { 
    'Host': 'bi-mall.meituan.com', 
    'Connection': 'keep-alive', 
    'openId': 'oRRr90Pfh7mO5Vp4RUTWyxXY0Rgk', 
    'content-type': 'application/json', 
    't': 'AgHmIVzfXJsBQLHoSawZfcDkn09BL6KcCp8neFgY94t0VsIFzufgASomtUO3Q4ci9IHd9oG9cAl4XAAAAACBHQAAfWPppO0xVz6d4zEbU5riIRywxc1xTCzu7UpfLdSDcFVWCfsDBIt_qFibtxjvzqp8', 
    'csecuuid': '18848c59a76c8-1a47957cb3ef8d-0-505c8-18848c59a76c8', 
    'mtgsig': '{"a1":"1.2","a2":1705465596086,"a3":"2wv05764x8y759w4y9659z08x59v4zxw81151x40w8187978zz65vx75","a4":"b1a47be35ab2ce77e37ba4b177ceb25a55b30fa4227dbdfe","a5":"OIAClzICjXupxuj98qVcbH+1j8uD7O74/S1lZEB4EVah3X1kvASL0MGg9eoGesflbj/L0hLo8YpOm6qLldRlGYnm1kIsO0JNBBVrmb26NVF+/7wOrkKJhqbDW4lMRw1cn1U0lqTsjsOwPxcD9pYT6JuUaEXp84agOi0lAcpNAeBuG1p2KDEG253M9BcUq4n25J7XY/6rGyKtZiF4IRce6PlC+7mR9pWoFDMJHfWiiKd9ggG5sadscrAuwwAW","a6":"w1.2iA9zRr5JWpsDRXoeUVOhLckzF2+pTak8OJpEeZ0xxy4UYvUwqvGAN7irwLWuj94panao3Z9PJ9+ryVvJdWikpUymb5HdQco99drqHkhVHhzUt9/qImHqxX7sIHyGeexx3vUld3oyNNcKHnPd0kxfSJDoJijNtGOszW4CkU0Th/t5LEkuzK23DPk4T42rJIbgCRqCMDKMZdZj66L4vUAIIeDY9uZYFSk4bFh7sMH++A1n6Ax2LAUbW3fPe5IRwiCTY7smvmtwTwv00xNtlozbJyhxLgpXazxNmftuVeRtlemqQYcOTqqbylvcLSbpSqA73VVsznJygJo70UAGinO7iEhEJTtqJ+Zz90dnn349kgsk3yERKQAZ/zg3ITG4zfFfSjTg2BMzMPdrvxwvq9TY6My47MxqIGMA6XQjKsP3aCpjVxF72W9i5cLnHMR/CueyO/B5Pf7SDbBkuDmgNpn9JAlSUDV3UvI4B6FFSV9bt3ba2sBwXFNvn7lv/Y28WsgNe4tDaD3JCiilTuEKX31Fni+r8wtokdT4gHjUrwC6TxM/KQhwPl93UbuPbYjGlSDzoDD4RQqDS8ssjN3YESbCIWYSqyw9BGLTF2BcCuGymaE5Xw5RRVQgZB8GF8earDZrEDwtK3xMX/38jKEZ+lOOCc7/PPMsTRMJi+F/frkelKI+FH89KyjgjJw1RvX7XuQQNo28IavZTjsKg67f6QB5MQ==","a7":"wx77af438b3505c00e","x0":3,"d1":"988ac0154b93271e299ad62944778e8a"}', 
    'token': 'AgHmIVzfXJsBQLHoSawZfcDkn09BL6KcCp8neFgY94t0VsIFzufgASomtUO3Q4ci9IHd9oG9cAl4XAAAAACBHQAAfWPppO0xVz6d4zEbU5riIRywxc1xTCzu7UpfLdSDcFVWCfsDBIt_qFibtxjvzqp8', 
    'openIdCipher': 'AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM/hf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n/GVnwfURonD78PewMUppAAAADjGmtos5YGsGEliHQtcpaZyYRqvGoM2BHvRpn4LK7fZ0wBlkuwPiU/khDNdXdAgNlTimtEwuQcm0Q==', 
    'csecuserid': '244590252', 
    'Accept-Encoding': 'gzip,compress,br,deflate', 
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.44(0x18002c2f) NetType/WIFI Language/zh_CN', 
    'Referer': 'https://servicewechat.com/wx77af438b3505c00e/1155/page-frame.html'
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
