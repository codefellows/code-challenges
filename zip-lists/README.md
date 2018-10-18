# Zip Together Two Linked Lists

## Problem Statement 

Write a function that takes in two linked lists as arguments, and returns one linked list that contains all the values zipped together.

## Example Inputs & Outputs

If asked, the interviewer can provide the following example data:

```
list1: [ 1 ] -> [ 2 ] -> [ 3 ]
list2: [ 'a' ] -> [ 'b' ] -> [ 'c' ]
output: [ 1 ] -> [ 'a' ] -> [ 2 ] -> [ 'b' ] -> [ 3 ] -> [ 'c' ]
```

Application: How would cars merge from two lanes into one?

```
lane1: [ 'Toyota Echo' ] -> [ 'Jeep Cherokee' ] -> [ 'BMW i8' ]
lane2: [ 'Honda Odyssey' ] -> [ 'Acura RL' ] -> [ 'Toyota FJ' ] -> [ 'Toyota Rav4' ]
output: [ 'Toyota Echo' ] -> [ 'Honda Odyssey' ] -> [ 'Jeep Cherokee' ] -> [ 'Acura RL' ] -> [ 'BMW i8' ] -> [ 'Toyota FJ' ] -> [ 'Toyota Rav4' ]
```

## Clarifications 

If asked, or it comes up indirectly, the interviewer can provide the following clarifications:

1. The linked list is a SLL, not doubly linked. 
1. The linked list is made up of `Node` objects, that have a `value` and a `next` property. 
1. The lists do not contain any circular references.
1. The lists are not necessarily the same length. 
1. Each node has a `value` property that could be anything. It's handy to work with integeters, but numbers might confuse the "numbering" of the nodes in the final result. 
1. The end result might be a brand new list, or the chance can be done in place. Hopefully interviewer and candidate come to consensus on this during dicsusion of the problem domain. Ideally, the candidate recognizes the trade-off in space efficiency between these 2 options. 

## Notes to the Interviewer

Zipping is pretty easy to understand as a concept, but it requires managing a handful of pointers across different lists.  

## Stretch goals

If the two lists are lists of sorted integers, what would you have to change to ensure the final result is sorted?

## Resources

Similar question: [Merge list into another](https://www.geeksforgeeks.org/merge-a-linked-list-into-another-linked-list-at-alternate-positions/)
