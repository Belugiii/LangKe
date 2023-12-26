const axios = require("axios");

const options = {
  method: 'POST',
  url: 'https://api.juejin.cn/growth_api/v1/check_in',
  params: {
    aid: '2608',
    uuid: '7243790995710723640',
    spider: '0',
    msToken: 'Z5pj7h0OqdvO-tEvkCIPCUt749MM-nmd4J7q2M-L5YtKoSQLMpRXlAAvEEUEExjlJ7BB--VyZmm7i9gnq8XxGtWPFnXEhKm9y_Qrr8DVqU0ZeMwN5V2zJ82y9s7i4qk=',
    a_bogus: 'mJBOgOgQMsm1F7V66wDz976E74W0YW4pgZEPI2KdQtwd'
  },
  headers: {
    authority: 'api.juejin.cn',
    accept: '*/*',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
    'content-type': 'application/json',
    origin: 'https://juejin.cn',
    referer: 'https://juejin.cn/',
    'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Microsoft Edge";v="114"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.43',
    'x-secsdk-csrf-token': '000100000001eae22c088c58348efb1968be79fad2e786070009515ee72f76bd5be1d955677a17a331bb48358a28',
    Cookie: '_tea_utm_cache_2608=undefined; __tea_cookie_tokens_2608=%7B%22user_unique_id%22%3A%227243790995710723640%22%2C%22web_id%22%3A%227243790995710723640%22%2C%22timestamp%22%3A1702356396374%7D; passport_csrf_token=5bf5213a8f354b376db0b3d583430f2b; passport_csrf_token_default=5bf5213a8f354b376db0b3d583430f2b; odin_tt=2278a97a148122c259eb758111e21f39f9ee38e3fed1f3754f204b8bbad99bd651bd21eba9f9c7c7eaa71b955acd16212c20dfc7f3ee75f1962f0f3bfe1ebd9e; n_mh=wl3aC6PDcW4qhZ7bIKBsgPoczFXdzxFtCL8dSjaSajg; passport_auth_status=aed16f2eaf168b579e39be664af22a29,; passport_auth_status_ss=aed16f2eaf168b579e39be664af22a29,; sid_guard=609c0547f95e52c6a524cbb644cff5bc|1702356504|31536000|Wed,+11-Dec-2024+04:48:24+GMT; uid_tt=94817f999b73355a6ba779df65bae0af; uid_tt_ss=94817f999b73355a6ba779df65bae0af; sid_tt=609c0547f95e52c6a524cbb644cff5bc; sessionid=609c0547f95e52c6a524cbb644cff5bc; sessionid_ss=609c0547f95e52c6a524cbb644cff5bc; sid_ucp_v1=1.0.0-KDhkODBiN2U1ZWU3ODZkYWFmM2VjODQ1Y2RiZmVlMGMyOTA4Zjg3NDQKFwjZsNDy98yuARCYzN-rBhiwFDgCQOwHGgJsZiIgNjA5YzA1NDdmOTVlNTJjNmE1MjRjYmI2NDRjZmY1YmM; ssid_ucp_v1=1.0.0-KDhkODBiN2U1ZWU3ODZkYWFmM2VjODQ1Y2RiZmVlMGMyOTA4Zjg3NDQKFwjZsNDy98yuARCYzN-rBhiwFDgCQOwHGgJsZiIgNjA5YzA1NDdmOTVlNTJjNmE1MjRjYmI2NDRjZmY1YmM; store-region=cn-jx; store-region-src=uid; csrf_session_id=f7f28d0fe8455a5d5a9e3d2b32b1ca90; msToken=Y5U9na8wXStLkCn0d_sFAEbIqkBNPZIHTlO3SEtpIJoQT9OTTO3ez7EAoe27hvy1aHrtkzok31eD5mAXgc6dta6LwfnJu4vqQF00xHV0A_Go0Yar_sWz5E0_YRL-PA=='
  },
  data: {}
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});