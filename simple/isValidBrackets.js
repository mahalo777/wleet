/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
有效字符串需满足：
左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
 */

// 每次比较栈顶和当前元素，匹配出栈，不匹配入栈
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

// 使用map根据是否能匹配上右括号
// 相比上面，增加中间退出的方法，效率更高
const isValid = (s) => {
  if (s.length % 2 === 1) {
    return false;
  }
  const match = new Map([
    ['}', '{'],
    [']', '['],
    [')', '(']
  ]);
  const stk = [];
  for (let i = 0; i < s.length; i ++) {
    let cur = s[i];
    let stkTop = stk[0];
    if (match.has(cur)) {
      if(stk.length === 0 || match.get(cur) !== stkTop) {
        return false;
      }
      stk.shift();
    } else {
      stk.unshift(cur);
    }
  }
  return !stk.length;
};


// 总结
// 很容易想到栈
// 代码配上合理的提前结束条件，总能提升效率
// 配合使用replace也行...可以但是没必要