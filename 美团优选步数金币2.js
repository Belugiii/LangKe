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
  "userStepCount": 14443,
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
  url: 'https://bi-mall.meituan.com/api/c/game/walk/uploadUserSteps?largeFontSize=false&uuid=18b860f1241c8-7df40836e90e5-0-501db-18b860f1241b3&utm_medium=wxapp&brand=meituanyouxuan&tenantId=1&utm_term=5.182.5&device_model=MI%209&optimus_risk_level=71&optimus_code=10&poiIdStr=HLnr4Ff1eKLNMNOAncfmZQE&poi=0&stockPois=0&ci=140&bizId=4&fp_user_id=2599961533&fp_open_id_cipher=AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM%2Fhf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n%2FGVnwfURonD78PewMUppAAAADi%2BThIHSEJdvkjBHUZTgEmzt68UFuF7Qu%2BvAqMR8BgUmSO7I%2FrXggJ7k4BdE5uw1%2FmXOekqH3P%2FJA%3D%3D&openId=oRRr90JhzewOwG7q3SwtO_6ZZBBk&unionId=oNQu9t6zDzI-BsQkgFkdLUGYdSck&routeId=pages%2FuserCenter%2Findex%2CsubPackages%2Fmarketing%2Fsteps%2Fpages%2Findex%2Findex&sysName=Android&sysVerion=11&app_tag=youxuan&csecappid=wx77af438b3505c00e&csecplatform=3&csecversionname=5.182.5&csecversion=0',
  headers: { 
    'Host': 'bi-mall.meituan.com', 
    'Connection': 'keep-alive', 
    'Content-Length': '2589', 
    'charset': 'utf-8', 
    'mtgsig': '{"a1":"1.2","a2":1712804040475,"a3":"0u05479z67z35xyz124782w133u6441181y139u83yv77978700407y8","a4":"36360696881a48149606363614481a888d8925fd99c13f75","a5":"9RN9dIyTdd3NrhuJBLoEMeLW1v+Bux456J1I6tScWkHhfVpF6NpPPHTQzd+rFy7yCQiSaXvmYC0YjA0mzLH58MyLQFxHObWeGcR/8oMjsMhtqRgHLng5bBJxFOhx/DkFuv+pyB5tgu49gJDUTAHKjsBfAT9klc//uqHZYXr1sq6xeuyCoCBISlQb7QT5lP/LGpjjWBGRGHdUXcMMt2StyBKxDzbXLLVNWtFF3Gt3JsKz9HNhFO16T0r1PJFo","a6":"w1.2c+MEMgoYR4CitkGqFQBMlnhuMoaTeY8yObWB79aWdszASB4FmYv7DseblcrUUjr1Uryb5BqOPTq4VWn3kdRAYXJUiwO9jSqUWyNOGb4wic6eyuhYkTAZKK5lgHtFcfSgLFUSsXiqT0wykHy999l8OpkENJdkV6hWX1u6lrHo7G7YawLQmzQtriZbhtxUr036pbFFuCmRbl8IPbLShEQ7PTqphkYDhxc0K49mlb7RqA3cgZiqcJYbR4DYBBGMu2bgvrHCp/bYYn33+/L/Y4pkTEb6eQ+CYdxGGZjQayvPfUSdYQpj5orkpiK+O2poCYO7JJKMdffBzb1fE6EapEocwkiyTZ71p4dRtUBNe/8nEolDXsRTdI6Ol99dSrpjvB/tz3xiMDHIE+Rk/sW8mRJVQEQ5ScVvBIx9zRV7j9HAPT0N+V+qA5h8z2mjmt6R84zayIZmdrFHvwCCdeRdM8X6g0B+KqUsbuhaKtwduEmz9vFr/d58Es3IFlwkhyfPk0huPF34Di0LcZlRPiBgdf5REJciwZ5DmySCJvQIG7Wzsko=","a7":"wx77af438b3505c00e","x0":3,"d1":"19c73522a73f78a89efb9a1fabd06e2c"}', 
    'openid': 'oRRr90JhzewOwG7q3SwtO_6ZZBBk', 
    'User-Agent': 'Mozilla/5.0 (Linux; Android 11; MI 9 Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/116.0.0.0 Mobile Safari/537.36 XWEB/1160117 MMWEBSDK/20231202 MMWEBID/209 MicroMessenger/8.0.47.2560(0x28002F51) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android', 
    'Accept-Encoding': 'gzip,compress,br,deflate', 
    'csecuuid': '18b860f1241c8-7df40836e90e5-0-501db-18b860f1241b3', 
    'token': 'AgHMH2h5Au6ZgqE8jbxw_8FdtplSHp-t-Kow6nu0qG-Bk9rJjeCsWR5s1ycLnZHwV-Uuiy9py0BNQQAAAADpGwAA02NdQxE6yoq9nVJChQXZBAoeFnSK0AP1A7E-rlRP-f4HZiJ40WuXIcvHbRvr4DzH', 
    't': 'AgHMH2h5Au6ZgqE8jbxw_8FdtplSHp-t-Kow6nu0qG-Bk9rJjeCsWR5s1ycLnZHwV-Uuiy9py0BNQQAAAADpGwAA02NdQxE6yoq9nVJChQXZBAoeFnSK0AP1A7E-rlRP-f4HZiJ40WuXIcvHbRvr4DzH', 
    'content-type': 'application/json', 
    'csecuserid': '2599961533', 
    'openidcipher': 'AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM/hf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n/GVnwfURonD78PewMUppAAAADi+ThIHSEJdvkjBHUZTgEmzt68UFuF7Qu+vAqMR8BgUmSO7I/rXggJ7k4BdE5uw1/mXOekqH3P/JA==', 
    'Referer': 'https://servicewechat.com/wx77af438b3505c00e/1185/page-frame.html'
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
  url: 'https://bi-mall.meituan.com/api/c/game/walk/convertHealthCoin?largeFontSize=false&uuid=18b860f1241c8-7df40836e90e5-0-501db-18b860f1241b3&utm_medium=wxapp&brand=meituanyouxuan&tenantId=1&utm_term=5.182.5&device_model=MI%209&optimus_risk_level=71&optimus_code=10&poiIdStr=HLnr4Ff1eKLNMNOAncfmZQE&poi=0&stockPois=0&ci=140&bizId=4&fp_user_id=2599961533&fp_open_id_cipher=AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM%2Fhf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n%2FGVnwfURonD78PewMUppAAAADi%2BThIHSEJdvkjBHUZTgEmzt68UFuF7Qu%2BvAqMR8BgUmSO7I%2FrXggJ7k4BdE5uw1%2FmXOekqH3P%2FJA%3D%3D&openId=oRRr90JhzewOwG7q3SwtO_6ZZBBk&unionId=oNQu9t6zDzI-BsQkgFkdLUGYdSck&routeId=pages%2FuserCenter%2Findex%2CsubPackages%2Fmarketing%2Fsteps%2Fpages%2Findex%2Findex&sysName=Android&sysVerion=11&app_tag=youxuan&csecappid=wx77af438b3505c00e&csecplatform=3&csecversionname=5.182.5&csecversion=0',
  headers: { 
    'Host': 'bi-mall.meituan.com', 
    'Connection': 'keep-alive', 
    'Content-Length': '2588', 
    'charset': 'utf-8', 
    'mtgsig': '{"a1":"1.2","a2":1712804042147,"a3":"0u05479z67z35xyz124782w133u6441181y139u83yv77978700407y8","a4":"54539af86fc50dcbf89a5354cb0dc56f5b0f409f900285f0","a5":"n1jWXV+5fY5NrEn0wRJJpSgiPkPcof60rtp5Hu6TVpbQLWfevIyz3+hS1efpb8H+5vRAk3UzZTpbOlVJ1qiT4a39J3CvPV5iQ3rY1arjQRiPbjfXlr4p66Bp+f0BCSDCOSse/kfbv9FYnXd4YKNUdP05jldJG6TbLtiDF8XksoVEQ3tyCXmUcPG4IeJPTO6c/Cv6Dc6fYnwxWOorLHK0MnhHNSPHmOvM+SkjS6W71aZwHjuaa5GTskoW4p0A","a6":"w1.2c+MEMgoYR4CitkGqFQBMlnhuMoaTeY8yObWB79aWdszASB4FmYv7DseblcrUUjr1Uryb5BqOPTq4VWn3kdRAYXJUiwO9jSqUWyNOGb4wic6eyuhYkTAZKK5lgHtFcfSgLFUSsXiqT0wykHy999l8OpkENJdkV6hWX1u6lrHo7G7YawLQmzQtriZbhtxUr036pbFFuCmRbl8IPbLShEQ7PTqphkYDhxc0K49mlb7RqA3cgZiqcJYbR4DYBBGMu2bgvrHCp/bYYn33+/L/Y4pkTEb6eQ+CYdxGGZjQayvPfUSdYQpj5orkpiK+O2poCYO7JJKMdffBzb1fE6EapEocwkiyTZ71p4dRtUBNe/8nEolDXsRTdI6Ol99dSrpjvB/tz3xiMDHIE+Rk/sW8mRJVQEQ5ScVvBIx9zRV7j9HAPT0N+V+qA5h8z2mjmt6R84zayIZmdrFHvwCCdeRdM8X6g0B+KqUsbuhaKtwduEmz9vFr/d58Es3IFlwkhyfPk0huPF34Di0LcZlRPiBgdf5REJciwZ5DmySCJvQIG7Wzsko=","a7":"wx77af438b3505c00e","x0":3,"d1":"50f7bb701ba6700672fbc242220593c5"}', 
    'openid': 'oRRr90JhzewOwG7q3SwtO_6ZZBBk', 
    'User-Agent': 'Mozilla/5.0 (Linux; Android 11; MI 9 Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/116.0.0.0 Mobile Safari/537.36 XWEB/1160117 MMWEBSDK/20231202 MMWEBID/209 MicroMessenger/8.0.47.2560(0x28002F51) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android', 
    'Accept-Encoding': 'gzip,compress,br,deflate', 
    'csecuuid': '18b860f1241c8-7df40836e90e5-0-501db-18b860f1241b3', 
    'token': 'AgHMH2h5Au6ZgqE8jbxw_8FdtplSHp-t-Kow6nu0qG-Bk9rJjeCsWR5s1ycLnZHwV-Uuiy9py0BNQQAAAADpGwAA02NdQxE6yoq9nVJChQXZBAoeFnSK0AP1A7E-rlRP-f4HZiJ40WuXIcvHbRvr4DzH', 
    't': 'AgHMH2h5Au6ZgqE8jbxw_8FdtplSHp-t-Kow6nu0qG-Bk9rJjeCsWR5s1ycLnZHwV-Uuiy9py0BNQQAAAADpGwAA02NdQxE6yoq9nVJChQXZBAoeFnSK0AP1A7E-rlRP-f4HZiJ40WuXIcvHbRvr4DzH', 
    'content-type': 'application/json', 
    'csecuserid': '2599961533', 
    'openidcipher': 'AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM/hf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n/GVnwfURonD78PewMUppAAAADi+ThIHSEJdvkjBHUZTgEmzt68UFuF7Qu+vAqMR8BgUmSO7I/rXggJ7k4BdE5uw1/mXOekqH3P/JA==', 
    'Referer': 'https://servicewechat.com/wx77af438b3505c00e/1185/page-frame.html'
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