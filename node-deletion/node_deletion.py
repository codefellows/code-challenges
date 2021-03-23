from .linked_list import LinkedList


def node_deletion(node) -> None:
    """Remove a node from within a linked list using only the node object"""
    if not node or not node.next:
        raise ValueError("Node input error")

    next = node
    node.val = next.val
    node.next = next.next
