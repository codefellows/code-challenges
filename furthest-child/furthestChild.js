'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
}

/**
 * Takes in any tree and returns the value of the node that is furthest from the root.
 * @param {Tree} tree - this uses a binary search tree but could be a binary tree that we are going to be traversing and grabbing a value from
 * @returns {*} - whatever value is at the furthest leaf from the root.
 * O(n) space complexity - recursion creates callstack frames that will take up space for every node with `tree`
 * O(n) time complexity - this solution will search all the node in the tree, everytime.
 */
function furthestLeaf(tree) {

  if (!tree.root) {
    throw new Error('No root node attached to tree');
  }
  let maxDistance = 0;
  let maxValue = tree.root.value;


  let findMax = (node, currentDistance) => {

    if (currentDistance > maxDistance) {
      maxDistance = currentDistance;
      maxValue = node.value;
    }

    if (node.left) {
      findMax(node.left, currentDistance + 1);
    }
    if (node.right) {
      findMax(node.right, currentDistance + 1);
    }
  }

  findMax(tree.root, maxDistance);
  return maxValue;
}

/**
 * Takes in a binary search  tree and returns the value that is furthest from the value at the trees root.
 * @param {Tree} bst - a binary search tree with left and right node properties.
 * @returns {Integer} - the value that is furthest from the root value.
 * O(log n) space complexity - recursion creates callstack frames for each node searched, we are still in linear time because we are growing with n, only at half the pace.
 * O(log n) time complexity - this solution will search nodes that are lesser on the left side of the tree, and greater on the right side of the tree, thus skipping nodes / trees whose value is heading closer to the root.
 */
function furthestValue(bst) {

  if (!bst.root) {
    throw new Error('No root node attached to tree');
  }

  let rootValue = bst.root.value;
  let maxNode = bst.root;

  if (!rootValue) {
    throw new Error('No value to compare');
  }

  // solution starts here
  // each recurse should compare the distance of the current Node to the maxNode
  let findMax = (node) => {
    let currentDistance = Math.abs(node.value - rootValue);
    let maxDistance = Math.abs(maxNode.value - rootValue);


    if (currentDistance > maxDistance) {
      maxNode = node;
    }

    if (node.left && node.value <= rootValue) {
      findMax(node.left);
    }
    if (node.right && node.value >= rootValue) {
      findMax(node.right);
    }
  }

  findMax(bst.root);
  return maxNode.value;
}


/**
 * Test functions for validation
 */

const testDistance = (string, tree, expected) => {

  const assert = furthestLeaf(tree);
  const test = assert === expected;

  console.log(string, test);
}

const testValue = (string, tree, expected) => {

  const assert = furthestValue(tree);
  const test = assert === expected;

  console.log(string, test);
}

const unbalancedTree = new Tree();

unbalancedTree.root = new Node(5);
unbalancedTree.root.left = new Node(1);
unbalancedTree.root.right = new Node(6);
unbalancedTree.root.left.left = new Node(0);
unbalancedTree.root.left.right = new Node(4);
unbalancedTree.root.right.right = new Node(8);
unbalancedTree.root.right.right.left = new Node(7);
unbalancedTree.root.left.right.left = new Node(2);
unbalancedTree.root.left.right.left.right = new Node(3);

testValue('Can find the furthest value in a balanced tree', unbalancedTree, 0);

testDistance('Can find the furthest leaf in a balances tree', unbalancedTree, 3);
