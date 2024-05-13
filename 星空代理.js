const axios = require('axios');
let data = 'type=login';

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://www.xkdaili.com/tools/submit_ajax.ashx?action=user_receive_point',
  headers: { 
    'authority': 'www.xkdaili.com', 
    'sec-ch-ua': '";Not A Brand";v="99", "Chromium";v="94"', 
    'accept': 'application/json, text/javascript, */*; q=0.01', 
    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8', 
    'x-requested-with': 'XMLHttpRequest', 
    'sec-ch-ua-mobile': '?0', 
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36 SE 2.X MetaSr 1.0', 
    'sec-ch-ua-platform': '"Windows"', 
    'origin': 'https://www.xkdaili.com', 
    'sec-fetch-site': 'same-origin', 
    'sec-fetch-mode': 'cors', 
    'sec-fetch-dest': 'empty', 
    'referer': 'https://www.xkdaili.com/main/UserCenter.aspx', 
    'accept-language': 'zh-CN,zh;q=0.9', 
    'cookie': 'ASP.NET_SessionId=j4botb35xcxhanqd0wlqsohw; Hm_lvt_d76458121a7604d3e55d998f66ef0be6=1715579358; Qs_lvt_548529=1715579358; mediav=%7B%22eid%22%3A%221255810%22%2C%22ep%22%3A%22%22%2C%22vid%22%3A%22UGZXT%25YvRC%3Dr)L%3D%3E%40s40%22%2C%22ctn%22%3A%22%22%2C%22vvid%22%3A%22UGZXT%25YvRC%3Dr)L%3D%3E%40s40%22%2C%22_mvnf%22%3A1%2C%22_mvctn%22%3A0%2C%22_mvck%22%3A0%2C%22_refnf%22%3A1%7D; Hm_lpvt_d76458121a7604d3e55d998f66ef0be6=1715579364; Qs_pv_548529=2214671615676371000%2C705041152863003000; dt_cookie_user_name_remember=DTcms=15270010041; dt_cookie_user_pwd_remember=DTcms=1718450639'
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
