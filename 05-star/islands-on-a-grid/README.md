# Islands on a Grid

## Problem Statement

You have a map of islands on a sea of water. You can think of this map as being a grid that looks something like this:
```
- - - - - -
- X X X - X
- X - - - X
X X X - - -
- - - - - X
- X - - X X
```
The `X`s represent land and the `-`s represent water.

Find an algorithm to count how many islands (that is, contiguous groups of land) there are on this map. In this example, there are four islands.

## Requirements

1. Identify how you'd like to hold this data.
2. Create an algorithm for finding the number of islands.
3. Code the algorithm as accurately as possible.

## Answers to Potential Questions
- Each cell of the grid will _only_ be _either_ land or water.
- Islands of land are _only_ connected to the right side, left side, above, and below. Corners do not "count" as connections.
- The input grid will _not necessarily_ be rectangle-shaped, but it will be two-dimensional. That is to say, it can always be represented as an array of arrays, but those arrays might not be of the same length.
- Second-order (and higher!) islands are allowed. A second-order island is one that is completely surrounded by water which itself is on an island. The "interior" island counts towards the ultimate total.

## Notes to the Interviewer

A good way to represent this data is with a two-dimensional array with two different values, e.g. `0` for water and `1` for land. (Making the "water" value falsy can simplify some of the code, but it's not required.)

The "trick" to this challenge is figuring out how to keep track of whether your algorithm has "seen" or "visited" a piece of land before. There are several ways to do this, but the recommended approach is to do a depth-first search to recursively visit all cells adjacent to the current cell

## Example algorithm

```
define function countIslands (grid: array of arrays):
  # initialize 2-dimensional array of visited sites
  visited := []
  for array index i in grid:
    visited[i] := []
  end for

  count := 0
  for array index x of grid:
    for cell index y of array:
      # If we have not visited this site and it is an island
      if grid[x][y] == land AND NOT visited[x][y]:
        count += 1
        # Mark the site as visited and then visit all adjacent sites
        call subroutine markSite(grid, x, y, visited)
      end if
      visited[x][y] := true
    end for
  end for
  return count
end define

define subroutine markSite (grid: array of arrays, x: integer, y: integer, visited: array of arrays):
  # Can't go out of bounds
  return nil if any of the following is true:
    x < 0 OR
    x > grid.length - 1 OR
    y < 0 OR
    y > grid[x].length - 1

  # Can't visit previously seen sites
  return nil if visited[x][y] == true

  # Mark the site as visited
  visited[x][y] := true

  # Break and go to the next action if we're not on land
  return nil if grid[x][y] == water

  # Recurse to visit all adjacent sites
  markSite(grid, x - 1, y, visited)
  markSite(grid, x + 1, y, visited)
  markSite(grid, x, y - 1, visited)
  markSite(grid, x, y + 1, visited)
end define
```

The time complexity of this algorithm is O(_n_^2). This is easy to see since we have to loop over every single _y_-array in every single _x_-array.

The space complexity of this algorithm can be decreased by using a different strategy to mark cells as visited. One way to do this is instead of keeping a `visited` array of arrays, change the cell from land to water after it's been visited so it can't be counted again. This is, of course, destructive of the input.

## Resources

- [Walkthrough of the problem and this solution](https://code.scottshipp.com/2018/11/29/walkthrough-solving-number-of-islands/)
