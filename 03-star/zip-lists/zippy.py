class LinkedList:
    def __init__(self, head=None):
        self.head = head
    def __str__(self):
        return "LinkedList: %s" % str(self.head)

class Node:
    def __init__(self, val=None, next=None):
        self.val = val
        self.next = next
    def __str__(self):
        return "%d -> %s" % (self.val, str(self.next))

def nodecombine(head1, head2):
    if not head1:
        return head2
    elif not head2:
        return head1
    else:
        return Node(head1.val, nodecombine(head2, head1.next))

def rec_combine(l1, l2):
    return LinkedList(nodecombine(l1.head, l2.head))

def iter_combine(l1, l2):
    output = LinkedList()
    curr1 = l1.head
    curr2 = l2.head
    currAnsNode = None
    while curr1 or curr2:
        if curr1:
            if not output.head:
                output.head = Node(curr1.val)
                currAnsNode = output.head
            else:
                currAnsNode.next = Node(curr1.val)
                currAnsNode = currAnsNode.next
            curr1 = curr1.next
        if curr2:
            if not output.head:
                output.head = Node(curr2.val)
                currAnsNode = output.head
            else:
                currAnsNode.next = Node(curr2.val)
                currAnsNode = currAnsNode.next
            curr2 = curr2.next
    return output

# set up and test
list1 = LinkedList(Node(1, Node(2, Node(3, Node(4)))))
list2 = LinkedList(Node(3, Node(2)))

print iter_combine(list1, list2)
print rec_combine(list1, list2)

print iter_combine(list2, list1)
print rec_combine(list2, list1)
