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


  // Put the whole node into the Map?
  isCircularUsingHash() {
    
    let seen = new Map();
    let current = this.head;
    let previous = current;
    
    while (current) {
      if ( seen.has(current) ) {
        return true;
      }
      else {
        seen.set(current);
      }
      current = current.next;
    }

    return false;

  }

  // leader and trailer method
  isCircularUsingTrailer() {
    
    let leader = this.head.next;
    let trailer = this.head;

    while (leader) {
      if ( trailer == leader ) { return true; }
      leader = leader.next && leader.next.next ? leader.next.next : null;
      trailer = trailer.next;
    }

    return false;

  }

  isCircularUsingRecursion(leader=this.head,trailer=this.head.next) {
    if ( leader === trailer ) { return true; }
    else {
      if ( trailer.next && trailer.next.next ) {
        return this.isCircularUsingRecursion(leader.next, trailer.next.next);
      }
      return false;
    }
  }

}

let list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);

console.log('Hash (f)', list.isCircularUsingHash()); // false
console.log('Trailer (f)', list.isCircularUsingTrailer()); // false
console.log('Recursive (f)', list.isCircularUsingRecursion()); // false

console.log('----');

// Cause a cycle
list.head.next.next.next.next = list.head.next.next;

console.log('Hash (t)', list.isCircularUsingHash()); // true
console.log('Trailer (t)', list.isCircularUsingTrailer()); // true
console.log('Recursive (t)', list.isCircularUsingRecursion()); // false
