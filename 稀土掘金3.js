const axios = require('axios');
let data = JSON.stringify({});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.juejin.cn/growth_api/v1/check_in?aid=2608&uuid=7329903484831335990&spider=0&msToken=sAtBcRmrVM0uW9aeqiI8sLcSnZV0gXrhx2_0YFDLXfWhlDo3hkqCZEPAF55mgAFlWFF7WLLNs-ZHsd_CoVOKXl5EEX6Nlidz2fpxmPdHgzjOrUvjFwZNqKFq444_un4%3D&a_bogus=dvlODcZdMsm1J7vPKwDT9yjEwRR0YW4TgZEPLm%2F3Z0oh',
  headers: { 
    'authority': 'api.juejin.cn', 
    'accept': '*/*', 
    'accept-language': 'zh-CN,zh;q=0.9', 
    'cache-control': 'no-cache', 
    'content-type': 'application/json', 
    'cookie': 'passport_csrf_token=748a221fb094c8bdae087416c6f6a539; passport_csrf_token_default=748a221fb094c8bdae087416c6f6a539; _tea_utm_cache_2608=undefined; csrf_session_id=f4d1c6b7e8cb920546c40958801bd974; __tea_cookie_tokens_2608=%257B%2522web_id%2522%253A%25227329903484831335990%2522%252C%2522user_unique_id%2522%253A%25227329903484831335990%2522%252C%2522timestamp%2522%253A1706626164800%257D; odin_tt=4976f93d603666b997c0663ceac515d7b105310abf333190490a01750d0d5bb2b1377ad83c89b60a9e7be144cb598600e3637118275ac0422d020bb2948ab992; n_mh=2c8OMmNYknfRDu9Q5DtRhF0S4G1bJKugjIkdpPen1u8; passport_auth_status=53e7ed39e1327697f8bebf6b6afe2ab8%2C; passport_auth_status_ss=53e7ed39e1327697f8bebf6b6afe2ab8%2C; sid_guard=a00a9f6e9faa7472f6b6314e28192c5e%7C1706626192%7C31536000%7CWed%2C+29-Jan-2025+14%3A49%3A52+GMT; uid_tt=e317a354c838f8ee808d65302ac16c09; uid_tt_ss=e317a354c838f8ee808d65302ac16c09; sid_tt=a00a9f6e9faa7472f6b6314e28192c5e; sessionid=a00a9f6e9faa7472f6b6314e28192c5e; sessionid_ss=a00a9f6e9faa7472f6b6314e28192c5e; sid_ucp_v1=1.0.0-KDlhMDA5MTUyODA4MDE5NWZlZmNiMDJiODQxMGEwMzQyYjUwYjY5YjIKFwiKiYCGuc3qBhCQmeStBhiwFDgCQOwHGgJsZiIgYTAwYTlmNmU5ZmFhNzQ3MmY2YjYzMTRlMjgxOTJjNWU; ssid_ucp_v1=1.0.0-KDlhMDA5MTUyODA4MDE5NWZlZmNiMDJiODQxMGEwMzQyYjUwYjY5YjIKFwiKiYCGuc3qBhCQmeStBhiwFDgCQOwHGgJsZiIgYTAwYTlmNmU5ZmFhNzQ3MmY2YjYzMTRlMjgxOTJjNWU; store-region=cn-jx; store-region-src=uid; msToken=h9Tva2JprTVGCARZBN2o6oq6qY6IRn2a-KtMS3E0Gko5lp9XU6dVWsAD_mLX9_Ih1VQ9XGs9UjbvOB0gND7c7RwyJZDNFQlsBMg7GPOHWaRIzKqxPwlhXHBCwgOSKig=; msToken=eI-yCCGW7Bb5K9aLc9iSrZi3APfr7XDdisAr4Toz4CR8EH0QnSKtyGyhXv-__voP4sMtIYAIsPRmt5ZmcYEgx-YbGTJRnKwTDD9Phix1wyRw_nc_IbGGFNPsCRg5bLY=', 
    'origin': 'https://juejin.cn', 
    'pragma': 'no-cache', 
    'referer': 'https://juejin.cn/', 
    'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"', 
    'sec-ch-ua-mobile': '?0', 
    'sec-ch-ua-platform': '"Windows"', 
    'sec-fetch-dest': 'empty', 
    'sec-fetch-mode': 'cors', 
    'sec-fetch-site': 'same-site', 
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36', 
    'x-secsdk-csrf-token': '000100000001516fc615e3ebe8f95dac833aea26ccfb73d4cb62bdab3d6590e990aca1b6c94717af27807208ca6d'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
