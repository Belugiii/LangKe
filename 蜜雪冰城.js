const unirest = require("unirest");

const req = unirest("GET", "https://mxsa.mxbc.net/api/v1/customer/signin");

req.query({
  "t": "1699293491360",
  "appId": "d82be6bbc1da11eb9dd000163e122ecb",
  "sign": "dshaqKE4U-_hbLVcz50OOTzygr8lgbvQNOeB04aKV04QXx0RE6vaXgAs3u-DKay4W0RTPlM1Kk4Ag6-72oaFV7Z_9UlEVaBipHp951yWVFn6TN6jh9hUUnOuQlgjyp5o893c1iEm3PXE0ZyEcHa49oov26ZnvzarS7s61lcW1hSLD6shMCWNhJoZASF2gwJ43TkZ_xxKAIqBwgbQtQurMFZRP6-Qa5aL4KsKpVpAHq2kfxlPV-AzXJvtyY_rBMWOPFGEpvrQc4kD1GCqj__6bO2ATg0Rdq_FBi6S4NBwu8JttWFXhZIeCTjch-YMqQuRwsU04lDxWPwDT8v3izt6Mw=="
});

req.headers({
  "Host": "mxsa.mxbc.net",
  "Connection": "keep-alive",
  "version": "2.1.1",
  "content-type": "application/json",
  "Access-Token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ3eG1pbmlfMTU1NTQ1NDE1MjgyNDgxOTcxMyIsImlhdCI6MTY5OTI5MzQ3MX0.vR9A8F1T0x5Gf4A4Uit54Lqfe8UCO_E0zp6MvFZ58AN2l632hW4oxpvYVw8_EtJOOuzgjDvZAy5icd9F1pom0w",
  "Accept-Encoding": "gzip,compress,br,deflate",
  "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.41(0x18002930) NetType/4G Language/zh_CN",
  "Referer": "https://servicewechat.com/wx7696c66d2245d107/83/page-frame.html"
});

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});
