from codefellows.dsa.binary_tree import BinaryTree, Node
from codefellows.dsa.queue import Queue
from codefellows.dsa.stack import Stack

def reverse_level_order(tree):
  """Uses a modified Breadth First Search
  to return values from bottom level to top, 
  each level ordered left to right

  Args:
      tree: BinaryTree

  Returns:
      list: values in reverse level order
  """
  q = Queue()
  stack = Stack()

  q.enqueue(tree.root)

  while q:
    node = q.dequeue()
    stack.push(node.value)

    # make sure to enqueue right then left
    # for proper ordering of output

    if node.right:
      q.enqueue(node.right)

    if node.left:
      q.enqueue(node.left)

  # pop stack to reverse the values
  output = []
  while stack:
    output.append(stack.pop())

  return output


########################
# TESTS
########################

"""
              1
             / \
            /   \
           2     3
          / \   / \
         4   5 6   7
        /       \
       8         9
        \
         10
"""

# build test tree
tree = BinaryTree(values=[1,2,3,4,5,6,7,8])
tree.root.left.right.right = Node(9)
tree.root.left.left.left.right = Node(10)

actual = reverse_level_order(tree)
expected = [10, 8, 9, 4, 5, 6, 7, 2, 3, 1]

assert actual == expected, actual

print("TESTS PASSED")
