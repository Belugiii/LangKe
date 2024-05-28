// cron: 0 8,22 * * *
const $ = new Env('王者营地');
const ckName = "wzyd"; // 抓取 https://kohcamp.qq.com 请求头中的 userid和token 格式: userid&token 多个账号使用@或换行符分隔
var Notify = 0; // 0为关闭通知，1为打开通知,默认为1
const debugging = 0; // 0为关闭调试，1为打开调试,默认为0
// 无需更改下方变量
let ck = process.env[ckName]; // 所有账号字符串
let variables = []; // 所有账号数据数组
let data = ''; // 当前执行的账号数据
let msg = ''; // 通知的内容
const FormData = require('form-data');

const qs = require('qs');

!(async () => {

    if (!(await Envs()))
        return;
    else {
        log(`🏷️   ==>   共找到 ${variables.length} 个账号`)
        for (let index = 0; index < variables.length; index++) {
            log(`========= 开始【第 ${index + 1} 个账号】=========`)
            data = variables[index];
            let params = data.split("&")
            data = {
                userid: params[0],
                token: params[1]
            }
            debug(`data:${data}`);
            // 签到
            await signIn();
            await $.wait(2 * 1000);
            // 做任务
            await doTheTask();
            await $.wait(2 * 1000);
            await missionRewards();
            await $.wait(2 * 1000);
            await missionRewardsDaily();
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
        let option = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://kohcamp.qq.com/operation/action/newsignin',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Linux; Android 11; MI 9 Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.141 Mobile Safari/537.36;GameHelper; smobagamehelper; Brand: Xiaomi MI 9$',
                'Accept': 'application/json, text/plain, */*',
                'Accept-Encoding': 'gzip, deflate',
                'Content-Type': 'application/json',
                'origin': 'https://camp.qq.com',
                'referer': 'https://camp.qq.com/h5/webdist/welfare-center/index.html',
                'accept-language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
                'userid': `${data.userid}`,
                'token': `${data.token}`
            },
            data: JSON.stringify({ "cSystem": "android", "h5Get": 1, "gameId": "20001", "roleId": "108400113" })
        };
        let response = await fetchData(option);
        if (response.code != 200) {
            return
        }
        result = response.data
        if (result.returnCode == 0) {
            log(`✔️   <==   签到成功`)
        } else {
            if (result.returnCode != -105203) {
                Notify = 1;
            }
            log(`❌   <==   签到失败，原因是: ${result.returnMsg} `)
        }
    } catch (error) {
        log(error)
    }

}
/**
 * 做任务
 */
async function doTheTask() {
    try {
        // 点赞资讯
        await like(true);
        await $.wait(2 * 1000);
        // 取消点赞
        await like(false);
        await $.wait(2 * 1000);
        // 浏览资讯任务
        await browseInformation();
        await $.wait(2 * 1000);
    } catch (error) {
        log(error)
    }
}

// 点赞任务
async function like(flag) {
    try {
        log(`🔰   ==>   ${flag ? '点赞' : '取消点赞'}`);
        flag = flag ? 1 : 0;
        let option = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://ssl.kohsocialapp.qq.com:10001/user/addlike',
            headers: {
                'User-Agent': 'okhttp/4.9.1',
                'Accept-Encoding': 'gzip',
                'Content-Type': 'application/x-www-form-urlencoded',
                'tinkerid': '2037879003_64_0',
                'userid': `${data.userid}`,
                'token': `${data.token}`
            },
            data: qs.stringify({
                'iInfoId': '180622994',
                'docid': '12683475848706949544',
                'like': flag,
                'cChannelId': '10003898',
                'cClientVersionCode': '2037879003',
                'cClientVersionName': '8.92.0125',
                'cCurrentGameId': '20001',
                'cGameId': '20001',
                'cGzip': '1',
                'cIsArm64': 'true',
                'cRand': '1716403978947',
                'cSupportArm64': 'true',
                'cSystem': 'android',
                'cSystemVersionCode': '30',
                'cSystemVersionName': '11',
                'cpuHardware': 'qcom',
                'encodeParam': '7Rxs/vMPJLRKOCUCBKXSdkmaMDVNOlcEG6JqPYnVtcBXCqlJCTdIwCe7vsKIsqaQXHccWMXyjwmX70xP4pMeKRCJMltn6oyaN9w1/QXmTkNNeJ67Lt/9p8WAyZukkQNODK52dw==',
                'gameAreaId': '1',
                'gameId': '20001',
                'gameOpenId': '5352F330D3F66C8C36BA985E2A41CF84',
                'gameRoleId': '108400113',
                'gameServerId': '1182',
                'gameUserSex': '1',
                'openId': '009C196E362B0BE2BCDB2D3D55480C99',
                'tinkerId': '2037879003_64_0',
                'token': `${data.token}`,
                'userId': `${data.userid}`
            })
        };
        let response = await fetchData(option);
        if (response.code != 200) {
            return
        }
        result = response.data
        if (result.returnCode == 0) {
            log(`✔️   <==   操作成功,当前点赞状态${result.data.like ? '✔️👍️' : '❌👍️'}`)
        } else {
            Notify = 1;
            log(`❌   <==   操作失败，原因是: ${result.returnMsg} `)
        }
    } catch (error) {
        log(error)
    }
}

// 浏览资讯任务
async function browseInformation() {
    try {
        let option = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://ssl.kohsocialapp.qq.com:10001/game/detailinfov3',
            headers: {
                'User-Agent': 'okhttp/4.9.1',
                'Accept-Encoding': 'gzip',
                'Content-Type': 'application/x-www-form-urlencoded',
                'userid': `${data.userid}`,
                'token': `${data.token}`
            },
            data: qs.stringify({
                'apiVersion': '1',
                'extContents': '{"infoFrom":"home"}',
                'friendReadNum': '0',
                'goPickComment': '0',
                'iInfoId': '180622994',
                'pos': '0',
                'scrollToComment': '0',
                'targetCommentId': '0',
                'targetCommentTime': '0',
                'taskId': '0',
                'cChannelId': '10003898',
                'cClientVersionCode': '2037879003',
                'cClientVersionName': '8.92.0125',
                'cCurrentGameId': '20001',
                'cGameId': '20001',
                'cGzip': '1',
                'cIsArm64': 'true',
                'cRand': '1716403919501',
                'cSupportArm64': 'true',
                'cSystem': 'android',
                'cSystemVersionCode': '30',
                'cSystemVersionName': '11',
                'cpuHardware': 'qcom',
                'encodeParam': 'ey2WoIBMH5HTfksVlVJ9MVtxdb6TLLepW9bgHMPUeWKC8ODvcG7yhbznuI93w6t6nVZD68Y0ahRTJK/DEmjHvll9FPOpcStVLJxawQSV wqrF0zFJJq/SEUh6  AjCqoJhiPMg==',
                'gameAreaId': '1',
                'gameId': '20001',
                'gameOpenId': '5352F330D3F66C8C36BA985E2A41CF84',
                'gameRoleId': '108400113',
                'gameServerId': '1182',
                'gameUserSex': '1',
                'openId': '009C196E362B0BE2BCDB2D3D55480C99',
                'tinkerId': '2037879003_64_0',
                'userid': `${data.userid}`,
                'token': `${data.token}`
            })
        };
        log('🔰   ==>   开始浏览资讯')
        let response = await fetchData(option);
        if (response.code != 200) {
            return
        }
        result = response.data
        if (result.returnCode == 0) {
            log(`✔️   <==   浏览资讯成功`)
        } else {
            Notify = 1;
            log(`❌   <==   浏览资讯失败，原因是: ${result.returnMsg} `)
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

        let option = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://kohcamp.qq.com/operation/action/tasklist',
            headers: {
                'User-Agent': 'okhttp/4.9.1',
                'Accept-Encoding': 'gzip',
                'Content-Type': 'application/json',
                'istrpcrequest': 'true',
                'openid': '009C196E362B0BE2BCDB2D3D55480C99',
                'userid': `${data.userid}`,
                'token': `${data.token}`,
            },
            data: JSON.stringify({
                "gameId": "20001",
                "recommendPrivacy": 0,
                "roleId": "108400113",
                "serverId": "1182"
            })
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
                if (task.finishStatus == 1 && task.packageStatus == 0) {
                    log(`任务 ${task.title} ,完成啦,去领取奖励~~~`)
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
        let option = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://kohcamp.qq.com/operation/action/rewardtask',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Linux; Android 11; MI 9 Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.141 Mobile Safari/537.36;GameHelper; smobagamehelper; Brand: Xiaomi MI 9$',
                'Accept': 'application/json, text/plain, */*',
                'Accept-Encoding': 'gzip, deflate',
                'Content-Type': 'application/json',
                'origin': 'https://camp.qq.com',
                'userid': `${data.userid}`,
                'token': `${data.token}`
            },
            data: JSON.stringify({ "cSystem": "android", "h5Get": 1, "taskIds": [taskId], "mRoleIds": [{ "roleId": "108400113", "gameId": "20001" }] })
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
/**
 * 每日任务_任务奖励
 */
async function missionRewardsDaily() {
    try {

        let option = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://kohcamp.qq.com/operation/action/tasklist',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Linux; Android 11; MI 9 Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.141 Mobile Safari/537.36;GameHelper; smobagamehelper; Brand: Xiaomi MI 9$',
                'Accept': 'application/json, text/plain, */*',
                'Accept-Encoding': 'gzip, deflate',
                'Content-Type': 'application/json',
                'origin': 'https://camp.qq.com',
                'referer': 'https://camp.qq.com/h5/webdist/welfare-center/index.html',
                'accept-language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
                'userid': `${data.userid}`,
                'token': `${data.token}`
            },
            data: JSON.stringify({ "cSystem": "android", "h5Get": 1, "gameId": "50001", "serverId": "1182", "roleId": "108400113" })
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
                if (task.finishStatus == 1 && task.packageStatus == 0) {
                    log(`任务 ${task.title} ,完成啦,去领取奖励~~~`)
                    await receiveAwardDaily(task.taskId)
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
 * 每日任务_领取任务奖励
 */
async function receiveAwardDaily(taskId) {
    try {

        let option = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://kohcamp.qq.com/operation/action/rewardtask',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Linux; Android 11; MI 9 Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.141 Mobile Safari/537.36;GameHelper; smobagamehelper; Brand: Xiaomi MI 9$',
                'Accept': 'application/json, text/plain, */*',
                'Accept-Encoding': 'gzip, deflate',
                'Content-Type': 'application/json',
                'timestamp': '1716403403420',
                'origin': 'https://camp.qq.com',
                'referer': 'https://camp.qq.com/h5/webdist/welfare-center/index.html',
                'accept-language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
                'userid': `${data.userid}`,
                'token': `${data.token}`
            },
            data: JSON.stringify({ "cSystem": "android", "h5Get": 1, "taskIds": [taskId], "mRoleIds": [] })
        }
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