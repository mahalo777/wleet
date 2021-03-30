/**
 * 给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。
 */

// 192ms 43.3mb
const romanToInt = (x) => {
  const obj = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };
  const str = x.toString();
  let val = 0;
  for (let i = 0; i < str.length; i ++) {
    const current = str[i];
    const pre = (i === 0) ? 0 : str[i - 1];
    val = val + obj[current];

    if (pre === 'I' && pre && (current === 'V' || current === 'X')) {
      val = val - 2;
    }
    if (pre === 'X' && pre && (current === 'L' || current === 'C')) {
      val = val - 20;
    }
    if (pre === 'C' && pre && (current === 'D' || current === 'M')) {
      val = val - 200;
    }
  }

  return val;
}

// 180ms 43mb
const romanToInt2 = (x) => {
  const getValue = (i) => {
    switch(i) {
      case 'I':
        return 1;
      case 'V':
        return 5;
      case 'X':
        return 10;
      case 'L':
        return 50;
      case 'C':
        return 100;
      case 'D':
        return 500;
      case 'M':
        return 1000;
      default:
        return 0;
    }
  }
  const str = x.toString();
  let val = 0;
  for (let i = 0; i < str.length; i ++) {
    const current = str[i];
    const next = (i === str.length - 1) ? 0 : str[i + 1];
    const a = getValue(current);
    const b = next === 0 ? 0 : getValue(next);
    
    if (b > a) {
      val = val - a;
    } else {
      val = val + a;
    }
  }
  return val;
}


// 150ms 43mb
const romanToInt3 = (x) => {
  const getValue = (i) => {
    switch(i) {
      case 'I':
        return 1;
      case 'V':
        return 5;
      case 'X':
        return 10;
      case 'L':
        return 50;
      case 'C':
        return 100;
      case 'D':
        return 500;
      case 'M':
        return 1000;
      default:
        return 0;
    }
  }
  
  const str = x.toString();
  let val = 0;
  for (let i = 0; i < str.length; i ++) {
    const current = str[i];
    const next = (i === str.length - 1) ? 0 : str[i + 1];
    const a = getValue(current);
    const b = next === 0 ? 0 : getValue(next);
    
    if (b > a) {
      val = val - a;
    } else {
      val = val + a;
    }
  }
  return val;
}


// 42.5mb 代码拆分出来是43.1mb 甚至140ms
const romanToInt4 = (x) => {
  const getValue = (i) => {
    switch(i) {
      case 'I':
        return 1;
      case 'V':
        return 5;
      case 'X':
        return 10;
      case 'L':
        return 50;
      case 'C':
        return 100;
      case 'D':
        return 500;
      case 'M':
        return 1000;
      
      default:
        return 0;
    }
  }
  
  const str = x.toString();
  let preNum = getValue(str[0]);
  let val = 0;
  for (let i = 1; i < str.length; i ++) {
    const current = getValue(str[i]);
    if (current <= preNum ) {
      val = val + preNum;
    } else {
      val = val - preNum;
    }
    preNum = current;
  }
  val = val + preNum;
  return val;
}


// 164ms  43.1mb
const romanToInt5 = (x) => {
  const getValue = (i) => {
    switch(i) {
      case 'I':
        return 1;
      case 'V':
        return 5;
      case 'X':
        return 10;
      case 'L':
        return 50;
      case 'C':
        return 100;
      case 'D':
        return 500;
      case 'M':
        return 1000;
      case 'a': return 4;
      case 'b': return 9;
      case 'c': return 40;
      case 'd': return 90;
      case 'e': return 400;
      case 'f': return 900;
      default:
        return 0;
    }
  }
  
  let str = x.toString();
  str = str.replace("IV","a");
  str = str.replace("IX","b");
  str = str.replace("XL","c");
  str = str.replace("XC","d");
  str = str.replace("CD","e");
  str = str.replace("CM","f");

  let val = 0;
  for (let i = 0; i < str.length; i ++) {
    const current = getValue(str[i]);
    val = current + val;
  }
  return val;
}

/**
 * 总结
 * 1、看到问题的本质
 * 2、确实，小数据量hashmap的哈希算法体现不出速度来，换成switch更快了
 */
