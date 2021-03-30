/**
 * 给出一个 32 位的有符号整数，需要将这个整数中每位上的数字进行反转。
 * 注意：
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。
 * 请根据这个假设，如果反转后整数溢出那么就返回 0。
 */

// 犹豫使用库函数
const reverse1 = (x) => {
    const arr1 = [];
    const val =  Math.abs(x).toString();
    const len = val.length;
    for (let i = len - 1; i >= 0; i --) {
        arr1.push(val[i]);
    }
    const str = arr1.join('');
    const MAX = Math.pow(2, 31) - 1;
    const MIN = Math.pow(2, 31);
    if (x > 0) {
        return str > MAX ? 0 : parseInt(str);
    } else {
        return str > MIN ? 0 : - parseInt(str);
    }
    
};
console.log(reverse1(-2147483648))

// 使用了一些库函数哦，字符串转换效率低且依赖API
const reverse2 = (x) => {
    const str = Math.abs(x).toString().split('').reverse().join('');
    const MAX = Math.pow(2, 31) - 1;
    const MIN = Math.pow(2, 31);
    if (x > 0) {
        return str > MAX ? 0 : parseInt(str);
    } else {
        return str > MIN ? 0 : - parseInt(str)
    }
};

console.log(reverse2(-2147483647))

// 使用模函数
const reverse3 = (x) => {
    let res = 0;
    const MAX = Math.pow(2, 31) - 1;
    const MIN = - Math.pow(2, 31);
    while (x != 0) {
        let pop = x % 10;
        if (res > MAX / 10 || (res === MAX / 10 && res > MAX % 10)) {
            return 0;
        } else if (res < MIN / 10 || (res === MIN / 10 && pop < MIN % 10)) {
            return 0;
        }
        res = res * 10 + pop;
        x = x / 10 | 0;
    }
    return res;
}

console.log(reverse3(123))

/**
 * 总结
 * 1、使用库函数时，如果比较犹豫，可以参考下其复杂度
 * 2、开拓思维，使用数学
 */