from math import inf

def validate(tree):

  def check_in_range(root, lower, upper):
    if not root:
      return True

    if not lower < root.value < upper:
      return False

    return check_in_range(root.left, lower, root.value) and \
           check_in_range(root.right, root.value, upper)

    
  return check_in_range(tree.root, -inf, inf)

