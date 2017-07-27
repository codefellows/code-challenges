from .linked_list import LinkedList


def add_lists(ll1: LinkedList, ll2: LinkedList) -> LinkedList:
    """Take two numbers represented as linked lists and add them."""
    tot1 = get_num(ll1)
    tot2 = get_num(ll2)
    out_ll = LinkedList()
    [out_ll.push(int(val)) for val in str(tot1 + tot2)]
    return out_ll


def get_num(ll):
    """Turn a list number into a real number."""
    curr = ll.head
    tot = 0
    if not curr:
        return 0
    count = 0
    while curr:
        tot += curr.val * 10**count
        curr = curr.next
        count += 1
    return tot
