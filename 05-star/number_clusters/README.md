# Number Clusters

Source: A TA's AWS interview


You're given a grid of 1's and 0's.
A cluster of 1's corresponds with every 1 that has 1 as a neighbor to the left, right, up, or down.
Return an array of the size of each cluster of 1's in the grid.

Example:

```
input = [
  [1,1,1,0,0,0,0],
  [1,1,0,0,0,0,1],
  [0,0,0,0,1,0,1],
  [0,1,1,0,0,0,0],
  [0,0,0,1,1,0,1],
  [0,0,0,1,1,0,1]
]

output = [5, 2, 1, 2, 4, 2] # in any order
```
