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
  "userStepCount": 19761,
  "code": 100,
  "riskCheckModel": {
    "uuid": "18b860f1241c8-7df40836e90e5-0-501db-18b860f1241b3",
    "platform": 13,
    "appletsFingerprint": "WX__ver1.2.0_CCCC_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",
    "fingerprint": "",
    "wxRiskLevel": "{\"openId\":\"oRRr90JhzewOwG7q3SwtO_6ZZBBk\",\"appId\":\"wx77af438b3505c00e\",\"mchid\":\"1399386702\"}"
  }
});
	let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://bi-mall.meituan.com/api/c/game/walk/uploadUserSteps?largeFontSize=false&uuid=18b860f1241c8-7df40836e90e5-0-501db-18b860f1241b3&utm_medium=wxapp&brand=meituanyouxuan&tenantId=1&utm_term=5.185.11&device_model=MI%209&optimus_risk_level=71&optimus_code=10&poiIdStr=3Bz-mDGhj4uh8weBgJqnywE&poi=0&stockPois=0&ci=140&bizId=4&fp_user_id=2599961533&fp_open_id_cipher=AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM%2Fhf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n%2FGVnwfURonD78PewMUppAAAADgok1AiJu8XGWtuzo4JgYNvRGm%2BWTDsF41%2BvwtvcjZW8uuhodHYtfMvELTqa8Gi3KxJp2QefKpfIQ%3D%3D&openId=oRRr90JhzewOwG7q3SwtO_6ZZBBk&unionId=oNQu9t6zDzI-BsQkgFkdLUGYdSck&routeId=pages%2FuserCenter%2Findex%2CsubPackages%2Fmarketing%2Fsteps%2Fpages%2Findex%2Findex&sysName=Android&sysVerion=11&app_tag=youxuan&csecappid=wx77af438b3505c00e&csecplatform=3&csecversionname=5.185.11&csecversion=0',
  headers: { 
    'Host': 'bi-mall.meituan.com', 
    'Connection': 'keep-alive', 
    'Content-Length': '3721', 
    'charset': 'utf-8', 
    'mtgsig': '{"a1":"1.2","a2":1714561751689,"a3":"0u05479z67z35xyz124782w133u6441181y139u83yv77978700407y8","a4":"fd6c5ba2c8dc7bdba25b6cfddb7bdcc82b41b4cef03a6806","a5":"OgwmZCtMIxcA9mxQ/GvVtDQE+bMb4iwxlpGvIT+BpK0ebODNDn4NgOdlLInijIk5omnaYpEyQng3O3jYGmyx8viDj6JfMlFga0CkQMLGvLuGR3XjAP7jzq6YRBEASrATIyTRfkdZpG6Bs46PFnyav3RA5mn3JQgidy6DHVm1ZHll/tF6U/N5OOXUImMkSSdMO3dgK340L5Jyqrk0/LLUgJj2aTvxK4U/agW/sJLiaKeV6VlCqn1xKAOEV+tXUSF=","a6":"w1.2Rf561nXz5l4DOX4QXVXMHmjyt1E1RcMv3RYFfroMkENqvABECxEP8BDRk1DIjNosshc93kWGEbZ1UROCbXBid6ggNYYBVHx3FJXGJf2vrnwQblqzoZAq6EulebuLIiq46F/yQhdPa4MIZqCAYZfJt1qQ87PTdM7DSRRZsu7fo5swnzGLxpCHqYVaTHSF5YqZyf0nCzjPcbtAgEjjVI5bTxeTdPHUCfGPDvc5TzJD5OLpOgF1EEzr1Uy459FkSnO3MmUGWeDTSsy78lp+oLVicg4mKMLzEEno8ZvEIBhb/v7/1Jf+ziSKi3RxM95iELI3oCiOfJhSflTuA0BXPhltMe0fN8bcfvI9JqBJSJxU7+RdyXI8E3uKWF5HgeV7pvJejr22Y9yExFoPwZPF0A1RECh8r0FT47BL8oJK4Jv0ioI65/GRjiZ2tG430tqf/Iz/X/AUkkH5Xb2afpzzqGBDJJjlUBMyAhhk1wnfx5DNqTL9kh7zlPXHS2N/cK9gFFIhwWn10irQLS4fI6rmwTrhbF5JowhsWff93wMoR9TBe2GcW2IoNziimbjWVljIsAClVKS03iKgV3ibzX0HG4fmVfZZogBMIQC7ZT+MnqJNVv86GQ24HrZWkHANc2lVzoMiLw9L6LjfzZyaeph/waXZCdBLSU4zQSyj+Fk/azYrMdcK/dHoH9LfSi4Fb+CKyeANRy+mbWEtskg9+eIK5qAEGg==","a7":"wx77af438b3505c00e","x0":3,"d1":"57dc4ed6959b5b4064e4789cb22cbe1b"}', 
    'openid': 'oRRr90JhzewOwG7q3SwtO_6ZZBBk', 
    'User-Agent': 'Mozilla/5.0 (Linux; Android 11; MI 9 Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/122.0.6261.120 Mobile Safari/537.36 XWEB/1220033 MMWEBSDK/20231202 MMWEBID/209 MicroMessenger/8.0.47.2560(0x28002F51) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android', 
    'Accept-Encoding': 'gzip,compress,br,deflate', 
    'csecuuid': '18b860f1241c8-7df40836e90e5-0-501db-18b860f1241b3', 
    'token': 'AgE1ImfXC9JE_FsGpl1g_1Yd42pSthFv1G9_qGFEZXmqS-7nRmu4A7DbhMKct7lTqCcAV1xAQ5V_UQAAAADSHwAAv70qHe8bCoR2RDcfoX0haX5W0uf5NJCE9kg03p4U6NeHsswUUc7Y4hnSGlysC-lZ', 
    't': 'AgE1ImfXC9JE_FsGpl1g_1Yd42pSthFv1G9_qGFEZXmqS-7nRmu4A7DbhMKct7lTqCcAV1xAQ5V_UQAAAADSHwAAv70qHe8bCoR2RDcfoX0haX5W0uf5NJCE9kg03p4U6NeHsswUUc7Y4hnSGlysC-lZ', 
    'content-type': 'application/json', 
    'csecuserid': '2599961533', 
    'openidcipher': 'AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM/hf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n/GVnwfURonD78PewMUppAAAADgok1AiJu8XGWtuzo4JgYNvRGm+WTDsF41+vwtvcjZW8uuhodHYtfMvELTqa8Gi3KxJp2QefKpfIQ==', 
    'Referer': 'https://servicewechat.com/wx77af438b3505c00e/1191/page-frame.html'
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
    "uuid": "18b860f1241c8-7df40836e90e5-0-501db-18b860f1241b3",
    "platform": 13,
    "appletsFingerprint": "WX__ver1.2.0_CCCC_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",
    "fingerprint": "",
    "wxRiskLevel": "{\"openId\":\"oRRr90JhzewOwG7q3SwtO_6ZZBBk\",\"appId\":\"wx77af438b3505c00e\",\"mchid\":\"1399386702\"}"
  }
});
	let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://bi-mall.meituan.com/api/c/game/walk/convertHealthCoin?largeFontSize=false&uuid=18b860f1241c8-7df40836e90e5-0-501db-18b860f1241b3&utm_medium=wxapp&brand=meituanyouxuan&tenantId=1&utm_term=5.185.11&device_model=MI%209&optimus_risk_level=71&optimus_code=10&poiIdStr=3Bz-mDGhj4uh8weBgJqnywE&poi=0&stockPois=0&ci=140&bizId=4&fp_user_id=2599961533&fp_open_id_cipher=AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM%2Fhf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n%2FGVnwfURonD78PewMUppAAAADgok1AiJu8XGWtuzo4JgYNvRGm%2BWTDsF41%2BvwtvcjZW8uuhodHYtfMvELTqa8Gi3KxJp2QefKpfIQ%3D%3D&openId=oRRr90JhzewOwG7q3SwtO_6ZZBBk&unionId=oNQu9t6zDzI-BsQkgFkdLUGYdSck&routeId=pages%2FuserCenter%2Findex%2CsubPackages%2Fmarketing%2Fsteps%2Fpages%2Findex%2Findex&sysName=Android&sysVerion=11&app_tag=youxuan&csecappid=wx77af438b3505c00e&csecplatform=3&csecversionname=5.185.11&csecversion=0',
  headers: { 
    'Host': 'bi-mall.meituan.com', 
    'Connection': 'keep-alive', 
    'Content-Length': '3720', 
    'charset': 'utf-8', 
    'mtgsig': '{"a1":"1.2","a2":1714561753053,"a3":"0u05479z67z35xyz124782w133u6441181y139u83yv77978700407y8","a4":"1f8d7581ccca1d4581758d1f451dcacc5c6a552c19779fe0","a5":"uIQBAN9tEWIA9m54ZZB7TqQt1dnNAKCLtKGE3iYfvZ5uqbATGLe/FjRgdIE6N3Yj5Z/9hNi3vtMf8PAcjy+4L2D66l2WWtQPO6zEWaa7k6MmPKQQcr3Ulh8NnoTt5YhKPa4kBGbT6vPeBLOiOJcwz37/UrUUlovPJp9L5eQTcjhlgY5hVjWPhHrFctQhL1qqjmqyyb4WSztcWn76BIMRS47FvWe8lCQXg27iYgTlDAH859E9r5Jf0l1b+s6eQoc=","a6":"w1.2Rf561nXz5l4DOX4QXVXMHmjyt1E1RcMv3RYFfroMkENqvABECxEP8BDRk1DIjNosshc93kWGEbZ1UROCbXBid6ggNYYBVHx3FJXGJf2vrnwQblqzoZAq6EulebuLIiq46F/yQhdPa4MIZqCAYZfJt1qQ87PTdM7DSRRZsu7fo5swnzGLxpCHqYVaTHSF5YqZyf0nCzjPcbtAgEjjVI5bTxeTdPHUCfGPDvc5TzJD5OLpOgF1EEzr1Uy459FkSnO3MmUGWeDTSsy78lp+oLVicg4mKMLzEEno8ZvEIBhb/v7/1Jf+ziSKi3RxM95iELI3oCiOfJhSflTuA0BXPhltMe0fN8bcfvI9JqBJSJxU7+RdyXI8E3uKWF5HgeV7pvJejr22Y9yExFoPwZPF0A1RECh8r0FT47BL8oJK4Jv0ioI65/GRjiZ2tG430tqf/Iz/X/AUkkH5Xb2afpzzqGBDJJjlUBMyAhhk1wnfx5DNqTL9kh7zlPXHS2N/cK9gFFIhwWn10irQLS4fI6rmwTrhbF5JowhsWff93wMoR9TBe2GcW2IoNziimbjWVljIsAClVKS03iKgV3ibzX0HG4fmVfZZogBMIQC7ZT+MnqJNVv86GQ24HrZWkHANc2lVzoMiLw9L6LjfzZyaeph/waXZCdBLSU4zQSyj+Fk/azYrMdcK/dHoH9LfSi4Fb+CKyeANRy+mbWEtskg9+eIK5qAEGg==","a7":"wx77af438b3505c00e","x0":3,"d1":"fb3f4f4c488251889e7ef9b0a40f63b1"}', 
    'openid': 'oRRr90JhzewOwG7q3SwtO_6ZZBBk', 
    'User-Agent': 'Mozilla/5.0 (Linux; Android 11; MI 9 Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/122.0.6261.120 Mobile Safari/537.36 XWEB/1220033 MMWEBSDK/20231202 MMWEBID/209 MicroMessenger/8.0.47.2560(0x28002F51) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android', 
    'Accept-Encoding': 'gzip,compress,br,deflate', 
    'csecuuid': '18b860f1241c8-7df40836e90e5-0-501db-18b860f1241b3', 
    'token': 'AgE1ImfXC9JE_FsGpl1g_1Yd42pSthFv1G9_qGFEZXmqS-7nRmu4A7DbhMKct7lTqCcAV1xAQ5V_UQAAAADSHwAAv70qHe8bCoR2RDcfoX0haX5W0uf5NJCE9kg03p4U6NeHsswUUc7Y4hnSGlysC-lZ', 
    't': 'AgE1ImfXC9JE_FsGpl1g_1Yd42pSthFv1G9_qGFEZXmqS-7nRmu4A7DbhMKct7lTqCcAV1xAQ5V_UQAAAADSHwAAv70qHe8bCoR2RDcfoX0haX5W0uf5NJCE9kg03p4U6NeHsswUUc7Y4hnSGlysC-lZ', 
    'content-type': 'application/json', 
    'csecuserid': '2599961533', 
    'openidcipher': 'AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM/hf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n/GVnwfURonD78PewMUppAAAADgok1AiJu8XGWtuzo4JgYNvRGm+WTDsF41+vwtvcjZW8uuhodHYtfMvELTqa8Gi3KxJp2QefKpfIQ==', 
    'Referer': 'https://servicewechat.com/wx77af438b3505c00e/1191/page-frame.html'
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