# Find a Root to Leaf Path with Specified Sum

Source: From Elements of Programming Interviews in Python, Q 9.6

You are given a binary tree (not necessarily a binary search tree!) where each node is labeled with an integer. The path weight of a node in such a tree is the sum of the integers on the unique path from root to that node, including that node. Nodes do not contain references to their parents.

Write a function that takes a binary tree as an argument, as well as some integer. Check if there exists a leaf whose path weight equals the given integer. If there does, return True. Otherwise, return False.

- **Stretch**: Return every node with a path weight equal to the given integer sum
- **Stretch**: Consider the tree with negative and positive numbers