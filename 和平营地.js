// cron: 0 8,22 * * *
const $ = new Env('和平营地');
const ckName = "hpyd"; // 抓取 https://msmarket.msx.digitalyili.com 请求头中的 access-token
var Notify = 0; // 0为关闭通知，1为打开通知,默认为1
const debugging = 0; // 0为关闭调试，1为打开调试,默认为0
// 无需更改下方变量
let ck = process.env[ckName]; // 所有账号字符串
let variables = []; // 所有账号数据数组
let data = ''; // 当前执行的账号数据
let msg = ''; // 通知的内容
const FormData = require('form-data');

!(async () => {

    if (!(await Envs()))
        return;
    else {
        log(`🏷️   ==>   共找到 ${variables.length} 个账号`)
        for (let index = 0; index < variables.length; index++) {
            log(`========= 开始【第 ${index + 1} 个账号】=========`)
            data = variables[index];
            debug(`data:${data}`)
            await signIn();
            await $.wait(2 * 1000);
            await missionRewards();
            await $.wait(2 * 1000);
        }
    }

})()
    .catch((e) => log(e))
    .finally(() => $.done())


/**
 * 签到
 */
async function signIn() {
    try {
        log('🔰   ==>   开始签到');

        let v = new FormData();
        v.append('roleId', '2565952684');
        v.append('serverIndex', '5');
        v.append('timestamp', '1716360141');
        v.append('algorithm', 'v2');
        v.append('appid', 'wxb7659468ecf2f4ce');
        v.append('sig', '936e08c78f9309c65f2d8736348299ed');
        v.append('source', 'heping_yingdi');
        v.append('encode', '2');
        v.append('openid', 'o7KEU0tYa4Dc0RCvhfBR129DNgbw');
        v.append('version', '3.1.96i');
        v.append('msdkEncodeParam', `${data}`);

        let option = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://c.gp.qq.com/gp/api/php/act_dailysigninmonthly.php',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Linux; Android 11; MI 9 Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/109.0.5414.86 MQQBrowser/6.2 TBS/046905 Mobile Safari/537.36;GameHelper_20004/3.26.2.1274.2102091384',
                'Accept': 'application/json, text/plain, */*',
                'origin': 'https://c.gp.qq.com',
                'x-requested-with': 'com.tencent.gamehelper.pg',
                'sec-fetch-site': 'same-origin',
                'sec-fetch-mode': 'cors',
                'sec-fetch-dest': 'empty',
                'referer': 'https://c.gp.qq.com/camp/activity/index',
                'accept-language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
                ...v.getHeaders()
            },
            data: v
        };
        let response = await fetchData(option);
        if (response.code != 200) {
            return
        }
        result = response.data
        if (result.returnCode == 0) {
            log(`✔️   <==   签到成功`)
        } else {
            if (result.returnCode != -71003) {
                Notify = 1;
            }
            log(`❌   <==   签到失败，原因是: ${result.returnMsg} `)
        }
    } catch (error) {
        log(error)
    }

}
/**
 * 任务奖励
 */
async function missionRewards() {
    try {
        let v = new FormData();
        v.append('serverIndex', '5');
        v.append('timestamp', '1716366515');
        v.append('algorithm', 'v2');
        v.append('appid', 'wxb7659468ecf2f4ce');
        v.append('sig', '506c7a452d63893b284f4f36513f4515');
        v.append('source', 'heping_yingdi');
        v.append('encode', '2');
        v.append('openid', 'o7KEU0tYa4Dc0RCvhfBR129DNgbw');
        v.append('version', '3.1.96i');
        v.append('msdkEncodeParam', `${data}`);

        let option = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://c.gp.qq.com/gp/api/php/act_getscoretasklist.php',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Linux; Android 11; MI 9 Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/109.0.5414.86 MQQBrowser/6.2 TBS/046905 Mobile Safari/537.36;GameHelper_20004/3.26.2.1274.2102091384',
                'Accept': 'application/json, text/plain, */*',
                'origin': 'https://c.gp.qq.com',
                'x-requested-with': 'com.tencent.gamehelper.pg',
                'sec-fetch-site': 'same-origin',
                'sec-fetch-mode': 'cors',
                'sec-fetch-dest': 'empty',
                'referer': 'https://c.gp.qq.com/camp/activity/index',
                'accept-language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
                ...v.getHeaders()
            },
            data: v
        };
        log('🔰   ==>   获取任务奖励列表');
        let response = await fetchData(option);
        if (response.code != 200) {
            return
        }
        result = response.data
        if (result.returnCode == 0) {
            let taskList = result.data.taskList
            for (let task of taskList) {
                if (task.status == 2) {
                    log(`任务 ${task.briefDesc} ,完成啦,去领取奖励~~~`)
                    await receiveAward(task.taskId)
                    await $.wait(3 * 1000);
                }
            }
        } else {
            Notify = 1;
            log(`❌   <==   失败，原因是: ${result.returnMsg} `)
        }
    } catch (error) {
        log(error)
    }

}
/**
 * 领取任务奖励
 */
async function receiveAward(taskId) {
    try {
        let v = new FormData();
        v.append('taskId', taskId);
        v.append('roleId', '2565952684');
        v.append('serverIndex', '5');
        v.append('timestamp', '1716366515');
        v.append('algorithm', 'v2');
        v.append('appid', 'wxb7659468ecf2f4ce');
        v.append('sig', '506c7a452d63893b284f4f36513f4515');
        v.append('source', 'heping_yingdi');
        v.append('encode', '2');
        v.append('openid', 'o7KEU0tYa4Dc0RCvhfBR129DNgbw');
        v.append('version', '3.1.96i');
        v.append('msdkEncodeParam', `${data}`);

        let option = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://c.gp.qq.com/gp/api/php/completescoretask.php',
            headers: { 
              'User-Agent': 'Mozilla/5.0 (Linux; Android 11; MI 9 Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/109.0.5414.86 MQQBrowser/6.2 TBS/046905 Mobile Safari/537.36;GameHelper_20004/3.26.2.1274.2102091384', 
              'Accept': 'application/json, text/plain, */*', 
              'origin': 'https://c.gp.qq.com', 
              'x-requested-with': 'com.tencent.gamehelper.pg', 
              'sec-fetch-site': 'same-origin', 
              'sec-fetch-mode': 'cors', 
              'sec-fetch-dest': 'empty', 
              'referer': 'https://c.gp.qq.com/camp/activity/index', 
              'accept-language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7', 
              ...v.getHeaders()
            },
            data : v
          };
        log('🔰   ==>   领取奖励');
        let response = await fetchData(option);
        if (response.code != 200) {
            return
        }
        result = response.data
        if (result.returnCode == 0) {
            log(`✔️   <==   领取成功`)
        } else {
            if (result.returnCode != -71502) {
                Notify = 1;
            }
            log(`❌   <==   领取失败，原因是: ${result.returnMsg} `)
        }
    } catch (error) {
        log(error)
    }

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


// 封装axios成同步方法
async function fetchData(option) {
    debug(`【option】${JSON.stringify(option)}`)
    let axios = require('axios');
    let result = { code: -1, data: {} }

    await axios.request(option)
        .then((response) => {
            result.code = 200;
            result.data = response.data
        })
        .catch((error) => {
            result.data = error
            log(error)
        });

    debug(JSON.stringify(result))

    return result
}