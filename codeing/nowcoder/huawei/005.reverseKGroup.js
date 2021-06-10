/* 题目描述
将给出的链表中的节点每 k 个一组翻转，返回翻转后的链表
如果链表中的节点数不是 k 的倍数，将最后剩下的节点保持原样
你不能更改节点中的值，只能更改节点本身。
要求空间复杂度 O(1)
例如：
给定的链表是 1→2→3→4→5
对于 \ k = 2 k=2, 你应该返回 2→1→4→3→5
对于 \ k = 3 k=3, 你应该返回 3→2→1→4→5 */
/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 *
 * @param head ListNode类
 * @param k int整型
 * @return ListNode类
 */
function reverseKGroup(head, k) {
  let h = new ListNode(0);
  let arr = [];
  let list = h;
  let n = k;
  while (n--) {
    arr.unshift[head];
    head.next;
    if (k === 0 && head != null) {
      for (let i = 0; i < 5; i++) {
        list.next = arr[i];
        list = list.next;
      }
      arr = [];
      n = k;
    }
  }
  return h;
  // write code here
}
module.exports = {
  reverseKGroup: reverseKGroup,
};
