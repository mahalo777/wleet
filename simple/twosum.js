
/**
 *  两数求和：输入数组nums，返回和为target的一组下标。注意单个元素只能使用一次。
 *  最好的办法是：用对象或者Map边存边查，或者尾递归，O(n)
 */

// 最近简单的暴力循环法  时间复杂度O(n^2)
// 外层循环控制变量，内层寻找差值
const twoSum = (nums, target) => {
    for (let outerI = 0; outerI < nums.length; outerI++) {
        if (nums.length < 2) return [];
        for (let innerI = outerI + 1; innerI < nums.length; innerI ++) {
            if (target - nums[outerI] === nums[innerI]) {
                return [outerI, innerI]
            }
        }
    }
}

console.log(twoSum([3,2,4],6));

// 空间换取时间，对象，O(n)
// 将所有值存在map或者对象中，再进行遍历查找
const twoSumObj = (nums, target) => {
    const diffObj = {};
    for (let i = 0; i < nums.length; i ++) {
        diffObj[nums[i]] = i;
    }
    for (let j = 0; j < nums.length; j ++) {
        const needVal = target - nums[j];
        const targetIdx = diffObj[needVal];
        if (targetIdx !== undefined && targetIdx !== j) {
            return [j, targetIdx]
        }
    }
}

console.log(twoSumObj([3,2,4],6));

// 空间换取时间优化，对象 O(n)，边存边算
const twoSumObjUpdate = (nums, target) => {
    const diffObj = {};
    for (let i = 0; i < nums.length; i ++) {
        const currentVal = nums[i];
        const needVal = target - currentVal;
        if (diffObj.hasOwnProperty(needVal)) {
            return [i, diffObj[needVal]];
        } else {
            diffObj[currentVal] = i;
        }
    }
}

console.log(twoSumObjUpdate([3,2,4],6));

// 空间换取时间，Map，O(n)
const twoSumMap = (nums, target) => {
    const diffObj = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (diffObj.has(nums[i])) {
            return [diffObj.get(nums[i]), i];
        } else {
            diffObj.set(target - nums[i], i);
        }
    }
}
console.log(twoSumMap([3,2,4],6));


// 空间换取时间，Map，while O(n)
const twoSumWhile = (nums, target) => {
    const diffObj = new Map();
    let i = 0;
    while (i < nums.length ) {
        if (diffObj.has(nums[i])) {
            return [diffObj.get(nums[i]), i];
        } else {
            diffObj.set(target - nums[i], i);
        }
        i ++;
    }
}
console.log(twoSumWhile([3,2,4],6));


// 尾递归，O(n)，编译器存在对尾递归的优化
const twoSumFinal = (nums, target, i = 0, map = {}) => {
    if (map.hasOwnProperty(nums[i])) {
        return [i, map[nums[i]]];
    } else {
        map[target - nums[i]] = i;
        i ++;
        if (i < nums.length) {
            return twoSumFinal(nums, target, i, map)
        } else {
            return [];
        }
    }
}
console.log(twoSumFinal([3,2,4],6));

/* 
* 逗号表达式挺有意思的
* 这个reduce用法，O(n)，终止条件有趣
*/
const twoSumReduce = (nums, target) => {
    return nums.reduce((map, val, idx, arr) => {
        return map.hasOwnProperty(val) ? nums.splice(1) && [idx, map[val]] : (idx === map['len'] ? [] : map[target - nums[idx]] = idx, map)
    }, { len: nums.length -1})
}
console.log(twoSumReduce([3,2,4],6));

/* 
* 一个比较有争议的想法，O(n^2)
* pop的好处在于避免使用重复元素，但是操作数据不安全
* indexOf的时间复杂度可能比较大，为O(n)
    不同的浏览器对于长度不同可能处理不同，同时应该减少这种库函数的使用，为了提高基础和算法jiumi~
*/
const twoSumPop = function (nums, target) {
    let i = nums.length;
    while (i > 1) {
        let last = nums.pop();
        if (nums.indexOf(target - last) > -1) {
            return [nums.indexOf(target - last), nums.length]
        }
    }
}
console.log(twoSumPop([3,2,4],6));

/**
 *  总结
 *  1、 使用空间复杂度以缩短时间复杂度，是很常见的做法
 *  2、一般来说先存再查找的写法，完全可以优化成边存边查找
 *  3、尾递归
 */