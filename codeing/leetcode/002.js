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
{
  var addTwoNumbers = function (l1, l2) {
    let l3 = [],
      temp = 0;
    for (let i = 2; i >= 0; i--) {
      let result = l1[i] + l2[i] + temp + '';
      if (result > 9) {
        l3.unshift(Number(result.charAt(1)));
        temp = Number(result.charAt(0));
      } else {
        l3.unshift(Number(result));
        temp = 0;
      }
    }
    return l3;
  };

  // console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
}


{
  /** JS 还有链表吗？ mdn上没有见么 就是个NodeList
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
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }

  let l1 = new ListNode([2, 4, 3]);
  let l2 = new ListNode([5, 6, 4]);
  console.log(l1,l2)
  var addTwoNumbers = function (l1, l2) {
    let listnode = new ListNode(-1);
    console.log(listnode);
  };
  console.log(addTwoNumbers(l1, l2));
}