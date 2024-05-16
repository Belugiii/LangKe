// cron: 0 8 * * *
const $ = new Env('稀土掘金');
const ckName = "xituck"; // 抓取 https://api.juejin.cn 请求头中的 cookie
var Notify = 0; // 0为关闭通知，1为打开通知,默认为1
const debugging = 0; // 0为关闭调试，1为打开调试,默认为0
// 无需更改下方变量
let ck = process.env[ckName]; // 所有账号字符串
let variables = []; // 所有账号数据数组
let data = ''; // 当前执行的账号数据
let msg = ''; // 通知的内容

!(async () => {

    if (!(await Envs()))
        return;
    else {
        log(`🏷️   ==>   共找到 ${variables.length} 个账号`)
        for (let index = 0; index < variables.length; index++) {
            log(`========= 开始【第 ${index + 1} 个账号】=========`)
            data = variables[index];
            debug(`【data】${data}`)
            await signIn();
            await $.wait(2 * 1000);
        }
    }

})()
    .catch((e) => log(e))
    .finally(() => $.done())


/**
 * 签到
 */
async function signIn(timeout = 3 * 1000) {
    log('🔰   ==>   开始签到');
    let axios = require('axios');

    let option = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api.juejin.cn/growth_api/v1/check_in',
        headers: { 
			    'authority': 'api.juejin.cn', 
			    'accept': '*/*', 
			    'accept-language': 'zh-CN,zh;q=0.9', 
			    'cache-control': 'no-cache', 
			    'content-type': 'application/json', 
			    'cookie': `${data}`, 
			    'origin': 'https://juejin.cn', 
			    'pragma': 'no-cache', 
			    'referer': 'https://juejin.cn/', 
			    'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"', 
			    'sec-ch-ua-mobile': '?0', 
			    'sec-ch-ua-platform': '"Windows"', 
			    'sec-fetch-dest': 'empty', 
			    'sec-fetch-mode': 'cors', 
			    'sec-fetch-site': 'same-site', 
			    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
	    },
        data: {}
    }
    debug(`【option】${JSON.stringify(option)}`)
    await axios.request(option)
        .then((response) => {
            let result = response.data
            debug(`【result】${JSON.stringify(result)}`)
            if (result.err_no == 0) {
                log(`✔️   <==   签到成功`)
            } else {
                Notify = 1;
                log(`❌   <==   签到失败，原因是${result.err_msg} `)
            }
        })
        .catch((error) => {
            log(error);
        });

}

// ===================================================固定代码===================================================
// 调试输出
function debug(msg) {
    if (debugging) log(`🕷️:${msg}`)
}

// 日志输出和记录
function log(s) {
    console.log(s + "\n")
    msg += s + "\n"
}

async function Envs() {
    if (ck) {
        if (ck.indexOf("@") != -1) {
            ck.split("@").forEach((item) => {
                variables.push(item);
            });
        } else if (ck.indexOf("\n") != -1) {
            ck.split("\n").forEach((item) => {
                variables.push(item);
            });
        } else {
            variables.push(ck);
        }
    } else {
        log(`❌【${$.name}】：未填写变量 ck`)
        return;
    }

    return true;
}

// 配合sendNotify发送消息
async function SendMsg(message) {
    if (!message)
        return;
    if (Notify > 0) {
        let notify = require('./sendNotify');
        await notify.sendNotify($.name, message);
    } else {
    }
}

// 获取当前时间
function getCurrentDateTime() {
    let now = new Date();
    let year = now.getFullYear();
    let month = (now.getMonth() + 1).toString().padStart(2, '0');
    let day = now.getDate().toString().padStart(2, '0');
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

function Env(t, e) {

    return new class {
        // 脚本开始
        constructor(t, e) {
            this.name = t, console.log(`🔔   ==>   ${this.name}, 开始!\n⏰️   ==>   ${getCurrentDateTime()}`)
        }

        // 同步延时
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }

        // 脚本结束
        done(t = {}) {
            SendMsg(msg);
            console.log(`🔔   ==>   ${this.name}, 结束!\n⏰️   ==>   ${getCurrentDateTime()}`)
        }
    }(t, e)
}
