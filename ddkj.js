/*
	new Env("多多砍价签到")
*/
var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://kan.宝桥.cc/user/qiandao.php',
  'headers': {
    'Cookie': 'mysid=0bcd494fcd539b4fbef4b9dadcf733b3; user_token=96ba%2B090kyewagxnfdieEbl1%2Bw%2BOP7UwNFQ9WbdINlSWl01yZFrJ0GQ5vR6xW81P8xcN%2FPj9GiynbmrEb37T2sRJ; PHPSESSID=2q53ko1agsc5s3gmisvdlbjgjj; sec_defend=3919c71cf47638b671b5cee64e994f85e0e0a4c1775f608d787d8351b2f6fbdb; sec_defend_time=1'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});


function qd(){
	var rq = require('request');
	var opt = {
	  'method': 'GET',
	  'url': 'https://kan.xn--pbt601a.cc/user/ajax_user.php?act=qiandao',
	  'headers': {
		'Connection': 'keep-alive',
		'Accept': 'application/json, text/javascript, */*; q=0.01',
		'Sec-Fetch-Dest': 'empty',
		'X-Requested-With': 'XMLHttpRequest',
		'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
		'DNT': '1',
		'Sec-Fetch-Site': 'same-origin',
		'Sec-Fetch-Mode': 'cors',
		'Referer': 'https://kan.xn--pbt601a.cc/user/qiandao.php',
		'Accept-Language': 'zh-CN,zh;q=0.9',
		'Cookie': 'mysid=0bcd494fcd539b4fbef4b9dadcf733b3; user_token=96ba%2B090kyewagxnfdieEbl1%2Bw%2BOP7UwNFQ9WbdINlSWl01yZFrJ0GQ5vR6xW81P8xcN%2FPj9GiynbmrEb37T2sRJ; PHPSESSID=2q53ko1agsc5s3gmisvdlbjgjj; sec_defend=3919c71cf47638b671b5cee64e994f85e0e0a4c1775f608d787d8351b2f6fbdb; sec_defend_time=1'
	  }
	};
	rq(opt, function (error, response) {
	  if (error) throw new Error(error);
	  console.log(response.body);
	});

}

setTimeout(qd,5000);