/*
    new Env("天气情话")
    cron: 30 7 * * *
*/
 const $ = Env('天气情话');
 const notify = $.isNode() ? require('./sendNotify') : '';
 var Notify = 1; //0为关闭通知，1为打开通知,默认为1
 const debug = 0; //0为关闭调试，1为打开调试,默认为0
 let variables = [];
 let data = '';
 let msg = '';
 let url = {
    url: '',
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
}

let result  = '';
var city = "赣州市" //城市名称,用于获取城市id
var cityId = "101240719"    //城市id
var heKey = "95f16ff97aac466f82dcd2c8287bca51"  //和风天气key
var qinghuaToken = "ZdFqhkgqS4821iG3";          //情话Token
var WX_appid = "wx96049b4d3b2edd7a";    //测试公众号appid
var WX_secret = "241d385b0d082860f644a6a7f9238e0f"  //测试公众号secret
var WX_Token = '';
var touser = "or-WZ5hhfEJFvBbBONQxNtu7RC7I" //接收的用户微信touser
var template_id = "SrfBnN2UubQ5L8ozw7luMnFUXR_BZNhw-b1p89UtyHk";
var loveday = new Date('2022-07-24').getTime();
var loved = '';
var birthday  = [4,12]
var birth = '';
let weather = {};   //天气
let love = '';  //情话

 !(async () => {
            
             console.log('查询城市id');
             await getCityId();
             
             console.log('开始查询天气')
             await getaWeather();
             
             console.log('获取情话');
             await getLove();
             
             console.log('获取下一个生日天数');
             await nextBirthday();
             
             console.log("获取相恋日期")
             await getLoveday();
             
             console.log("获取微信Token");
             await getWXToken();
             
             console.log("发送情话");
             await sendLove();
            
             
             
             await $.wait(2 * 1000);
             await SendMsg(msg);
 
 })()
     .catch((e) => console.logErr(e))
     .finally(() => $.done())

 
 /**
  * 获取城市id
  */
 function getCityId(timeout = 3 * 1000) {
     url.url = 'https://geoapi.qweather.com/v2/city/lookup?location='+ city +'&key=' + heKey;
     return new Promise((resolve) => {
         $.get(url, async (error, response, data) => {
             try {
                 result = JSON.parse(data);
                 cityId =  result.location[0].id;
                 console.log("城市id:" + cityId);
             } catch (e) {
                 console.log(e)
             } finally {
                 resolve();
             }
         }, timeout)
     })
 }
 
 function nextBirthday(){
    let today, bday, diff, days;
    today = new Date();
    bday = new Date(today.getFullYear(),birthday[0]-1,birthday[1]);
    if( today.getTime() > bday.getTime()) {
        bday.setFullYear(bday.getFullYear()+1);
    }
    diff = bday.getTime()-today.getTime();
    days = Math.floor(diff/(1000*60*60*24));
    console.log(days)
    birth = days;
 }
 
 function getLoveday(){
     let today = new Date().getTime();
     let days = Math.floor(( today - loveday) / (1000*60*60*24));
     console.log(days);
     loved = days;
 }
 
 
 //获取天气
  function getaWeather(timeout = 3 * 1000) {
     url.url = 'https://devapi.qweather.com/v7/weather/now?key=' + heKey + '&location=' + cityId;
     return new Promise((resolve) => {
         $.get(url, async (error, response, data) => {
             try {
                result = JSON.parse(data);
                weather = result.now;
                console.log(weather.temp + "°C")
                console.log(weather.text)
             } catch (e) {
                 console.log(e)
             } finally {
                 resolve();
             }
         }, timeout)
     })
 }
 
 function getLove(timeout = 3 * 1000) {
     url.url = 'https://v2.alapi.cn/api/qinghua?token=' + qinghuaToken + '&format=text'
     return new Promise((resolve) => {
         $.get(url, async (error, response, data) => {
             try {
                 love = data;
                 console.log(data);
             } catch (e) {
                 console.log(e)
             } finally {
                 resolve();
             }
         }, timeout)
     })
 } 
 
 function getWXToken(timeout = 3 * 1000) {
     url.url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid='+ WX_appid + '&secret=' + WX_secret
     return new Promise((resolve) => {
         $.get(url, async (error, response, data) => {
             try {
                 result = result = JSON.parse(data);
                 WX_Token = result.access_token
                 console.log(WX_Token);
             } catch (e) {
                 console.log(e)
             } finally {
                 resolve();
             }
         }, timeout)
     })
 }
  
 function sendLove(timeout = 3 * 1000) {
     url.url = 'https://api.weixin.qq.com/cgi-bin/message/template/send?access_token='+ WX_Token;
     url.body = '{"touser":"' + touser + '","template_id":"' + template_id + '","url":"http://belugi.top","topcolor":"#FF0000","data":{"city":{"value":"'+ city +'","color":"#238E68"},"weather":{"value":"'+ weather.text +'","color":"#99CCFF"},"temperature":{"value":"'+ weather.temp +'°C","color":"#FFCC33"},"love":{"value":"'+ loved +'天","color":"#99FF00"},"birthday":{"value":"' + birth + '天","color":"#CCCCFF"},"words":{"value":"'+ love +'","color":"#FFCCFF"}}}';
     console.log(url.body)
     return new Promise((resolve) => {
         $.post(url, async (error, response, data) => {
             try {
                 result = JSON.parse(data);
                 if(result.errmsg == "ok"){
                     msg += "天气情话发送成功";
                 }else{
                     msg += "天气情话发送失败";
                 }
             } catch (e) {
                 console.log(e)
             } finally {
                 resolve();
             }
         }, timeout)
     })
 }
 
 
 // ============================================发送消息============================================ \\
 async function SendMsg(message) {
     if (!message)
         return;
     if (Notify > 0) {
         if ($.isNode()) {
             var notify = require('./sendNotify');
             await notify.sendNotify($.name, message);
         } else {
             $.msg(message);
         }
     } else {
         console.log(message);
     }
 }
 
 /**
  * 随机数生成
  */
 function randomString(e) {
     e = e || 32;
     var t = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890",
         a = t.length,
         n = "";
     for (i = 0; i < e; i++)
         n += t.charAt(Math.floor(Math.random() * a));
     return n
 }
 
 /**
  * 随机整数生成
  */
 function randomInt(min, max) {
     return Math.round(Math.random() * (max - min) + min)
 }


 function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
