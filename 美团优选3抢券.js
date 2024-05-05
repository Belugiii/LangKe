// cron: 0 0 * * *
const axios = require('axios');
let data = JSON.stringify({
  "code": 300,
  "healthCoinCount": 100000,
  "rewardId": 6770835,
  "riskCheckModel": {
    "uuid": "189548f5eb8c8-a3f06b074c786-0-501db-189548f5eb8c8",
    "platform": 13,
    "appletsFingerprint": "WX__ver1.2.0_CCCC_f1XvknWTUAvyQCempafmQ3TmwkzU9ywgCXWKdbM5hH2MDFrdr1Dg7H9hqX9brUNHpxeNjWedIWbrCZctr3weV7DzAJs8sgmR2xNP+KyLrSBVyvaRgAsDnvZ466xzAIr0DlKO6Kt64r3BEdjq39u0vTyMWJxHhMAhhxY1OTFaIkUK5rZkq9BbkJf9bOChri2U7IU1DyodsNStbrpccP8QeUxvK00FeZv9YUTybfijOJChCwtbC3QykwB0qTxv+5HEf54o4MszgtdXw/H/rjoyAZkYeD/yB5aduklE7KQBYk+qdKBjNjDeWiHmbHv/ZBuAIRQ6/A9/G3kICK48VjIcJ+268Ze25RE+KhAZ06+RtNLrs9fx9Qr7oNNly4UE2wsUA7JvKP4B0q8TnDx50GjVoOsn/0Qi1I3k7IESk2lb/p7M9BNjf7gTMVVaH7ufa+5gtqLIhPTWlygi7oofomwVG0Zzb+5WW5v/sY6pHoSjoBRPkEyWaYKKAods2Bf3PTiGMT34V6cJGSlOoJoSxhhIoz6Z+Q6l48v4ikCEEupewLH8U3ROzO77pfrmDjxyBJijbXKDkL5FJr8HAHi41yfhbBdKyd7WeYJjx46vu1cyVqwgV+y/PllG/smxC/kpBrhC2YAp0BfNVO/9KaYgsbQ8jeeQtLfIXnMUOQDG14WUunikiq0jbnM62q4iwWA+Mc3qKtHGPmyihIMQt1G8IAUzySgDglTCQrzilVCcQjtDllnONBC7Gt/VvrRB/IE6Jh5ZV3Iv+F96Wsw9UaHasVh2GUGS3bTwHLrWlUd7udeIwQhc3MBlGZUcfpv9IdsWPrVmA8afGuYTG+1SD+3EwyedmaFwMX6ihSaM6utvdomXcJvE85vKsMj6A9vdPSux0Dv7zI99ljVND6+0yqj+PPDWl825Gx3BhcM9Fmg1SKDnPipJ2bZS4UyrLR/R3rxtED7BxPLqF3XYHgM/pXQbPDasydYY7fgetmWj5YcUfXUKmmfXc+AzVNJyqFT6GI8lD7AGua+BVrm2af15btfiVNx/IRke3mwXvz9egm51Y6lq4czv0a+ve22z+Ms91A/W1gpGbYo3FJPU9k5lob0T9NEhSFjKKG67MzgwJpfjvlQvZxkLD6Nk8PanHs+UpSwomrq9xVoDAcDlv4pqhHNTN1lGwbrWLg654jMfwYLNUDEUw6ncdsdCWlSUwRYGbaGJyBvNQxo2EOAUd5Ufi4QZz0OX9qRCg/p2MjwTDyomBYBPYpARjxsbM5DdgnXn0x5SN0OIWHSeFTpJ9r5gngAhRVK4U6QbPLp/VC/ojsv8YKKinJOb2V+oATh52waSOS3bGZP9tiskCPzLTxoz3BUJoFZqKVfzKFWPYfaWBPehAzmA5XcQ30MTcJModlOgJoYDOOCeT87VMB4TaYSnM0YihP2uCiFm41z68jqe0OnTr+VsuHD+JWDLUzZlCp6N0xDxNmH/Dz6CDLEKkgKBeT5EhhKnJc46SQD2dJY7cZeZiJnl8I0CwyoANPknDudbL+N1UBXM5dcl6SAj+TKHJ8Zj6iohrlv8YjbXJ0v4LgtG6V4/k0kSlSdPQx5LO3PB52I4zkKFbZDsMSxsmOG0lreFKJ6aGK2vQR1WYwsyOdRIktpwQUpa5lFWbuF1bmpBVZGjtNxCtkEOaGJToEUFAYuSbWcV9+/DnxGl/ikehd/IOKGtAn9qDMAvI2JtETYJJ9w8omxM8WAbXct8DgXTPgNXRzBJW3UDQWJyvGjNOD7ELbL2hWyBhJVIWVWpjZxkWajJU4+AWHHFyRWXIRpmcTGdUayJqIXZGAknT/FuBD7AcSFPKseLjlFDPi8d5m5HKccX26cKl6zHtXlxI08GleMyg8hLTFn3inM2cFrS+/YMvxUD0rCkdtY9o08/Dt4+sptk3WaboWcrboJLAAe07Pq7RAeV/w7oB0AGiK2rPlMPdB6F/2bmEsshSQx4aRRT7BX9pTwfHSjrtqUmeFVUq/jwrGUkPMmHIgciRVLfQMxqTOmmglaKXpZiH8x3VoCaRuOBc9cNv4uN2bgjCJv7/lbIwDW8zYr+6zf9FyEWaJ9VhnEfHwgvYTOBM5lvjzsv8LpxHkZpBb86C8MI/BqknDCJWuevIJ98V5HXo0C2XxHuE5A+wpr+0s2BE4tZqHwZTiFLwhlxwi7JYVUdVPha70oW8CTu2KR8A8aCqUDuyO9dgf0172dTD6gX4cAUTm97KWZwCRS2ue3oA/yI8f+0vm4viIvoKSiU/8YA08IYfEXuSIJtEifI3QyAQZB1eYpKlaNP1YGIdyzPa7ZKQDCdrUm/dM5uwT4hw0EPezCGxS0yzKuiNA3UifQzVulorGBKOgC8SWGDXg33HYhA3VjudR61LByPwURpbxxCJjuVOW2owHXPmZZwnjgtbzDad3AoRBJe2jF1UHopk0muZIZHjE/ZqVU8CBuScZjDAleZ+0eazIVEFYJ8xl5unTVrBreX6cQOY9kvp33HNQ7Ho8/HrBeShydiBHQG7U/CjAcPIQuUbO5p9vdTPKyUTHTe7DLHX/sl2saRBo+WSQbDCNxWypGRDthwb9/ACceUVxsOLS1SSMeT2TsAn7tRzxwJa0tTDTMavIcCi4DphG6p/Wg+QkcjoSCUWSga37+gFbJu30HWpkqHBn7V/rJNdf6K/b18pYQcV9vMlCFl50+UeBH85ptn4rmcAY6rpKz6MuJxO07jBzKQmmvRHzsD9vunq6b+dVwwzSBEfbH+FMNBjZXOvytq0u71dhgNN5qHsBt9tegvjWfg5sPJ2wjE0ZB59SAjfQ/O5ppCP52YKwVUNZBfqHiUJCZUC2yZkVj59URVM0sJA0BuWdw+aUzkNdxH9hRBfqSeS4ZODobTBZiinMdo35XhleMMf5gq1W0T0d7r6NHD29Ux3BVMPOxEd3iEr3L9CiWWahjlJJ/1CMXsTe5dSkN44ufotYLzktW0uS1X7+Sda9XRmHXpNmcDhgl533pbuSLMCMaH+uio6TOx50bFHxAsJ/UlnA==",
    "fingerprint": "",
    "wxRiskLevel": "{\"openId\":\"oRRr90CJ9KrcREPc0hUC5-ncgZOg\",\"appId\":\"wx77af438b3505c00e\",\"mchid\":\"1399386702\"}"
  }
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://bi-mall.meituan.com/api/c/game/walk/convertRedPacket?largeFontSize=false&uuid=189548f5eb8c8-a3f06b074c786-0-501db-189548f5eb8c8&utm_medium=wxapp&brand=meituanyouxuan&tenantId=1&utm_term=5.186.15&device_model=MI%209&optimus_risk_level=71&optimus_code=10&poiIdStr=Fs9IzmPpK_1JGhSTL-MnCQE&poi=0&stockPois=0&ci=140&bizId=4&fp_user_id=4079009624&fp_open_id_cipher=AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM%2Fhf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n%2FGVnwfURonD78PewMUppAAAADgyjlJHyosrkcEpGILVQ6SbJgZyWpd1Ig5KP6cLZ7bVssjkzKYXCFkYls1qJ3nX8YIojS7P2RxChQ%3D%3D&openId=oRRr90CJ9KrcREPc0hUC5-ncgZOg&unionId=oNQu9t_CT6NfXxmQnQx7ZIXjsTNg&routeId=pages%2FuserCenter%2Findex%2CsubPackages%2Fmarketing%2Fsteps%2Fpages%2Findex%2Findex%2CsubPackages%2Fmarketing%2Fsteps%2Fpages%2FconvertCenter%2Findex&sysName=Android&sysVerion=11&app_tag=youxuan&csecappid=wx77af438b3505c00e&csecplatform=3&csecversionname=5.186.15&csecversion=0',
  headers: { 
    'Host': 'bi-mall.meituan.com', 
    'Connection': 'keep-alive', 
    'Content-Length': '3359', 
    'charset': 'utf-8', 
    'mtgsig': '{"a1":"1.2","a2":1714915255999,"a3":"u727y741zu5z59wy042046x8x1yy99u5810451u4w057797850740w23","a4":"6bd4737d616d36b07d73d46bb0366d61c2553e2372635342","a5":"1k0BjozEtybHCjy5d8KG6JNlDv2IXMDA/IDTHHkZmZ1bbsAnDqCnDUMniniMDd5yVahdyfi8aO4Itd9uV5iSmzsjZYoxhemmlCrt3onSUepEJ/l4ThKw8/Efb4CiVEH8dK1QURjhggMMSIMee4cW5AM7aMWBTCBprJRdsddmDbZdNBMKdqDyi1UHJK1lqr2DqGOmxvKxFE84hilokpsi/ftPHai9P39U7IvS1rypqbJCkZAUWoqNplN/pW+YDqbrDG+qurXE","a6":"w1.2rv6i2/9PXv5cmKoBqD/YY2roKSLLRYXJkY2KCQNiFqASx0N8NbjuOXjtTS/OBqT3b6CveMA5xf4VW8AJ+o3NFoqbivRN1q+U4jZk/WEaKX0yVWvIHS2o3txOZG1rYPM5SYdBMtiKK0uSLmFzPlMOsYjC1pfv0zHdW2pXpR1ZJu1upA8PXPMdVWk2akHctbf6sGzh10g0Rg6dtQhxvMdUk5LDSjLwAaa7QbNEfegpQ+BjvaUDBf+KeIoR/c8Gc+4SOK7xi8mXJ7SnUo/mQrzbnrmwfMsEGfq9JEcP97LEFWEYzAZ9p9+r7mJWmhs+cVqMWDE8SfGtWAUN4DxIP5JNSlVs3eLKcmqe+IRUvACxH4rZsvSck0D5INBxHeWc25drizgqOBxWniM7tTWW8CKNV2Q0CRPq6V14J8ZxM/WON0GAZWdx5kKr0RS4kTRxIlTCTuVFVNCgD2WQ0Z4j9AuULbXxa7NS+HQg7vFWrBuUGTzuRMnbp0Ubp2cpR0vzTcv/1sIRvi7fk6PNbvIylfkxU58Pp+38C/O4Pxz/ZwARcODF3Yav4jKIXNT0cj7Q4ou0VhETBcWRHVOgvlvrmgaaAMpg5UvqKkPzsOPwWTrrB48+uc9yyXY1Z1vTntJE9k+nNewgxSVE91DD3Tg0KoWVOpxZtntzZrqu4RTLe+X4vE++n1OUIZsNIPiJC8nuc4f7","a7":"wx77af438b3505c00e","x0":3,"d1":"c39af327244a6f173c15e9966fd1a2a5"}', 
    'openid': 'oRRr90CJ9KrcREPc0hUC5-ncgZOg', 
    'User-Agent': 'Mozilla/5.0 (Linux; Android 11; MI 9 Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/116.0.0.0 Mobile Safari/537.36 XWEB/1160117 MMWEBSDK/20231202 MMWEBID/9254 MicroMessenger/8.0.47.2560(0x28002F51) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android', 
    'Accept-Encoding': 'gzip,compress,br,deflate', 
    'csecuuid': '189548f5eb8c8-a3f06b074c786-0-501db-189548f5eb8c8', 
    'token': 'AgEdI7gpfAOycwWk9wFTVsIkIF3tLJFvdyDWEe8wazim_c8Dd-6Yw-pasUlKL7sVjtrw0zWUvc8u9gAAAAAoHwAASK5lOYLBFQciDiSQxeeTYZn_M7TGQnab2Cb_xAIDYJwE_H9Oz_178zqFazHhYJ88', 
    't': 'AgEdI7gpfAOycwWk9wFTVsIkIF3tLJFvdyDWEe8wazim_c8Dd-6Yw-pasUlKL7sVjtrw0zWUvc8u9gAAAAAoHwAASK5lOYLBFQciDiSQxeeTYZn_M7TGQnab2Cb_xAIDYJwE_H9Oz_178zqFazHhYJ88', 
    'content-type': 'application/json', 
    'csecuserid': '4079009624', 
    'openidcipher': 'AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM/hf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n/GVnwfURonD78PewMUppAAAADgyjlJHyosrkcEpGILVQ6SbJgZyWpd1Ig5KP6cLZ7bVssjkzKYXCFkYls1qJ3nX8YIojS7P2RxChQ==', 
    'Referer': 'https://servicewechat.com/wx77af438b3505c00e/1195/page-frame.html'
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
