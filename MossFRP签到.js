const axios = require('axios');
const CryptoJS = require("crypto-js");

var account = process.env.moss_account
var password = process.env.moss_password

var token = ""

function sleep(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}


async function main() {
	// 登录
	await login()
    await sleep(5000)
    // 签到
	await signIn()
}

async function login(){
	let hash = CryptoJS.SHA256(password).toString()
	let data = JSON.stringify({
	  "type": "login",
	  "loginType": "email",
	  "account": account,
	  "password": hash,
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

	await axios.request(config)
	.then((response) => {
	  token = response.data.token
	  console.log(token);
	})
	.catch((error) => {
	  console.log(error);
	});
	
}

async function signIn(){
	let data = JSON.stringify({
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

	await axios.request(config)
	.then((response) => {
	  console.log(response.data.signInMessage)
	})
	.catch((error) => {
	  console.log(error);
	});
}

main();