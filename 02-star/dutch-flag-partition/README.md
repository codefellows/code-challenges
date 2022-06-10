# Dutch Flag Partition

Source: From Elements of Programming Interviews in Python, Q 5.1

Write a program that takes an array `A` and an index `i` into `A`, and rearranges the elements such that all elements less than `A[i]` (the "pivot") appear first, followed by elements equal to the pivot, followed by elements greater than the pivot. This should be done in O(N) time.

You may not use any built-in sorting algorithms.

The elements must be in the same relative order to each other as they were before the array was partitioned.

Ex:

```
input: 
- Array A: [35, 87, 34, 16, 41, 32, 47, 31, 47, 72, 76, 33, 62, 60, 97, 78, 78, 3, 90, 4]
- Index i: 6

output: [35, 34, 16, 41, 32, 31, 33, 3, 4, 47, 47, 87, 72, 76, 62, 60, 97, 78, 78, 90]
- 
```