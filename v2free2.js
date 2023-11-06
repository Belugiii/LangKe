// new Env("v2free2签到")
// cron: 30 7 * * *
const unirest = require("unirest");

const req = unirest("POST", "https://v2free.net/user/checkin");

req.headers({
  "Host": "v2free.net",
  "X-Requested-With": "XMLHttpRequest",
  "Sec-Fetch-Site": "same-origin",
  "Accept-Language": "zh-CN,zh-Hans;q=0.9",
  "Accept-Encoding": "gzip, deflate, br",
  "Sec-Fetch-Mode": "cors",
  "Accept": "application/json, text/javascript, */*; q=0.01",
  "Origin": "https://v2free.net",
  "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Mobile/15E148 Safari/604.1",
  "Referer": "https://v2free.net/user",
  "Connection": "keep-alive",
  "Sec-Fetch-Dest": "empty",
  "Cookie": "crisp-client/session/a47ae3dd-53d8-4b15-afae-fb4577f7bcd0=session_50bfaae9-a4c2-459c-bd92-782591ee399e; email=belugi@qq.com; expire_in=1701736838; ip=7427f1497e5ecd22f19fc54ff96c3b00; key=76cab01b1133bf926c78a82be7cc4a0e7adbc99ee095d; uid=52198"
});

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});
