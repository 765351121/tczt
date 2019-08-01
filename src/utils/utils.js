import message from 'ant-design-vue/es/message';
import CryptoJS from 'crypto-js';
import WebStorageCache from 'web-storage-cache';
import regexp from './regexp';

const wsCache = new WebStorageCache();
const wsSessionCache = new WebStorageCache({ storage: 'sessionStorage' });

export default {
  regexp,
}

//检查请求结果的错误码
export function checkErrorCode(result) {
  if (result) {
    let { status, info } = result;
    let msg = '';
    if (status === 0) {
      return true
    } else {
      msg = info || "请求错误,请稍后重试";
      if (status === 100021) {
        message.info(msg);
      } else if(status === 500010){
        message.error(msg);
        setTimeout(()=>{
          window.history.back(-1);
        }, 500)
      } else {
        message.error(msg);
      }
      return false
    }
  }
}


/**
 * 
 * 浮点的加减乘除运算 
 *  Fadd加 
 *  Fsub减 
 *  Fmul乘 
 *  Fdiv除
 */
export function Fadd(a, b) {
  let c, d, e;
  try {
     c = a.toString().split(".")[1].length;
  } catch (f) {
     c = 0;
  }
  try {
     d = b.toString().split(".")[1].length;
  } catch (f) {
     d = 0;
  }
  return e = Math.pow(10, Math.max(c, d)), (Fmul(a, e) + Fmul(b, e)) / e;
};
export function Fsub(a, b) {
  let c, d, e;
  try {
     c = a.toString().split(".")[1].length;
  } catch (f) {
     c = 0;
  }
  try {
     d = b.toString().split(".")[1].length;
  } catch (f) {
     d = 0;
  }
  return e = Math.pow(10, Math.max(c, d)), (Fmul(a, e) - Fmul(b, e)) / e;
};

export function Fmul(a, b) {
  let c = 0,
     d = a.toString(),
     e = b.toString();
  try {
     c += d.split(".")[1].length;
  } catch (f) {
  }
  try {
     c += e.split(".")[1].length;
  } catch (f) {
  }
  return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
};

export function Fdiv(a, b) {
  let c, d, e = 0,
     f = 0;
  try {
     e = a.toString().split(".")[1].length;
  } catch (g) {
  }
  try {
     f = b.toString().split(".")[1].length;
  } catch (g) {
  }
  return c = Number(a.toString().replace(".", "")), d = Number(b.toString().replace(".", "")), Fmul(c / d, Math.pow(10, f - e));
};

/**
 * 将数值截取后2位小数,格式化成金额形式
 *
 * @param num 数值(Number或者String)
 * @return 金额格式的字符串,如'1,234,567.45'
 * @type String
 */
export function formatCurrency(num) {
  if (num != null) {
    num = num.toString().replace(/\$|\,/g, '');
  }
  if (isNaN(num) || num === null)
    num = "0.00";
  let sign = (num == (num = Math.abs(num)));
  num = Math.floor(Fmul(num, 100));
  let cents = num % 100;
  num = Math.floor(num / 100).toString();
  if (cents < 10)
    cents = "0" + cents;
  for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
    num = num.substring(0, num.length - (4 * i + 3)) + ',' +
      num.substring(num.length - (4 * i + 3));
  return (((sign) ? '' : '-') + num + '.' + cents);
}

/**
 * 
 * @param {*} parms 
 *  obj数值转金额格式
 */
export function formatCurByObj(parms) {
  let res = {}
  Object.keys(parms).forEach(attr => {
    attr != 'errorCode' && attr != 'errorMessage' && (res[attr] = formatCurrency(parms[attr]))
  })
  return res
}

function aesEncrypted(text, key) {
  return CryptoJS.AES.encrypt(text, CryptoJS.enc.Utf8.parse(key), {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    })
    .toString()
}

// AES加密：
export function encryptAES(content, key) {
  if (typeof content === 'string' || typeof content === 'number') {
    return aesEncrypted(content, key)
  }
  if (typeof content === 'object') {
    let cipher = {}
    Object.keys(content).forEach(attr => {
      cipher[attr] = aesEncrypted(content[attr], key)
    })
    return cipher
  }
}

// handle webStorage
export const handleWebStorage = cache => {
  cache = cache === 'session' ? wsSessionCache : wsCache
  return {
    setItem: (map) => {
      Object.keys(map).map(i => cache.set(i, map[i]))
    },
    getItem: (set) => {
      if (typeof set === 'string') {
        return cache.get(set)
      }
      let effect = [...new Set(set)].map(i => ({
        [i]: cache.get(i)
      }))
      return Object.assign(new Object(), ...effect)
    },
    clearItem: (key) => {
      return cache.delete(key)
    }
  }
}

// 脱敏phone
export function tmPhone(phone) {
	return `${!!phone && phone.substring(0,3)}****${!!phone && phone.substring(7)}`
}

// 脱敏idCardNo
export function tmIdCardNo(idCardNo) {
	return `${!!idCardNo && idCardNo.substring(0,5)}**********${!!idCardNo && idCardNo.substring(15)}`
}

// goBack
export function goBack(type, route = '/') {
  if (!!this) {
    route = this.$route.fullPath
  }
  if (!!type && type == 'set') {
    return handleWebStorage('session').setItem({
      goBack: route
    })
  }
  if (!type) {
    return handleWebStorage('session').getItem('goBack')
  }
}