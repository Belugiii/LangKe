// cron: 0 8 * * *
const $ = new Env('杰士邦安心福利社');
const ckName = "jsb"; // 抓取 https://vip.ixiliu.cn 请求头中的 access-token
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
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://vip.ixiliu.cn/mp/sign/applyV2',
        headers: {
            'Host': 'vip.ixiliu.cn',
            'Connection': 'keep-alive',
            'charset': 'utf-8',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 11; MI 9 Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/116.0.0.0 Mobile Safari/537.36 XWEB/1160083 MMWEBSDK/20231202 MMWEBID/209 MicroMessenger/8.0.47.2560(0x28002FFB) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android',
            'content-type': 'application/json;charset=utf-8',
            'access-token': `${data}`,
            'Accept-Encoding': 'gzip,compress,br,deflate',
            'platform': 'MP-WEIXIN',
            'sid': '10009',
            'Referer': 'https://servicewechat.com/wx9a2dc52c95994011/82/page-frame.html'
        }
    }
    debug(`【option】${JSON.stringify(option)}`)
    await axios.request(option)
        .then((response) => {
            let result = response.data
            debug(`【result】${JSON.stringify(result)}`)
            if (result.status == 200) {
                log(`✔️   <==   签到成功`)
            } else {
                Notify = 1;
                log(`❌   <==   签到失败，原因是${result.msg} `)
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
