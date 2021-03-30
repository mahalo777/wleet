/**
 * 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
  回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。
  -2^31 <= x <= 2^31 - 1
  进阶：你能不将整数转为字符串来解决这个问题吗？
 */

 // 200ms 
 // 映入脑海的第一个想法是将数字转换为字符串，并检查字符串是否为回文。但是，这需要额外的非常量空间来创建问题描述中所不允许的字符串。
const isPalindrome = (x) => {
  if (x === 0) {
    return true;
  }
  if (x < 0) {
    return false;
  }
  const xStr = x.toString();
  const middle = Math.ceil(xStr.length / 2) - 1;
  const reverseString = xStr.split('').reverse();
  for (let i = 0; i <= middle; i ++) {
    const first = xStr[i];
    const last = reverseString[i];
    if(first !== last) {
      return false;
    }
  }
  return true;
}

// return x.toString().split('').reverse().join('') === x


// 整形反转注意溢出情况 0log(n)
const isPalindrome2 = (x) => {
  if (x < 0 || (x !== 0 && x % 10 === 0)) {
    return false;
  }

  let num = 0;
  while (x > num) {
    num = num * 10 + x % 10; 
    x = Math.floor(x / 10);
  }

  return x === num || x === Math.floor(num / 10);
}


/**
 * 总结
 * 1、解题时，考虑到了使用数字办法和middle是小小的进步。但是因为比较时，没有想到数学办法还是用了字符串。
 * 2、回文数溢出后是负数，本就不相等
 * 3、使用字符串操作会调用非常量空间，堆栈
 */
