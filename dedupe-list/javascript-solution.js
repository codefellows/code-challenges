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
  dedupe() {
    
    let seen = new Map();
    let current = this.head;
    let previous = current;
    
    while (current) {
      if ( seen.has(current.value) ) {
        previous.next = current.next;
      }
      else {
        seen.set(current.value);
        previous = current;
      }
      current = current.next;
    }

  }

}

let list = new LinkedList();

list.append(1);
list.append(2);
list.append(2);
list.append(2);
list.append(3);
list.append(4);
list.append(3);
list.append(5);
list.append(5);

list.print();
list.dedupe();
list.print();
