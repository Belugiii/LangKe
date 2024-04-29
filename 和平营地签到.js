const axios = require('axios');
const FormData = require('form-data');
let data = new FormData();
data.append('roleId', '2565952684');
data.append('serverIndex', '5');
data.append('timestamp', '1714275417');
data.append('algorithm', 'v2');
data.append('appid', 'wxb7659468ecf2f4ce');
data.append('sig', 'afddce6f2f51c57806e0961531ce1f1b');
data.append('source', 'heping_yingdi');
data.append('encode', '2');
data.append('openid', 'o7KEU0tYa4Dc0RCvhfBR129DNgbw');
data.append('version', '3.1.96i');
data.append('msdkEncodeParam', '8291A7762AF1D362F77EE2B069E6121FC4307FB214121B5351391F954525A7E837A1941205AC3AAE8CE998B7D09268CD8F7883299C5A045C1310743C6C8DA2A1B843AFCBEA3A2EF24D9D01A25E31EC4829D94EA22D1F0F4F0A7F3BCB65A6C270AB43518B379981D12926589530105954D35490A6D42AF1F072CD84B39DD7598DDD378370EEC6C17D371CFB239D3785F03EC83BFBD3E9BF7F290D5D7D5301E8C6CA13A61AC213447A8FBAAD64046016B06BE2A84BABCD2E7E42E2D63F4EB8B3320BA0859FE0A897B516A0EEAFC1301A232DE4E093522A162655500A75D126AE3278B00D0A24F787003377FF1E7274A170654E016CB41E68D9BFEB44916120E9AA');

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://c.gp.qq.com/gp/api/php/act_dailysigninmonthly.php',
  headers: { 
    'User-Agent': 'Mozilla/5.0 (Linux; Android 11; MI 9 Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/109.0.5414.86 MQQBrowser/6.2 TBS/046905 Mobile Safari/537.36;GameHelper_20004/3.25.5.1255.2102091370', 
    'Accept': 'application/json, text/plain, */*', 
    'origin': 'https://c.gp.qq.com', 
    'x-requested-with': 'com.tencent.gamehelper.pg', 
    'sec-fetch-site': 'same-origin', 
    'sec-fetch-mode': 'cors', 
    'sec-fetch-dest': 'empty', 
    'referer': 'https://c.gp.qq.com/camp/activity/index?timestamp=1714275417&appid=wxb7659468ecf2f4ce&sig=afddce6f2f51c57806e0961531ce1f1b&version=3.1.96i&encode=2&algorithm=v2&source=heping_yingdi&refversion=3.1.96i&msdkEncodeParam=8291A7762AF1D362F77EE2B069E6121FC4307FB214121B5351391F954525A7E837A1941205AC3AAE8CE998B7D09268CD8F7883299C5A045C1310743C6C8DA2A1B843AFCBEA3A2EF24D9D01A25E31EC4829D94EA22D1F0F4F0A7F3BCB65A6C270AB43518B379981D12926589530105954D35490A6D42AF1F072CD84B39DD7598DDD378370EEC6C17D371CFB239D3785F03EC83BFBD3E9BF7F290D5D7D5301E8C6CA13A61AC213447A8FBAAD64046016B06BE2A84BABCD2E7E42E2D63F4EB8B3320BA0859FE0A897B516A0EEAFC1301A232DE4E093522A162655500A75D126AE3278B00D0A24F787003377FF1E7274A170654E016CB41E68D9BFEB44916120E9AA&openid=o7KEU0tYa4Dc0RCvhfBR129DNgbw&gameId=20004&toGameOpenid=osewR0rFa-BbAbmVlK1vHqauqsJ4&roleId=3117016249&uniqueRoleId=2565952684&serverName=%E5%AE%89%E5%8D%93&serverId=1&gameOpenid=osewR0rFa-BbAbmVlK1vHqauqsJ4&isMainRole=1&areaId=1&areaName=%E5%BE%AE%E4%BF%A1&roleJob=%E8%B6%85%E7%BA%A7%E7%8E%8B%E7%89%8C3%E6%98%9F&nickname=%E7%BA%B5%E9%B2%A4%E5%AF%BB%E5%A5%B9%E7%89%B5%E6%91%86%E6%B8%A1&roleName=%E9%82%82%E9%80%85%E5%B7%B2%E6%98%AF%E4%B8%8A%E4%B8%8A%E7%AD%BE&roleLevel=66&paltid=1&serverIndex=5', 
    'accept-language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7', 
    'Cookie': 'eas_sid=q1G7p089q9y6b0e8P3N3Q0I9q9; isHostDate=19840; PTTuserFirstTime=1714176000000; pgv_info=ssid=s7020283012; pgv_pvid=1035898887; ts_uid=6202986652; gpqqcomrouteLine=a20240407active; weekloop=0-0-0-17; tokenParams=%3F_isShare%3D1%26timestamp%3D1714209362%26appid%3Dwxb7659468ecf2f4ce%26sig%3D3071dc260104f1d67052e4f2c484e210%26version%3D3.1.96i%26encode%3D2%26algorithm%3Dv2%26source%3Dheping_yingdi%26refversion%3D3.1.96i%26msdkEncodeParam%3D576FF1A00E0D5479D1B45A983A1F902AA85289E4620AC6422AFC95AB12CA053415AA19E95191AD2DC1EEF70FB378BE829CF7E9821EB23BAACA0C46CF8E9A9D5F99A097359CBC6F231E7CA8ECF89208C1C6AE38B5E9F54F7A9E412C9E392BC437140402B54C41DD54D1DCF648801BB199FF23911539F7F0B560264E4E9013312DB7F7DFDF539F5388D57C715A8DEBE813B4073836252DBFE0EB112DB821F645BC081F7F94C3013101A6F0328DE97F76611F4496B2815DA6E5D8690953EFFF36AEAB1CB14B9C781417C375CFF81037CC7163624A6820E827458DCD1F2674437ECACE17C18F8FB12539C0D34F40A73ADE3DB57E300CC0B0A6A02F5F3FE0C212B820%26openid%3Do7KEU0tYa4Dc0RCvhfBR129DNgbw%26gameId%3D20004%26toGameOpenid%3DosewR0rFa-BbAbmVlK1vHqauqsJ4%26roleId%3D3117016249%26uniqueRoleId%3D2565952684%26serverName%3D%25E5%25AE%2589%25E5%258D%2593%26serverId%3D1%26gameOpenid%3DosewR0rFa-BbAbmVlK1vHqauqsJ4%26isMainRole%3D1%26areaId%3D1%26areaName%3D%25E5%25BE%25AE%25E4%25BF%25A1%26roleJob%3D%25E8%25B6%2585%25E7%25BA%25A7%25E7%258E%258B%25E7%2589%258C2%25E6%2598%259F%26nickname%3D%25E7%25BA%25B5%25E9%25B2%25A4%25E5%25AF%25BB%25E5%25A5%25B9%25E7%2589%25B5%25E6%2591%2586%25E6%25B8%25A1%26roleName%3D%25E9%2582%2582%25E9%2580%2585%25E5%25B7%25B2%25E6%2598%25AF%25E4%25B8%258A%25E4%25B8%258A%25E7%25AD%25BE%26roleLevel%3D66%26paltid%3D1%26serverIndex%3D5%26; PTTDate=1714209363283', 
    ...data.getHeaders()
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
