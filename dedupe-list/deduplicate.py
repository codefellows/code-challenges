def dedupe1(ll):
    """Deduplicate a linked list using a set."""
    if len(ll) < 2:
        return ll

    visited = set()
    curr = ll.head
    prev = None
    while curr:
        if curr.val in visited:
            prev.next = curr.next

        else:
            visited.add(curr.val)
            prev = curr

        curr = curr.next


def dedupe2(ll):
    """Deduplicate a linked list without external structures."""
    if len(ll) < 2:
        return

    curr = ll.head
    while curr:
        prev = curr
        seek = curr.next
        while seek:
            if seek.val == curr.val:
                prev.next = seek.next

            else:
                prev = seek

            seek = seek.next

        curr = curr.next
