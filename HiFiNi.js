
//new Env("HiFiNi签到")
var unirest = require('unirest');
var req = unirest('POST', 'https://www.hifini.com/sg_sign.htm')
  .headers({
    'authority': 'www.hifini.com',
    'content-length': '0',
    'pragma': 'no-cache',
    'cache-control': 'no-cache',
    'accept': 'text/plain, */*; q=0.01',
    'origin': 'https://www.hifini.com',
    'x-requested-with': 'XMLHttpRequest',
    'sec-fetch-dest': 'empty',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 SE 2.X MetaSr 1.0',
    'dnt': '1',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'cors',
    'referer': 'https://www.hifini.com/',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cookie': 'bbs_sid=s06kfra5paog36bgij7kijpufl; __51cke__=; Hm_lvt_4ab5ca5f7f036f4a4747f1836fffe6f2=1682941156; bbs_token=YCNxXqHL1tmVATERKR1mPcUjLTPhjJ9cdneAWonxiHyi2SBuG7T46JGc1_2BTlUn5PKEwfrBgP4TCoYVKcS9_2BhuT2cnLBC_2F8NG; __tins__21208037=^%^7B^%^22sid^%^22^%^3A^%^201682941155570^%^2C^%^20^%^22vd^%^22^%^3A^%^205^%^2C^%^20^%^22expires^%^22^%^3A^%^201682942991568^%^7D; __51laig__=5; Hm_lpvt_4ab5ca5f7f036f4a4747f1836fffe6f2=1682941192'
  })
  .end(function (res) { 
    if (res.error) throw new Error(res.error); 
    console.log(res.raw_body);
  });
