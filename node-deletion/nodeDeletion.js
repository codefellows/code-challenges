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
 *  O(1) time complexity, at worst case we need to look at every node in the list.
 *  O(1) space complexity, we create one new variable next that should be able to , 
 * @param {Node} node - the object to be removed from the list.
 */
function removeNode(node) {

  if (!node || !node.next) {
    throw new Error('Node input error');
  }

  let next = node.next;
  node.value = next.value;
  node.next = next.next;
}

/**
 * Test function for asserting that two lists are equal in javascript
 * @param {String} string - description for the test.
 * @param {Any} value - a value to argue for removal.
 * @param {LinkedList} testList - LinkedList that will operated against.
 * @param {LinkedList} assertList - LinkedList that we assert should be our new Linked List after operation is complete.
 */
const test = (string, argument, value, assertValue) => {

  removeNode(argument);

  const test = JSON.stringify(value);
  const expected = JSON.stringify(assertValue);

  console.log(string, test === expected);
}

let valueInHead = new LinkedList();
valueInHead.head = new Node(2);
valueInHead.head.next = new Node(3);

let valueInHeadExpect = new LinkedList();
valueInHeadExpect.head = new Node(3);

let nodeToRemove = valueInHead.head;

test('Should remove the head from the list', nodeToRemove, valueInHead, valueInHeadExpect);

let simpleList = new LinkedList();
simpleList.head = new Node(1);
simpleList.head.next = new Node(2);
simpleList.head.next.next = new Node(3);

let simpleListExpect = new LinkedList();
simpleListExpect.head = new Node(1);
simpleListExpect.head.next = new Node(3);

nodeToRemove = simpleList.head.next;

test('Should remove node from a small list', nodeToRemove, simpleList, simpleListExpect);

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

nodeToRemove = duplicateList.head.next.next;

test('should remove one item from the list even with duplicate values', nodeToRemove, duplicateList, duplicateExpect);
