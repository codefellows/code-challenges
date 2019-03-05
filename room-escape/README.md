# Escape the Grid of Rooms

_Source: adapted from [a Google Code Jam problem](https://codingcompetitions.withgoogle.com/codejamio/round/0000000000050fc5/0000000000054e9c)_

You are in one room inside of a grid of rooms. Each room in the grid has a single door that opens, either to the north, south, east, or west; that door either leads to the adjacent room, or, on the outside of the grid, leads to the outside world. From your room, can you escape the grid?

You'll be given a 2-d array of characters representing the rooms. Each room is represented by one of the characters `'N', 'S', 'E', 'W'`, indicating which door opens out of that room. You'll also be given two integers `i, j` representing the coordinates of the room you start in. Return whether or not it is possible to escape out of the grid rooms from that starting room.

## Example input/output (do not give unless explicitly asked)

```
**Inputs**     | **Outputs**
_______________|____________
grid = [       | true
  [N E S],     | (from that room, going north one
  [S S S],     |  is outside the grid)
  [S S N]      |
]              |
i = 0          |
j = 0          |
_______________|___________________
same grid      | false
i = 0          | (from that room, you go E/S/S, and are
j = 1          |  then stuck in a N/S loop forever)
```

## Answers to Likely Clarifying Questions

* The grid is guaranteed to be rectangular (all subarrays the same length), but it is NOT necessarily square.
* The input grid is a 2d array of characters (`char[][]`).
* All the chars in the input grid are guaranteed to be one of `NEWS`.
* The numbers `i,j` are NOT guaranteed to be in bounds.
* Changing the input is discouraged... or, is up to the discretion of the interviewer. (In general, if the candidate comes up with the destructive solution, they're far enough along that they can handle being told "no don't destroy the input").
* Arrays have length, please use it (`.length, len(), .GetLength()` as appropriate).

## For the Interviewer: notes about this problem
Since each room has a single exit, there's a single path that you can follow out of your starting room. The most successful algorithms will start in that starting room and follow the path until they either reach the outside, or determine that reaching the outside is impossible because they are stuck in a loop.

You're outside of the grid if:
* your i or j coordinates are negative
* your i coordinate is equal to `grid.length`
* your j coordinate is equal to `grid[0].length`

(Some candidates will also check that you're "about to escape", i.e. `i == 0 && grid[i][j] == 'N'` or any of the three other symmetrical cases. That works too.)

Two basic ways of determining that you're stuck in a loop:
1. Keep track of the i/j coordinate pairs visited so far, and iterate until you either get to the outside of the grid, or you get a repeat location visited. Time O(n), where n is the size of the grid. You could keep track of i/j pairs visited with:
    - a new 2d array of booleans, space O(n) and W(n).
    - a `HashSet<Pair<Integer, Integer>>` or equivalent. Space O(n) but could be less if the path to the outside is short.
    - if allowed to modify the input array, by changing the char at visited spaces to `Z` or any other unused character. Space O(1), but destroys the input.
2. Don't keep track of anything, and iterate until you either get to the outside of the grid, or you've iterated (n + 1) times (aka `grid.length * grid[0].length + 1` times); at that point, you know you've repeated at least one room and must be stuck in a cycle. Time O(n), space O(1), non-destructive; but doesn't exit early once a cycle is found.

## Stretch Goal/Extension

If the candidate finishes the problem quickly, a natural extension is to return the path taken to escape, either as a list of coordinates, or as a String of all the char directions followed.
