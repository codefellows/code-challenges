# Deduplicate a List

Source: Cracking the Coding Interview Q 2.1

## Overview/Question to Give
Write a function to take in a LinkedList, and return that LinkedList with its duplicate values removed.

## Example I/O (to provide if requested)

```
Input:  4 -> 3 -> 12 -> 3 -> 16 -> 9 -> 9
Output: 4 -> 3 -> 12 -> 16 -> 9
```

## Common Questions To Consider

- Candidates should ask whether this should be done in-place, or they should return a new LinkedList. If they ask, tell them to do it in-place; if they don't ask, tell them at the end that they were wrong and should have done it the other way.
- Candidates should worry about which duplicate gets removed/what the final ordering should look like. You can tell them to keep the first instance of a value, and remove all future instances of that value (the example I/O does that), or you can tell them to do it however they want.
- Candidates can assume a Node class with a value and a next.

## Possible Solutions
- Iterate through each element of the list. At each element i, iterate through the remainder of the list after index i and remove all nodes that match the value at i. Runtime n^2, space 1.
- Keep a set/HashSet of all values seen so far. Iterate through each element of the list. At each element i, if its value is in the seen set, remove that node; otherwise, add that value to the seen set. Runtime n, space n.
- Recursively do either of the above. (For the set-based solution, pass down both the seen set and the remainder of the list to the recursive call.)

## If The Candidate Finishes Real Fast
- Ask them to consider alternative solutions. If they've solved it with the HashSet method, ask how they could solve the problem without using extra space; if they've used the n squared method, ask them if they could cache seen values to speed up the algorithm.
- Ask them to step through how their solution will run on a LinkedList that is all duplicates, or an empty LinkedList.
- Quiz them on == vs .equals!
