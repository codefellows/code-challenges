'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {

  constructor(node) {
    this.root = node;
  }

  /*
  -----------------
  SOLUTION METHOD (Based on the python solution)

  Recursively go left/right and reduce the weight by the value seen so far
  If we're at a leaf and the current value equals that reduced weight then
  we know we're good.

  Reducing the weight as we go is an interesting tactic that may not be found
  readily by students.

  Could also be approached by ADDING the value of the node to a "weight so far"
  and sending both values in (see pathWeight2)

  -----------------
*/

  pathWeight(weight) {

    let _getWeight = (root, weight) => {

      if (!root) { return false; }

      if (!root.left && !root.right) { return weight === root.value }

      return (
        _getWeight(root.left, weight - root.value) ||
        _getWeight(root.right, weight - root.value)
      );

    }

    return _getWeight(this.root, weight);

  }

  pathWeight2(weight) {

    let _getWeight = (root, target, weightSoFar) => {

      if (!root) { return false; }

      if (!root.left && !root.right) { return weightSoFar + root.value === target }

      return (
        _getWeight(root.left, target, weightSoFar + root.value) ||
        _getWeight(root.right, target, weightSoFar + root.value)
      );

    }

    return _getWeight(this.root, weight, 0);

  }
}

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);

one.left = two; // PW: 3
one.right = three;
three.left = four; // PW: 8
three.right = five; // PW: 9

let tree = new BinaryTree(one);

for (let x = 1; x <= 10; x++) {
  console.log('v1', x, tree.pathWeight(x));
  console.log('v2', x, tree.pathWeight2(x));
  console.log('');
}
