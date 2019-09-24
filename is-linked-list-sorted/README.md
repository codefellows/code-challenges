# Linked List isSorted
Write a function that returns true if a LinkedList is sorted.

## Part 1
Assume sorted means "all elements are in ascending order."

## Part 2
Modify the first function so it returns true whether all the elements
are in either ascending order or descending order.

```
[1, 2, 3] would be true because it's consistently ascending
[3, 2, 1] would be true because it's consistently descending
[3, 1, 2] would be false because it's inconsistent
```

## Notes to the Interviewer

The candidate should ask about the data type of the input LinkedList; if not, take off points for not asking clarifying questions. When they ask, you can tell them to make it work for ints first, and come back to working for any data type if you have time.

If a candidate finishes only Part 1 of the problem, then they haven't solved the problem sufficiently; a good candidate should finish Part 1 in less than half of the total interview time, with plenty of time to at least consider Part 2.

A solid solution to Part 2 is keeping track of whether the list "could be ascending" and "could be descending"; update each of those if proven to be false, and if they're ever both false, you have your answer.
