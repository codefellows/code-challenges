"""Base linked list class."""


class Node(object):
    """A node object."""

    def __init__(self, val, next=None):
        """The constructor."""
        self.val = val
        self.next = next


class LinkedList(object):
    """The linked list."""

    def __init__(self, iterable=None):
        """The linked list constructor."""
        self.head = None
        self.length = 0
        if iterable and isinstance(iterable, (list, tuple)):
            for item in iterable:
                self.push(item)

    def push(self, val):
        """Add a new value to the linked list."""
        self.head = Node(val, self.head)
        self.length += 1

    def pop(self):
        """Remove and return a value from the linked list."""
        if not self.head:
            raise IndexError

        output = self.head
        self.head = self.head.next
        self.length -= 1
        return output

    def display(self):
        """Display the linked list."""
        output = ""
        curr = self.head
        while curr:
            output += f"[{curr.val}] -> "
            curr = curr.next
        return output[:-4]

    def __len__(self):
        """Return the size of the list."""
        return self.length

    def __str__(self):
        """Return the string representation of the list."""
        return self.display()

    def __repr__(self):
        """Return the string representation of the list."""
        return self.display()
