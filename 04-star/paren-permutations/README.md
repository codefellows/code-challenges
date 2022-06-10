# Parenthesis Permutations

Given a value 'num', write an algorithm that will return a list of strings,
one for each of all valid (properly open and closed) permutations of 'n'
pairs of parentheses.

## Considerations:

The key is recursion.  The base case is zero paretheses.  For one pair,
there's only on permutation.  For two pairs there are several:

* (())
* ()()

If you start with the base case and work inductively backwards, you realize
that you can build all possible versions by taking the set of parens from the
previous step and adding a new pair before, a new pair after and a new pair
around.  You can use the Python `set` type object to remove repetitions and
voila.