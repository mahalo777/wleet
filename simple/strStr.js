/**
 * 给定一个 haystack 字符串和一个 needle 字符串，
 * 在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回-1。
 * 注意indexOf('')返回是0，这在面试的时候是个好问题
*/

// 字符串匹配的算法

// BF算法
const strStr = (haystack, needle) => {
  if (needle === '') {
    return 0;
  }
  for(let i = 0; i < haystack.length; i ++) {
    if (haystack[i] === needle[0]) {
      let j = 1
      for(; j < needle.length; j ++) {
        if (haystack[i + j] !== needle[j]) {
          break;
        }
      }
      if (j >= needle.length) {
        return i;
      }
    }
  }
  return -1;
}
console.log(strStr('stud', 'u'));

// 优化使用substr
const strStr2 = (haystack, needle) => {
  if (needle === '') {
    return 0;
  }
  for(let i = 0; i < haystack.length; i ++) {
    if (haystack[i] === needle[0]) {
      let str = haystack.substr(i, needle.length);
      if (str === needle) {
        return i;
      }
    }
  }
  return -1;
}
console.log(strStr2('stud', 'u'));

// Boyer Moore
// 坏字符规则、好后缀规则




