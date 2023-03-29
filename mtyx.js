// new Env("美团优选");
// cron: 13 7,12 * * *
var unirest = require('unirest');
var req = unirest('POST', 'https://bi-mall.meituan.com/api/c/game/walk/uploadUserSteps?uuid=1833d130dbec8-230e7c54a4e8b4-0-505c8-1833d130dbec8&utm_medium=wxapp&brand=meituanyouxuan&tenantId=1&utm_term=5.134.0&device_model=iPhone%2012%3CiPhone13%2C2%3E&optimus_risk_level=71&optimus_code=10&poiIdStr=mbxGzxjay1hQIOC0Vss3YAE&poi=0&stockPois=0&ci=140&bizId=4&fp_user_id=244590252&fp_open_id_cipher=AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM%2Fhf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n%2FGVnwfURonD78PewMUppAAAADiTTg7bii5r0rX3VHrIF8dBK6rnPc0vRVru5KA0cmujm5JE8XJ%2BfHcb1%2BPiAv005DyOVn%2F6wkmYzg%3D%3D&openId=oRRr90Pfh7mO5Vp4RUTWyxXY0Rgk&unionId=oNQu9t_H5V42JVkDszofncO7qFGo&superId=A2-A3-A2-A3-A2-A3&routeId=pages%2FuserCenter%2Findex%2CsubPackages%2Fmarketing%2Fsteps%2Fpages%2Findex%2Findex&sysName=iOS&sysVerion=16.0&app_tag=youxuan')
  .headers({
    'Host': 'bi-mall.meituan.com',
    'Connection': 'keep-alive',
    'Content-Length': '3697',
    't': 'AgFhI0uZVpAcyZIHMtNP7-o5qQn2l4SLBO5dDKWzEoSm8Ah3_Dfi9fbO15QItfiN5V204rWbdqoNhAAAAABrFwAAailWzr9XDFntcBtb9x9OjIfvPA0Cdg8fv6CBWN6En7SLwCfwK7XzMEIPGniEJMTC',
    'content-type': 'application/json',
    'mtgsig': '{"a1":"1.1","a2":1680068416716,"a3":"2682v4u545xw54121u5y00w97zu316u58166w86892487978xu8zx0uu","a4":"97033383780d87d683330397d6870d784fa7e2bc9920efc4","a5":"dJQROAT5Dmr3h8/PaFWLG/gyhA32gOnQj1T6PADZImeHgiOOBrW4bo24BJ8RWuLfR8el+dQndcCN+kEwdXheH/uJM6ZBOTsbkoRCaERhGw8yX7WH2WLyr/tyR7E09V8siqHp1jTT1BwlHUMeoXV6YxhZeup1JRLzDZQCqowlUdLJ2y0xnOdEZrSC7SEt76IMgqMsKaYYVvlTEIGlPtg+oInpVNWUiysiXmKhfXgs3rVG5JyVaJe+4VDpHqqk3rlv0myLU1XVe2ISN71PUTXnbQV7zPDEpMehug/ZWD9oCKQ0jZ==","a6":"w1.1Hax/n4K2pIAPqDp4kpywikvBVbFYmr+mRtBPPpLyInkMeGRyGUsK2k2woCYMrQTtR8TrrGaZ7mYUdo5uj+Ln7gsL43Yf1La38Fi9SaKGafrEdLwlGKdFejbSOZ1HyErofNZWcy1R7y0slAADRixCD+hQ6Qh0NcC822y5cpt/i5zaLWjRAbA4dVF3sywspIWKyQ14dJwLmCGR6dE20a5S81rn/Bo5JJ51437ysOn6Gjgvr5jqLeRb8Zqg0td1t/nf6XKXJT5gDPm1THCn0rtQOFWpWi/I5UD0Z+cXvJ3DVOD1lXfIudLtxlEcGUDzfLiwZYj1gNP4iKm4680TWJqDwad2zKSKdEqo3FVkiI/sQtuNe9tMTpTyzGzmpw/TT3GZ8TAzeYbmVobItiL7/xScb8mM3KCXiswgwFU6EHV/iAb7+A5MyxMEJD5LHp9YkZ2kpygczur/nicNHwu9hX5J1fC475eOLx0q2IZYdoMmIFiq9OyYz5yVEbFwINLiB3xWIuwkvZmLkaW3fKt4h7mANZaQ8cQAzE5u9ojzOZxYWecdBG28cwXM6KAz98cs4tGLeZGxSRgznBi7ZPbRlcyPbMpcvEg575JDgQlepkk/TaijC46PcmUN+E8o8nUDdWbU5wcHsjmnLZiOYm4zsO31bg==","a7":"wx77af438b3505c00e","x0":3,"d1":"7c838f77a8850fc77b0c3d95d890995f"}',
    'Accept-Encoding': 'gzip,compress,br,deflate',
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.28(0x18001c2e) NetType/4G Language/zh_CN',
    'Referer': 'https://servicewechat.com/wx77af438b3505c00e/1028/page-frame.html'
  })
  .send(JSON.stringify({
    "userStepCount": 23456,
    "code": 100,
    "riskCheckModel": {
      "uuid": "1833d130dbec8-230e7c54a4e8b4-0-505c8-1833d130dbec8",
      "platform": 13,
      "appletsFingerprint": "WX__ver1.2.0_CCCC_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",
      "fingerprint": "",
      "wxRiskLevel": "{\"openId\":\"oRRr90Pfh7mO5Vp4RUTWyxXY0Rgk\",\"appId\":\"wx77af438b3505c00e\",\"mchid\":\"1399386702\"}"
    }
  }))
  .end(function (res) { 
    if (res.error) throw new Error(res.error); 
    console.log(res.raw_body);
  });


console.log("=============================")


function wait(t) {
            return new Promise(e => setTimeout(e, t))
}

wait(5000);

req = unirest('POST', 'https://bi-mall.meituan.com/api/c/game/walk/convertHealthCoin?uuid=1833d130dbec8-230e7c54a4e8b4-0-505c8-1833d130dbec8&utm_medium=wxapp&brand=meituanyouxuan&tenantId=1&utm_term=5.134.0&device_model=iPhone%2012%3CiPhone13%2C2%3E&optimus_risk_level=71&optimus_code=10&poiIdStr=mbxGzxjay1hQIOC0Vss3YAE&poi=0&stockPois=0&ci=140&bizId=4&fp_user_id=244590252&fp_open_id_cipher=AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM%2Fhf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n%2FGVnwfURonD78PewMUppAAAADifCPDKKladvyrr5v9r5%2BPZ%2FYw9u2fgFV5mycIQcaslwVxc4LG6Mie1ZFs1UbX8rMq5kW9eQFjKqw%3D%3D&openId=oRRr90Pfh7mO5Vp4RUTWyxXY0Rgk&unionId=oNQu9t_H5V42JVkDszofncO7qFGo&superId=A2-A3-A2-A3-A2-A3-A2-A3&routeId=pages%2FuserCenter%2Findex%2CsubPackages%2Fmarketing%2Fsteps%2Fpages%2Findex%2Findex&sysName=iOS&sysVerion=16.0&app_tag=youxuan')
  .headers({
    'Host': 'bi-mall.meituan.com',
    'Connection': 'keep-alive',
    'Content-Length': '3357',
    't': 'AgFIIq39olcXaucVu-CFdJj3rsUTZM-bxY7gEF9mCmXnptNn0PCD5N_KrLkZEqB1p88fTitw91unVQAAAABrFwAAA74JWKqNCGxSc3GmACy1UOW6_M2VH-QC2Lfmp1luCA_kqExL2GfElC0-ZYnYh5Zm',
    'content-type': 'application/json',
    'mtgsig': '{"a1":"1.1","a2":1680067647968,"a3":"2682v4u545xw54121u5y00w97zu316u58166w86892487978xu8zx0uu","a4":"fe971cb4e44b58c7b41c97fec7584be454c542d5939d0931","a5":"s3zYzG/L7KG3M4dWMHePfg6shAlsjG/l5bckAoFn4rLs/7h6XnOi1D0YI7wHaGEy1q5JrsTl5yoZhTmiQ6kLf/3+0dJ/Vqc+3sIA96xAyTYU4nS/khRKZjo/mgMVxQl6h466DQl8FJTTPgW/R3OwZ/d6fkYBWkZBHRQksSMQT22ivvya1LeTsqVvTaODXZe+8pBH9wBuSntPt7Qu5dpv5HINsyYiq6H+ovKUG9Ltwp+79UDzCp/XrqfIvgjqfDODhx/7PZRRs1XNS4mYrrqfwpKEziZ3JzCQVtDtCqqw3GzP8I==","a6":"w1.1NDp9O9K8PVmaR9gbruyhelPN0M/BnLkRrmbG6nm/dozORo7RLZWAdZMZ+s/O8NJB8VOURDEUZZRr6OSsujg4tO5+TuXsbuwyCuO33XUBCO9X8pHBOyJ8jQKSQDz/EHaK4QzIr1+r0eWUIuoaFlF1Y4++Iz+RWHCsOjlDk3c6P68OZYWlsBNU4chWJg4UYbtw6pup/Fz8EJkF10uNFEFzV9bSkiPw7HnkNiOB8Hxc/hxEuahgphJG+xZogXKH9mDBiMbF7WTevdr1rRR1ge/Pd+VBCbpivHHsx1dzQYJ+yW8a7M2RAIumhuMcppWUEvl6+3fT9FW6JUlqVNA8FlgsdB8wK3DLsUszdW0dlMkknYqhGv3haPmDX4dJRd1eG025XVxe7zhjR5HRQbrLZusNY2qekO4xSBvUJNWzq0g2d8eDaS9A7fgKeSzPUCbxwqO0OPc2bkwwOL722M44nvGCxLeaQNMYwj528xlbIkSYqahMJcBcEfM5ATJNysVFpkl3apHTz2RiQ/WvBRYLE/qqoDGjda1z7pd/e3fHDSRUNI4zrB7148bMMXNndZJlpiR+UjUuYRhrXodC2Nn5X5sC/OMrv0BuJY25hHkLa/VYm9E=","a7":"wx77af438b3505c00e","x0":3,"d1":"66471967eccbb3e3f9da356ff844e312"}',
    'Accept-Encoding': 'gzip,compress,br,deflate',
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.28(0x18001c2e) NetType/4G Language/zh_CN',
    'Referer': 'https://servicewechat.com/wx77af438b3505c00e/1028/page-frame.html'
  })
  .send(JSON.stringify({
    "userStepCount": 4702,
    "code": 200,
    "riskCheckModel": {
      "uuid": "1833d130dbec8-230e7c54a4e8b4-0-505c8-1833d130dbec8",
      "platform": 13,
      "appletsFingerprint": "WX__ver1.2.0_CCCC_FON/P+rFBgKoTMorm+C+vsPuczLtZommBig3H6Ef9/CXu6R4YI2XykygCU6b7CPuV/r43LKCAtoxXVueU9mRNypA/5eW+ZkLXTJE2GRMlrH5lMjYvytg1L0gzxurO7DHBPXuGmkgZHFiVNCF847FvKaPiL0MQlA04dnq3KhwBdexArKiQNbZX/NupWFd9pC1dLlZTmAKVialqgU3vyEXF0oMbnFfLAZatqIDzSXY7Hv14Q3q1EJHT3duP0Q65C0Jvwwv79ZbgkL9AX8VSluVrvV+5blf7cXfWEEnXaQtzHxZ8DNug48sN1JMywUr+gdOGRgtCzryFlGd1kgP0/sb5sf/ovRpgrGy6E2QyXzsVkABIZ9FwLBKCsLH0p1rTeXBNsALXdUj6tKe2JrtqDe3P+rUHzH82iHzj28hEru8/Xa44YOzR4bBxQ9o197JMumnb3oA6ihDuES3WRoaXu49N729e60Keg4SG+tkTNUtc+8vT1qFANFaKHFYtG63s1FequtXQRLKSptYSN1AeozMhbwX+D7urZjdd5bRFjV8J05rrkvDvmkmHwUBdJk737wCBwosIztn9PDFTesTtVBVbdJQYoABp6agyN8EvdXdkSHYZzPZIv8bAo8TpmoEt7VJzVn2D5KhWZHwZs0CmLDdl+vW3k2zoMDIL65rYhN6sj584mFHsiXoDD4sOwDCy526WHKHO3l6GmyXblZT2KkXYdflC3Tba2hynqWZXRU5A3lp67co4WmOWdpKPwJH5Pn2RMqS8XiRD8+5vtYuvpVivJ4ssR3Vh72IZ943tvHnv5Vk3BsIjoUZ7geViHSK6q9YmzlOB7LiCnj7JRm+I9J52ovLNIVKlWskayUqHFfOn5kFsEuofYLD1tQQ131+YIBnVgGTIbS4phz46bpQgL4Hw9/yE/ivt7Z9Ew5mzZAG/kTmdpWMymwg0R9ZqPJrB6SjvvdT9nnTGVlsemyW77PG/eF23fwBjFi6mguOBmqPNFbxzYtqXV0270kFp0bg5uTn5k0xECW3BAUhtY8p8NjTInivmTItZrnGFGyv+IRx/uy7dbuAkydyGxGLWNmlyuui6QW21FFzx3mo6JDOg9geCrZidUQ4FNd057PdrZ3M910AR+ezBjfseYlm+VZOhegkp8WcWVng/6anIkmq8GothpYZn4MDMMXvnbC9nez7tBbK2j2mY7vP0mJcyvkpl1obYXSSHKT6JGPoNOmPNYtvNesTaBHmKs+6XAHZZSptR7oCA6HZbzDIQb6xZcZ9sXcUv44Zp/vX7+jJQEqW6hdbqAtVo2NNJ7bA0nTjnSpnyUTWGJ5nHBqPwDrfKcCQtPcXgf1EwxfQjHdCCD3rgYfYlYNZTSnezK2WZ9SSkgxGWby98OjBzhPr0vngQTZ+kZK2dNnTcKmfgfuz1LRAV16XPvj4KN2N4GPginEBH887kI52ofhOHShpilLfgsajeDeabUSrGX9tzEB9jQs6lxdEWSooDoG7LahmZ3Vj7zc82x1e7HsseBHZ+WC7iu4vqBfre7Y3orEDc4nQbdADOzpZZj13Ps3CdGDkdeUO5OtfUCYTPKGffzCk+mn9KF/x2hj3iFP4RA9N3cvZwmc91LCicjba2wCmdJ81dijavCi/R5RmGeyBgaFek9wTJ1cVPT5tun5QRx7kRl26kbqR/sfG1yo5/W6tjiCJ2yUT/YKx8kOW0uZHCbEl+qkS7wdGFje2zcYk1EcqqdEiJTJXXq88hPvYW+yLliXsYGxstVbd3vHHTOIOnBGcX/8wNMUf/MTZOI8Q+iyi50XWOHL5IDR4NP6XYqhdh65e0ffL45h29S0JChl3bH620d6wMJ1C6f6wextnpWui2vHZjeuU6cvVP7oabFHyarTpzq6w+KtoDoH6eU4xuBgoTlbgltSk/2dzGSbzu9VulmnZ7KPpw+xpVMjGdVjkI7NmzROnIsXstqW8DDIqUBr6nGtvoFMB8XBIIa8bkLnT+WDMa8Lb6q5ODlZiMw7BbfXetbDVSoACrkm+cajTbvUGccJtFk62Do9xf5FBK4kuDqQKijlMBCFlJHmxBLz4G5SgJ6WzC8vh4wlGw+Kq+ykn4TQiL7INfCU8eVGSgS89t0JleOFuqgtrqssWb9gkKrh8+G0N2nH9F6AVA2MNuvSKM4W8+zVHlfh0IEvu53wKIveFwcEozjmx9zz5Kd7mwN/deCoy5PCxrusSl61uD7pTeByYnMrYEI8UlGtjSUhveae+wDr7rQK6dVMJrbeBHn++b0aSMPvhULUD715TseoQSGc9nAX0p/V9y4CkKFKI1Wbbr4RmI+oR1Az0adI1TiJSKx88TGx+lz6liQ/kiSzXhNssvK/lqh9/fyVFB9cKm/lAtlDUGL+/yMF5vVUTmPYgEDJ6YdcR2muKPH4zXsv5TbMERHlTuqTiGw6ZhdXfshemCXqmFsvWwoaRJlu5kCZpcgLiPPf7e3XAHBt61cb3IJOvxtN2hNSXMV0wm6SIcStyYo97K5PqGIDBAFU2IztNL9lnMettuDAkBlaLJlt6nNX3lHdIljhFphDGE+NRsyDpZE7N1B9dr55zJ06GpHCJEiXWFAHDS6ZU+Us9cYRSDCP8nhm2EKZOXoau569qPWplhzbGI6UQK8Oeg2X+OLfjEbY5uJuLJtbreGsDFlG+esxAgeA6a7yj2WLmtFNdYGCw3trcxzteE83iHQKl4NFPUz/mwiUnrduIH43UgXHUq2JK7eqw2H1eFuQ7sA9Odub7MuOXYMrpYzR9T/4y/M1PP+2HDgrC9Ojh6un0+Js3z94U8RKUkGSvqZExVwtsKpmjbKI0B/zyP4hEtfACw7EJTw3nllaNxA/2TIAe8/uhm6P0UJzKs7/4KODyNM+u/3E461dSPd+WLCVnKuN1jWNx4G/SymUO3YL4TbYtHmE1flhWgp145lzS5xfaqtnHT8piAJhMQKW3GU7mKeXMh8IhUmuGNMYd4c4slzHz6Z4oKgBQQc46oXOmCXXLMIxz0w+z19QK9jSADKvHDquCwV6E7i5opYyfRuQ=",
      "fingerprint": "",
      "wxRiskLevel": "{\"openId\":\"oRRr90Pfh7mO5Vp4RUTWyxXY0Rgk\",\"appId\":\"wx77af438b3505c00e\",\"mchid\":\"1399386702\"}"
    }
  }))
  .end(function (res) { 
    if (res.error) throw new Error(res.error); 
    console.log(res.raw_body);
  });
