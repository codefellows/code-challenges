# Reconstruct a BST from an In-Order Traversal

/Source: From Elements of Programming Interviews in Python, Q 9.12/

You are given an array of values that were the result of an in-order traversal on a balanced binary search tree.
Write a function that takes in that array as an argument and reconstructs a tree that would've given you those values in that order.

## Notes 

The code for the solution is not that challenging: it's the binary search algorithm, used to add nodes to a tree. 

Getting to the right answer requires the candidate understanding all parts of the question. Let the candidate explore the problem domain to realize these things on their own, as much as possible. The "result of an in-order traversal" just means a sorted array. Reconstructing the tree means starting in the middle to set the root node, and recursively adding to the left from the first half of the array, and to the right from the last half of the array. 

There are different potential balanced binary trees that might produce the same in-order array, so any solution just needs to produce a BST that could also result in the same in-order array. 
