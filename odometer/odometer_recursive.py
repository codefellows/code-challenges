from codefellows.dsa.linked_list import LinkedList

def increment(list_):

  def traverse(node):

    if not node:
      return 1

    carry = traverse(node.next)

    node.value += carry

    carry = 0

    if node.value > 9:
      node.value = 0
      carry = 1
        
    return carry

  carry = traverse(list_.head)

  if carry:
    list_.insert(carry)

  return list_

######################
## TESTS
######################

actual = increment(LinkedList(values=[4,3,5,5]))
expected = LinkedList(values=[4,3,5,6])
assert str(actual) == str(expected)

actual = increment(LinkedList(values=[4,3,5,9]))
expected = LinkedList(values=[4,3,6,0])
assert str(actual) == str(expected)

actual = increment(LinkedList(values=[9,9,9,9]))
expected = LinkedList(values=[1,0,0,0,0])
assert str(actual) == str(expected)

print("TESTS PASS")
