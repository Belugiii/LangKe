// cron: 0/20 * * * *
const axios = require('axios');
const CryptoJS = require("crypto-js");
// api密钥
var key = process.env.jl_key
// 业务编号
var trade_no= process.env.jl_trade_no
// 本机ip
var ip = "";
// 当前白名单中的ip
var currentWhiteIp = []

function sleep(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}

async function main() {
	// 得到本机ip
	await getLocalIP()
	await sleep(5000)
	// 与巨量白名单中的ip进行比对
    await ComparedJuLiangIP()
    await sleep(5000)
    if(! currentWhiteIp.includes(ip)){
	    // 不存在白名单则将本机ip添加到巨量白名单
		AddToWhitelist()
    } else {
	    console.log("白名单已存在当前ip");
    }
}

function getLocalIP(){
	let url = "https://www.ipplus360.com/getIP"
	axios.get(url)
	.then(function (resp) {
		if(resp.data.code == 200){
			ip = resp.data.data
		}
	})
	.catch(function (error) {
		console.log(error);
	});
}

function ComparedJuLiangIP(){
	let param = "trade_no=" + trade_no + "&key=" + key
	let sign = CryptoJS.MD5(param)
	param = param + "&sign=" + sign
	let url = "http://v2.api.juliangip.com/dynamic/getwhiteip?" + param
	axios.get(url)
	.then(function (resp) {
		if(resp.data.code == 200){
			currentWhiteIp = resp.data.data.current_white_ip
		}
	})
	.catch(function (error) {
		console.log(error);
	});
}

function AddToWhitelist(){
	let param = "new_ip=" + ip + "&old_ip=" + currentWhiteIp.join(",") + "&trade_no=" + trade_no + "&key=" + key
	let sign = CryptoJS.MD5(param)
	param = param + "&sign=" + sign
	let url = "http://v2.api.juliangip.com/dynamic/replaceWhiteIp?" + param
	axios.get(url)
	.then(function (resp) {
		console.log(resp.data.msg);
	})
	.catch(function (error) {
		console.log(error);
	});
}

main()