# Roman Numeral To Integer

> Given a Roman Numeral as a string, return the integer Number that the Numeral corresponds to.

## Example input/output

If the candidate hasn't asked for test cases by about the 5 minute mark, politely ask whether they would like a specific example.

### Example 1: Simple Addition

**Inputs** 

```text
XVII
```

**Outputs**

```text
17
```

### Example 2: Simple Subtraction

**Inputs**

```text
IX
```

**Outputs**

```text
9
```

### Example 3: Addition and Subtraction

**Inputs**

```text
XXXIV
```

**Outputs**

```text
34
```

## Suggested Data Model

If the candidate hasn't provided a data model for the input and output by about the 10 minute mark, suggest this data model.

### Python

```python
class LinkedList:
    def __init__(self, character, value):
        self.character = character
        self.value = value
```

### Java

```Java
public class Numeral {
  Char character;
  Integer value;
}
```

### JavaScript

```javascript
class Numeral {
  constructor(character, value) {
    this.character = character;
    this.value = value;
  }
}
```

## Suggested algorithm

If the candidate hasn't made sufficient progress on the algorithm by about the 20 minute mark, suggest an algorithm below as a hint.

### Iteration with a Hash Map

We can create a hash map to store Numeral characters and their numeric value.  We can then iterate though our numeral string,  convert each character to a number and evaluate whether we need to add or subtract number values based on character position within the string.

#### Algorithm

We begin by creating a HashMap with a key for each numeral, and their corresponding number value.  We then begin a for loop that tracks 2 characters in the string named 'first' and 'second' as well as the total sum corresponding to the numeral string.  As we iterate we compare 'first' and 'second'.  If 'first' is greater than or equal to 'second' we simply add the first characters value to the sum total, if 'second' is greater than 'first' we subtract the value of first from second and add the result to our total sum value.  Continue until all character in the numeral string are accounted for, returning the sum total.

#### Pseudocode

```text
main function numeralToInteger
  define string numeral <- input roman numeral string
  define hashmap values <- new hashmap for character:value pairs
  add all characters and values to our hashmap:
    'I': 1 
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000

  define totalSum <- initiate at 0

  for every index position in string numeral
    define character first <- number value of the character at current index position

    if our current index position is less than our inputs string length
      define character second <- number value of the character at current index position plus 1

      if first is greater or equal to second
        add first to the totalSum
      else
        subtract first from second and add the result to totalSum
        increment index position to skip over second on next iteration

    else
      add first to the totalSum
  
  return totalSum
```

## FAQs

> What is a Roman Numeral?

A Roman numeral consists of a string of a characters: I, V, X, L, C, M.  Each character corresponds to an Integer value: 1, 5, 10, 50, 100, 1000, respectively.  The values in the numeral are added up to create the integer value,  but when a character with a smaller value is placed directly behind a character with a larger value, the value of the first character is subtracted from the second character.
