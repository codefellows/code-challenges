from .linked_list import LinkedList


def node_deletion(ll, val: int) -> None:
    """Remove a node from within a linked list."""
    if not ll.head:
        raise ValueError("List is empty.")

    curr = ll.head
    prev = None
    while curr:
        if curr.val == val and curr == ll.head:
            ll.head = curr.next
            break
        elif curr.val == val:
            prev.next = curr.next
            break
        prev = curr
        curr = curr.next
