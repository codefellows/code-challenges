#! /usr/bin/python

# TreeNode class for use in solving problem
class TreeNode:
  def __init__(self, value, left = None, right = None):
    self.value = value;
    self.left = left;
    self.right = right;

# Algorithm
def hasPathWeight(root, weight):
  if root == None: return False
  if (root.left == None) and (root.right == None): return weight == root.value
  return any([hasPathWeight(x, weight - root.value) for x in (root.left, root.right)])

# Validation

# Set up tree
#      1
#     / \
#    3   4
#   /   / \
#  5    6  7

tree = TreeNode(
  1, 
  TreeNode(3,TreeNode(5)),
  TreeNode(4, TreeNode(6), TreeNode(7))
)

assert(hasPathWeight(tree, 9))
assert(hasPathWeight(tree, 11))
assert(hasPathWeight(tree, 12))
assert(not hasPathWeight(tree, 4))
assert(not hasPathWeight(tree, 1))
assert(not hasPathWeight(tree, 5))
assert(not hasPathWeight(tree, 10))
