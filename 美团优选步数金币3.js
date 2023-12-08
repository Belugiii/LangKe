var $ = new Env('王者营地签到')
var notify = require('./sendNotify');
var Notify = 1; //0为关闭通知，1为打开通知,默认为1
var msg = ''; //需要推送的内容

const axios = require('axios');

let data = JSON.stringify({
  "userStepCount": 5000,
  "code": 200,
  "riskCheckModel": {
    "uuid": "18c42de435fc5-4f51eef41d7b54-0-501db-18c42de4360c8",
    "platform": 13,
    "appletsFingerprint": "WX__ver1.2.0_CCCC_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",
    "fingerprint": "",
    "wxRiskLevel": "{\"openId\":\"oRRr90HwIQE8LEMSsZMFS-E8DFhU\",\"appId\":\"wx77af438b3505c00e\",\"mchid\":\"1399386702\"}"
  }
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://bi-mall.meituan.com/api/c/game/walk/convertHealthCoin?largeFontSize=false&uuid=18c42de435fc5-4f51eef41d7b54-0-501db-18c42de4360c8&utm_medium=wxapp&brand=meituanyouxuan&tenantId=1&utm_term=5.168.8&device_model=MI%209&optimus_risk_level=71&optimus_code=10&poiIdStr=EMAB5SVazTYag7DDqtGaZgE&poi=0&stockPois=0&ci=140&bizId=4&fp_user_id=3620952689&fp_open_id_cipher=AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM%2Fhf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n%2FGVnwfURonD78PewMUppAAAADh%2Fae6jCmNWX7N8o4GqHSReeVCNU8mdw8nbY9NuOsg%2By4Istrq5dcXGP4kUvWJqiNV3Smc0nf6EWg%3D%3D&openId=oRRr90HwIQE8LEMSsZMFS-E8DFhU&unionId=oNQu9t8xPq3qHsRUPPZCKTCZYW9w&routeId=pages%2FuserCenter%2Findex%2CsubPackages%2Fmarketing%2Fsteps%2Fpages%2Findex%2Findex&sysName=Android&sysVerion=11&app_tag=youxuan&csecappid=wx77af438b3505c00e&csecplatform=3&csecversionname=5.168.8&csecversion=0',
  headers: { 
    'Host': 'bi-mall.meituan.com', 
    'Connection': 'keep-alive', 
    'Content-Length': '3421', 
    'charset': 'utf-8', 
    'mtgsig': '{"a1":"1.2","a2":1702031607315,"a3":"u83v150u19725745zu54yz83vy56z2x581x57wv5v49779784x147208","a4":"d1a2b7c506d92bf8c5b7a2d1f82bd906d6f15f992eda869f","a5":"C/R95IGRx/mH5LG/BlP9IJk9bRugAU/dnFGfki1Xs3QHblryquW1/0eQ1A+emq9BugfSp1EyjXWcab9AL6N6/A3aXp5eaxXRcAsyD/qIVjBMs64lYHePkxWq5b+CJxHx0dtjj64YKuHGaD0YTHnBmOcD9kzOdWsoTnhagl7AOTxk6K0lcZ6HLHVWFkclCQBp68WBef7fsqN3UdO/yMs8+DFyRD8M/ZrRD/eiu1xBjDmksdVJrQDYwAw0X3fv","a6":"w1.2k/tYePccelzXvYsotblgEJoo1IjqQkogkTTaYPiuooKwZabCT3UzLPTqE8xJjiu0l0rwnMHgQnAdWKQyppcMq4HyDcM+f+VzDFvtbjxAqAA+9jj+MMqbq3X59yWNQtu0+1hetoN/xb3VwyV7jLdmQjI/w7Lqa96zRbIW3G+E7TJLjOXHK7un2JOSfPSrJCxHT58/gYcSoBthjwDRGZZNA28qnzDzuIgrobV+/9Ek82DFIx4/ssn4f7ocWayyC0ivT1Ws8+0ehxW2iqMzFeAZJ/cwXm0Ti+zpe44SlBR5UxQjtVCfHTQH+lRHJBf31ZZvcpSmrPByTfDRVUVZCrUYPQELErSpdMzw9kWay71N8AeRMPlK5oqQoQf8YoQM4ohssZ+cHoNYxRyCfe8DSoZ/Tchk1B+ILemwVLuq63otYKRvf9qas0BFrERck49smw9DWJb/2ccRXO0VIT2GsjX8QSIewtOmCqtOdpjdJmciX9S2w0YXgQ8DjL7yjPPD9U1/sJEw50bgQ7+M4LHBWK71VRdByWhvup1Ymi+Zi2hri0/YMR5CQGL/0RkGYUjQ2oH/hyupa86D2bL6s7GQlKRLd+kzlxgwcFEVJZzc1etjnFzKF32sYOJ9lx6N1cMImHGOvtCCwe0/Z9Wt6KyOFUzpqKpyC613Gs4wUfHaQHdFJWI5Umslh04H3VkmCV4YLREfeEVHKEGSvnE4dmDXsq87rPIwF3VbACKUmu8fwwuDcFefPTF+OJNuflc/iHs1odyi","a7":"wx77af438b3505c00e","x0":3,"d1":"cf5b05da89b46341e40b689cdb1aaad4"}', 
    'openid': 'oRRr90HwIQE8LEMSsZMFS-E8DFhU', 
    'User-Agent': 'Mozilla/5.0 (Linux; Android 11; MI 9 Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/1110039 MMWEBSDK/20231002 MMWEBID/3755 MicroMessenger/8.0.43.2480(0x28002B51) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android', 
    'Accept-Encoding': 'gzip,compress,br,deflate', 
    'csecuuid': '18c42de435fc5-4f51eef41d7b54-0-501db-18c42de4360c8', 
    'token': 'AgGtHW1sQNs-fcctts4yB3A1XMCM7-OvO-4KKgw9SeCs-MqHzP2RYH0LJsM-gmTdXFttE3QFk-tlpwAAAACJHAAAC6bxXmhxNf4rzfb0XqJIKpgtvE8EFaBUUsFeXj92EjcnDdcAyZ8ygwdcYGuSZybr', 
    't': 'AgGtHW1sQNs-fcctts4yB3A1XMCM7-OvO-4KKgw9SeCs-MqHzP2RYH0LJsM-gmTdXFttE3QFk-tlpwAAAACJHAAAC6bxXmhxNf4rzfb0XqJIKpgtvE8EFaBUUsFeXj92EjcnDdcAyZ8ygwdcYGuSZybr', 
    'content-type': 'application/json', 
    'csecuserid': '3620952689', 
    'openidcipher': 'AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM/hf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n/GVnwfURonD78PewMUppAAAADh/ae6jCmNWX7N8o4GqHSReeVCNU8mdw8nbY9NuOsg+y4Istrq5dcXGP4kUvWJqiNV3Smc0nf6EWg==', 
    'Referer': 'https://servicewechat.com/wx77af438b3505c00e/1137/page-frame.html'
  },
  data : data
};

axios.request(config)
.then((response) => {
  data = JSON.stringify({
  "userStepCount": 23714,
  "code": 100,
  "riskCheckModel": {
    "uuid": "18c42de435fc5-4f51eef41d7b54-0-501db-18c42de4360c8",
    "platform": 13,
    "appletsFingerprint": "WX__ver1.2.0_CCCC_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",
    "fingerprint": "",
    "wxRiskLevel": "{\"openId\":\"oRRr90HwIQE8LEMSsZMFS-E8DFhU\",\"appId\":\"wx77af438b3505c00e\",\"mchid\":\"1399386702\"}"
  }
});

config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://bi-mall.meituan.com/api/c/game/walk/uploadUserSteps?largeFontSize=false&uuid=18c42de435fc5-4f51eef41d7b54-0-501db-18c42de4360c8&utm_medium=wxapp&brand=meituanyouxuan&tenantId=1&utm_term=5.168.8&device_model=MI%209&optimus_risk_level=71&optimus_code=10&poiIdStr=EMAB5SVazTYag7DDqtGaZgE&poi=0&stockPois=0&ci=140&bizId=4&fp_user_id=3620952689&fp_open_id_cipher=AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM%2Fhf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n%2FGVnwfURonD78PewMUppAAAADh%2Fae6jCmNWX7N8o4GqHSReeVCNU8mdw8nbY9NuOsg%2By4Istrq5dcXGP4kUvWJqiNV3Smc0nf6EWg%3D%3D&openId=oRRr90HwIQE8LEMSsZMFS-E8DFhU&unionId=oNQu9t8xPq3qHsRUPPZCKTCZYW9w&routeId=pages%2FuserCenter%2Findex%2CsubPackages%2Fmarketing%2Fsteps%2Fpages%2Findex%2Findex&sysName=Android&sysVerion=11&app_tag=youxuan&csecappid=wx77af438b3505c00e&csecplatform=3&csecversionname=5.168.8&csecversion=0',
  headers: { 
    'Host': 'bi-mall.meituan.com', 
    'Connection': 'keep-alive', 
    'Content-Length': '3422', 
    'charset': 'utf-8', 
    'mtgsig': '{"a1":"1.2","a2":1702031605495,"a3":"u83v150u19725745zu54yz83vy56z2x581x57wv5v49779784x147208","a4":"702de0857da82ccb85e02d70cb2ca87d72ded038b9f27845","a5":"3zTHy+su/tRH5/v7KJsxMLF+Ku69g3KELwKb5GNQ6bPI9cdd382nDVHaTOQJ9fg0ucSNeZsR2nBLC1wCwI/Uku8l0PpihhH1T/5ktX+YqP9OGyIVNfhUu0GYaIRYkpdh6vWQ3cOv0ucb89SMGwm1s8dZ4PsFMI/gE+06vlaKoT1vL+DpmUWc2c+a607esKkcdAL0/UXFv4OMO7lCjLZlT9N+exRPWBuLXvxwcHwB8e/xZw5mhCV9vJ1tysp3","a6":"w1.2k/tYePccelzXvYsotblgEJoo1IjqQkogkTTaYPiuooKwZabCT3UzLPTqE8xJjiu0l0rwnMHgQnAdWKQyppcMq4HyDcM+f+VzDFvtbjxAqAA+9jj+MMqbq3X59yWNQtu0+1hetoN/xb3VwyV7jLdmQjI/w7Lqa96zRbIW3G+E7TJLjOXHK7un2JOSfPSrJCxHT58/gYcSoBthjwDRGZZNA28qnzDzuIgrobV+/9Ek82DFIx4/ssn4f7ocWayyC0ivT1Ws8+0ehxW2iqMzFeAZJ/cwXm0Ti+zpe44SlBR5UxQjtVCfHTQH+lRHJBf31ZZvcpSmrPByTfDRVUVZCrUYPQELErSpdMzw9kWay71N8AeRMPlK5oqQoQf8YoQM4ohssZ+cHoNYxRyCfe8DSoZ/Tchk1B+ILemwVLuq63otYKRvf9qas0BFrERck49smw9DWJb/2ccRXO0VIT2GsjX8QSIewtOmCqtOdpjdJmciX9S2w0YXgQ8DjL7yjPPD9U1/sJEw50bgQ7+M4LHBWK71VRdByWhvup1Ymi+Zi2hri0/YMR5CQGL/0RkGYUjQ2oH/hyupa86D2bL6s7GQlKRLd+kzlxgwcFEVJZzc1etjnFzKF32sYOJ9lx6N1cMImHGOvtCCwe0/Z9Wt6KyOFUzpqKpyC613Gs4wUfHaQHdFJWI5Umslh04H3VkmCV4YLREfeEVHKEGSvnE4dmDXsq87rPIwF3VbACKUmu8fwwuDcFefPTF+OJNuflc/iHs1odyi","a7":"wx77af438b3505c00e","x0":3,"d1":"0a0d5e2259d56bc5c703408367eba145"}', 
    'openid': 'oRRr90HwIQE8LEMSsZMFS-E8DFhU', 
    'User-Agent': 'Mozilla/5.0 (Linux; Android 11; MI 9 Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/1110039 MMWEBSDK/20231002 MMWEBID/3755 MicroMessenger/8.0.43.2480(0x28002B51) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android', 
    'Accept-Encoding': 'gzip,compress,br,deflate', 
    'csecuuid': '18c42de435fc5-4f51eef41d7b54-0-501db-18c42de4360c8', 
    'token': 'AgGtHW1sQNs-fcctts4yB3A1XMCM7-OvO-4KKgw9SeCs-MqHzP2RYH0LJsM-gmTdXFttE3QFk-tlpwAAAACJHAAAC6bxXmhxNf4rzfb0XqJIKpgtvE8EFaBUUsFeXj92EjcnDdcAyZ8ygwdcYGuSZybr', 
    't': 'AgGtHW1sQNs-fcctts4yB3A1XMCM7-OvO-4KKgw9SeCs-MqHzP2RYH0LJsM-gmTdXFttE3QFk-tlpwAAAACJHAAAC6bxXmhxNf4rzfb0XqJIKpgtvE8EFaBUUsFeXj92EjcnDdcAyZ8ygwdcYGuSZybr', 
    'content-type': 'application/json', 
    'csecuserid': '3620952689', 
    'openidcipher': 'AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM/hf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n/GVnwfURonD78PewMUppAAAADh/ae6jCmNWX7N8o4GqHSReeVCNU8mdw8nbY9NuOsg+y4Istrq5dcXGP4kUvWJqiNV3Smc0nf6EWg==', 
    'Referer': 'https://servicewechat.com/wx77af438b3505c00e/1137/page-frame.html'
  },
  data : data
};
axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  SendMsg(error)
  console.log(error);
});

})
.catch((error) => {
  SendMsg(error)
  console.log(error);
});



function SendMsg(message) {
     if (Notify > 0) {
         notify.sendNotify($.name, message);
     } else {
         console.log(message);
     }
 }
function Env(name){
	this.name = name;
}