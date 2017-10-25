def combine(l1, l2):
    tmp = LinkedList()
    curr1 = l1.head
    curr2 = l2.head
    while curr1 or curr2:
        if curr1:
            tmp.push(curr1.val)
        if curr2:
            tmp.push(curr2.val)
    output = LinkedList()
    while tmp.head:
        output.push(tmp.pop())
    return output