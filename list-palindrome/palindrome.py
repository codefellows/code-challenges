def palindrome(ll) -> bool:
    """Return whether or not a linked list is a palindrome."""
    backward = LinkedList()
    curr = ll.head
    while curr:
        backward.push(curr.val)
        curr = curr.next

    one = backward.head
    two = ll.head
    while one:
        if one.val != two.val:
            return False
        one = one.next
        two = two.next

    return True
