# Given a sorted list, constructs a BST of that list.
# Returns the BST object with a .root that is a Node
# O(n) in both time and space

import math

class Node:
  def __init__(self, val=''):
    self.value = val
    self.left = None
    self.right = None
  
  def __str__(self):
    return '(' + str(self.left) + ' ' + str(self.value) + ' ' + str(self.right) + ')'

class BST:
  def __init__(self, root=None):
    self.root = root
  def __str__(self):
    return 'Tree: ' + str(self.root)

'''
Returns a BST constructed from a sorted list input.
'''
def reconstruct_bst(lst):
  return BST(reconstruct_helper(lst, 0, len(lst)))

'''
Returns a Node constructed from a sorted list input between [start, end).
'''
def reconstruct_helper(lst, start, end):
  if end - start < 1:
    return None
  else:
    # make the midpoint the root and recurse on each half
    mid = start + int(math.floor((end - start)/2))
    root = Node(lst[mid])
    root.left = reconstruct_helper(lst, start, mid)
    root.right = reconstruct_helper(lst, mid + 1, end)
    return root

# modicum of testing

arr = [1,2,3,4,5,6,7]

print (reconstruct_bst(arr))
