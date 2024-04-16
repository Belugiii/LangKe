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
  "userStepCount": 13998,
  "code": 100,
  "riskCheckModel": {
    "uuid": "18eb718bf24c8-3305e95ac69d98-0-505c8-18eb718bf24c8",
    "platform": 13,
    "appletsFingerprint": "WX__ver1.2.0_CCCC_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",
    "fingerprint": "",
    "wxRiskLevel": "{\"openId\":\"oRRr90Pfh7mO5Vp4RUTWyxXY0Rgk\",\"appId\":\"wx77af438b3505c00e\",\"mchid\":\"1399386702\"}"
  }
});
	let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://bi-mall.meituan.com/api/c/game/walk/uploadUserSteps?largeFontSize=false&uuid=18eb718bf24c8-3305e95ac69d98-0-505c8-18eb718bf24c8&utm_medium=wxapp&brand=meituanyouxuan&tenantId=1&utm_term=5.182.5&device_model=iPhone%2012%3CiPhone13%2C2%3E&optimus_risk_level=71&optimus_code=10&poiIdStr=oKbQ9Iq9eWfEeUXnpLIgawE&poi=0&stockPois=0&ci=140&bizId=4&fp_user_id=4428656834&fp_open_id_cipher=AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM%2Fhf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n%2FGVnwfURonD78PewMUppAAAADiK2WYjuR5Cxm0tLNKZjMduKqc3CgOHTG0dn1oPUfqTWeAjaerd%2F%2FVFbJS%2FNGrrAkd2q2uDn30kyA%3D%3D&openId=oRRr90Pfh7mO5Vp4RUTWyxXY0Rgk&unionId=oNQu9t_H5V42JVkDszofncO7qFGo&routeId=pages%2FuserCenter%2Findex%2CsubPackages%2Fmarketing%2Fsteps%2Fpages%2Findex%2Findex&sysName=iOS&sysVerion=17.1&app_tag=youxuan&csecappid=wx77af438b3505c00e&csecplatform=3&csecversionname=5.182.5&csecversion=0',
  headers: { 
    'Host': 'bi-mall.meituan.com', 
    'Connection': 'keep-alive', 
    'Content-Length': '3506', 
    'openId': 'oRRr90Pfh7mO5Vp4RUTWyxXY0Rgk', 
    'content-type': 'application/json', 
    't': 'AgHaHRpFJ29p0eeBG-k081kf7CSIN_lcg5spgSSPESPhYPKZXLF2viFc2YHaxQdLrna9ViNnFs5sPgAAAAAoHwAATUP1g5tbL80WMCRCJH1jSkVqJWouhSbpCTlvxdQCBQKzONUztRXGrRf93PzNA6Fz', 
    'csecuuid': '18eb718bf24c8-3305e95ac69d98-0-505c8-18eb718bf24c8', 
    'mtgsig': '{"a1":"1.2","a2":1712552399934,"a3":"yx81w92z6wu056u5001285592075x76w81vy281x84587978u181z728","a4":"22c919b42ef88204b419c9220482f82e8acdda9e8e4f22b0","a5":"v9/aatsD3H2urRcXyhX2nYnlO3mvFl9suGynkzMqmhliu1Ms/Qvm5RjQV9Y1HnxgACtGnEzWR09wsAsN/ui4Ws6g1DUWDlVZ1wct4+YdMSP2jtCPgL1zIT+ZIjnutWAz6Gk/DYG+79ecIiysBO1nxPtXDiPzBypqkzz6byPyxUDXqYHQ1s85nwQswP+ADTI18XzNIA3nV2EDvqXfg4976zeYmOZCkUWbQPd9LtocNIacbjhUlEhnlsRtK/a7","a6":"w1.2z3PeHu4oBnDMUvp6JfdRsBEaUFHjc3E3lGCR73W0LX4UfMMva/2fCGsV8OIWOIKSBlD1NRqchDJbJLYZ2FfadJmOQTvTW03daoEChR3ewbIcsVbq4O6NnLziJ0DkPPR8YOH+GhF+pI4ZHClqL1nCG2QkSUgV4bLbG8RscOpuZk6+mp1nMZbJ1IFEAiZF1QMS7Ccq18TRR29aj5Xq1czcQmhsrhBptOtB/mkyG5LZ8cycT7F2DSeDayNJrOxnsB5+fSpkYWAGAi0qm/aTHdVrTg62TLgYBB8XJJv5L3GvceYM9wsvN+ykTmogTN3F+Digv0YmWyD30na6EMCvXX7G+o9T0Tcvfp0El2P95mM4K7C29QwAG5GTffjkQlJmaJpcyZ0HPsbAygm7IfghaWr/Wo4uJaDCoBosYVIuDf8CcJ8lTmbjL/BQi4kQe6Imm13kd3PEhzkmmRk9iWLPzTHEuFNn9dCa3UuhkTubR2Ji1EBUHLrJXlwGhbUYlHIVNfgB/xP7FS/zjGkGjJoTn5H5Mgbj3u4glGPKM0ELmPXBT5wzq7Q0/kA2Lvd/KzBQVS65WfynCVfYK7Y3q481hON7UNHnHxnpT2Nrjr0FXoeNYFs=","a7":"wx77af438b3505c00e","x0":3,"d1":"43f09b7040ac71f345ceab5935a8621a"}', 
    'token': 'AgHaHRpFJ29p0eeBG-k081kf7CSIN_lcg5spgSSPESPhYPKZXLF2viFc2YHaxQdLrna9ViNnFs5sPgAAAAAoHwAATUP1g5tbL80WMCRCJH1jSkVqJWouhSbpCTlvxdQCBQKzONUztRXGrRf93PzNA6Fz', 
    'openIdCipher': 'AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM/hf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n/GVnwfURonD78PewMUppAAAADiK2WYjuR5Cxm0tLNKZjMduKqc3CgOHTG0dn1oPUfqTWeAjaerd//VFbJS/NGrrAkd2q2uDn30kyA==', 
    'csecuserid': '4428656834', 
    'Accept-Encoding': 'gzip,compress,br,deflate', 
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.44(0x18002c2f) NetType/WIFI Language/zh_CN', 
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
    "uuid": "18eb718bf24c8-3305e95ac69d98-0-505c8-18eb718bf24c8",
    "platform": 13,
    "appletsFingerprint": "WX__ver1.2.0_CCCC_dfwOgF35EQNYzVh8i27kXL04k6XTiM6UIbLC34PDQwDR2/7/JMvZnBl7bRUDYzeKGRaW5ZnQHg6kH708Oa8nzPupI06/z7RayfxuX1pvLPW7rK0lT91fr6PduJfRnD8N9H7GBxZdiRLD7aXheaLszqgPcwgWWkC9Mp5+fziBTMZ1HA3pD/ZQJDEJ43HLDOhQgYnqQHafeP/Mx+rzfMTSPt3F41VrvZqnbSJx42c4cOXC5m03i6ebDmRBz/zaegxavc7zYYRUChB237FSxPlLZK22SjfopOGKwTm0VhHEG9cqvQQuknLudfOg0Z9P/sJjrtAUu5lU+jO0yySRM+NpR1sA6bx4l5pVr58jWc/bZPcrpFWyjR1lqyONfA9vJNH9YYbFVrZuyqwNfk4vmIF1g5es74o79DvuCQCfrS1+DJbZNMGuhBEWZwXlP/VW7gVQ+4OcYOuoQ+sWN0UQl9hAT2TTRSwa3xrS9JJNZk/5YD/fWwHXGYrPJsoBN34hFZ9ybnwnQ7z0dilvJ0iYVf5/Pe0sCC5hEpa9XlskUUrHheDJiDHDA6TjTow0e1EgRc3yZLPH0fvAfws4Ox3X27wHh3TQsu0icK8KojC3AICad+/yse4mBYkdnxX6pe/+cgylXvO7QTfYyRBHYkLWruNpBHk4ZAqr36ApL98LP6Ni0EsB/N8mh66YbXQzYsjScHjNRjHQUKS5+flHEubFslVBzu68L8QXDvxJ85Hbsyor0AVpwH42gfed0ktKib9mNWmlmLlYtdRpCHcqGze6pC0k1XzsgvSTKUTTim08L+Ei2bQ6+VsFyAhA4lGnaE5PYHILnewnSzGkxlJrkjerXXr9FX/+Zyjm28aOFA4WWa01cMo9yYndqUyL2026IwN6evxpwLFwb/Q6OCoVlrbSRSNJ6xzaqowcnHLKQ8rt13TDFwPOrbPvAGTLd9UaSIblo/vKidGa1xDleyf+15ZOc/6ALpo6jVhdLUex8pj2z1eI4xAw5HUkwf6i4NJbOgcI+NVdd+w6+F4nWgtgIr/nGACYKwa/8Cf8qUXXZoePOOqEM1RvukWUq+04gHlZykMgUcbbKhsBUPjoXU1+WIqbycUCsjgSYpiG2D6/2pCJXg4a6Eqaxa5CDVOgVoJkJoYIDUIa423R1nvzA0uCmP0AniE/ujKhbbTGweYdykzQo/mYBaTDWEWLEHhmgzP/7iByi62Pef0SvKsOk1vKdYJ4Y9jADT1ZhCFJAGZhU0Z175/bpHXQ75RXkhLuhCIV6bwDCDgcYGZFvx/liCZdy+jj+PauHnn98mw+E1rM44QCNtwqdTsgJan3umiZlIFjtEbJQZNUkfFgbXFY6uphmCj1CxlEjFmdNTZBRNHmb1nCIws5IvHguoJeCVAbvhsqFzYQp+J7IAOxolBpRoncqwkHJ7AnYaELLRC2aHRkyntaEgrCxrgolhQO4n6/Fusanzo0uKU6+RWt62/NGWz6T//BzTF2bmKBbvPm5OkVI8vbZy+P689FULWU30s4Nzzvv5if1c3daFQnl1zTUsen+7rrBhIkR7ZN4LmqljJ3paai3Z8fyBaKkr3RvlFo7+LWPEBHrirsJueRSTCQkVz3tq2gq+8XAzIu/sblwOAfF7Wsh9dnBilSSdzMpqyWGk+D84f9yaM17LRHyKGhpUgkEa0aT4L9dFho2RJ7B+EByEI0bBMcrNQ7XRsjNrpgm9ozkI66LNybxNtsjU/1Xuh9ZzgU0az2jWi6Yq/2C3uCcZJ9H76XjStggWxg9AtXiQrq9EhEu0dejqgYJDhTsmqtp7qq/DX5d0NmoJ6izkI40AbG3q7iceozDVN/zzC8M6OqFbKCcyMqq4+1dQybCVCXc54a9FF7c4lGRT0KlOaM4IAccF1ukK0D15l3JeK6l8P31vv/yTiEANVs9mY+QvO3c13Ks66rksWgTaMPFh5Rn10T8wcWQo0iCrnJ+dNRqY3z0Y37u1XMcQZqjBGZmpiBrXfWJ++AFj0Glr6rbgpc4K0gFqrPncmYTScJ0/sc0zVOWV3H4hk4/aJczlTL0kI51OQPYldNYO/PK7SOZ9mLdd3A2RD/hRHAoZFCSrB4sKI8U+UfCHSylUHX/T8T3N2dxAEQTlYBgKU3gydRHfLTaoEKW0uF4L7+Fm+o56TRmA9a6Oq88P2HSwM0Wmgc3q8hfbXvjyWTfEp89Bu7Ts90ELs9AH3Fj1HFtJ4HXy7H6yiINCtPxsuUzDMkce+oeb1nf7OJkwzGsafaq5FSCpk0hP94mccenRUQiwGjlqn9DFi/kEsiBARqb9x/ZkjkBKReJVbV9HXXzC3ViCpnsr3M765Sso5AoV2bEGQos1+iMGOneA4AKoQtGJUc5X2roOVwcgX8NP2SOz9A7IJNoSZacZfs9eAJxMT493Y8Ykh7KQsc1OHkS9pnoymzQMfE2aaPl3oTcJ4derMJebp2peouqNh0t4+GytJSvRQFvWbOWsq+q7qhSAAsPtAXKH67rWVBMLim0JTZiBoAPR0SFsanMP9CP4C7FI9tD8OtLqWzHS1UZzNfEvBZUjvGdUdUL5IGG8rTr24EG49oIEW27PcEMqVL1gPd0SEFrXLU4eiTVR5TaX/4Diwu/+niSiKUD6XVuStlSbpVs7jL5Ps2/HB9gTSjhxgvqe2hZ2FizxXIAKkZtJqEkzbq+sEdB+UY8r2/qiXoLsBLQDWjVzZtpFmYm52+g2fynnOXiRGUGk4BwFBB/+vN4HhcQwQ8f5oto8eFqE03S3e5EkvJi8KMy8LgCN1YJZdCvPNlL08Cp8Nr/80c/IHCRhKquNzqES64uQfK9o3UBIsLA3GUrBMjLG1U0vql0SFYseDZVgnEc96VoGJSyvkhPSHPaOMRjlM7h/U4Y6ESk2rUPmuFwciVd1Oqs2/+57pAXyZU1vfPXzrnsVL2P5cE2mhGugKFV786epUn9NqOBjR8RmeUrcPP/fxMzOeunJ/eAaLYPty8Damm3lvT2txSQUjVn3A4SJHCCsyDNQM7L+X2kbOuxhTGGJCLe7sO+LQgfWE/35Zh/S4Rz9vG14oDqHZnhQTklX9mB8EbhhjGMnB4VOZVhEj28bzwoDsS4mQbhHkU/0VfdOuEWNQxh36d7KGlONjRBmqVzIQBB3UdUcubRd6v5dHvi+Kmj81ezi2Qg+BS8LsO8Q5mPv79ShOqLVWt",
    "fingerprint": "",
    "wxRiskLevel": "{\"openId\":\"oRRr90Pfh7mO5Vp4RUTWyxXY0Rgk\",\"appId\":\"wx77af438b3505c00e\",\"mchid\":\"1399386702\"}"
  }
});
	let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://bi-mall.meituan.com/api/c/game/walk/convertHealthCoin?largeFontSize=false&uuid=18eb718bf24c8-3305e95ac69d98-0-505c8-18eb718bf24c8&utm_medium=wxapp&brand=meituanyouxuan&tenantId=1&utm_term=5.182.5&device_model=iPhone%2012%3CiPhone13%2C2%3E&optimus_risk_level=71&optimus_code=10&poiIdStr=oKbQ9Iq9eWfEeUXnpLIgawE&poi=0&stockPois=0&ci=140&bizId=4&fp_user_id=4428656834&fp_open_id_cipher=AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM%2Fhf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n%2FGVnwfURonD78PewMUppAAAADiK2WYjuR5Cxm0tLNKZjMduKqc3CgOHTG0dn1oPUfqTWeAjaerd%2F%2FVFbJS%2FNGrrAkd2q2uDn30kyA%3D%3D&openId=oRRr90Pfh7mO5Vp4RUTWyxXY0Rgk&unionId=oNQu9t_H5V42JVkDszofncO7qFGo&routeId=pages%2FuserCenter%2Findex%2CsubPackages%2Fmarketing%2Fsteps%2Fpages%2Findex%2Findex&sysName=iOS&sysVerion=17.1&app_tag=youxuan&csecappid=wx77af438b3505c00e&csecplatform=3&csecversionname=5.182.5&csecversion=0',
  headers: { 
    'Host': 'bi-mall.meituan.com', 
    'Connection': 'keep-alive', 
    'Content-Length': '3505', 
    'openId': 'oRRr90Pfh7mO5Vp4RUTWyxXY0Rgk', 
    'content-type': 'application/json', 
    't': 'AgHaHRpFJ29p0eeBG-k081kf7CSIN_lcg5spgSSPESPhYPKZXLF2viFc2YHaxQdLrna9ViNnFs5sPgAAAAAoHwAATUP1g5tbL80WMCRCJH1jSkVqJWouhSbpCTlvxdQCBQKzONUztRXGrRf93PzNA6Fz', 
    'csecuuid': '18eb718bf24c8-3305e95ac69d98-0-505c8-18eb718bf24c8', 
    'mtgsig': '{"a1":"1.2","a2":1712552400904,"a3":"yx81w92z6wu056u5001285592075x76w81vy281x84587978u181z728","a4":"b5b58798261811d99887b5b5d9111826905fa609494ebe2f","a5":"ig96qXeoEmturRWHIkcX6ZrRZaej0eEN9gkLq7wfqoO3DukkXdgezvXE6CJ3HruRDfCZdMC5sdWUciFZ/L4Ozn2sI6oXDYnG9a+akBfR+ldrLpdVbaD48ocjluBsymwV0QHZcvtmMcGLq/o/gPcfLxOim62RaKphEZP25BfmygnYFOjm8Er4Y3Lxz91fWaE2ykWVuP8dYXddzAIv3o9FAmHuMmvHe1xszsFkAh9bk6WiNAIBjgI1gC8D273m","a6":"w1.2z3PeHu4oBnDMUvp6JfdRsBEaUFHjc3E3lGCR73W0LX4UfMMva/2fCGsV8OIWOIKSBlD1NRqchDJbJLYZ2FfadJmOQTvTW03daoEChR3ewbIcsVbq4O6NnLziJ0DkPPR8YOH+GhF+pI4ZHClqL1nCG2QkSUgV4bLbG8RscOpuZk6+mp1nMZbJ1IFEAiZF1QMS7Ccq18TRR29aj5Xq1czcQmhsrhBptOtB/mkyG5LZ8cycT7F2DSeDayNJrOxnsB5+fSpkYWAGAi0qm/aTHdVrTg62TLgYBB8XJJv5L3GvceYM9wsvN+ykTmogTN3F+Digv0YmWyD30na6EMCvXX7G+o9T0Tcvfp0El2P95mM4K7C29QwAG5GTffjkQlJmaJpcyZ0HPsbAygm7IfghaWr/Wo4uJaDCoBosYVIuDf8CcJ8lTmbjL/BQi4kQe6Imm13kd3PEhzkmmRk9iWLPzTHEuFNn9dCa3UuhkTubR2Ji1EBUHLrJXlwGhbUYlHIVNfgB/xP7FS/zjGkGjJoTn5H5Mgbj3u4glGPKM0ELmPXBT5wzq7Q0/kA2Lvd/KzBQVS65WfynCVfYK7Y3q481hON7UNHnHxnpT2Nrjr0FXoeNYFs=","a7":"wx77af438b3505c00e","x0":3,"d1":"471746b61175cc7e94580b9b5658063b"}', 
    'token': 'AgHaHRpFJ29p0eeBG-k081kf7CSIN_lcg5spgSSPESPhYPKZXLF2viFc2YHaxQdLrna9ViNnFs5sPgAAAAAoHwAATUP1g5tbL80WMCRCJH1jSkVqJWouhSbpCTlvxdQCBQKzONUztRXGrRf93PzNA6Fz', 
    'openIdCipher': 'AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM/hf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n/GVnwfURonD78PewMUppAAAADiK2WYjuR5Cxm0tLNKZjMduKqc3CgOHTG0dn1oPUfqTWeAjaerd//VFbJS/NGrrAkd2q2uDn30kyA==', 
    'csecuserid': '4428656834', 
    'Accept-Encoding': 'gzip,compress,br,deflate', 
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.44(0x18002c2f) NetType/WIFI Language/zh_CN', 
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