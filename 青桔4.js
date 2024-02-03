const axios = require('axios');
let data = '%7B%22cityId%22%3A102%2C%22methodName%22%3A%22signIn%22%2C%22serviceCode%22%3A%22signInComponentService%22%2C%22serviceType%22%3A%22SIMPLE%22%2C%22entryFlag%22%3A%22APP_LETS%22%2C%22classifyCode%22%3A%22SIGN%22%2C%22scene%22%3A%22LLC_WELFARE_CENTER%22%2C%22bizId%22%3A363%2C%22channelId%22%3A3%2C%22miniappversion%22%3A%2215.2.0%22%2C%22klat%22%3A25.89233479817708%2C%22klnt%22%3A114.90710205078125%2C%22accuracy%22%3A15%2C%22hwId%22%3A%2210000%22%7D';

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://htwkop.xiaojukeji.com/gateway?api=prado.play.common.facade.component&apiVersion=1.0.0&appKey=h5appbcd0af7461691c1e30bcd61098f&appVersion=15.2.0&mobileType=iPhone&osType=1&osVersion=iOS%2016.4&timestamp=1706931891794&ttid=h5&userRole=1&token=UEyTxzyJydM1elWykTWE_dhv4L1VuDWHY1ovUZwChOckzDsOwzAMg-G7cBYCKrIjS7fpI30sLtCiU5C7F24mEv_wbehEwiZOhKArUgV9RlqljmtI9Rre1GilttEKkoJekYDgdMwZOUfQZ2_hLMYQXP_citzweX3flxVZSdVdcBsulzBtrQnuSGgNevhiViB4HOwTyf0XAAD__w%3D%3D&userId=299072789704309&sign=dc5b43f72a8fbd20b0d7fb8a8b2855a753156344&wsgsig=dd03-p1w05wjw7%2F34ptE3jvYzCOWPL9u6QfhA%2F%2BhidIRoL9u5pbFHsR1XAYsz6q35ptLCmplRDOfy6hg8ZmA7h4OUBYco5eC5ocxbi4PjeYouIe4IvD1Di4LtAMiWI%2FS',
  headers: { 
    'Host': 'htwkop.xiaojukeji.com', 
    'Connection': 'keep-alive', 
    'Content-Length': '450', 
    'xpsid': '39cd777c25fc452d8e27e7b935e7882b', 
    'xpsid-root': '39cd777c25fc452d8e27e7b935e7882b', 
    'content-type': 'application/json', 
    'Cityid': '102', 
    'secdd-authentication': '70401484fa9c4884e6bce4f18c98e1f64ec98d97ab8347de3afe1d72c80df9080a3c845618802f61714a1868ac89ba7b5696116d8d01000001000000', 
    'secdd-challenge': '3|v1.1.0||||||', 
    'Accept-Encoding': 'gzip,compress,br,deflate', 
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.46(0x18002e2c) NetType/WIFI Language/zh_CN', 
    'Referer': 'https://servicewechat.com/wx9e9b87595c41dbb7/437/page-frame.html'
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
