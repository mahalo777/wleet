/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。如果不存在公共前缀，返回空字符串 ""。
 */

const getCommonStr = (str1, str2) => {
  if (str1 === '' || str2 === '') {
    return '';
  }

  let minStr = str1.length > str2.length ? str2 : str1;
  let maxStr = str1.length > str2.length ? str1 : str2;
  let common = '';
  for (let j = 0; j < minStr.length; j ++) {
    if (minStr[j] === maxStr[j]) {
      common = common + minStr[j];
    } else {
      break;
    }
  }
  return common;
}

// 88ms 39.5mb  77%
const longCommonPrefix = (strArr) => {
  // 获取两个字符串的公共部分，以最短的为循环边界，突然想到字符串长度为200这个题目要求。诶嘿好棒～

  let prefix = strArr[0] || '';
  for (let i = 1; i < strArr.length; i ++) {
    if (prefix === '') {
      return '';
    } else {
      prefix = getCommonStr(prefix, strArr[i]);
    }
  }
  return prefix;
}

// 改成递归
// 84ms 39.7mb 88.15%
const longCommonPrefix2 = (strArr) => {
  if (!strArr.length) {
    return '';
  }
  const getPrefix = (common, i, strArr) => {
    if (common === '' || i > strArr.length - 1) {
      return common;
    } else {
      common = getCommonStr(common, strArr[i]);
      return getPrefix(common, i + 1, strArr);
    }
  }
  return getPrefix(strArr[0] || '', 1, strArr);
}


// 改成reduce 对一行代码的执着:D
// 88ms 39.6mb 76.98%
const longCommonPrefix3 = (strArr) => {
  if (!strArr.length) {
    return '';
  }
  return strArr.reduce((acc, currentVal, idx, arr) => {
    return acc === '' || (idx > arr.length -1) ? strArr.splice(1) && acc : getCommonStr(acc, currentVal)
  }, strArr[0]);
}

// 上述都是横向遍历，翻阅题解后发现了纵向遍历
// 80ms 95% 39.4mb
const longCommonPrefix4 = (strArr) => {
  if (!strArr.length) {
    return '';
  }
  let i = 0;
  for (; i < strArr[0].length; i ++) {
    let common = strArr[0][i];
    for (let j = 1; j <= strArr.length -1; j ++) {
      if (i === strArr[j].length || strArr[j][i] !== common) {
        return strArr[0].substr(0, i);
      }
    }
  }
  return strArr[0].substr(0, i);
}

// 先排序后。在进行操作，看似容易。但是时间复杂度得不到保证
// sort() 方法用原地算法对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的UTF-16代码单元值序列时构建的
// 由于它取决于具体实现，因此无法保证排序的时间和空间复杂性。
const longCommonPrefix5 = (strArr) => {
  if (!strArr.length) {
    return '';
  }

  strArr.sort();
  // 这里是重点
  const first = strArr[0];
  const last = strArr.pop();
  if (first[0] !== last[0]) {
    return '';
  }
  return getCommonStr(first, last);
}

// 此方法题解命名为分治，用了类似二分查找，查找一个无序数组
// 个人认为开拓思维可，不乏题解强解做法
const longCommonPrefix6 = (strArr) => {
  if (!strArr.length) {
    return '';
  }
  if (strArr.length === 1) {
    return strArr[0];
  }

  const dichotomy  = (arr, start, end) =>  {
    if (start === end) {
      console.log('start === end', start, end, arr[start]);
      return arr[start];
    } else {
      let middle = Math.floor((end - start)/ 2) + start;
      console.log('middile start end', middle, start, end)
      let left = dichotomy(arr, start, middle); 
      let right = dichotomy(arr, middle + 1, end);
      console.log('left, right, common', left, right, getCommonStr(left, right));
      return getCommonStr(left, right);
    }
  }
  return dichotomy(strArr, 0, strArr.length - 1);
}
// console.log('6',longCommonPrefix6(["flow","fl","flower" ,"flight", "fl","f"]));


const longCommonPrefix7 = (strArr) => {
  if (!strArr.length) {
    return '';
  }
  if (strArr.length === 1) {
    return strArr[0];
  }
  // 获取最短的len
  let minLen = strArr[0].length;
  for(let i = 1; i < strArr.length; i ++) {
    minLen = Math.min(minLen, strArr[i].length);
  }
  let minIdx = 0;
  // 不使用minLen - 1 避免最短长度就是1，或者上面直接条件跳出也可
  let maxIdx = minLen;

  // 注意这里使用的是substr，截取的是长度不是index，至少是2个数字，middle从1开始
  while(minIdx < maxIdx) {
    let middle = Math.floor((maxIdx - minIdx + 1) / 2) + minIdx;
    if(isCommonPrefix(strArr, middle)) {
      minIdx = middle;
    } else {
      maxIdx = middle - 1;
    }
  }
  return strArr[0].substr(0, minIdx);

  function isCommonPrefix (arr, commonLeft) {
    const commonStr = arr[0].substr(0, commonLeft);
    // 不能用includes因为需要按位比较 :P
    for(let i = 0; i < arr.length; i ++) {
      for(let j = 0; j < commonStr.length; j ++) {
        if(arr[i][j] !== commonStr[j]) {
          return false;
        }
      }
    }
    return true;
  }
}

console.log('7',longCommonPrefix7(["ab", "a"]));

/**
 * 总结
 * 1、数学思路有提升，稍微不太暴力了
 * 2、递归、二分查找需要继续学习
 */