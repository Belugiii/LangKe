//new Env('同程签到');

var unirest = require('unirest');
var req = unirest('POST', 'https://wx.17u.cn/tripactivities/api/interest/punch')
  .headers({
    'Host': 'wx.17u.cn',
    'Content-Type': 'application/json',
    'Origin': 'https://wx.17u.cn',
    'Accept-Encoding': 'gzip, deflate, br',
    'Cookie': '__tctmb=0.4025942694658058.1663845547802.1663845547802.1; __tctmc=0.247225154; __tctmd=0.1; __tctma=217272534.1663845494722554.1663845494203.1663845494203.1663845494203.1; __tctmb=217272534.4284590500121361.1663845646613.1663845646613.19; __tctmc=217272534.20214398; __tctmd=217272534.25975547; __tctmu=217272534.0.0; __tctmz=217272534.1663845513064.1.1.utmccn=(direct)|utmcsr=(direct)|utmcmd=(none); __tctrack=0; longKey=1663845494722554; route=9e613a4005ce7de82b3cee28a55348de; CooperateTcWxUser=CooperateUserId=oOCyauCVON3J-v-Hzv_pyzMY3VXo&openid=oOCyauCVON3J-v-Hzv_pyzMY3VXo&MemberId=R75Jlgi3xXcUsWZYljPVCA%3d%3d&token=61_U0Vo4dGqwe6s15id3dhsFPj26qX5s_y58FEduXPpCQm8WpSty2IYyOXPAPbaKRxOVYp7IvRrSUrTKQpstr5luRODDihuWansRsxEucGmjRc&MemberSysId=33&Key=BQf3bvGYfx2zWGnutvmJe50rax%2fBFrJOmTZXMj0%2f3yVDLpLU2sg2ng%3d%3d&unionid=ohmdTt-RdSDZDf_c0ZVTzxWpUggM; WxUser=openid=oOCyauCVON3J-v-Hzv_pyzMY3VXo&token=61_U0Vo4dGqwe6s15id3dhsFPj26qX5s_y58FEduXPpCQm8WpSty2IYyOXPAPbaKRxOVYp7IvRrSUrTKQpstr5luRODDihuWansRsxEucGmjRc&userid=R75Jlgi3xXcUsWZYljPVCA==&unionid=ohmdTt-RdSDZDf_c0ZVTzxWpUggM&sectoken=ZfOeS2YX9IStsHx-3-C4u3lvzejJR_W8K4fCBhgaGmEbmTXAPsaxxyXDBl1eJvJ2YNPokiqLpA8-jY9EY3TrmsN-jbYCCcSk4I93mHNxMVmhpXyS_URyXGlMtNlI335L6I-wMYDvbVj98P5yzbCB9CQAhpdWeZpz9qdNoKpGlpLW-mHF9NoA3KJgntldkfhRtETPG1b89RejLMIKcJ_eng**4641&nickName=%e8%a1%8c&headImgUrl=https://thirdwx.qlogo.cn/mmopen/vi_32/FUXlFBqqvt91UzPk3AUwficPPMbsVFpujwl1WXdRTiaNKJ3g51vz0cRMnQW9TAAIYMiaWecPz1XqsKD035N3m3Hpw/132; cookieOpenSource=openid=oOCyauCVON3J-v-Hzv_pyzMY3VXo&token=61_U0Vo4dGqwe6s15id3dhsFPj26qX5s_y58FEduXPpCQm8WpSty2IYyOXPAPbaKRxOVYp7IvRrSUrTKQpstr5luRODDihuWansRsxEucGmjRc; __tccgd=0.0; AS_100=691f3b9a4f28ef0271d107be013f41ab18ca667812dd0481ac29f2522ccc8b26555b8d72fc50edc550523f95fe5d1c55b185046e9a643aef415392ed4fcdb910; AS_101=691f3b9a4f28ef0271d107be013f41ab18ca667812dd0481ac29f2522ccc8b26555b8d72fc50edc550523f95fe5d1c55b185046e9a643aef415392ed4fcdb910; ecid=691f3b9a4f28ef0271d107be013f41ab18ca667812dd0481ac29f2522ccc8b26555b8d72fc50edc550523f95fe5d1c55b185046e9a643aef415392ed4fcdb910; Activity_wx_token_status=product-1; WxUserToken=WRc6fb6531ec378d266aa237348e0d729b324e2f171c7851db574b33fa; ASP.NET_SessionId=nmbw0f4zox5yhiculfhdw23x',
    'Connection': 'keep-alive',
    'Accept': 'application/json, text/plain, */*',
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.28(0x18001c2b) NetType/4G Language/zh_CN miniProgram/wx336dcaf6a1ecf632',
    'Referer': 'https://wx.17u.cn/tripactivities/interest/?refid=1845144600',
    'Content-Length': '2',
    'Accept-Language': 'zh-CN,zh-Hans;q=0.9'
  })
  .send(JSON.stringify({}))
  .end(function (res) { 
    if (res.error) throw new Error(res.error); 
    console.log(res.raw_body);
  });
