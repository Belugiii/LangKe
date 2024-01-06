// cron: 0 8 * * *

const axios = require('axios');
let data = JSON.stringify({
  "userStepCount": 23943,
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
  url: 'https://bi-mall.meituan.com/api/c/game/walk/uploadUserSteps?largeFontSize=false&uuid=18848c59a76c8-1a47957cb3ef8d-0-505c8-18848c59a76c8&utm_medium=wxapp&brand=meituanyouxuan&tenantId=1&utm_term=5.170.5&device_model=iPhone%2012%3CiPhone13%2C2%3E&optimus_risk_level=71&optimus_code=10&poiIdStr=8NVuR1QW6vIHaG8OFoZkOwE&poi=0&stockPois=0&ci=140&bizId=4&fp_user_id=244590252&fp_open_id_cipher=AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM%2Fhf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n%2FGVnwfURonD78PewMUppAAAADjw5XqF4tI58yfoW89J3xqSTukjjN9Ww8YRIRDp%2FmMo24noR6k6PO8XcdvevOWA6fxAzhFA53Cj4w%3D%3D&openId=oRRr90Pfh7mO5Vp4RUTWyxXY0Rgk&unionId=oNQu9t_H5V42JVkDszofncO7qFGo&routeId=pages%2FuserCenter%2Findex%2CsubPackages%2Fmarketing%2Fsteps%2Fpages%2Findex%2Findex&sysName=iOS&sysVerion=17.1&app_tag=youxuan&csecappid=wx77af438b3505c00e&csecplatform=3&csecversionname=5.170.5&csecversion=0',
  headers: { 
    'Host': 'bi-mall.meituan.com', 
    'Connection': 'keep-alive', 
    'Content-Length': '3102', 
    'openId': 'oRRr90Pfh7mO5Vp4RUTWyxXY0Rgk', 
    'content-type': 'application/json', 
    't': 'AgG2J5XlvOHpCdAmn1xaXyi0P2fgWuZjoigpr_ZsNPlhqXJ68LZnf4h0psG_G_JhO9yI1npkh4L_oQAAAACJHAAArbMV_PZezOWoLcL8uFokTKCmoePY5dwoq1ku2v3CX3uL2dhk0cgZAoQroQLB-SZd', 
    'csecuuid': '18848c59a76c8-1a47957cb3ef8d-0-505c8-18848c59a76c8', 
    'mtgsig': '{"a1":"1.2","a2":1704550980068,"a3":"2wv05764x8y759w4y9659z08x59v4zxw81151x40w8187978zz65vx75","a4":"e33b4acc64e4557bcc4a3be37b55e46428931c3c53c6f858","a5":"G4+lEMUekxoKQRdD2aGy1Nhw1c9zfPHM8wWwdIi2NxTG/gO9K0a1ftcEUhmW0fr38ABj0PnkTmR6Zz1RDdOdjIqBS17EGTWUrGfKxPut+z62MgOcAMArC3r8g6bAFaf28QYwc1sR6+5qmliGvRxazuHWhnCw7QvO10UlXj9xPvX9QC93mESVZk1KChUQ3jremi8ARvONloMRGUmgQJ44MHWwB8JaSV7S/kacUFrtbfaRlhlgtBCEMuJuVA+R","a6":"w1.2OYywfFMVmo0A0AnZu9JUqVxR+aofj6OrVGiMcOX9XL6Czn4fGxh4VhtRLksbqW5UdNZrrOdQ0yUiGu33Lj+F7VrJML2dEhmZRKMMrhm21uWHw0NqgKLVBGVzy4Kc47IkEWAX2kJm4xfLpbsV19lmmOnOaqoI+o0qDDkSONt2LsJum275Rf2HFQZGvfFXwyJQ3J8xmO1CujpPpNg4lIjTwONPtF4B8NmAOwowwRm2C/i5SMyPsK/xoiosK9RDW5kT7nLvkr8MJKF4eYAI9Oju9cRm2wXqKTFPDRxTnVii+Ar4R8jg8J9CK16GnolB7efFrL+DcPepQOXV0wKDXuxlrWAnMH0+jJTdzxHOJV1PRIg9yxvk3bUrdYwg+HyfGTzcTi/LrEVEBOpVmmI9zkOeEP9w5FmvtkEf8EbzXhT0bVCy/+3thmXvjqhsaQtZkuOT26x14n95e8kL+2yunWZqm6AsIZLT+TkPgxgO/lL6OWJSRtg1V994QPOZ7J3YgOdmFHyAhb0QHHX17DCMSjxgzFgMIOQm4SRGZQLz9iyKbPAXHROPuXzaFZ3xO5nsWDAMjyZiCSp9H94tSzHSYjNHmaq0M44PsSbYO/GR+LN1Afbg9wLICbriQpFgVdax7QyK","a7":"wx77af438b3505c00e","x0":3,"d1":"e77f218d87c990ce6d556f7fb0bb7287"}', 
    'token': 'AgG2J5XlvOHpCdAmn1xaXyi0P2fgWuZjoigpr_ZsNPlhqXJ68LZnf4h0psG_G_JhO9yI1npkh4L_oQAAAACJHAAArbMV_PZezOWoLcL8uFokTKCmoePY5dwoq1ku2v3CX3uL2dhk0cgZAoQroQLB-SZd', 
    'openIdCipher': 'AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM/hf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n/GVnwfURonD78PewMUppAAAADjw5XqF4tI58yfoW89J3xqSTukjjN9Ww8YRIRDp/mMo24noR6k6PO8XcdvevOWA6fxAzhFA53Cj4w==', 
    'csecuserid': '244590252', 
    'Accept-Encoding': 'gzip,compress,br,deflate', 
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.44(0x18002c2f) NetType/4G Language/zh_CN', 
    'Referer': 'https://servicewechat.com/wx77af438b3505c00e/1147/page-frame.html'
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
