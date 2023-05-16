// new Env("移动抽奖")
// cron: 0 9 * * *


var unirest = require('unirest');
var req = unirest('GET', 'https://wap.jx.10086.cn/hui/special/drawDis?MmEwMD=5P0CP5T.lVpNjzruSK6i40tnM5Oc75v.2H3WIqW5XkOffiU27cVZiTQo2pXwfI.cWHargHJzzVE0IwkMQjP_vt7l1NxMEdeHRL94zHvAvvB6LpQxhhQp8UPVlT3FvQ5G34CO6WRrbAx7gD_Tqr0R8TmgWNxfE0Pc0FCwT9vcc_99NMUpao4kZyrn.WZmij2nwZ1FMeg1hsgLOaETVsTYqhrE8AHg.V.TFx53tzOMKpVODMaZneuXdJXuJPlpsX1kqFgU_F8WXA7LMuYZcVg0CmLvhFBhcJp5Eks6fqsTA0FAMtfYaoYRV04kkPMcz27fpEk_BKbZR_4.HvwbTnAUDdOKiWdR402u_lYU2qzd4bDZ&c1K5tw0w6_=4XXypXPixgAv3FANZvMl9TwXLaI_.N.KKG8Mu6HvwIxJw0H2rMaZVUTr0v9fkY7ULZ2sM3c1st4vxxb4NPjGIWSYvqGk0O8reIK6SFwMIqUAkUEGg.IozKJLHtGcJc1fy')
  .headers({
    'Host': 'wap.jx.10086.cn',
    'Origin': 'https://wap.jx.10086.cn',
    'Accept-Encoding': 'gzip, deflate, br',
    'Cookie': '999a3c8226515295_gdp_session_id=53b0e5f9-b12a-4447-a828-859613dc4008; 999a3c8226515295_gdp_session_id_53b0e5f9-b12a-4447-a828-859613dc4008=true; 999a3c8226515295_gdp_sequence_ids=%7B%22globalKey%22%3A9%2C%22VISIT%22%3A2%2C%22PAGE%22%3A3%2C%22VIEW_CLICK%22%3A6%7D; FSSBBIl1UgzbN7NP=5RDWAbKpOlx9qqqDEEB2fMqidjDlHJjmfkGwwngzMtwFBWHvQXyajPbRXCJuKmNtYf1BXmeKLNFa4sE0OdwiIna1Q3daXrlkdfil7YWiGDnvODH7VIJ70q3hJJiJA89RtTTVYcV6hsg5hUi_vnSG4653gBMJ_32fdZiSNxqRK2bP92BEVTC0Rlc1cLZfW.UQ47zSTwjCBzTIwM6rqtvJADtLE88.99wmU7TOZolMTvBcIIpPVTWUl0n4HGozvxb02c3tAiTiHUaIX0UljJIuYlOKVkNOln8pllrjOQ6gbBztc_EpG4VMHZmyh6SM.t8zbV; WT_FPC=id=281d9d94a250673ef7b1684213914303:lv=1684213916760:ss=1684213914303; 999a3c8226515295_gdp_cs1=15270010041; 999a3c8226515295_gdp_gio_id=15270010041; gdp_user_id=a9ea9d37-f5de-468e-8471-bb04351496a6; gioLoginName=15270010041; regionCode=791; aishop.session.id=779d215551fb41ad8fd1300d81b33e42; bid=bdb5d24117374b0e92db9b4d53904b40; diffNet=1; leadeonOtherParams={"clientID":""}; rememberMe=2023051613115292403502; aiwechart.session.id=63078b313d984e52897a2461be8c4325; FSSBBIl1UgzbN7NO=55uH7bJwzj3rNlUBCegWM9J_a9TnRYpVF85smhQ.OpOUayXXhBZXIg2EzaXfQGP04R3wDGMAFmwARL6zrNG1pjG',
    'Content-Length': '0',
    'Connection': 'keep-alive',
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.28(0x18001c2e) NetType/WIFI Language/zh_CN',
    'Referer': 'https://wap.jx.10086.cn/hui/release/act/hffb.html?source=3&y7bRbP=AAcTrAldHuZdHuZdHZfZA0rTAQa0HcgJZN_T3YDV1UlqqkZ',
    'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
    'X-Requested-With': 'XMLHttpRequest'
  })
  .end(function (res) { 
    if (res.error) throw new Error(res.error); 
    console.log(res.raw_body);
  });
