/* 
题目描述
将两个有序的链表合并为一个新链表，
要求新的链表是通过拼接两个链表的节点来生成的，且合并后新链表依然有序。
 */

/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 *
 * @param l1 ListNode类
 * @param l2 ListNode类
 * @return ListNode类
 */
function mergeTwoLists(l1, l2) {
  // write code here
  let head = new ListNode(0);
  let list = head;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      list.next = l1;
      l1 = l1.next;
    } else {
      list.next = l2;
      l2 = l2.next;
    }

    list = list.next;
  }
  if (l1) {
    list.next = l1;
  }
  if (l2) {
    list.next = l2;
  }
  return head.next;
}
module.exports = {
  mergeTwoLists: mergeTwoLists,
};
