# Find a Root to Leaf Path with Specified Sum
_Source: From Elements of Programming Interviews in Python, Q 9.6_

## Problem Statement 

Write a function that takes a binary tree as an argument, as well as some integer. Check if there exists a leaf whose path weight equals the given integer. If there does, return True. Otherwise, return False. 

## Clarifications 

If asked, or it comes up indirectly, the interviewer can provide the following clarifications:

1. The tree is a binary tree, not a BST. 
1. Each node has a `value` property that is an integer. 
1. The `value` could be positive or negative. 
1. The path weight of a node is the sum of the integers on the unique path from root to that node, including that node.
1. Nodes do not contain references to their parents.
1. The value passed in to the function is your choice: a node instance that is the head of a binary tree, or a binary tree object with a `head` property. 

## Example Inputs & Outputs

If asked, the interviewer can provide the following example data:

Example input tree:
```
— 17
  |
  — 132
  |   |
  |   — 24
  |   |
  |   — -3 (negative three)
  |
  — 597
      |
      — -82 (negative eighty-two)
      |
      — 61
```
Example input search: `173`

Example output: `True`


## Notes to the Interviewer

### Solution notes

Each node has a path weight, but we are only looking for leaf nodes that match the input value. 

The solution should look like a traversal, with some additional info passed along. This could be recursive or iterative. 

One approach would be to add a `weight` property to each node, to cache it's path weight. However, this would need to be updated (for some subset of nodes) if there are any changes in the tree. So, first solve the problem without being able to write the leaf path weights to a cache (whether that's in the node, or external to the tree). 

### Efficiency

Time: 
 - Worst case: O(n * n) 
   - Every node needs to be visited if the tree doesn't contain a leaf with the given path weight
 - Best case: O(1)
   - Unlikley, but possible: The first node checked is a leaf node, and has the desired path weight
 - Average case: O(L/2 * H) where L is number of leaf nodes, and H is height of tree, ideally/roughly: O(n lg n)
   - Hopefully, the tree is balanced. Then, your likely to find it after checking about half the leaf nodes.

## Stretch goals

Return every node with a path weight equal to the given integer sum.

## Resources

