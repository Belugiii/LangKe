const $ = new Env("鸿星尔克");
const crypto = require('crypto');
const notify = $.isNode() ? require('./sendNotify') : '';
let ckName = "hxek";
let Notify = 0;
let ps = `
    提示: 抓取[${$.name}]小程序(https://hope.demogic.com)请求头中的memberId,enterpriseId,使用&间隔,变量名:${ckName},多个账号使用@或换行分隔!!! 
`
let envSplitor = ["@", "\n", "\r\n"]; //多账号分隔符
let userIdx = 0;
let userList = [];
const qs = require('qs');
let ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13) XWEB/9129'
class Task {
    constructor(str) {
        this.index = ++userIdx;
        this.memberId = str.split('&')[0];
        this.enterpriseId = str.split('&')[1];
        this.ckStatus = false;
        this.memberName,this.accumulatPoints;
    }

    async main() {
        $.log(`========= 开始【第${this.index}个账号】=========`)
        await this.init();
        if (!this.ckStatus) return;
        $.log(`用户名: ${this.memberName}`);
        await this.sign();
        $.log(`余额: ${this.accumulatPoints}`);
        await $.wait(2 * 1000);
    }
    async taskRequest(method, url, header = "", body = "") {

        let headers = { 
            'User-Agent': ua, 
            'sign': this.memberId, 
            'Referer': 'https://servicewechat.com/wxa1f1fa3785a47c7d/55/page-frame.html', 
            'Content-Type': 'application/x-www-form-urlencoded'
          }
          header ? Object.assign(headers, header) : "";
        const reqeuestOptions = {
            url: url,
            method: method,
            headers: headers
        }
        body == "" ? "" : Object.assign(reqeuestOptions, { body: body })
        let { body: result } = await $.httpRequest(reqeuestOptions)
        return result
    }
    // 查询用户信息
    async init() {
        try {
            let result = await this.taskRequest("post", `https://hope.demogic.com/gic-wx-app/get_member_grade_privileg.json`,{},qs.stringify({'memberId': this.memberId}));
            if(result.errcode != 0) throw new Error('获取用户信息失败,请检查token是否失效!!😭');
            this.memberName = result.response.member.memberName;
            this.accumulatPoints = result.response.member.accumulatPoints;
            this.ckStatus = true;
        } catch (e) {
            console.log(e.message);
            this.ckStatus = false;
        }
    }
    // 签到
    async sign() {
        try {
			let appid = 'wxa1f1fa3785a47c7d';
			let signArry = HXEK_SIGN(this.memberId,appid)
			let sign = signArry[0]
			let random_int = signArry[1]
			let timestamp = signArry[2]
			let transId = appid + timestamp
			let data = {
				"path":"pages/points-mall/member-task/member-task",
				"query":{},
				"scene":1256,
				"referrerInfo":{},
				"apiCategory":"default",
				'memberId': this.memberId,
				'cliqueId': '-1',
				'cliqueMemberId': '-1',
				'useClique': '0',
				'enterpriseId': this.enterpriseId,
				'appid': appid,
				'gicWxaVersion': '3.9.16',
				'random' : random_int,
				'sign' : sign,
				'timestamp' : timestamp,
				'transId' : transId,
			  }
            let result = await this.taskRequest("post", `https://hope.demogic.com/gic-wx-app/member_sign.json`,{},qs.stringify(data))
            if(result.errcode != 0){
                $.log(`签到: 签到失败❌ 原因: ${result.errmsg}`);
            }else{
                $.log(`签到: 签到成功✔️ 获得${result.response.memberSign.integralCount}积分`);
                if(result.response.memberSign.integralCount) this.accumulatPoints += parseInt(result.response.memberSign.integralCount);
            }
        } catch (e) {
            Notify++;
            console.log(e);
        }   
    }
}


// 生成GMT+8时间戳
function getDateTimeString() {
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// 生成一定范围内的随机数
function randint(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function HXEK_SIGN(memberId, appid){
  let signArry = []
  // appid = "wxa1f1fa3785a47c7d"
  let secret = 'damogic8888'
  // GMT+8时间戳
  // timestamp = '2025-01-11 13:24:09'
  let timestamp = getDateTimeString()
  // console.log(timestamp)
  // 随机数
  // random_int = 1475835
  let random_int = randint(1000000, 9999999)
  // console.log(random_int)
  // 待加密字符串
  let raw_string = "timestamp=" + timestamp + "transId=" +appid + timestamp + "secret=" + secret + "random=" + random_int + "memberId=" + memberId
//   console.log(raw_string)
  // MD5加密
  let sign = getsign(raw_string)
  // console.log(sign)
  signArry = [sign, random_int, timestamp]
  return signArry
}

// 获取sign，返回小写
function getsign(data) {
    var sign = crypto.createHash("md5")
        .update(data, "utf8")
        .digest("hex")
        // .toUpperCase() // 大写
        .toString();
    return sign;
}

// 固定代码
!(async () => {
    if (!(await checkEnv())) return;
    if (userList.length > 0) {
        let taskall = [];
        for (let user of userList) {
            // taskall.push(user.main());
            await user.main(); // 同步
        }
        // await Promise.all(taskall); 异步
    }
    if(Notify){
        await $.sendMsg($.logs.join("\n"))
    }
})()
    .catch((e) => console.log(e))
    .finally(() => $.done());
async function checkEnv() {
    let userCookie = ($.isNode() ? process.env[ckName] : $.getdata(ckName)) || "";
    if (userCookie) {
        let e = envSplitor[0];
        for (let o of envSplitor)
            if (userCookie.indexOf(o) > -1) {
                e = o;
                break;
            }
        for (let n of userCookie.split(e)) n && userList.push(new Task(n));
    } else {
        console.log(ps);
        return;
    }
    return console.log(`🏷️   ==>   共找到${userList.length}个账号`), true; //true == !0
}
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
function Env(t, s) {
    return new (class {
        constructor(t, s) {
            this.name = t;
            this.data = null;
            this.dataFile = "box.dat";
            this.logs = [];
            this.logSeparator = "\n";
            this.startTime = new Date().getTime();
            Object.assign(this, s);
            console.log(`🔔   ==>   ${this.name}, 开始!\n⏰️   ==>   ${getCurrentDateTime()}`);
        }
        isNode() { return "undefined" != typeof module && !!module.exports }
        isQuanX() { return "undefined" != typeof $task }
        isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon }
        isLoon() { return "undefined" != typeof $loon }
        loaddata() {
            if (!this.isNode()) return {}; {
                this.fs = this.fs ? this.fs : require("fs");
                this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    s = this.path.resolve(process.cwd(), this.dataFile),
                    e = this.fs.existsSync(t),
                    i = !e && this.fs.existsSync(s);
                if (!e && !i) return {}; { const i = e ? t : s; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs");
                this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    s = this.path.resolve(process.cwd(), this.dataFile),
                    e = this.fs.existsSync(t),
                    i = !e && this.fs.existsSync(s),
                    o = JSON.stringify(this.data);
                e ? this.writeFileSync(t, o) : i ? this.fs.writeFileSync(s, o) : this.fs.writeFileSync(t, o)
            }
        }
        lodash_get(t, s, e) {
            const i = s.replace(/\[(\d+)\]/g, ".$1").split(".");
            let o = t;
            for (const t of i)
                if (((o = Object(o)[t]), void 0 === o)) return e;
            return o
        }
        lodash_set(t, s, e) { return Object(t) !== t ? t : (Array.isArray(s) || (s = s.toString().match(/[^.[\]]+/g) || []), (s.slice(0, -1).reduce((t, e, i) => Object(t[e]) === t[e] ? t[e] : (t[e] = Math.abs(s[i + 1]) >> 0 == +s[i + 1] ? [] : {}), t)[s[s.length - 1]] = e), t) }
        getdata(t) {
            let s = this.getval(t);
            if (/^@/.test(t)) {
                const [, e, i] = /^@(.*?)\.(.*?)$/.exec(t), o = e ? this.getval(e) : "";
                if (o) try {
                    const t = JSON.parse(o);
                    s = t ? this.lodash_get(t, i, "") : s
                } catch (t) { s = "" }
            }
            return s
        }
        setdata(t, s) {
            let e = !1;
            if (/^@/.test(s)) {
                const [, i, o] = /^@(.*?)\.(.*?)$/.exec(s), h = this.getval(i), a = i ? ("null" === h ? null : h || "{}") : "{}";
                try {
                    const s = JSON.parse(a);
                    this.lodash_set(s, o, t), (e = this.setval(JSON.stringify(s), i))
                } catch (s) {
                    const h = {};
                    this.lodash_set(h, o, t), (e = this.setval(JSON.stringify(h), i))
                }
            } else e = this.setval(t, s);
            return e
        }
        getval(t) { if (this.isSurge() || this.isLoon()) { return $persistentStore.read(t) } else if (this.isQuanX()) { return $prefs.valueForKey(t) } else if (this.isNode()) { this.data = this.loaddata(); return this.data[t] } else { return this.data && this.data[t] || null } }
        setval(t, s) {
            if (this.isSurge() || this.isLoon()) { return $persistentStore.write(t, s) } else if (this.isQuanX()) { return $prefs.setValueForKey(t, s) } else if (this.isNode()) {
                this.data = this.loaddata();
                this.data[s] = t;
                this.writedata();
                return true
            } else { return this.data && this.data[s] || null }
        }
        initRequestEnv(t) {
            try { require.resolve('got') && (this.requset = require("got"), this.requestModule = "got") } catch (e) { }
            try { require.resolve('axios') && (this.requset = require("axios"), this.requestModule = "axios") } catch (e) { }
            this.cktough = this.cktough ? this.cktough : require("tough-cookie");
            this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
            if (t) { t.headers = t.headers ? t.headers : {}; if (typeof t.headers.Cookie === "undefined" && typeof t.cookieJar === "undefined") { t.cookieJar = this.ckjar } }
        }
        queryStr(options) { return Object.entries(options).map(([key, value]) => `${key}=${typeof value === 'object' ? JSON.stringify(value) : value}`).join('&') }
        getURLParams(url) {
            const params = {};
            const queryString = url.split('?')[1];
            if (queryString) {
                const paramPairs = queryString.split('&');
                paramPairs.forEach(pair => {
                    const [key, value] = pair.split('=');
                    params[key] = value
                })
            }
            return params
        }
        isJSONString(str) { try { return JSON.parse(str) && typeof JSON.parse(str) === 'object' } catch (e) { return false } }
        isJson(obj) { var isjson = typeof (obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length; return isjson }
        async sendMsg(message) { if (!message) return; if ($.isNode()) { await notify.sendNotify($.name, message) } else { $.msg($.name, '', message) } }
        async httpRequest(options) {
            let t = { ...options };
            t.headers = t.headers || {};
            if (t.params) { t.url += '?' + this.queryStr(t.params) }
            t.method = t.method.toLowerCase();
            if (t.method === 'get') {
                delete t.headers['Content-Type'];
                delete t.headers['Content-Length'];
                delete t.headers['content-type'];
                delete t.headers['content-length'];
                delete t.body
            } else if (t.method === 'post') {
                let ContentType;
                if (!t.body) { t.body = "" } else if (typeof t.body === "string") { ContentType = this.isJSONString(t.body) ? 'application/json' : 'application/x-www-form-urlencoded' } else if (this.isJson(t.body)) {
                    t.body = JSON.stringify(t.body);
                    ContentType = 'application/json'
                }
                if (!t.headers['Content-Type'] && !t.headers['content-type']) { t.headers['Content-Type'] = ContentType }
            }
            if (this.isNode()) {
                this.initRequestEnv(t);
                if (this.requestModule === "axios" && t.method === "post") {
                    t.data = t.body;
                    delete t.body
                }
                let httpResult;
                if (this.requestModule === "got") { httpResult = await this.requset(t); if (this.isJSONString(httpResult.body)) { httpResult.body = JSON.parse(httpResult.body) } } else if (this.requestModule === "axios") {
                    httpResult = await this.requset(t);
                    httpResult.body = httpResult.data
                }
                return httpResult
            }
            if (this.isQuanX()) {
                t.method = t.method.toUpperCase();
                return new Promise((resolve, reject) => {
                    $task.fetch(t).then(response => {
                        if (this.isJSONString(response.body)) { response.body = JSON.parse(response.body) }
                        resolve(response)
                    })
                })
            }
        }
        randomNumber(length) { const characters = '0123456789'; return Array.from({ length }, () => characters[Math.floor(Math.random() * characters.length)]).join('') }
        randomString(length) { const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'; return Array.from({ length }, () => characters[Math.floor(Math.random() * characters.length)]).join('') }
        timeStamp() { return new Date().getTime() }
        uuid() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0,
                    v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16)
            })
        }
        time(t) { let s = { "M+": new Date().getMonth() + 1, "d+": new Date().getDate(), "H+": new Date().getHours(), "m+": new Date().getMinutes(), "s+": new Date().getSeconds(), "q+": Math.floor((new Date().getMonth() + 3) / 3), S: new Date().getMilliseconds(), }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in s) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? s[e] : ("00" + s[e]).substr(("" + s[e]).length))); return t }
        msg(s = t, e = "", i = "", o) {
            const h = (t) => !t || (!this.isLoon() && this.isSurge()) ? t : "string" == typeof t ? this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : void 0 : "object" == typeof t && (t["open-url"] || t["media-url"]) ? this.isLoon() ? t["open-url"] : this.isQuanX() ? t : void 0 : void 0;
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(s, e, i, h(o)) : this.isQuanX() && $notify(s, e, i, h(o)));
            logs.push(t);
            e ? logs.push(e) : '';
            i ? logs.push(i) : '';
            console.log(logs.join('\n'));
            this.logs = this.logs.concat(logs)
        }
        log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) }
        logErr(t, s) {
            const e = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            e ? this.log("", `\u2757\ufe0f${this.name},\u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name},\u9519\u8bef!`, t)
        }
        wait(t) { return new Promise((s) => setTimeout(s, t)) }
        done(t = {}) {
            const s = new Date().getTime(),
                e = (s - this.startTime) / 1e3;
            console.log(`🔔   ==>   ${this.name}, 结束!\n⏰️   ==>   ${getCurrentDateTime()}`);
            if (this.isNode()) { process.exit(1) }
            if (this.isQuanX()) { $done(t) }
        }
    })(t, s)
}