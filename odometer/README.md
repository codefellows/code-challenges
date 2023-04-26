# Linked List Odometer

> Given a linked list of positive single digit numbers, write a method, that "adds one" to the "number" represented by the list, like an odometer.

## Example inputs / outputs

If the candidate hasn't asked for test cases by about the 5 minute mark, politely ask whether they would like a specific example.

### Example 1: Happy Path

Only 1 value needs to change at the end of the list.

**Inputs**

```text
4 -> 3 -> 9 -> 5
```

**Outputs**

```text
4 -> 3 -> 9 -> 6
```

### Example 2: Single Digit Rollover

The value at the end of the list is a `9`, causing the preceding number to be incremented, and the `9` switched to a `0`.

**Inputs**

```text
4 -> 3 -> 4 -> 9
```

**Outputs**

```text
4 -> 3 -> 5 -> 0
```

### Example 3: Multi Digit Rollover

All numbers need to be updated and an extra digit is appended to the front of the list with the value of `1`.

**Inputs**

```text
9 -> 9 -> 9 -> 9
```

**Outputs**

```text
1 -> 0 -> 0 -> 0 -> 0
```

## Suggested data model

If the candidate hasn't provided a data model for the input and output by about the 10 minute mark, suggest this data model.

### Python

```python

class LinkedList:
    def __init__(self):
        self.head = None

class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

```

### Java

```Java

public class LinkedList {
  Node head;

  static class Node {
    int value;
    Node next;

    Node(int value) {
      value = value;
      next = null;
    }
  }
}

```

### JavaScript

```javascript

class LinkedList {
  constructor() {
    this.head = null;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
```

## Suggested algorithm

If the candidate hasn't made sufficient progress on the algorithm by about the 20 minute mark, suggest an algorithm below as a hint.

### Reverse the List and Increment the Head

This solution allows us to traverse the list once, reversing the list at the beginning so we start with the value that needs to be incremented.  From there we can and work backwards if we need to "rollover" digits past the the head node.  If the number at the end can be incremented without modifying the rest of values we can easily modify the reversed list's head and return the list.  If we encounter values that require us to change more node values,  we simply traverse until we no longer need to update values,  or add a new node the end of the list if all node integer values require a "rollover".

#### Algorithm

Reverse the list so that the value that we need to increment is at the front of the list. Start traversing from the head.  If the current node value is less than `9`, increment by 1 and don't carry over.  If the current node is equal to `9`, convert to `0` and carry over the the next node.  If we carry over a value and we are out of Nodes, append `1` to the end of the list.  Reverse the list again and return the list.

#### Pseudocode

```text

function Increment has argument List of numbers

initialize Node current to List.head
call in-place reverse on List
initialize boolean carried to false

while current is not null:
  if carried is true
    if current.value less than 9
      increment current.value
      set carried to true
    else if current.value is 9
      set current.value to 0

if carried is true outside of loop:
  append 1 to List

call in-place reverse on List
return List

```

Space Complexity: O(1) We only need to store a value for the current node.  
Time Complexity:  O(n) We need to check every value stored in the list.

### Use Recursion to carry a digit

A second method might involve recursively traversing the "Odometer" digits and carrying a `1` or a `0` to the next recursive call to tell our function whether our digit needs to "increment" and perhaps "rollover" if we are at the end of the list and we are still carrying a `1`.

#### Algorithm

Our recursive function will receive a node.  And we need to recursively call our function until we reach our last node, and if we reach the last node we check the value and if we are at a `9`, flip to a `0` and return `1` up the call stack.  If the next recursive invocation receives a `1` we know we need to modify our current node, and again check if we are at a `9` and required to carry a `1` up the call stack.  If we reach the head node and our value still requires a "rollover" and we have a `9` at the head, we will insert a new node with the carried `1`.

#### Pseudocode

```text

function Recursive Increment has argument List of numbers

define Number carry as return value from recursive traversal function called on List.head

define helper function to traverse that takes in a Node.

  if Node is null return 1

  define carry as return value of traversal called on Node.next
  if node.value is equal to 9
    set node.value to 0
    set carry to 1
  else 
    add 1 to node.value
    set carry to 0
  
  return carry

if carry equals 1
    insert carry at head node

return list

```

Space Complexity: O(n) Not only are we storing a number for carry, we are also storing a carry value for every node in the list as we call the function recursively.  
Time Complexity:  O(n) We need to check every value stored in the list.

## FAQs

> What is an odometer?

An odometer is an numerical display used to calculate mileage traveled in a vehicle.  The display has a maximum length of digits and it always displays a single digit integer for a given digit position.  For example, a sample odometer starts at `000000` and when 1 mile is driven it displays `000001`, and continues until all possible digits display a maximum value of `999999`. In this scenario we require an odometer that can add an extra digit to display `1000000`.

> What values will the list contain?

The list will always contain positive integers.

> Should I return the same list or a new list?

The candidate must modify the list in-place, returning the same linked list.

> Will I have access to the Linked List class?

The candidate has access to the Linked List class and a Node class. They cannot assume that either class contains any methods they did not write themselves.  You can gift them the `append` and `reverse` methods if you think necessary.
