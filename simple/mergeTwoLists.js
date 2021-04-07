/**
 * 合并两个有序列表
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

// 怎么说呢，写了一个寂寞
var mergeTwoLists1 = function(l1, l2) {
  if (!l1.length) {
    return l2;
  }
  if (!l2.length) {
    return l1;
  }
  for(let i = 0; i < l1.length; i ++) {
    let cur = l1[i];
    let flag = '';
    let j = 0
    for(; j < l2.length; j ++) {
      if (cur >= l2[j]) {
        flag = j;
      }
    }
    if (flag === '') {
      l2.splice(0, 0, cur);
    } else {
      l2.splice(flag + 1, 0, cur);
    }
  }
  return l2;
};

// 递归
var mergeTwoLists2 = function(l1, l2) {
  if (l1 === null) {
    return l2;
  } else if (l2 === null) {
    return l1;
  } else if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};

// 迭代
var mergeTwoLists3 = function(l1, l2) {
  const prehead = new ListNode(-1);
  let prev = prehead;
  while (l1 != null && l2 != null) {
    if (l1.val <= l2.val) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;
  }
  // 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可
  prev.next = l1 === null ? l2 : l1;
  return prehead.next;
};

// 不想总结了我...