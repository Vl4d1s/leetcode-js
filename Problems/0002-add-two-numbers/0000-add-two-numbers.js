/**
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

// O(n) Solution:
const addTwoNumbers = (l1, l2) => {
  let carry = 0;
  let newListNodeHead = new ListNode(0);
  let newListNodeHeadTemp = newListNodeHead;

  while (l1 || l2) {
    l1Value = l1?.val || 0;
    l2Value = l2?.val || 0;
    let sum = l1Value + l2Value + carry;
    carry = 0;

    if (sum > 9) {
      sum = sum % 10;
      carry = 1;
    }

    newListNodeHead.next = new ListNode(sum);
    newListNodeHead = newListNodeHead.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  if (carry) {
    newListNodeHead.next = new ListNode(carry);
  }
  return newListNodeHeadTemp.next;
};
