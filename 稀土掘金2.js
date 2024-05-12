const axios = require("axios");
const notify = require('./sendNotify');
const options = {
  method: 'POST',
  url: 'https://api.juejin.cn/growth_api/v1/check_in',
  params: {
    aid: '2608',
    uuid: '7271089995011704357',
    spider: '0',
    msToken: 'iuOwA8xTsPWcbZIEB80GIMnbCxN7EA4aVlkECFE5KevcUmEFOSTC_oaci5ZZkv_MONCx659ad3cTPQhi4pd6nC8B7d9_QBzmzaDTIeI16i84dyI8iEgs4X_kurmebrQ=',
    a_bogus: 'DjUY6OgQMsm13hVTX7Dz9JDEb760YW4HgZEPI2GDktqq'
  },
  headers: {
    authority: 'api.juejin.cn',
    accept: '*/*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'content-type': 'application/json',
    origin: 'https://juejin.cn',
    pragma: 'no-cache',
    referer: 'https://juejin.cn/',
    'sec-ch-ua': '"Chromium";v="118", "Google Chrome";v="118", "Not=A?Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
    'x-secsdk-csrf-token': '000100000001b7ace24c7592b259cc4055d835eadc2251740bdefe08179942614698f6ecb23e17a331e4c4afef63',
    Cookie: '_tea_utm_cache_2608=undefined; __tea_cookie_tokens_2608=%7B%22web_id%22%3A%227271089995011704357%22%2C%22user_unique_id%22%3A%227271089995011704357%22%2C%22timestamp%22%3A1692932575181%7D; n_mh=hK1U8b4o25p01X0KV0fVOuHB8pnSPV9yPZW7AgUe9sU; sid_guard=bf9930456f6e51e99350c2538a5131d4|1692932603|31536000|Sat,+24-Aug-2024+03:03:23+GMT; uid_tt=40abf560a3c4c7cfbd03e68a4604bdc0; uid_tt_ss=40abf560a3c4c7cfbd03e68a4604bdc0; sid_tt=bf9930456f6e51e99350c2538a5131d4; sessionid=bf9930456f6e51e99350c2538a5131d4; sessionid_ss=bf9930456f6e51e99350c2538a5131d4; sid_ucp_v1=1.0.0-KGJhZWE1ZDAxMjZiNWVhMzJjMjQ2YTdhNjNlYWEzMTIwMGQzNjE1MTgKFgjdpZCagI21BRD7s6CnBhiwFDgIQAsaAmhsIiBiZjk5MzA0NTZmNmU1MWU5OTM1MGMyNTM4YTUxMzFkNA; ssid_ucp_v1=1.0.0-KGJhZWE1ZDAxMjZiNWVhMzJjMjQ2YTdhNjNlYWEzMTIwMGQzNjE1MTgKFgjdpZCagI21BRD7s6CnBhiwFDgIQAsaAmhsIiBiZjk5MzA0NTZmNmU1MWU5OTM1MGMyNTM4YTUxMzFkNA; store-region=cn-fj; store-region-src=uid; _ga=GA1.2.920701771.1692932604; _ga_S695FMNGPJ=GS1.2.1692932604.1.0.1692932604.60.0.0; csrf_session_id=f7f28d0fe8455a5d5a9e3d2b32b1ca90; msToken=hxHZoNYYGSrM_Xa4t9Pc8MNgS68IpWZ-RKSwpDq1xTvPezgoKPXhDfRpTgZHuVQkY8IT6FzNFhL_jz35qZoyfn929VlTTeV0binYHALiQY8ya55ERT0NVOqT1TVZoQ=='
  },
  data: {}
};

axios.request(options).then(function (response) {
  console.log(response.data);
  if(response.data.err_no != 0){
	  notify.sendNotify("稀土掘金2", response.data.err_msg);
  }
}).catch(function (error) {
  console.error(error);
  notify.sendNotify("稀土掘金2", error);
});