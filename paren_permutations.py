# -*- coding: utf-8 -*-
"""
Question:

  Given a value 'num', write an algorithm that will return a list of strings,
  one for each of all valid (properly open and closed) permutations of 'n'
  pairs of parentheses.

Considerations:

  The key is recursion.  The base case is zero paretheses.  For one pair,
  there's only on permutation.  For two pairs there are several:

  * (())
  * ()()

  If you start with the base case and work inductively backwards, you realize
  that you can build all possible versions by taking the set of parens from the
  previous step and adding a new pair before, a new pair after and a new pair
  around.  You can use the Python `set` type object to remove repetitions and
  voila.
"""
import sys


def all_parens(num):
    if num == 0:
        return []
    if num == 1:
        return ['()']
    else:
        sub_parens = all_parens(num - 1)
        return set(['(' + parens + ')' for parens in sub_parens] +
                   ['()' + parens for parens in sub_parens] +
                   [parens + '()' for parens in sub_parens])

if __name__ == '__main__':
    pairs = all_parens(int(sys.argv[1]))
    print '\n'.join(pairs)
