const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(list, k) {
  let temp;
  if (!list.value) {
    return null;
  }
  let length = 0;
  while (list.value === k) {
    list.value = list.next.value;
    list.next = list.next.next;
    length++;
  }
  let current = list.next;
  let prev = list;
  function da(index) {
    for (let i = 0; i < index; i++) {
      prev = prev.next;
      return prev;
    }
  }
  while (current != null) {
    length++;

    if (current.value === k) {
      if (current.next != null) {
        temp = current;
        current.value = current.next.value;
        current.next = current.next.next;
        current = temp;
        length--;
      } else {
        da(length);
        prev.next = null;
        break;
      }
    } else current = current.next;
  }
  return list;
}

module.exports = {
  removeKFromList,
};
