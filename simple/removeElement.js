/**
 * 给你一个数组 nums 和一个值 val，
 * 你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
 */

/**
 * 很好你想到了双指针，但是细看过程，问题如下：
 * 如果慢指针不等于val跳过，可能会跳过【已经被快指针复制过来的值】，同样的值会出现在数组两次。
 * 其实还是双指针没有理解透彻：它实际上是用快慢分开步长，慢指针始终指向符合条件的数据，快指针控制只遍历一遍数据。
 * 如果慢指针增加跳过逻辑，怎么得知这个数据是不是已经被复制了呢？
 * 可以理解为，慢指针的区域相当于新开辟一个数组，缺点是每次都会复制一次
 * 因此衍生出第二种解法，从尾部复制，释放已经复制的，效率更高
 */

// 错误示范
const removeElement = function(nums, val) {
  if (!nums.length) {
    return 0;
  }
  let prev = 0;
  for(let i = 0; i < nums.length; i ++) {
    console.log('prev i', nums, prev, i);
    if (nums[prev] === val && nums[i] !== val) {
      nums[prev] = nums[i];
      prev = prev + 1;
      console.log('交换了', prev);
    } else if (nums[prev] !== val) {
      prev = prev + 1;
      console.log('直接跳过', prev);
    }
  }
  return prev - 1;
};
// console.log(removeElement([0,1,2,2,3,0,4,2], 2))

const removeElement2 = (nums, val) => {
  let prev = 0;
  for (let j = 0; j < nums.length; j ++) {
    if (nums[j] !== val) {
      nums[prev] = nums[j];
      prev ++;
    }
  }
  return prev;
}

console.log(removeElement2([0,1,2,2,3,0,4,2], 2))

const removeElement3 = (nums, val) => {
  let len = nums.length;
  let prev = 0;
  while(prev < len) {
    if(nums[prev] === val) {
      // copy后下次循环会迭代
      nums[prev] = nums[len -1];
      // 减少copy的次数
      len --;
    } else {
      prev ++;
    }
  }
  return prev;
}
console.log(removeElement3([0,1,2,2,3,0,4,2], 2))
