const axios = require('axios');
let data = JSON.stringify({
  "type": "login",
  "loginType": "email",
  "account": "belugi@foxmail.com",
  "password": "abde5a11169011ed8b3eacf1d97e02723f80a8e0409e331dfdf2be2d42b8e4c0",
  "encryption": "true"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://https.ghs.wiki:7002/API?void=post',
  headers: { 
    'Accept': 'application/json', 
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6', 
    'Access-Control-Allow-Origin': '*', 
    'Connection': 'keep-alive', 
    'Content-Type': 'application/json', 
    'Origin': 'https://www.mossfrp.top', 
    'Referer': 'https://www.mossfrp.top/', 
    'Sec-Fetch-Dest': 'empty', 
    'Sec-Fetch-Mode': 'cors', 
    'Sec-Fetch-Site': 'cross-site', 
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.43', 
    'access-control-max-age': '864000', 
    'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Microsoft Edge";v="114"', 
    'sec-ch-ua-mobile': '?0', 
    'sec-ch-ua-platform': '"Windows"'
  },
  data : data
};

axios.request(config)
.then((response) => {
  let token = response.data.token
  data = JSON.stringify({
  "type": "signIn",
  "token": token
});
  config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://https.ghs.wiki:7002/API?void=post',
  headers: { 
    'Accept': 'application/json', 
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6', 
    'Access-Control-Allow-Origin': '*', 
    'Connection': 'keep-alive', 
    'Content-Type': 'application/json', 
    'Origin': 'https://www.mossfrp.top', 
    'Referer': 'https://www.mossfrp.top/', 
    'Sec-Fetch-Dest': 'empty', 
    'Sec-Fetch-Mode': 'cors', 
    'Sec-Fetch-Site': 'cross-site', 
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.43', 
    'access-control-max-age': '864000', 
    'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Microsoft Edge";v="114"', 
    'sec-ch-ua-mobile': '?0', 
    'sec-ch-ua-platform': '"Windows"'
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

})
.catch((error) => {
  console.log(error);
});
