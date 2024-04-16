const axios = require('axios');

function sleep(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}
 
async function main() {
	await uploadSteps()
    await sleep(5000)
	await stepsToGold()
}

function uploadSteps(){

	let data = JSON.stringify({
  "userStepCount": 13534,
  "code": 100,
  "riskCheckModel": {
    "uuid": "189548f5eb8c8-a3f06b074c786-0-501db-189548f5eb8c8",
    "platform": 13,
    "appletsFingerprint": "WX__ver1.2.0_CCCC_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",
    "fingerprint": "",
    "wxRiskLevel": "{\"openId\":\"oRRr90CJ9KrcREPc0hUC5-ncgZOg\",\"appId\":\"wx77af438b3505c00e\",\"mchid\":\"1399386702\"}"
  }
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://bi-mall.meituan.com/api/c/game/walk/uploadUserSteps?largeFontSize=false&uuid=189548f5eb8c8-a3f06b074c786-0-501db-189548f5eb8c8&utm_medium=wxapp&brand=meituanyouxuan&tenantId=1&utm_term=5.184.5&device_model=MI%209&optimus_risk_level=71&optimus_code=10&poiIdStr=6snLxgUYifKg8FbzBR2UqQE&poi=0&stockPois=0&ci=140&bizId=4&fp_user_id=4079009624&fp_open_id_cipher=AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM%2Fhf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n%2FGVnwfURonD78PewMUppAAAADgyjlJHyosrkcEpGILVQ6SbJgZyWpd1Ig5KP6cLZ7bVssjkzKYXCFkYls1qJ3nX8YIojS7P2RxChQ%3D%3D&openId=oRRr90CJ9KrcREPc0hUC5-ncgZOg&unionId=oNQu9t_CT6NfXxmQnQx7ZIXjsTNg&routeId=pages%2FuserCenter%2Findex%2CsubPackages%2Fmarketing%2Fsteps%2Fpages%2Findex%2Findex&sysName=Android&sysVerion=11&app_tag=youxuan&csecappid=wx77af438b3505c00e&csecplatform=3&csecversionname=5.184.5&csecversion=0',
  headers: { 
    'Host': 'bi-mall.meituan.com', 
    'Connection': 'keep-alive', 
    'Content-Length': '2717', 
    'charset': 'utf-8', 
    'mtgsig': '{"a1":"1.2","a2":1713242034554,"a3":"u727y741zu5z59wy042046x8x1yy99u5810451u4w057797850740w23","a4":"d0c90ad0052441d6d00ac9d0d6412405aadbe7357c9ac330","a5":"xaJuiKgYJteSNTbCZdWS/ehIFDQJnk5szsPLphbyu+EIG9c/FwRS2TOQUDzF7w4/HvnH2cRPnTCAjzDs7r2N2j8VXDaxSfud2YT++uORzUlQRZd3Y0WXMQoCRYkqWjI2Q3FdW8DxjcYT8y1oJexsbDbNCoEYfGRqSo8iTQJ63Xe09tshu5q4qqwgO53RIwtvB46FKy8rr1IhssCd3aECcx53HgyUl22bAQU0/w6P+fOOA6RHkhXE90Dqd8NY","a6":"w1.2bTinwg4XGVoOgLgi1OmHNiHiE4frPTiYsBXFB2K/7OnLub44b/QNaIZEZc36zzP4GoeUqlhnBTMs88OK40p4ZPId3ykl7R4gIlxS7ilgtReGuhS5W/wT9EL0O11Q4Z+Z3F2ovwi2qgp5qIzORVXn2wRrGiCz7NxieE5J/J/NWu5/2uugO294OP/Gh3Wenwp/aaC9nUoPmRv423MHr71eCt3Lj8sisN7TvuRjswWWUyZWkzu+FtQt6vqZPFYoIm8X9K8rjegyNC+WKHtwAKC2RAGn+2FV/QfMTE+uFFRmrN8I6iyZ9vq1AcMoHiESlp5PY3WZww7mC2I3FgF6ZQpozl+Pu8XXekjhAet6R3pHhVPjPg3UAGr19YVoX4oan+F4/cH0kA+OI+e0S77NQSgGq7JwCcaZdd5f+kx5/742BiCs6KlC4aOb6U3aPOtBrdx0BHTQhMqFjHtP70ixX6jOaLQDpUFrewErxuJuFvwy1RPMfB5HDRbNUfhgjqdaXWkMVTPpMkQcIh51MQzlj/I5IMUpdgcxqsjIOSNMGtPP0jWbqbSJVbVtrtL+Zzeo+0+OvTaufxHFNMvtGQ9P+K3V4w==","a7":"wx77af438b3505c00e","x0":3,"d1":"03bb99048626762053f5b661867e351a"}', 
    'openid': 'oRRr90CJ9KrcREPc0hUC5-ncgZOg', 
    'User-Agent': 'Mozilla/5.0 (Linux; Android 11; MI 9 Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/116.0.0.0 Mobile Safari/537.36 XWEB/1160117 MMWEBSDK/20231202 MMWEBID/9254 MicroMessenger/8.0.47.2560(0x28002F51) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android', 
    'Accept-Encoding': 'gzip,compress,br,deflate', 
    'csecuuid': '189548f5eb8c8-a3f06b074c786-0-501db-189548f5eb8c8', 
    'token': 'AgEdI7gpfAOycwWk9wFTVsIkIF3tLJFvdyDWEe8wazim_c8Dd-6Yw-pasUlKL7sVjtrw0zWUvc8u9gAAAAAoHwAASK5lOYLBFQciDiSQxeeTYZn_M7TGQnab2Cb_xAIDYJwE_H9Oz_178zqFazHhYJ88', 
    't': 'AgEdI7gpfAOycwWk9wFTVsIkIF3tLJFvdyDWEe8wazim_c8Dd-6Yw-pasUlKL7sVjtrw0zWUvc8u9gAAAAAoHwAASK5lOYLBFQciDiSQxeeTYZn_M7TGQnab2Cb_xAIDYJwE_H9Oz_178zqFazHhYJ88', 
    'content-type': 'application/json', 
    'csecuserid': '4079009624', 
    'openidcipher': 'AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM/hf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n/GVnwfURonD78PewMUppAAAADgyjlJHyosrkcEpGILVQ6SbJgZyWpd1Ig5KP6cLZ7bVssjkzKYXCFkYls1qJ3nX8YIojS7P2RxChQ==', 
    'Referer': 'https://servicewechat.com/wx77af438b3505c00e/1188/page-frame.html'
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
}

function stepsToGold(){
	let data = JSON.stringify({
  "userStepCount": 5000,
  "code": 200,
  "riskCheckModel": {
    "uuid": "189548f5eb8c8-a3f06b074c786-0-501db-189548f5eb8c8",
    "platform": 13,
    "appletsFingerprint": "WX__ver1.2.0_CCCC_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",
    "fingerprint": "",
    "wxRiskLevel": "{\"openId\":\"oRRr90CJ9KrcREPc0hUC5-ncgZOg\",\"appId\":\"wx77af438b3505c00e\",\"mchid\":\"1399386702\"}"
  }
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://bi-mall.meituan.com/api/c/game/walk/convertHealthCoin?largeFontSize=false&uuid=189548f5eb8c8-a3f06b074c786-0-501db-189548f5eb8c8&utm_medium=wxapp&brand=meituanyouxuan&tenantId=1&utm_term=5.184.5&device_model=MI%209&optimus_risk_level=71&optimus_code=10&poiIdStr=6snLxgUYifKg8FbzBR2UqQE&poi=0&stockPois=0&ci=140&bizId=4&fp_user_id=4079009624&fp_open_id_cipher=AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM%2Fhf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n%2FGVnwfURonD78PewMUppAAAADgyjlJHyosrkcEpGILVQ6SbJgZyWpd1Ig5KP6cLZ7bVssjkzKYXCFkYls1qJ3nX8YIojS7P2RxChQ%3D%3D&openId=oRRr90CJ9KrcREPc0hUC5-ncgZOg&unionId=oNQu9t_CT6NfXxmQnQx7ZIXjsTNg&routeId=pages%2FuserCenter%2Findex%2CsubPackages%2Fmarketing%2Fsteps%2Fpages%2Findex%2Findex&sysName=Android&sysVerion=11&app_tag=youxuan&csecappid=wx77af438b3505c00e&csecplatform=3&csecversionname=5.184.5&csecversion=0',
  headers: { 
    'Host': 'bi-mall.meituan.com', 
    'Connection': 'keep-alive', 
    'Content-Length': '2716', 
    'charset': 'utf-8', 
    'mtgsig': '{"a1":"1.2","a2":1713242035851,"a3":"u727y741zu5z59wy042046x8x1yy99u5810451u4w057797850740w23","a4":"c077f73ddef8c6fa3df777c0fac6f8deb62159254ce7a1fb","a5":"kjWQQF6Gww7SNTyN0JZQGh5VvoWsh0os6iGH+p5JrqntjiajTIPDUxqTwtfxkqnqJBY6sU3FVW1Xgedt52lLppjHfIMfC1IcGKLErSmlKFj+TDQa4k7iZm8MaFvKWXyNVJ6GuLlJekzkVap2bPSxU9MtaeIf6EcQ8tYQF4UzV7WmpK5Hr0BfQ8bWPqmBCfxVzPlcg9XvAIa6HL/UoKwrSxOMF7J4SXNDzNbHlY1rNy5MW0b1UjFF5MxIbiOt","a6":"w1.2bTinwg4XGVoOgLgi1OmHNiHiE4frPTiYsBXFB2K/7OnLub44b/QNaIZEZc36zzP4GoeUqlhnBTMs88OK40p4ZPId3ykl7R4gIlxS7ilgtReGuhS5W/wT9EL0O11Q4Z+Z3F2ovwi2qgp5qIzORVXn2wRrGiCz7NxieE5J/J/NWu5/2uugO294OP/Gh3Wenwp/aaC9nUoPmRv423MHr71eCt3Lj8sisN7TvuRjswWWUyZWkzu+FtQt6vqZPFYoIm8X9K8rjegyNC+WKHtwAKC2RAGn+2FV/QfMTE+uFFRmrN8I6iyZ9vq1AcMoHiESlp5PY3WZww7mC2I3FgF6ZQpozl+Pu8XXekjhAet6R3pHhVPjPg3UAGr19YVoX4oan+F4/cH0kA+OI+e0S77NQSgGq7JwCcaZdd5f+kx5/742BiCs6KlC4aOb6U3aPOtBrdx0BHTQhMqFjHtP70ixX6jOaLQDpUFrewErxuJuFvwy1RPMfB5HDRbNUfhgjqdaXWkMVTPpMkQcIh51MQzlj/I5IMUpdgcxqsjIOSNMGtPP0jWbqbSJVbVtrtL+Zzeo+0+OvTaufxHFNMvtGQ9P+K3V4w==","a7":"wx77af438b3505c00e","x0":3,"d1":"c9221aef769d4f793fb1446a92e2ec41"}', 
    'openid': 'oRRr90CJ9KrcREPc0hUC5-ncgZOg', 
    'User-Agent': 'Mozilla/5.0 (Linux; Android 11; MI 9 Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/116.0.0.0 Mobile Safari/537.36 XWEB/1160117 MMWEBSDK/20231202 MMWEBID/9254 MicroMessenger/8.0.47.2560(0x28002F51) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android', 
    'Accept-Encoding': 'gzip,compress,br,deflate', 
    'csecuuid': '189548f5eb8c8-a3f06b074c786-0-501db-189548f5eb8c8', 
    'token': 'AgEdI7gpfAOycwWk9wFTVsIkIF3tLJFvdyDWEe8wazim_c8Dd-6Yw-pasUlKL7sVjtrw0zWUvc8u9gAAAAAoHwAASK5lOYLBFQciDiSQxeeTYZn_M7TGQnab2Cb_xAIDYJwE_H9Oz_178zqFazHhYJ88', 
    't': 'AgEdI7gpfAOycwWk9wFTVsIkIF3tLJFvdyDWEe8wazim_c8Dd-6Yw-pasUlKL7sVjtrw0zWUvc8u9gAAAAAoHwAASK5lOYLBFQciDiSQxeeTYZn_M7TGQnab2Cb_xAIDYJwE_H9Oz_178zqFazHhYJ88', 
    'content-type': 'application/json', 
    'csecuserid': '4079009624', 
    'openidcipher': 'AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM/hf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n/GVnwfURonD78PewMUppAAAADgyjlJHyosrkcEpGILVQ6SbJgZyWpd1Ig5KP6cLZ7bVssjkzKYXCFkYls1qJ3nX8YIojS7P2RxChQ==', 
    'Referer': 'https://servicewechat.com/wx77af438b3505c00e/1188/page-frame.html'
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
}


main()