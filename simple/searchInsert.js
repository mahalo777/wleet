/**
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。
 * 如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
*/

// 注意是有序数组，并没有要求修改数组，需要返回下表而已，还不如用find。
var searchInsert = function(nums, target) {
  const idx = nums.indexOf(target);
  if (idx !== -1) {
    return idx;
  }
  for(let i = 0; i < nums.length; i ++) {
    if (nums[i] > target) {
      nums.splice(i, 0, target);
      return i;
    }
  }
  nums.splice(nums.length - 1, 0, target);
  return nums.length - 1;
};

// 二分法
// 经典二分法，在明确查找值的特点时使用很好，返回是left要注意理解
// 可以理解为，始终会经历一个left === right的过程,此时 left === right === middle
// 1、如果target < mid，需要right = middle - 1即right - 1 使得循环跳出。插入真正的位置是right - 1的位置。
//    但是真正插入后数量加1，索引应该是原来right的位置，原来的right应该是right + 1。所以插入位置就是right即left
// 2、如果target > mid，需要left = middle + 1即right + 1使得循环跳出。此时最末尾插入，即right + 1即left
const searchInsert2 = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let middle = 0;

  while(left <= right) {
    middle = Math.floor((right - left) / 2) + left;
    if (nums[middle] === target) {
      return middle;
    } else if (target < nums[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return left;
}

// 减治法
// 如经典办法是分成三份，减治法则是分成两份，一份肯定没有，一份可能存在。
// 最终结果是两个值比较，非此即彼
const searchInsert3 = (nums, target) => {
  let left = 0;
  let len = nums.length;
  let right = len - 1;

  // 特殊处理插入最后的情况，即剩余的必在数组内找到大于等于的元素
  if (nums[len - 1] < target) {
    return len;
  }

  while(left < right) {
    let middle = Math.floor((right - left) / 2) + left;
    if (nums[middle] < target) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }
  // 跳出循环条件是left === right，所以不用考虑返回值
  return left;
}

// 官方题解
// ans 初值设置为数组长度可以省略边界条件的判断，因为存在一种情况是 target 大于数组中的所有数，此时需要插入到数组长度的位置。
const searchInsert5 = (nums, target) => {
  let left = 0;
  let ans = nums.length;
  let right = nums.length - 1;

  while(left <= right) {
    let middle = Math.floor((right - left) / 2) + left;
    if (target <= nums[middle]) {
      right = middle - 1;
      ans = middle;
    } else {
      left = middle + 1;
    }
  }
  return ans;
}
console.log('res', searchInsert5([1,3,5,7], 4));


/**
 * 总结
 * 无论是减治法还是其他方法，注意边界值即可
 */