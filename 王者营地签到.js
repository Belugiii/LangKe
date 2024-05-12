const axios = require('axios');
const notify = require('./sendNotify');
let data = '{"gameId":"20001","recommendPrivacy":0,"roleId":"108400113"}';

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://kohcamp.qq.com/operation/action/newsignin',
  headers: { 
    'isTRPCRequest': 'true', 
    'cChannelId': '10003898', 
    'cClientVersionCode': '2037879003', 
    'cClientVersionName': '8.92.0125', 
    'cCurrentGameId': '20001', 
    'cGameId': '20001', 
    'cGzip': '1', 
    'cIsArm64': 'true', 
    'cRand': '1709656097273', 
    'cSupportArm64': 'true', 
    'cSystem': 'android', 
    'cSystemVersionCode': '30', 
    'cSystemVersionName': '11', 
    'cpuHardware': 'qcom', 
    'encodeParam': 'aJunH5UJoIdPkuvijyVD%2BPBP1O8af8%2FuWOz8Q2vYb%2FCUDAC9igAIfIF771k2jq71CzeE3wdgw17oroXkSv9OWfKlav9DJgSMKN4J%2FcaJABTuFYh8aSNYvqcuSTPjLyFBGHdQWg%3D%3D', 
    'gameAreaId': '1', 
    'gameId': '20001', 
    'gameOpenId': '5352F330D3F66C8C36BA985E2A41CF84', 
    'gameRoleId': '108400113', 
    'gameServerId': '1182', 
    'gameUserSex': '1', 
    'openId': '009C196E362B0BE2BCDB2D3D55480C99', 
    'tinkerId': '2037879003_64_0', 
    'token': 'hRdCwfEq', 
    'userId': '21733683', 
    'Content-Encrypt': '', 
    'Accept-Encrypt': '', 
    'NOENCRYPT': '1', 
    'X-Client-Proto': 'https', 
    'Content-Type': 'application/json; charset=UTF-8', 
    'Content-Length': '60', 
    'Host': 'kohcamp.qq.com', 
    'Connection': 'Keep-Alive', 
    'Accept-Encoding': 'gzip', 
    'User-Agent': 'okhttp/4.9.1'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
  if(response.data.returnCode != 0){
	  notify.sendNotify("王者营地", response.data.returnMsg);
  }
})
.catch((error) => {
  console.log(error);
  notify.sendNotify("王者营地", error);
});
