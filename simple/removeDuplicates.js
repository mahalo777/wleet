/**
 * 给你一个有序数组 nums ，请你原地删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。
不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 */


// 修改数组导致异常结束，就又写了一个寂寞..
var removeDuplicates = function(nums) {
  for(let i = 0; i < nums.length; i ++) {
    for (let j = i + 1; j < nums.length; j ++) {
      if (nums[i] < nums[j]) {
        break;
      }
      if (nums[i] === nums[j]) {
        nums.splice(j, 1);
      }
    }
  }
  return nums.length;
};

// console.log(removeDuplicates([0,0,1,1,1]))

// 双指针法, 这样的话用for更优雅
const removeDuplicates2 = (nums) => {
  let pre = 0;
  let next = 1;
  while(next < nums.length) {
    if (nums[pre] !== nums[next]) {
      nums[pre + 1] = nums[next];
      pre ++;
    }
    next ++;
  }
  return pre + 1;
}
console.log(removeDuplicates2([0,0,1,1,1,2,3,3,4,4,5,5,5]))


const removeDuplicates3 = (nums) => {
  let pre = 0;
  for (let i = 0; i < nums.length; i ++) {
    if (nums[i] !== nums[pre]) {
      nums[pre + 1] = nums[i];
      pre ++;
    }
  }
  return pre + 1;
}
console.log(removeDuplicates3([0,0,1,1,1,2,3,3,4,4,5,5,5]))

// 总结
// 总结一些遇到的方法
// 双指针法、递归、迭代、尾递归、根据特点分析(胡诌的)、补充中

