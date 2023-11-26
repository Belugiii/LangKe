function getCurrentIP(callback) {
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => callback(data.ip))
    .catch(error => console.log(error));
}
 
// 使用示例
getCurrentIP(ip => {
  console.log(`当前IP地址是：${ip}`);
});