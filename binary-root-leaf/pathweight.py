#! /usr/bin/python

# TreeNode class for use in solving problem
class TreeNode:
  def __init__(self, value, left = None, right = None):
    self.value = value;
    self.left = left;
    self.right = right;

# Algorithm
def has_path_weight(root, weight):
  if root == None: return False
  if (root.left == None) and (root.right == None): return weight == root.value
  return any([has_path_weight(x, weight - root.value) for x in (root.left, root.right)])

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

assert(has_path_weight(tree, 9))
assert(has_path_weight(tree, 11))
assert(has_path_weight(tree, 12))
assert(not has_path_weight(tree, 4))
assert(not has_path_weight(tree, 1))
assert(not has_path_weight(tree, 5))
assert(not has_path_weight(tree, 10))
