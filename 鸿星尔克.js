// cron: 0 8 * * *
const $ = new Env('鸿星尔克');
const ckName = "hxek"; // 抓取 https://hope.demogic.com 请求头中的 memberId 和 enterpriseId 用&进行分隔 示例 : memberId&enterpriseId
var Notify = 0; // 0为关闭通知，1为打开通知,默认为1
const debugging = 0; // 0为关闭调试，1为打开调试,默认为0
// 无需更改下方变量
let ck = process.env[ckName]; // 所有账号字符串
let variables = []; // 所有账号数据数组
let data = ''; // 当前执行的账号数据
let msg = ''; // 通知的内容
let memberId, enterpriseId;
const qs = require('qs');
!(async () => {

    if (!(await Envs()))
        return;
    else {
        log(`🏷️   ==>   共找到 ${variables.length} 个账号`)
        for (let index = 0; index < variables.length; index++) {
            log(`========= 开始【第 ${index + 1} 个账号】=========`)
            data = variables[index];
            data = data.split('&');
            memberId = data[0]
            enterpriseId = data[1]
            await information();
            await $.wait(2 * 1000);
            await signIn();
            await $.wait(2 * 1000);
        }
    }

})()
    .catch((e) => log(e))
    .finally(() => $.done())


/**
 * 查询用户信息
 */
async function information() {
    try {
        let option = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://hope.demogic.com/gic-wx-app/get_member_grade_privileg.json',
            headers: {
                'Host': 'hope.demogic.com',
                'xweb_xhr': '1',
                'channelEntrance': 'wx_app',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13) XWEB/9129',
                'sign': memberId,
                'Accept': ' */*',
                'Sec-Fetch-Site': 'cross-site',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Dest': 'empty',
                'Referer': 'https://servicewechat.com/wxa1f1fa3785a47c7d/55/page-frame.html',
                'Accept-Language': 'zh-CNzh;q=0.9',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: qs.stringify({
                'memberId': memberId,
                'cliqueId': '-1',
                'cliqueMemberId': '-1',
                'useClique': '0',
                'enterpriseId': enterpriseId,
                'appid': 'wxa1f1fa3785a47c7d',
                'gicWxaVersion': '3.9.16'
            })
        };
        let response = await fetchData(option);
        if (response.code != 200) {
            log(JSON.stringify(response.data))
            return
        }
        let result = response.data
        if (result.errcode == 0) {
            log(`当前用户:${result.response.member.memberName} 积分:${result.response.member.accumulatPoints}`)
        } else {
            Notify = 1;
            log(`❌   <==   签到失败，原因是${result.errmsg} `)
        }
    } catch (error) {
        log(error)
    }

}
/**
 * 签到
 */
async function signIn() {
    try {
        let option = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://hope.demogic.com/gic-wx-app/member_sign.json',
            headers: {
                'Host': 'hope.demogic.com',
                'xweb_xhr': '1',
                'channelEntrance': 'wx_app',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13) XWEB/9129',
                'sign': memberId,
                'Accept': ' */*',
                'Sec-Fetch-Site': 'cross-site',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Dest': 'empty',
                'Referer': 'https://servicewechat.com/wxa1f1fa3785a47c7d/55/page-frame.html',
                'Accept-Language': 'zh-CNzh;q=0.9',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: qs.stringify({
                'memberId': memberId,
                'cliqueId': '-1',
                'cliqueMemberId': '-1',
                'useClique': '0',
                'enterpriseId': enterpriseId,
                'appid': 'wxa1f1fa3785a47c7d',
                'gicWxaVersion': '3.9.16'
            })
        }
        log('🔰   ==>   开始签到');
        let response = await fetchData(option);
        if (response.code != 200) {
            log(JSON.stringify(response.data))
            return
        }
        let result = response.data
        if (result.errcode == 0) {
            log(`✔️   <==   签到成功,本次签到获得${result.response.memberSign.integralCount}积分`)
        }else if(result.errcode == 900001){
            log(`${result.errmsg}`)
        } else {
            Notify = 1;
            log(`❌   <==   签到失败，原因是${result.errmsg} `)
        }
    } catch (error) {
        log(error)
    }

}

// ===================================================固定代码===================================================
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
// 调试输出
function debug(msg) {
    if (debugging) log(`🕷️:${msg}`)
}
// 日志输出和记录
function log(s) {
    console.log(s + "\n")
    msg += s + "\n"
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
// 封装axios成同步方法
async function fetchData(option) {
    debug(`【option】${JSON.stringify(option)}`)
    let axios = require('axios');
    let result = { code: -1, data: {} }

    await axios.request(option)
        .then((response) => {
            result.code = response.status
            result.data = response.data
        })
        .catch((error) => {
            result.code = error.response.status
            result.data = error
        });

    debug(JSON.stringify(result))
    return result
}