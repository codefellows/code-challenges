# Linked List Odometer

> Given a linked list of positive single digit numbers, write a method, that "adds one" to the "number" represented by the list, like an odometer.

## Example inputs / outputs

If the candidate hasn't asked for test cases by about the 5 minute mark, politely ask whether they would like a specific example.

### Example 1: Happy Path

Only 1 value needs to change at the end of the list.

**Inputs**

```javascript
4 -> 3 -> 9 -> 5
```

**Outputs**

```javascript
4 -> 3 -> 9 -> 6
```

### Example 2: Smallest meaningful change

The value at the end of the list is a `9`, causing the preceding number to be incremented, and the `9` switched to a `0`.

**Inputs**

```javascript
4 -> 3 -> 4 -> 9

```

**Outputs**

```javascript
4 -> 3 -> 5 -> 0
```

### Example 3: Worst Case

All numbers need to be updated and an extra digit is appended to the front of the list with the value of `1`.

**Inputs**

```javascript
9 -> 9 -> 9 -> 9
```

**Outputs**

```javascript
 1 -> 0 -> 0 -> 0 -> 0
```

## Suggested data model

If the candidate hasn't provided a data model for the input and output by about the 10 minute mark, suggest this data model.

```javascript

class LinkedList {
  constructor() {
    this.head<Node|Null> = null;
  }
}

class Node {
  constructor(value<any>) {
    this.value<any> = value;
    this.next<Node|null> = null;
  }
}
```

## Suggested algorithm

If the candidate hasn't made sufficient progress on the algorithm by about the 20 minute mark, suggest an algorithm below as a hint.

### Reverse the List and Increment the Head

This solution allows us to traverse the list once at the beginning to get to the value that we need to increment,  and work backwards.  If the number at the end can be incremented without modifying the rest of values we can  

#### Algorithm

Reverse the list so that the value that we need to increment is at the front of the list. Start traversing from the head.  If the current node value is less than `9`, increment by 1 and don't carry over.  If the current node is equal to `9`, convert to `0` and carry over the the next node.  If we carry over a value and we are out of Nodes, append `1` to the end of the list.  Reverse the list again and return the list.

#### Pseudocode

```javascript

declare method increment:
  declare List list -> input linked list
  list.reverse()

  declare Node current set to List.head
  declare Boolean carried set to true

  while current is not null:
    if carried over is true
      increment current value if less than 9 and set carried to false
      if value is 9, set to zero and continue

  if carried is true outside of loop:
    list.append(1)
  return list.reverse()

```

Space Complexity: O(1) We only need to store a value for the current node.  
Time Complexity:  O(n) We need to check every value stored in the list.

## FAQs

> What is an odometer?

An odometer is an numerical display used to calculate mileage traveled in a vehicle.  The display has a maximum length of digits and it always displays an integer for a given digit position.  For example, a sample odometer starts at `000000` and when 1 mile is driven it displays `000001`, and continues until all possible digits display a maximum value of `999999`. In this scenario we require an odometer that can add an extra digit to display `1000000`.

> What values will the list contain?

The list will always contain positive integers.

> Should I return the same list or a new list?

The candidate must modify the list in-place, returning the same linked list.

> Will I have access to the Linked List class?

The candidate has access to the Linked List class and a Node class. They cannot assume that either class contains any methods they did not write themselves.  You can gift them the `append` and `reverse` methods if you think necessary.
