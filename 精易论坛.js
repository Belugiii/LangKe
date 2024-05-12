const axios = require('axios');
const notify = require('./sendNotify');
let data = 'formhash=03019e82&submit=1&targerurl=&todaysay=&qdxq=kx';

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://bbs.125.la/plugin.php?id=dsu_paulsign:sign&operation=qiandao&infloat=1',
  headers: { 
    'authority': 'bbs.125.la', 
    'sec-ch-ua': '";Not A Brand";v="99", "Chromium";v="94"', 
    'accept': '*/*', 
    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8', 
    'x-requested-with': 'XMLHttpRequest', 
    'sec-ch-ua-mobile': '?0', 
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36 SE 2.X MetaSr 1.0', 
    'sec-ch-ua-platform': '"Windows"', 
    'origin': 'https://bbs.125.la', 
    'sec-fetch-site': 'same-origin', 
    'sec-fetch-mode': 'cors', 
    'sec-fetch-dest': 'empty', 
    'referer': 'https://bbs.125.la/plugin.php?id=dsu_paulsign:sign', 
    'accept-language': 'zh-CN,zh;q=0.9', 
    'cookie': 'lDlk_ecc9_saltkey=XdR6rIkZ; lDlk_ecc9_lastvisit=1712153363; lDlk_ecc9_sid=eudA7b; lDlk_ecc9_client_created=1712156988; lDlk_ecc9_client_token=D6112EEF30A0BF5B843193463804C0B7; lDlk_ecc9_ulastactivity=204fcQRWPeoLMXarm9fsqta49DirOFh0as%2FAVMzxyzNX%2BtV9%2Bx9A; lDlk_ecc9_auth=0134cM8TmVD8Ozvz6qeI%2BdBOCzCtMT0Yd5nRBBTbFC0CMZRTgVq2rqDexgPaBpPUylVSE5U6bNkJL6On86%2FO8I1Z6as; lDlk_ecc9_connect_login=1; lDlk_ecc9_connect_is_bind=1; lDlk_ecc9_connect_uin=D6112EEF30A0BF5B843193463804C0B7; lDlk_ecc9_stats_qc_login=3; lDlk_ecc9_sendmail=1; lDlk_ecc9_st_p=336336%7C1712157267%7C213726405293ef7bf3609732c30a38b1; lDlk_ecc9_visitedfid=81; lDlk_ecc9_viewid=tid_132865; Hm_lvt_fa32dadde3745af309b587b38d20ea1d=1712156967,1712157271; lDlk_ecc9_smile=4D1; lDlk_ecc9_nofavfid=1; lDlk_ecc9_checkpm=1; lDlk_ecc9_lastcheckfeed=336336%7C1712157419; lDlk_ecc9_checkfollow=1; lDlk_ecc9_lastact=1712157426%09plugin.php%09robot; Hm_lpvt_fa32dadde3745af309b587b38d20ea1d=1712157429; lDlk_ecc9_connect_is_bind=1; lDlk_ecc9_lastact=1712157479%09plugin.php%09'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
  if(response.data.status != 1){
	  notify.sendNotify("精易论坛", response.data.msg);
  }
})
.catch((error) => {
  console.log(error);
  notify.sendNotify("精易论坛", error);
});
