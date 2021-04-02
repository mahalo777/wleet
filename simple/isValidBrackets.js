/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
有效字符串需满足：
左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
 */

// 模拟栈 看题解
const isValidBrackets = (str) => {
  // 注意出栈顺序
  const match = (type) => {
    switch(type) {
      case '(': 
        return ')';
      case '{': 
        return '}';
      case '[': 
        return ']';
      default:
        return '';
    }
  }
  if (str.length % 2 !== 0 ) {
    return false;
  }
  let arr = [];
  for (let i = 0; i < str.length; i ++) {
    let top = arr[0];
    let current = str[i];
    if (match(top) === current) {
      arr.shift();
    } else {
      arr.unshift(current);
    }
  }
  return !arr.length;
}

console.log('isValidBrackets', isValidBrackets('(){}}{'))