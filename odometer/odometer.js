'use strict';

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {

  constructor() {
    this.head = null;
  }

  append(value) {

    if (!this.head) {
      this.head = new Node(value);
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new Node(value);
  }

  print() {
    let output = [];
    let current = this.head;
    while (current) {
      output.push(current.value);
      current = current.next;
    }
    console.log(output.join('->'));
  }

  reverse() {
    let current = this.head;
    let previous = null;
    let next = null;

    while (current !== null) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    this.head = previous;
  }

  // SOLUTION //
  increment() {
    
    this.reverse();

    let current = this.head;

    let carry = true;

    while (current) {

      if (carry) {
        carry = !(current.value = ++current.value % 10);
      }

      current = current.next;

    }

    carry && this.append(1);
    this.reverse();
  }

  // SOLUTION 2
  increment_rec() {
    // helper returns true if we need to carry
    function _helper(node) {
      if (node == null) {
        // made it to the end, need to add 1
        return true;
      } else {
        if (_helper(node.next)) {
          // adding 1, and carrying if necessary
          if (node.value == 9) {
            node.value = 0;
            return true;
          } else {
            node.value++;
            return false;
          }
        } else {
          // done adding 1, just keep returning
          return false;
        }
      }
    }

    if(_helper(this.head)) {
      // we must add a preceding 1
      this.head = new Node(1, this.head);
    }
  }

}

// simple list reversal
function reverseList(list) {

  let reverse = []; // new Stack();

  while(current) {
    reverse.push(current);
    current = current.next;
  }

  return reverse; // return reverse order list
}

let list = new LinkedList();

list.append(4);
list.append(9);
list.append(2);
list.append(9);

list.print();
list.increment();
list.print();
list.increment();
list.print();


let list2 = new LinkedList();

list2.append(4);
list2.append(9);
list2.append(2);
list2.append(9);

list2.print();
list2.increment_rec();
list2.print();
list2.increment_rec();
list2.print();

let list3 = new LinkedList();
list3.print();
list3.increment();
list3.print();

let list4 = new LinkedList();
list4.print();
list4.increment_rec();
list4.print();
