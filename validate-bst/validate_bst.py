from math import inf

def validate(tree):

  def walk(root, lower, upper):
    if not root:
      return True

    if not lower < root.value < upper:
      return False

    return walk(root.left, lower, root.value) and \
           walk(root.right, root.value, upper)

    
  return walk(tree.root, -inf, inf)

