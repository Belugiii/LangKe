import requests
import sys
# 主函数
def main(user, passwd, step):
    print("开始咯...................")
    url = "https://w1.v2free.net/user/checkin"
    head = {
        "Cookie": "_ga=GA1.1.464388636.1655315500; uid=52198; email=belugi%40qq.com; key=dd7ea8fe0aecd0ea5291d49dadeb377e1bb96342907e8; ip=8a71d68303f723de7b7332251fd654f1; expire_in=1686851516; _gcl_au=1.1.998642687.1655315518; crisp-client%2Fsession%2Fa47ae3dd-53d8-4b15-afae-fb4577f7bcd0=session_1d8db3e4-4573-4899-adc1-76ce0562f376; _ga_NC10VPE6SR=GS1.1.1655484580.2.0.1655484594.0"
    }
    response = requests.post(url,headers=head)
    print(result)