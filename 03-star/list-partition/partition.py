def partition(ll, val: int):
    """Partitions a linked list on 'x'."""
    lower_list = LinkedList()
    upper_list = LinkedList()
    curr = ll.head
    while curr:
        if curr.val < val:
            lower_list.push(curr.val)

        else:
            upper_list.push(curr.val)
        curr = curr.next

    ll_tail = lower_list.head
    if not ll_tail:
        return upper_list
    while ll_tail.next:
        ll_tail = ll_tail.next
    ll_tail.next = upper_list.head
    return lower_list
