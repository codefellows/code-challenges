# Reverse Level Order Traversal of a Binary Tree

## Problem
Given a binary tree, print its nodes level by level in reverse order. In other words, all the nodes at the lowest level (maximum depth) should be printed first, left to right, then the level above that, then the level above that...all the way up to the root.

## Sample input and output
**Do not give unless explicitly asked!**

This tree:
```

              1
             / \
            /   \
           2     3
          / \   / \
         4   5 6   7
        /       \
       8         9
        \
         10
```
Should produce this output:
```
10, 8, 9, 4, 5, 6, 7, 2, 3, 1
```

## Algorithm
### Naive Algorithm
Print all nodes of level `h` first (where `h` is the height of the tree), then all nodes of level `h - 1`, etc. until `0` (the root). All nodes present in a given level can be printed with a pre-order traversal of the tree at that level.

The time complexity of this solution is **O(n^2)**.

### Better Algorithm
Trade off time complexity for space complexity:
```
PROCEDURE reverse_level_order (root):

  queue <-- new Queue   # to perform the traversal
  stack <-- new Stack   # to store our output

  queue.enqueue(root)
  while (queue.peek()):   # while queue is not empty
    current <-- queue.dequeue()
    stack.push(current)
    if node.right != null:
      queue.enqueue(node.right)
    end if
    if node.left != null:
      queue.enqueue(node.left)
    end if
  end while

  while (stack.peek()):   # while output stack is not empty
    current <-- stack.pop()
    print current.value
  end while

END PROCEDURE
```

Time complexity of this solution: **O(n)**. You have to hit every node once.

Space complexity of this solution: **O(n)**. The required space will be proportional to the maximum number of nodes at a given depth.

## Solutions
- [JavaScript](./solution.js)
