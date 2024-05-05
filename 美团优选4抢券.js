// cron: 0 0 * * *
const axios = require('axios');
let data = JSON.stringify({
  "code": 300,
  "healthCoinCount": 100000,
  "rewardId": 6770835,
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
  url: 'https://bi-mall.meituan.com/api/c/game/walk/convertRedPacket?largeFontSize=false&uuid=18c42de435fc5-4f51eef41d7b54-0-501db-18c42de4360c8&utm_medium=wxapp&brand=meituanyouxuan&tenantId=1&utm_term=5.176.5&device_model=MI%209&optimus_risk_level=71&optimus_code=10&poiIdStr=CdNxJgRcwXJ6dYat09o9PgE&poi=0&stockPois=0&ci=140&bizId=4&fp_user_id=3620952689&fp_open_id_cipher=AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM%2Fhf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n%2FGVnwfURonD78PewMUppAAAADh%2Fae6jCmNWX7N8o4GqHSReeVCNU8mdw8nbY9NuOsg%2By4Istrq5dcXGP4kUvWJqiNV3Smc0nf6EWg%3D%3D&openId=oRRr90HwIQE8LEMSsZMFS-E8DFhU&unionId=oNQu9t8xPq3qHsRUPPZCKTCZYW9w&routeId=pages%2FuserCenter%2Findex%2CsubPackages%2Fmarketing%2Fsteps%2Fpages%2Findex%2Findex%2CsubPackages%2Fmarketing%2Fsteps%2Fpages%2FconvertCenter%2Findex&sysName=Android&sysVerion=11&app_tag=youxuan&csecappid=wx77af438b3505c00e&csecplatform=3&csecversionname=5.176.5&csecversion=0',
  headers: { 
    'Host': 'bi-mall.meituan.com', 
    'Connection': 'keep-alive', 
    'Content-Length': '3124', 
    'charset': 'utf-8', 
    'mtgsig': '{"a1":"1.2","a2":1706932393376,"a3":"u83v150u19725745zu54yz83vy56z2x581x57wv5v49779784x147208","a4":"e6a82f9ea766c7b09e2fa8e6b0c766a73e7ab18b8ebdd72c","a5":"jYWUmVZ211zTBpnWRM2Z6u0jNvlyo+lcatBNs9k82hsZBrCE/xr6PGtxFugYWk77DsqSZy03tx0+f8u0t2p016wWUoSa5LYgBRw8ygPnVz7cNFK2WKLVBWaLScv4nt7M2axSavfgN4JSwBsTS7NI4lO539H64hLWgILsa8vpRxG18xxbbZQ0Gavv6Y8IlRL7UIrefxPLrJxtVqxgnLo/u3JdkwVePNsO20DELTsfZlbrGLK1faydHVUeHN3vqZts2nRGBqF=","a6":"w1.2AMvKpR8kYTOZy8rXriWpeiZTZGeBJxeBMtd5DyZexR/9hq2YLhjYtBU30RTqu2VJVO2wSl6csHumCewZboAxJbOmivlFsqbVTlCCWEhbN4S4jwgz1enANQ5qO2rJWU9dAUKtWltuwmDi8RbNf1orfTBGuSkhfYuZHQ3KH3idYUnh2edWctlySs0dWxc0TA2S8OoCFl5vV3FuURP3RnnH+nSBEY44vtrKqIZd2qNqyliT2lyprh4bPX3tFd95FTisndJXw8DF+2NwGtDIUCsRGnYvi5s1Z9s0kBWK3sKgzymkC71AIR6guM4FOhBcxpYNkGmJGnY3emPT0liR8YtVQ7xMCIicdL9j1TkhLjSJGX7ptyl9VZ+YnN7XchKjzlS7lcX7ikoGEcWoeIpzGNGYaPCAUY+nrR5kiG9q7R8pCTNWGuqalEcK6Si9VUes1x9tVXbwwhCqT6ovgc/zjNfar6y/PwLDL0ZIbRc7ro82t2jbfUzf428b54A1R2cS/rSQFfcL88k3ghy/9o0Y26J2caiOn37xvFRt31vaOMUlHWi5pv79ZUxmKm4szduVANjLC2qKZRYxaNXE6OrmOE1QFaZg6GRAjPHpsJz+HMvZZuPR49D9rMTvQTM8QJiIFxJBdq0eNMAuUT1uJiuCCpizYKWAtk5HU4gAOv+MEhUIYNKC04QfDKpNfaiCQaYYRgWB","a7":"wx77af438b3505c00e","x0":3,"d1":"c9e56d64612cc152b69c0c78b1424ace"}', 
    'openid': 'oRRr90HwIQE8LEMSsZMFS-E8DFhU', 
    'User-Agent': 'Mozilla/5.0 (Linux; Android 11; MI 9 Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/1110039 MMWEBSDK/20231002 MMWEBID/3755 MicroMessenger/8.0.43.2480(0x28002B51) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android', 
    'Accept-Encoding': 'gzip,compress,br,deflate', 
    'csecuuid': '18c42de435fc5-4f51eef41d7b54-0-501db-18c42de4360c8', 
    'token': 'AgGtHW1sQNs-fcctts4yB3A1XMCM7-OvO-4KKgw9SeCs-MqHzP2RYH0LJsM-gmTdXFttE3QFk-tlpwAAAACJHAAAC6bxXmhxNf4rzfb0XqJIKpgtvE8EFaBUUsFeXj92EjcnDdcAyZ8ygwdcYGuSZybr', 
    't': 'AgGtHW1sQNs-fcctts4yB3A1XMCM7-OvO-4KKgw9SeCs-MqHzP2RYH0LJsM-gmTdXFttE3QFk-tlpwAAAACJHAAAC6bxXmhxNf4rzfb0XqJIKpgtvE8EFaBUUsFeXj92EjcnDdcAyZ8ygwdcYGuSZybr', 
    'content-type': 'application/json', 
    'csecuserid': '3620952689', 
    'openidcipher': 'AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM/hf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n/GVnwfURonD78PewMUppAAAADh/ae6jCmNWX7N8o4GqHSReeVCNU8mdw8nbY9NuOsg+y4Istrq5dcXGP4kUvWJqiNV3Smc0nf6EWg==', 
    'Referer': 'https://servicewechat.com/wx77af438b3505c00e/1160/page-frame.html'
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