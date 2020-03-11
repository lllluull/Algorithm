/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if(l1 === null || l2 === null ) return null
    const returnList = new ListNode(0)
    let tempList = returnList
    let carry = 0
    while(l1 !== null || l2 !== null) {
        const val1 = l1 !== null ? l1.val : 0
        const val2 = l2 !== null ? l2.val : 0
        const sum = val1 + val2 + carry
        tempList.next = new ListNode(sum % 10)
        tempList = tempList.next
        carry = sum >= 10 ? 1 : 0
        if(l1 !== null) {
            l1 = l1.next
        }
        if(l2 !== null) {
            l2 = l2.next
        }
    }
    if(carry > 0) {
        tempList.next = new ListNode(carry)
    }
    return returnList.next
};