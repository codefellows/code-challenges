'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

/**
 * Remove a node in the middle of a singly linked list given only the value of the node to remove
 *  O(n) time complexity, at worst case we need to look at every node in the list.
 *  O(1) space complexity, at worst case we are creating a constant 2 pointers to reference 2 nodes, 
 * @param {LinkedList} list - a linked list with a head property, and nodes with a value and a next.
 * @param {Any} valueToRemove - a value to be removed from the list.
 */
function removeNode(list, valueToRemove) {

  if (!list.head) {
    throw new Error('List is empty');
  }

  let current = list.head;

  if (current.value === valueToRemove) {
    list.head = current.next;
    return list;
  }

  let previous = null;


  while (current) {
    if (current.value === valueToRemove) {
      previous.next = current.next;
      break;
    }

    previous = current;
    current = current.next;
  }

  return list;
}




/**
 * Test function for asserting that two lists are equal in javascript
 * @param {String} string - description for the test.
 * @param {Any} value - a value to argue for removal.
 * @param {LinkedList} testList - LinkedList that will operated against.
 * @param {LinkedList} assertList - LinkedList that we assert should be our new Linked List after operation is complete.
 */
const test = (string, value, testList, assertList) => {

  const test = JSON.stringify(removeNode(testList, value));
  const expected = JSON.stringify(assertList);

  console.log(string, test === expected);
}

let valueInHead = new LinkedList();
valueInHead.head = new Node(2);
valueInHead.head.next = new Node(3);

let valueInHeadExpect = new LinkedList();
valueInHeadExpect.head = new Node(3);

test('Should remove the head from the list', 2, valueInHead, valueInHeadExpect);

let simpleList = new LinkedList();
simpleList.head = new Node(1);
simpleList.head.next = new Node(2);
simpleList.head.next.next = new Node(3);

let simpleListExpect = new LinkedList();
simpleListExpect.head = new Node(1);
simpleListExpect.head.next = new Node(3);

test('Should remove value from a small list', 2, simpleList, simpleListExpect);

let duplicateList = new LinkedList();
duplicateList.head = new Node(1);
duplicateList.head.next = new Node(2);
duplicateList.head.next.next = new Node(3);
duplicateList.head.next.next.next = new Node(4);
duplicateList.head.next.next.next.next = new Node(3);

let duplicateExpect = new LinkedList();
duplicateExpect.head = new Node(1);
duplicateExpect.head.next = new Node(2);
duplicateExpect.head.next.next = new Node(4);
duplicateExpect.head.next.next.next = new Node(3);

test('should remove one item from the list even with duplicate values', 3, duplicateList, duplicateExpect);
