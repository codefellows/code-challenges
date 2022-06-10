# Recursive Sum

Source: Nicholas Hunt-Walker

Write a function that takes in an integer `n` and recursively adds the numbers from `1` through `N`, returning their sum.

## Example I/O

```
sum(0) => 0
sum(1) => 1
sum(2) => 3
sum(3) => 6
sum(5) => 15
sum(10) => 55
```

## Notes to the Interviewer

Because this question specifies writing a recursive function, the candidate shouldn't use the math trick `return n * (n + 1) / 2` as their solution.

You should feel free to ask the candidate about their choice of base case (n==1? n==0? n < 2?).
