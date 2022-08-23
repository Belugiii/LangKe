var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://wx.17u.cn/wcsign/sign/SaveSignInfoNew',
  'headers': {
    'Host': 'wx.17u.cn',
    'Connection': 'keep-alive',
    'Content-Length': '232',
    'TCSecTk': 'ZfOeS2YX9IStsHx-3-C4u2EbfXFxMMUBTjYjhdk5TWD8Pd1YT9QQk1v036V5v7xOhN0tYBunOQPbPjMpkWlLrd2dAiB7bTv08HjFC9eRI5lI3jH4CQIs8OSrIH1Ut5Os6I-wMYDvbVj98P5yzbCB9CQAhpdWeZpz9qdNoKpGlpIrauM4SuZyKem857GeRA2d2Wh7tIUZcSl-RtuUK0CIDw**4641',
    'sectoken': 'ZfOeS2YX9IStsHx-3-C4u2EbfXFxMMUBTjYjhdk5TWD8Pd1YT9QQk1v036V5v7xOhN0tYBunOQPbPjMpkWlLrd2dAiB7bTv08HjFC9eRI5lI3jH4CQIs8OSrIH1Ut5Os6I-wMYDvbVj98P5yzbCB9CQAhpdWeZpz9qdNoKpGlpIrauM4SuZyKem857GeRA2d2Wh7tIUZcSl-RtuUK0CIDw**4641',
    'content-type': 'application/json',
    'TCReferer': 'page%2FAC%2Fsign%2Fmsindex%2Fmsindex',
    'wxapp': '0',
    'apmat': 'o498X0VMr1lwh3fEaz4yQDRs8MZo|202208140055|892890',
    'Accept-Encoding': 'gzip,compress,br,deflate',
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.20(0x18001442) NetType/4G Language/zh_CN',
    'Referer': 'https://servicewechat.com/wx336dcaf6a1ecf632/417/page-frame.html'
  },
  body: JSON.stringify({
    "unionId": "ohmdTt-RdSDZDf_c0ZVTzxWpUggM",
    "openId": "o498X0VMr1lwh3fEaz4yQDRs8MZo",
    "taskSharerId": "",
    "userIcon": "https://file.40017.cn/img140017cnproduct/touch/pushcode/qiandao/2020a/icon_defaultheader.png",
    "nickName": "匿名好友"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
