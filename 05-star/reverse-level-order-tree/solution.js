// Node Class of tree
function reverseLevelOrderTraversal (tree) {
  // Catch a null tree
  if (!tree || !tree.root) return ''

  // Initialize our data structures
  const queue = []
  const stack = []

  // Start the traversal at the root
  let current = tree.root
  queue.unshift(current)

  while (queue.length > 0) {
    // Dequeue current node and push it onto the output stack
    current = queue.pop()
    stack.unshift(current.value)
    if (current.right) queue.unshift(current.right)
    if (current.left) queue.unshift(current.left)
  }

  // Produce the output string
  const output = stack.reduce((out, curr) => `${out}, ${curr}`)
  return output
}
