def convergence(list_a, list_b):
    all_nodes = set()
    curr = list_a
    while curr:
        all_nodes.add(curr)
        curr = curr.next

    curr = list_b
    while curr:
        if curr in all_nodes:
            break
        else:
            curr = curr.next

    return curr if curr else None


def convergence2(list_a, list_b):
    """Same result as above, but no second data structure."""
    length1 = length2 = 0
    cur1 = list_a.head
    cur2 = list_b.head
    while True:
        if cur1 and cur2:
            cur1 = cur1.next
            length1 += 1
            cur2 = cur2.next
            length2 += 1
        elif cur1 and not cur2:
            cur1 = cur1.next
            length1 += 1
        elif cur2 and not cur1:
            cur2 = cur2.next
            length2 += 1
        else:
            break

    cur1 = list_a.head
    cur2 = list_b.head
    if length1 > length2:
        for i in range(length1 - length2):
            cur1 = cur1.next
    elif length2 > length1:
        for i in range(length1 - length2):
            cur2 = cur2.next

    while cur1 and cur2:
        if cur1 == cur2:
            return cur1
        cur1 = cur1.next
        cur2 = cur2.next
