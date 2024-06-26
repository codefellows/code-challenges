# Reconstruct a BST from an In-Order Traversal

_Source: From Elements of Programming Interviews in Python, Q 9.12_

You are given an array of values that were the result of an in-order traversal on a balanced binary search tree.
Write a function that takes in that array as an argument and reconstructs a balanced tree that would've given you those values in that order.

## Notes to the Interviewer

The code for the solution is not that challenging: it's the binary search algorithm, used to add nodes to a tree. 

Getting to the right answer requires the candidate understanding all parts of the question. Let the candidate explore the problem domain to realize these things on their own, as much as possible. The "result of an in-order traversal" just means a sorted array. Reconstructing the tree means starting in the middle to set the root node, and recursively adding to the left from the first half of the array, and to the right from the last half of the array. 

There are different potential balanced binary trees that might produce the same in-order array, so any solution just needs to produce a balanced BST that could also result in the same in-order array. 

## Example Data

```
Input: Array from in-order traversal of Balanced Binary Search
[1,7,8,10,13,15,20]

Output: Balanced Binary Search Tree
    10
   /  \
  7    15
 / \   / \
1   8 13  20
```
