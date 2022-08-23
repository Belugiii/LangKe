
//账号1

var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://ms.jr.jd.com/gw/generic/hyqy/h5/m/signInV2',
  'headers': {
    'Host': 'ms.jr.jd.com',
    'Connection': 'keep-alive',
    'Content-Length': '805',
    'Accept': 'application/json, text/plain, */*',
    'User-Agent': 'jdapp;android;11.1.2;;;appBuild/98157;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A1660407968614%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22CJO%3D%22%2C%22ad%22%3A%22DQUmCJczCNG0YJDtCWC3Dq%3D%3D%22%2C%22od%22%3A%22DQPwZJuyCNY0CtK3ZJuyZG%3D%3D%22%2C%22ov%22%3A%22CzK%3D%22%2C%22ud%22%3A%22DQUmCJczCNG0YJDtCWC3Dq%3D%3D%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 11; MI 9 Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046033 Mobile Safari/537.36',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Origin': 'https://member.jr.jd.com',
    'X-Requested-With': 'com.jingdong.app.mall',
    'Sec-Fetch-Site': 'same-site',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Dest': 'empty',
    'Referer': 'https://member.jr.jd.com/',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
    'Cookie': 'pt_key=app_openAAJi9yTRADA4Z5_GDj15P577MqDBnaT3dGUp2dj8aAuegwi4ZSXeLdmnEkCqxpJrTCppsPY7EGo; pt_pin=jd_41759a26cbc41; pwdt_id=jd_41759a26cbc41; sid=5e0a07042b8b3665c09c94d92414329w; 3AB9D23F7A4B3C9B=WVIDVRMEMFPVFK2QVB5QUAAEZDZJ7EHBAUOCT72O6N5N3X67XOEJY7ZGYIKPNAKVD4A7ZIOIDR45QKGPEZB43LPAYM; unpl=; __jdc=122270672; __jdv=122270672%7Cappmarket%7Ct_2018512525_appmarket%7Ctuiguang%7C42111_0_xiaomi001_0_0%7C1660363884000; shshshfpa=4b803075-8561-02b1-e538-9a568ea9a9c5-1660365627; wxa_level=1; shshshfpb=zbLXhpJabdZ3cCgWOD3FZlw; cid=8; shshshfp=963068a0973c553d1758ead45761b95e; mobilev=touch; shshshfpv=JD012145b9f6SdGM1HAD166040037804305WegEOQMyJqVzw58pmwZtRjh3q1kBWN0pqHEQiqBp1wDHZ73Chn3aRSwo83eQOWBFFEglGwjLykMHQid8VELxJg0dm5nl3~naCYE1ckPu8FtdnALonPqseR3j2nSm1xWlDQxUhG9c0Dl-vHFH1HtbmD7skOTIELU-2SUT8t0rCDI5hJ70eQTlT0PFtheC491Ftp7tDWdqiYvDVIhwk-cg9tcSue57pZm5T9DJCJp9yi-tO4c8l2DwQ; joyya=1660400460.1660400465.31.0a7u3c9; __jda=122270672.1660365597430428371161.1660365597.1660400399.1660407963.4; __jdb=122270672.1.1660365597430428371161|4.1660407963; mba_sid=7.4; pre_session=q/mvHSTW3FgnZdcRwnZsP+ZH3FqluG6x|21; pre_seq=3; BATQW722QTLYVCRD={tk:jdd01X7PUANYSBFRVO23ENCBHXU4BZXEFUCKG7WFUBF2FXRGHCXEN54TTIZ3D26LLXRQXZCMJJANMB6TDJCLJV72MZO5RBLB7RD3NXWAHXEQ01234567,t:1660407964450}; _gia_s_e_joint={eid:WVIDVRMEMFPVFK2QVB5QUAAEZDZJ7EHBAUOCT72O6N5N3X67XOEJY7ZGYIKPNAKVD4A7ZIOIDR45QKGPEZB43LPAYM,ma:,im:,os:android,osv:,ip:112.96.223.30,apid:jdapp,ia:,uu:,cv:11.1.2,nt:UNKNOW,at:3}; __jd_ref_cls=MMyWallet_Main_SaveFloorSignin; mba_muid=1660365597430428371161.7.1660407968679; _gia_s_local_fingerprint=e56eca10a5a3f53329d9c77858901083'
  },
  form: {
    'reqData': '{"actKey":"SIGN_ACT_NO_002","deviceInfo":"{\\"eid\\":\\"WVIDVRMEMFPVFK2QVB5QUAAEZDZJ7EHBAUOCT72O6N5N3X67XOEJY7ZGYIKPNAKVD4A7ZIOIDR45QKGPEZB43LPAYM\\",\\"fp\\":\\"e56eca10a5a3f53329d9c77858901083\\",\\"sdkToken\\":\\"jdd01X7PUANYSBFRVO23ENCBHXU4BZXEFUCKG7WFUBF2FXRGHCXEN54TTIZ3D26LLXRQXZCMJJANMB6TDJCLJV72MZO5RBLB7RD3NXWAHXEQ01234567\\",\\"token\\":\\"FZJ2ISMZCSDI2EEC42V3BM7FGL47AHLDT4ON5U6PLZGMRLA5JKU4LLSBDBWAKOONQ5ENSYEKRYIJW\\",\\"jstub\\":\\"P6XR25B7SGDIKTOCRY7U4NNIT6JUTZB6Z2ZBT7QX5UAS4CTHOMRKMTZAATHNI6KOMF4JUVHPZZDJOZTJSBSDMKMWQHDVNV4HBWBUKDA\\"}","nonce":"7016519761660407977","signature":"2a8e388beee4e011d3bc5cdf9619e5d619da8ad5b0feb69a692498d39b45bae2"}'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});




//账号2
options = {
  'method': 'POST',
  'url': 'https://ms.jr.jd.com/gw/generic/hyqy/h5/m/signInV2',
  'headers': {
    'Host': 'ms.jr.jd.com',
    'Connection': 'keep-alive',
    'Content-Length': '805',
    'Accept': 'application/json, text/plain, */*',
    'User-Agent': 'jdapp;android;11.1.2;;;appBuild/98157;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A1660075870810%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22CJO%3D%22%2C%22ad%22%3A%22CJCnENLrZwG3CwOnDJDuDG%3D%3D%22%2C%22od%22%3A%22DQPwZJuyCNY0CtK3ZJuyZG%3D%3D%22%2C%22ov%22%3A%22CzK%3D%22%2C%22ud%22%3A%22CJCnENLrZwG3CwOnDJDuDG%3D%3D%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 11; MI 9 Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046033 Mobile Safari/537.36',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Origin': 'https://member.jr.jd.com',
    'X-Requested-With': 'com.jingdong.app.mall',
    'Sec-Fetch-Site': 'same-site',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Dest': 'empty',
    'Referer': 'https://member.jr.jd.com/',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
    'Cookie': 'pt_pin=wdOhjVeyXkkJcb; pwdt_id=wdOhjVeyXkkJcb; __jdc=122270672; shshshfpb=dv0hGIzpZiZaYv7SAU9xdJg; cid=8; unpl=; mobilev=touch; 3AB9D23F7A4B3C9B=RS7A732OBSH42VXVVHG3LU6VB4MLI2X5VJIRQDG7Z7ARV4BFN5YDKXNGLN5OGFORRZWYDJXFX4UDOIWLA5Q76A3ZLY; pt_key=app_openAAJi8P3rADDD62qy1WOKhJC5cS_huYTOLRdESdJ06GVjzzLtjI18e_U5l2t-GjAhzvEQAFAcXW8; sid=cc329555762f8c09c9df05d274b93e6w; __jdv=122270672%7Cappmarket%7Ct_2018512525_appmarket%7Ctuiguang%7C42111_0_xiaomi001_0_0%7C1659127665000; shshshfpv=JD012145b9HCKpOMf116166006193635405lDyzF6ueHtWURqUesJpCR_vb2UkUOM9dD36c-zG17hEy37x_PJO98xebYZ7P3HtexJw3IFpRvjnWmZ3V_0EZ7Q1sbu9g7~gn-rc5O35oS2_Ds8Xlqbvp1b1HxN-0RmcugQK5_Bcpwe_p4xMbRlkp87CGKfJTug_7QChSwj-hId1nvmz3SzabAe0tzw15M8OJgm8pt_DwzZ-p-OlSoZIqbmhtoH9TdG63qbS68GebaguSEH_7zIeyw; shshshfpa=1208823f-6531-4464-5bf2-bb6828982531-1660062256; shshshfp=d9113c584d3e446c599dba4a425caba9; joyya=1660062311.1660062537.32.1b6by28; __jda=122270672.165928946251727958738.1659289462.1660061477.1660075733.18; BATQW722QTLYVCRD={tk:jdd01XKGKSREAZBBLXMFQPRDJKYHQQ7HGQ2UFAG5FDPJNJCDCBHRX3JDACQI6VHAHBH7DHCLIMDQH3FKJ32EWVVMONZJFPUREBRXDI7HKV5I01234567,t:1660075793540}; _gia_s_e_joint={eid:RS7A732OBSH42VXVVHG3LU6VB4MLI2X5VJIRQDG7Z7ARV4BFN5YDKXNGLN5OGFORRZWYDJXFX4UDOIWLA5Q76A3ZLY,ma:,im:,os:android,osv:,ip:112.96.223.30,apid:jdapp,ia:,uu:,cv:11.1.2,nt:UNKNOW,at:3}; wxa_level=1; __jdb=122270672.7.165928946251727958738|18.1660075733; mba_sid=58.23; pre_session=+/nIQaz5zLrXXt8q/PxqZ/kLZFN4FJSq|64; pre_seq=22; __jd_ref_cls=MMyWallet_Main_SaveFloorSignin; mba_muid=165928946251727958738.58.1660075870840; _gia_s_local_fingerprint=fb92180d358423bf47d5b57e4aaa9dce'
  },
  form: {
    'reqData': '{"actKey":"SIGN_ACT_NO_002","deviceInfo":"{\\"eid\\":\\"RS7A732OBSH42VXVVHG3LU6VB4MLI2X5VJIRQDG7Z7ARV4BFN5YDKXNGLN5OGFORRZWYDJXFX4UDOIWLA5Q76A3ZLY\\",\\"fp\\":\\"fb92180d358423bf47d5b57e4aaa9dce\\",\\"sdkToken\\":\\"jdd01XKGKSREAZBBLXMFQPRDJKYHQQ7HGQ2UFAG5FDPJNJCDCBHRX3JDACQI6VHAHBH7DHCLIMDQH3FKJ32EWVVMONZJFPUREBRXDI7HKV5I01234567\\",\\"token\\":\\"PJRDXGCEVDBTQRKWJYH75PAJ2W5TTNZFCLP63JOKHXDH2PHVZBSWO4U7EHWGDSE45JSBKFVSZ26GE\\",\\"jstub\\":\\"GHDYS32ZW6OVDIMGK25CLZMHPMDX4KH2OMFKA23FSQWQPFPH2QSHS6EMOLWI2IJR2KR5ZSYDJBTAUI53GFQCSNAM52PMLBBU7T7KE6Y\\"}","nonce":"1498255571660075906","signature":"afdcecde31b0df20f7d617b31ec8222ac28aa5c63bbd3e1284c8129287ae3f1f"}'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
