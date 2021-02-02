from codefellows.dsa.binary_tree import BinaryTree


def leaf_has_weight(root, target, weight_so_far=0):
    """
    Sums up weight each call and checks the weight when at leaf.
    
    If you need to have Tree input vs root 
    then wrap in outer function and call with tree.root
    """

    if not root:
      return False

    my_weight = weight_so_far + root.value

    if not root.left and not root.right:
        return target == my_weight

    return (leaf_has_weight(root.left, target, my_weight) or 
            leaf_has_weight(root.right, target, my_weight))



def test_leaf_weights():

  """
  Sample Tree:

                (1)
          (2)       (3)
       (4)  (5)   (6)

  """

  tree = BinaryTree(values=[1,2,3,4,5,6])

  assert leaf_has_weight(tree.root, 7)
  assert leaf_has_weight(tree.root, 8)
  assert leaf_has_weight(tree.root, 10)

  assert not leaf_has_weight(tree.root, 1)
  assert not leaf_has_weight(tree.root, 3)
  assert not leaf_has_weight(tree.root, 4)


def alt_leaf_has_weight(root, weight):
  """
  Reduces weight as you go vs. adding.
  Added by Michelle Ferreirae 
  Trickier to read (IMHO) than function above, but shows some cool features.
  E.g. uses "any" built in function around a list comprehension maing recursive call
  """
  if root == None: return False
  if (root.left == None) and (root.right == None): return weight == root.value
  return any([alt_leaf_has_weight(x, weight - root.value) for x in (root.left, root.right)])
