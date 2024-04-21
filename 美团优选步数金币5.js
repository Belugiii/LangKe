// 159
const axios = require('axios');
var isGrab = false

function sleep(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}
 
async function main() {
	await uploadSteps()
    await sleep(5000)
	await stepsToGold()
	if(isGrab){
		await grabCoupons()
	}
}

function uploadSteps(){
	let data = JSON.stringify({
  "userStepCount": 24326,
  "code": 100,
  "riskCheckModel": {
    "uuid": "18cd86a1635c8-1d94c99c63cf6c-0-505c8-18cd86a1635c8",
    "platform": 13,
    "appletsFingerprint": "WX__ver1.2.0_CCCC_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",
    "fingerprint": "",
    "wxRiskLevel": "{\"openId\":\"oRRr90GpUAXDICW5tmTJtE3XIxfs\",\"appId\":\"wx77af438b3505c00e\",\"mchid\":\"1399386702\"}"
  }
});
	let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://bi-mall.meituan.com/api/c/game/walk/uploadUserSteps?largeFontSize=false&uuid=18cd86a1635c8-1d94c99c63cf6c-0-505c8-18cd86a1635c8&utm_medium=wxapp&brand=meituanyouxuan&tenantId=1&utm_term=5.175.5&device_model=iPhone%2012%3CiPhone13%2C2%3E&optimus_risk_level=71&optimus_code=10&poiIdStr=qEWisyRUhw1Otije4p-LFQE&poi=0&stockPois=0&ci=140&bizId=4&fp_user_id=3721686361&fp_open_id_cipher=AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM%2Fhf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n%2FGVnwfURonD78PewMUppAAAADi%2B0ya9s3LpnFUO8%2F4qcKLtRRP6ECpSdrmc1ZazUr7s%2BdUK5A376ZjT0TuQ1zdDPIM16M%2FTMS8zyA%3D%3D&openId=oRRr90GpUAXDICW5tmTJtE3XIxfs&unionId=oNQu9t4f5G2thmlQPgfZmCJbukVY&routeId=pages%2Fmain%2Findex%2Cpages%2FuserCenterLanding%2Findex%2CsubPackages%2Fmarketing%2Fsteps%2Fpages%2Findex%2Findex&sysName=iOS&sysVerion=16.4&app_tag=youxuan&csecappid=wx77af438b3505c00e&csecplatform=3&csecversionname=5.175.5&csecversion=0',
  headers: { 
    'Host': 'bi-mall.meituan.com', 
    'Connection': 'keep-alive', 
    'Content-Length': '3634', 
    'openId': 'oRRr90GpUAXDICW5tmTJtE3XIxfs', 
    'content-type': 'application/json', 
    't': 'AgEfH-yIxEoinClAfarSzgEBwSROzn1SAQhdzZiJMIIZOT4QAd97tyiceVYfYAw551Fvcstu8hgAZAAAAAAtHQAArT1ExMfMz2TXR6pJcjXTiTiAtSzr3Skie_psX886Bj8_D3Ar35LFeiV7E166MNgZ', 
    'csecuuid': '18cd86a1635c8-1d94c99c63cf6c-0-505c8-18cd86a1635c8', 
    'mtgsig': '{"a1":"1.2","a2":1706507727854,"a3":"z99u2zv7yz7u5wv713u0961u043x858781xw13z80718797854yzy2x6","a4":"10f6795d7df803875d79f6108703f87db30a3f433409c73e","a5":"UhUB0iZHIOp/UgO12xN2KvckXEFRZVZIU85Jw/kawVSdrNrDGjRCTdJjw5eremL2mSmcESF3Scv8RgG7cUSwT8/hoyt5ZbtjdVpDyeblOQQNjVz7IUo0MUXJHfTuumFtDdX4eM9+UgjQyNEGn+4rI7g/dTBp1Dy4APKeOxQZmlPfIgcbSeWhKeuQPHaO9iM2b8cDjDCIWObteTpYSWDPe1rYBmjp9Vg25PvdHRCXJjvX/IrNSoZMMCPvl5vt","a6":"w1.2lkED6955cRu/9sLYMJ/I4VST0KCAIMgGX22Y5lCvGNDOZEfJRR+94fOsabOB+NUR7Bc5WbFXtxIDsRlRA5ow7ZTei4vVSVChZnwvkyAjh75cHoiCxpGmBRwQH6gHAcQntwDwEVuoj2s6QnXqp0JUNmu3Fp2FmaQ9DRCjt6v8Qw32PzYvTVboqZ1IzgbS+c9dLpY/NCD7Eq+9XppUkQxR2vDF6A7rhdJAsFll1f/y4BqdPJN2pEu6xUxlXDAubytgaN7D4ASkgMzaCegJmMMoyIz+szC1KbKoZq3tTCP9ehThaVB2jtzva2mCnlN7yawyhxQz71RC5T0A+5Cw7ZsWaaDQtbb6AU6Sw4BAK7AtXW+YQzSL9xlOyzLR/ZgxCVBcFyQz/lA+i+6kFkZT/9MH70WrdJNBNsMSJKjIXdNoG8Uha/Zt/X9vA09mEvNJefosYdel2LY3TAyLtLHOIZg2fIAtY1b2tqJtNqquOfcTEmiDG4xiIIaysqjys0bsWujMRi5wGaV4tRlP/9RXO4cqG23oUoDzOppFHT3zzM++68EtHdw9YNJ6o94iFXeybVTVVoGcV0H1t3iPdo3L0yvXqA1Db909eCmijqsZTasgKnog+e2rB/21FInAp5jTzwtoUcF9UZuovJ3O7g9vQWWhHw==","a7":"wx77af438b3505c00e","x0":3,"d1":"0b61157053151945ce223f15ba474a21"}', 
    'token': 'AgEfH-yIxEoinClAfarSzgEBwSROzn1SAQhdzZiJMIIZOT4QAd97tyiceVYfYAw551Fvcstu8hgAZAAAAAAtHQAArT1ExMfMz2TXR6pJcjXTiTiAtSzr3Skie_psX886Bj8_D3Ar35LFeiV7E166MNgZ', 
    'openIdCipher': 'AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM/hf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n/GVnwfURonD78PewMUppAAAADi+0ya9s3LpnFUO8/4qcKLtRRP6ECpSdrmc1ZazUr7s+dUK5A376ZjT0TuQ1zdDPIM16M/TMS8zyA==', 
    'csecuserid': '3721686361', 
    'Accept-Encoding': 'gzip,compress,br,deflate', 
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.46(0x18002e2b) NetType/WIFI Language/zh_CN', 
    'Referer': 'https://servicewechat.com/wx77af438b3505c00e/1158/page-frame.html'
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
    "uuid": "18cd86a1635c8-1d94c99c63cf6c-0-505c8-18cd86a1635c8",
    "platform": 13,
    "appletsFingerprint": "WX__ver1.2.0_CCCC_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",
    "fingerprint": "",
    "wxRiskLevel": "{\"openId\":\"oRRr90GpUAXDICW5tmTJtE3XIxfs\",\"appId\":\"wx77af438b3505c00e\",\"mchid\":\"1399386702\"}"
  }
});
	let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://bi-mall.meituan.com/api/c/game/walk/convertHealthCoin?largeFontSize=false&uuid=18cd86a1635c8-1d94c99c63cf6c-0-505c8-18cd86a1635c8&utm_medium=wxapp&brand=meituanyouxuan&tenantId=1&utm_term=5.175.5&device_model=iPhone%2012%3CiPhone13%2C2%3E&optimus_risk_level=71&optimus_code=10&poiIdStr=qEWisyRUhw1Otije4p-LFQE&poi=0&stockPois=0&ci=140&bizId=4&fp_user_id=3721686361&fp_open_id_cipher=AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM%2Fhf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n%2FGVnwfURonD78PewMUppAAAADi%2B0ya9s3LpnFUO8%2F4qcKLtRRP6ECpSdrmc1ZazUr7s%2BdUK5A376ZjT0TuQ1zdDPIM16M%2FTMS8zyA%3D%3D&openId=oRRr90GpUAXDICW5tmTJtE3XIxfs&unionId=oNQu9t4f5G2thmlQPgfZmCJbukVY&routeId=pages%2Fmain%2Findex%2Cpages%2FuserCenterLanding%2Findex%2CsubPackages%2Fmarketing%2Fsteps%2Fpages%2Findex%2Findex&sysName=iOS&sysVerion=16.4&app_tag=youxuan&csecappid=wx77af438b3505c00e&csecplatform=3&csecversionname=5.175.5&csecversion=0',
  headers: { 
    'Host': 'bi-mall.meituan.com', 
    'Connection': 'keep-alive', 
    'Content-Length': '3633', 
    'openId': 'oRRr90GpUAXDICW5tmTJtE3XIxfs', 
    'content-type': 'application/json', 
    't': 'AgEfH-yIxEoinClAfarSzgEBwSROzn1SAQhdzZiJMIIZOT4QAd97tyiceVYfYAw551Fvcstu8hgAZAAAAAAtHQAArT1ExMfMz2TXR6pJcjXTiTiAtSzr3Skie_psX886Bj8_D3Ar35LFeiV7E166MNgZ', 
    'csecuuid': '18cd86a1635c8-1d94c99c63cf6c-0-505c8-18cd86a1635c8', 
    'mtgsig': '{"a1":"1.2","a2":1706507729094,"a3":"z99u2zv7yz7u5wv713u0961u043x858781xw13z80718797854yzy2x6","a4":"28bf181979b645011918bf280145b679df60767bde25c002","a5":"cOwdt8DdiPz/Ug0BOithzFdxgWb9N2HS5foepUjOJlGdCI8wwDIytx32ox/Symps1CR+MfH2RYMd7R7htEpGDtazQHmAtmyjU4Dz/W+WpFq2a/JnMK3LGPcl/bkaQg1v6Wy8uyLlOKvYALP4CTg4MgAdSCLceV/zXzWT2ADapD/gv0puWGh6FamToGa8leV2xWC+Rf/Znc21u56ZMBryKfK7lPI61wdnelihfF/jbZwcwtt3bIHbxq1EsSJJ","a6":"w1.2lkED6955cRu/9sLYMJ/I4VST0KCAIMgGX22Y5lCvGNDOZEfJRR+94fOsabOB+NUR7Bc5WbFXtxIDsRlRA5ow7ZTei4vVSVChZnwvkyAjh75cHoiCxpGmBRwQH6gHAcQntwDwEVuoj2s6QnXqp0JUNmu3Fp2FmaQ9DRCjt6v8Qw32PzYvTVboqZ1IzgbS+c9dLpY/NCD7Eq+9XppUkQxR2vDF6A7rhdJAsFll1f/y4BqdPJN2pEu6xUxlXDAubytgaN7D4ASkgMzaCegJmMMoyIz+szC1KbKoZq3tTCP9ehThaVB2jtzva2mCnlN7yawyhxQz71RC5T0A+5Cw7ZsWaaDQtbb6AU6Sw4BAK7AtXW+YQzSL9xlOyzLR/ZgxCVBcFyQz/lA+i+6kFkZT/9MH70WrdJNBNsMSJKjIXdNoG8Uha/Zt/X9vA09mEvNJefosYdel2LY3TAyLtLHOIZg2fIAtY1b2tqJtNqquOfcTEmiDG4xiIIaysqjys0bsWujMRi5wGaV4tRlP/9RXO4cqG23oUoDzOppFHT3zzM++68EtHdw9YNJ6o94iFXeybVTVVoGcV0H1t3iPdo3L0yvXqA1Db909eCmijqsZTasgKnog+e2rB/21FInAp5jTzwtoUcF9UZuovJ3O7g9vQWWhHw==","a7":"wx77af438b3505c00e","x0":3,"d1":"1af1ad9d8d5d832aa0972ecfbe32c04e"}', 
    'token': 'AgEfH-yIxEoinClAfarSzgEBwSROzn1SAQhdzZiJMIIZOT4QAd97tyiceVYfYAw551Fvcstu8hgAZAAAAAAtHQAArT1ExMfMz2TXR6pJcjXTiTiAtSzr3Skie_psX886Bj8_D3Ar35LFeiV7E166MNgZ', 
    'openIdCipher': 'AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM/hf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n/GVnwfURonD78PewMUppAAAADi+0ya9s3LpnFUO8/4qcKLtRRP6ECpSdrmc1ZazUr7s+dUK5A376ZjT0TuQ1zdDPIM16M/TMS8zyA==', 
    'csecuserid': '3721686361', 
    'Accept-Encoding': 'gzip,compress,br,deflate', 
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.46(0x18002e2b) NetType/WIFI Language/zh_CN', 
    'Referer': 'https://servicewechat.com/wx77af438b3505c00e/1158/page-frame.html'
  },
  data : data
};
	axios.request(config)
	.then((response) => {
	  console.log(JSON.stringify(response.data));
	  if(response.data.data.totalExchangedHealthCoin >= 100000){
			  isGrab = true
		  }
	})
	.catch((error) => {
	  console.log(error);
	});
}

function grabCoupons(){
	let data = JSON.stringify({
  "code": 300,
  "healthCoinCount": 100000,
  "rewardId": 6770835,
  "riskCheckModel": {
    "uuid": "18cd86a1635c8-1d94c99c63cf6c-0-505c8-18cd86a1635c8",
    "platform": 13,
    "appletsFingerprint": "WX__ver1.2.0_CCCC_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",
    "fingerprint": "",
    "wxRiskLevel": "{\"openId\":\"oRRr90GpUAXDICW5tmTJtE3XIxfs\",\"appId\":\"wx77af438b3505c00e\",\"mchid\":\"1399386702\"}"
  }
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://bi-mall.meituan.com/api/c/game/walk/convertRedPacket?largeFontSize=false&uuid=18cd86a1635c8-1d94c99c63cf6c-0-505c8-18cd86a1635c8&utm_medium=wxapp&brand=meituanyouxuan&tenantId=1&utm_term=5.181.0&device_model=iPhone%2012%3CiPhone13%2C2%3E&optimus_risk_level=71&optimus_code=10&poiIdStr=tew7XO-B1T3h2zLqLk7qnwE&poi=0&stockPois=0&ci=140&bizId=4&fp_user_id=3721686361&fp_open_id_cipher=AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM%2Fhf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n%2FGVnwfURonD78PewMUppAAAADi%2B0ya9s3LpnFUO8%2F4qcKLtRRP6ECpSdrmc1ZazUr7s%2BdUK5A376ZjT0TuQ1zdDPIM16M%2FTMS8zyA%3D%3D&openId=oRRr90GpUAXDICW5tmTJtE3XIxfs&unionId=oNQu9t4f5G2thmlQPgfZmCJbukVY&routeId=subPackages%2Fmarketing%2Fsteps%2Fpages%2Findex%2Findex%2CsubPackages%2Fmarketing%2Fsteps%2Fpages%2FconvertCenter%2Findex&sysName=iOS&sysVerion=16.4&app_tag=youxuan&csecappid=wx77af438b3505c00e&csecplatform=3&csecversionname=5.181.0&csecversion=0',
  headers: { 
    'Host': 'bi-mall.meituan.com', 
    'Connection': 'keep-alive', 
    'Content-Length': '3316', 
    'openId': 'oRRr90GpUAXDICW5tmTJtE3XIxfs', 
    'content-type': 'application/json', 
    't': 'AgEfH-yIxEoinClAfarSzgEBwSROzn1SAQhdzZiJMIIZOT4QAd97tyiceVYfYAw551Fvcstu8hgAZAAAAAAtHQAArT1ExMfMz2TXR6pJcjXTiTiAtSzr3Skie_psX886Bj8_D3Ar35LFeiV7E166MNgZ', 
    'csecuuid': '18cd86a1635c8-1d94c99c63cf6c-0-505c8-18cd86a1635c8', 
    'mtgsig': '{"a1":"1.2","a2":1711084701299,"a3":"z99u2zv7yz7u5wv713u0961u043x858781xw13z80718797854yzy2x6","a4":"540ddab3909e3edeb3da0d54de3e9e90c05c95301e620ba0","a5":"XOAr1rbo2BTDfH8AnFcUq9KIuBQM9aul4i2knYQxWrblcpT7PhM0JcBji0GDq0iKrs8pmRzE5L44lvoRZHP8DVZCnMp9XMhP3TtRk0hJJ89wyOUC2t1if09nkpatao0R3pRP3Y3igUW3u7GZHZJ8sb0/y5EElGBKI9no1ZJFo6AL1SAzjiIoVX6fpQ68zzFUr4CJGxCVu4Q2BPlQgpj01vMpNAussWssbWHt3JS5THriqkxR5rIcvdjtK06sxrnmTDt1zaZ=","a6":"w1.2fZfihe0VIPI52ok5QmF8fDfNeAeb6cffSPoxyv3HbRoisii3dzhz/QZEYsmOhvynM99UbOpIYTDvVDyoOD1+IKCFYnV3+s838NGrjRv/+QnS6VpC4F5j6DuzXGUrl5DBE3yIiNc5qohrGEb76+qejL4wgYTAnXr8ctGPtn7y0C6vCMuPEQW0Lutbe5ZxCzdg/FXm0V8K5CqVmy526Yk9sGBOROCpyHuzq6/Hl50QkPEmNAYRDFyZ4TEyHbfpnqQE9lBeEP83ivj0deCzZqBeqeRQQctAwrF2CNNaWa0I48kDsKKqUcueLbOPpD3PSofUXiN+gMTUAGudHjy4sCB+2kJFPFHoi862LHd+TUo6Swwsg9kfQJsookcmE+viMyIk8vIjTbQi+StA1+WSjNjsAom+8iklzjvAxmoIK7nzCtmuRSZLINxzO08y1ZfFqMzdpXtvTA3L8MGHba6WnU6ITdbtXbhnCcoh+c3onci1eDJfiIXe7jOyBvLG7lUJl0jFl97RYkPPIQHxNdMhtGnZkiCATSC1VqsZkHcbys31qazr3YYR6jLQCJE/kVDQpejPR1U2uGt5fzU6KinVVMvaP+Vmlh2d0IN7qAPZsE+6v4cwwf8VV0LnsdwHtEIumodws4FYoHOIdiyDlZmOe8gVKrDnEhDCCsRH86hwTBl1NA0JRsx02nhquY/ehiujzIXgZHwpe06dN2+EpKZoD5QP0w==","a7":"wx77af438b3505c00e","x0":3,"d1":"9695639f5c7384cfe670c625c36f2acf"}', 
    'token': 'AgEfH-yIxEoinClAfarSzgEBwSROzn1SAQhdzZiJMIIZOT4QAd97tyiceVYfYAw551Fvcstu8hgAZAAAAAAtHQAArT1ExMfMz2TXR6pJcjXTiTiAtSzr3Skie_psX886Bj8_D3Ar35LFeiV7E166MNgZ', 
    'openIdCipher': 'AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM/hf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n/GVnwfURonD78PewMUppAAAADi+0ya9s3LpnFUO8/4qcKLtRRP6ECpSdrmc1ZazUr7s+dUK5A376ZjT0TuQ1zdDPIM16M/TMS8zyA==', 
    'csecuserid': '3721686361', 
    'Accept-Encoding': 'gzip,compress,br,deflate', 
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.48(0x18003028) NetType/WIFI Language/zh_CN', 
    'Referer': 'https://servicewechat.com/wx77af438b3505c00e/1180/page-frame.html'
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