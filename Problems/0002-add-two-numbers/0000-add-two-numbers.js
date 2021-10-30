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
  let head = new ListNode(0);
  let node = head;
  let carry = 0;

  while (l1 || l2) {
    const l1Value = l1 ? l1.val : 0;
    const l2Value = l2 ? l2.val : 0;
    let sum = l1Value + l2Value + carry;
    carry = 0;

    if (sum > 9) {
      sum = sum % 10;
      carry = 1;
    }

    node.next = new ListNode(sum);
    node = node.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  if (carry) {
    node.next = new ListNode(carry);
  }

  return head.next;
};
