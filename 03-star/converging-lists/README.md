# Converging Linked Lists

Write a function that takes two LL's and returns the node at which they converge if it exists. 
Otherwise, return None.
Can you do it in O(N) time?

```
A)  * -> * -> * - * - * - * - * - * \
                                      \
B)                    * - * - * - * - (*) - * - * - * - *


A) * -> * -> * \
B) * -> * -> * -> * -> *


C -> D -> E-> \
              |
Z- > Y -> X-> W -> F -> G -> H
```
