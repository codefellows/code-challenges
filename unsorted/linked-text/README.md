# Linked-List Text Search

Imagine you have a linked list where the values on all the nodes are strings.
For example, you could have something like 

```
['a fo']->['x a b']->['ox some']->[' clocks']->[' and rocks']
```

Write a function that would take in such a linked list and return whether or not a second string is present within that list, whether it's across nodes or not.

Ex:

```python
>>> in_list(word_list, 'fox') -> True
>>> in_list(word_list, 'tugboat') -> False
```