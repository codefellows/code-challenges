def get_kth_to_last1(ll, k):
    """Find the kth to last element."""
    length = 0
    curr = ll.head
    if not curr:
        return None
    while curr:
        length += 1
        curr = curr.next
    if k >= length:
        raise IndexError(f'k={k} exceeds size of input list')
    if k < 0:
        raise ValueError('Parameter k cannot be negative')
    curr = ll.head
    steps = length - k - 1
    for i in range(steps):
        curr = curr.next
    return curr.val