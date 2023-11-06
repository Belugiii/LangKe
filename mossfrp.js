// new Env("mossfrp签到")
// cron: 30 7 * * *
const unirest = require("unirest");

const req = unirest("POST", "https://https.ghs.wiki:7002/API");

req.query({
  "void": "post"
});

req.headers({
  "Accept": "application/json",
  "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
  "Access-Control-Allow-Origin": "*",
  "Connection": "keep-alive",
  "Content-Type": "application/json",
  "Origin": "https://www.mossfrp.top",
  "Referer": "https://www.mossfrp.top/",
  "Sec-Fetch-Dest": "empty",
  "Sec-Fetch-Mode": "cors",
  "Sec-Fetch-Site": "cross-site",
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.43",
  "access-control-max-age": "864000",
  "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Microsoft Edge\";v=\"114\"",
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": "\"Windows\"",
  "content-type": "application/json"
});

req.type("json");
req.send({
  "type": "signIn",
  "token": "6cbebf36-cbc5-4ff6-91d1-a8b0e603d01e"
});

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});
