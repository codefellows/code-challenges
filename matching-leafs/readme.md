# Matching Leaves in a Binary Tree

> Write an algorithm that will compare two binary trees and determine if the leaves of each tree are the same.

## Example Input / Output

If the candidate hasn't asked for a test cases by about the 5 minute mark, politely ask whether they would like a specific example.

### Case 1: Happy Path

**Inputs**

* TreeA
```json
 {
  "value": 1,
  "left": {
    "value": 2,
    "left": {
      "value" : 4,
      "left": null,
      "right": {
        "value": 5,
        "left": null,
        "right": null
      }
    },
    "right": null
  },
  "right": {
    "value": 3,
    "left": {
      "value": 6,
      "left": null,
      "right": null
    },
    "right": null
  }
}
```

* Tree B
```json
{
  "value": 1,
  "left": {
    "value": 5,
    "left": null,
    "right": null
  },
  "right": {
    "value": 6,
    "left": null,
    "right": null
  }
}
```

**Outputs**

```plaintext
true
```

### Case 2: Non-matching Tree

**Input**

* Tree A
```json
 {
  "value": 1,
  "left": {
    "value": 2,
    "left": {
      "value" : 4,
      "left": null,
      "right": {
        "value": 7,
        "left": null,
        "right": null
      }
    },
    "right": null
  },
  "right": {
    "value": 3,
    "left": {
      "value": 6,
      "left": null,
      "right": null
    },
    "right": {
      "value": 8,
      "left": null,
      "right": null
    }
  }
}
```

* Tree B
```json
{
  "value": 1,
  "left": {
    "value": 5,
    "left": {
      "value": 7,
      "left": null,
      "right": null
    },
    "right": null
  },
  "right": {
    "value": 6,
    "left": null,
    "right": null
  }
}
```

**Outputs**

```plaintext
false
```

## Suggested Data Model

If the student wants to write a data class, provide these (depending on language).

### Python

```python 
class TreeNode:
  def __init__(value):
    self.value = value
    self.left = None
    self.right = None
```

### Java

```java
public class TreeNode {
  Integer Value;
  TreeNode left;
  TreeNode right;

  // constructor, accessors
}
```

### JavaScript

```javascript
class TreeNode {
  constructor (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
```

### TypeScript

```typescript
class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(
    value: number,
  ) {
    this.value = number;
    this.left = null;
    this.right = null;
  }
}
```

## Suggested algorithm

If the candidate hasn't made sufficient progress on the algorithm by about the 20 minute mark, suggest an algorithm below as a hint.

### Recursive Traversal + Map Solution

The recursive solution traverses each tree and compares the leaf values once the traversals finish.  During the traversal of the first tree, add all leaf values to storage.  During the Second traversal, check if each value is present in the data storage structure, if all values in the second tree are present in storage return true, if there a value missing from storage return false.

#### Pseudocode

```plaintext
main function compareTrees
  parameter TreeA <- TreeNode
  parameter TreeB <- TreeNode
  values <- new HashMap

  define function addToValues
    parameter node <- TreeNode
    add node value to values HashMap

  define function doesValueExist
    parameter node <- TreeNode
    return the boolean from values.has(node.value) method

  define function traverse
    parameter node <- root node
    parameter callback <- function to use while traversing
    if node is not undefined or null
      if node does not have a left or right child
        pass node to callback -> if this returns false, stop program and return false
      traverse node.left
      traverse node.right

  traverse(TreeA, addToValues)
  traverse(TreeB, doesValueExist)

  if any nodes are unaccounted for in values
    return false
  else
    return true
```

## FAQs

> What data type does the tree hold?

To keep things simple you can assume all values in the tree will be integers.

> How should I traverse the tree?

You can use any traversal method,  a good suggestion is depth first, pre-order.

> Can the tree contain duplicate values?

Your solution should account for duplicate leaf values.
