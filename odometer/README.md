# Linked List Odometer

Given a linked list of positive numbers, write a method, that "adds one" to the "number" represented by the list, like an odometer

## Sample inputs and outputs

```javascript
Input:
    4 -> 3 -> 9 -> 5

Output:
    4 -> 3 -> 9 -> 6
```

```javascript  
Input:
    4 -> 3 -> 4 -> 9

Output:
    4 -> 3 -> 5 -> 0
```

```javascript  
Input:
    9 -> 9 -> 9 -> 9

Output:
    1 -> 0 -> 0 -> 0 -> 0
```

### Questions and Answers

* The list will always be positive integers
* The student must modify the list IN PLACE
* Students can assume they have a linked list class
* Students will need to code the reverse method as well as the odometer logic
  * If you're feeling generous, you can "gift" them .reverse() if they can describe in detail how that works

### Hint

* The preferred solution is to reverse the list, work in sequence adding 1 to each node's value and then carrying (or not) to the next one, and then re-reverse it.
* This is an O(n) solution (3x traversal, but not nested)
