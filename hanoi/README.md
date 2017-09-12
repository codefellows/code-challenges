# Towers of Hanoi

Towers of Hanoi is a puzzle where you have 3 poles and a tower of `N` discs of decreasing size all stacked on the left-most pole. Consider this poorly-rendered ASCII text:

```
  |       |       |
  -       |       |
 ---      |       |
-----     |       |
```

The goal is to move all the discs from the left-most pole to the right-most pole. There are two restrictions: 1) you may only move one disc at a time and 2) a larger disc cannot be stacked on top of a smaller disc.

Write a function that implements a solution to this problem for N discs.