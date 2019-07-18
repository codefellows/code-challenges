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

    while(current) {

      if ( carry ) {
        carry = !(current.value = ++current.value % 10);
      }

      current = current.next;

      !current && carry && this.append(1);

    }

    this.reverse();
  }

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
