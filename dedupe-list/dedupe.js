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

  /* 
    -----------------------
    Actual Solution Method
    -----------------------
   */
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
}

let list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

list.print();
list.reverse();
list.print();
