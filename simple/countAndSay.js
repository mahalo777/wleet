/**
 * @param {number} n
 * @return {string}
 */
// 秘技之笨蛋迭代+双指针法
var countAndSay = function(n) {
  const getStr = (target) => {
    const arr = target.split('');
    let str = '';
    for (let i = 0; i < arr.length; i ++) {
      let j = i + 1;
      // 第一个不相等的下标
      for (; j < arr.length; j ++) {
        if (arr[i] !== arr[j]) {
          break;
        }
      }
      str = `${str}${j - i}${arr[i]}`;
      i = j - 1;
    }
    return str;
  }
  
  if (n === 1) {
    return '1';
  }
  let count = 1;
  let base = '1';
  while (count < n) {
    base = getStr(base);
    count ++;
  }
  return base;
};

// 双指针递归
var countAndSay2 = function(n) {
  if (n === 1) {
    return '1';
  }
  let target = countAndSay2(n - 1);
  let str = '';
  for (let i = 0; i < target.length; i ++) {
    let j = i + 1;
    // 第一个不相等的下标
    for (; j < target.length; j ++) {
      if (target[i] !== target[j]) {
        break;
      }
    }
    str = `${str}${j - i}${target[i]}`;
    i = j - 1;
  }
  return str;
};


var countAndSay3 = function(n) {
  const getStr = (target) => {
    let str = '';
    if (target === '1') {
      return '11';
    }
    let i = 0;
    for (let j = 0; j < target.length; j ++) {
      // 第一个不相等的下标
      console.log(i, j);
      if (target[i] !== target[j]) {
        str = `${str}${j - i}${target[i]}`;
        i = j;
      }
    }
    return str;
  }
  
  if (n === 1) {
    return '1';
  }
  let count = 1;
  let base = '1';
  while (count < n) {
    base = getStr(base);
    console.log('---base', base);
    count ++;
  }
  return base;
};
console.log(countAndSay3(5));

