from .linked_list import LinkedList


def is_circular1(ll):
    """Given a linked list, determine whether or not it's cyclical"""
    uniques = set()
    curr = ll.head
    while curr:
        if curr in uniques:
            return True
        uniques.add(curr)
        curr = curr.next
    return False


def is_circular2(ll):
    p1 = ll.head
    p2 = ll.head.next
    while p1 and p2:
        if p1 == p2:
            return True
        try:
            p1 = p1.next
            p2 = p2.next.next
        except AttributeError:
            return False
    return False
