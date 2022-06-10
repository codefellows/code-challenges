# Validate whether a tree is a Binary Search Tree

Given a tree, write a method to return whether or not that tree represents a Binary Search Tree.

## Notes

The candidate should already know the definition of a binary search tree: at all nodes of the tree, the values in the left subtree are less than the current value, and the values in the right subtree are greater than the current value.

The most common issue is that students will fail to traverse the entire tree, or will fail to notice if there's a violation more than one level apart (the second listed example I/O). Please point out if their solution is failing this case in the pseudocode/actual code steps, although you shouldn't then push them farther towards an answer; they need to figure out themselves how to solve that problem.

### Example I/O (to give only if requested)

```
    5
   / \
  3   6

returns true
```

```
    5
   / \
  3   7
   \
   6

returns false
(at the root, there is a value greater than the current value in the left subtree)
```

```
    5
   / \
  3   7
   \
   2

returns false
(at the node with a value of 3, there is a value less than the current value in the right subtree)
```

## Possible Solutions

There are three basic recursive solutions to this problem:

1) **Preorder-ish**: When recursing, pass down a maximum allowed value and a minimum allowed value. Check the current value against these min and max values, and return false if it violates them; otherwise, update them appropriately to recurse on the children. (This requires having default parameters for the min and max values, or a wrapper function.)

2) **Postorder-ish**: When recursing, return 3 values: the boolean for whether or not that tree was a binary search tree, the minimum value in the tree, and the maximum value in the tree. At each node, check the current value against the min and max values in its left and right subtree, and return the appropriate values. (This needs to have a wrapper function that calls the recursive function, and then just returns the boolean portion of the final result.)

3) **What Do You Mean, Return/Pass Down Multiple Things**: Write helper methods to get the minimum and maximum values in a subtree. At each node, call those methods to check the current node, and also check the children. Return a boolean.
