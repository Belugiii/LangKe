// cron: 0 8 * * *
const $ = new Env('苏打校园');
const ckName = "suda"; // 抓取 https://api.sodalife.xyz 请求头中的 Authorization
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
            await getName();
            await $.wait(2 * 1000);
            await signIn();
            await $.wait(2 * 1000);
            await balance();
            await $.wait(2 * 1000);
        }
    }

})()
    .catch((e) => log(e))
    .finally(() => $.done())



/**
 * 查询账号
 */
async function getName() {
    log('🔰   ==>   查询账号');
    let axios = require('axios');

    let option = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://api.sodalife.xyz/v1/session/accounts',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${data}`
        }
    }
    debug(`【option】${JSON.stringify(option)}`)
    await axios.request(option)
        .then((response) => {
            let result = response.data
            log(`✔️   <==   账号:${result.data[0].key}`)
        })
        .catch((error) => {
            log(error);
        });

}
/**
 * 签到
 */
async function signIn() {
    log('🔰   ==>   开始签到');
    let axios = require('axios');

    let option = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api.sodalife.xyz/v1/point-tasks/DAILY_SIGNIN/point-bills?__t=1656347731929',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `${data}`
        }
    }
    debug(`【option】${JSON.stringify(option)}`)
    await axios.request(option)
        .then((response) => {
            let result = response.data
            debug(`【result】${JSON.stringify(result)}`)
            if (result.status == "OK") {
                log(`✔️   <==   签到成功`)
            } else {
                Notify = 1;
                log(`❌   <==   签到失败，原因是${result} `)
            }
        })
        .catch((error) => {
            log(error);
        });

}

/**
 * 查询余额
 */
async function balance() {
    log('🔰   ==>   查询余额');
    let axios = require('axios');

    let option = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://api.sodalife.xyz/v1/user/point',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${data}`
        }
    }
    debug(`【option】${JSON.stringify(option)}`)
    await axios.request(option)
        .then((response) => {
            let result = response.data
            debug(`【result】${JSON.stringify(result)}`)
            if (result.status == "OK") {
                log(`✔️   <==   余额:${result.data.value}`)
            } else {
                Notify = 1;
                log(`❌   <==   余额查询失败，原因是${result.message} `)
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
