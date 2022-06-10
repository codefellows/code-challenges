# -*- coding: utf-8 -*-


def closest_node(tree, val):
    """The meat of the solution."""
    min_distance = float('inf')
    # min_distance = None
    closest = None
    node = tree
    # while loop so that we search the entire depth of the tree.
    while node is not None:
        new_distance = abs(node.value - val)
        # if min_distance is not None:
        #    min_distance = new_distance
        if new_distance < min_distance:
            # be sure to track not only the smallest distance, but the node
            # that produced it.
            min_distance = new_distance
            closest = node
        if new_distance == 0:
            # if we find the exact value, we need search no further, so break
            break
        if node.value > val:
            # search the left subtree if the current value is greater than the
            # one we seek.
            node = node.left
        elif node.value < val:
            # search the right subtree if the current value is less than the
            # one we seek.
            node = node.right
    return closest


class BSTNode(object):
    value = None
    left = None
    right = None

    def __init__(self, value, inputs):
        """input sets are stored in a set as tuples

        a list of lists is also acceptable (see design notes above)
        watch out for class attributes that are mutable (dict, set, list)
        and for default arguments that are mutable (dict, set, list)
        """
        self.value = value
        self.input_sets = set([tuple(inputs)])

    def insert(self, value, inputs):
        """tree methods if written should account for adding new input sets
        """
        if value == self.value:
            self.input_sets.add([tuple(inputs)])
            return
        if value < self.value:
            if self.left is not None:
                self.left.insert(value, inputs)
            else:
                self.left = BSTNode(value, inputs)
        if value > self.value:
            if self.right is not None:
                self.right.insert(value, inputs)
            else:
                self.right = BSTNode(value, inputs)

    @classmethod
    def from_values(cls, *data):
        root = cls(*data[0])
        for datum in data[1:]:
            root.insert(*datum)
        return root


if __name__ == '__main__':
    """This is demonstration code for the above.  It proves that the
    closest_node function works as advertised and ensures that the input sets
    are accounted for.
    """
    vals = [
        (32, []),
        (24, []),
        (41, []),
        (21, []),
        (28, []),
        (36, []),
        (47, []),
        (14, []),
        (25, []),
        (31, []),
        (39, []),
    ]
    tree = BSTNode.from_values(*vals)
    for actual, expected in [(29, 28), (34, 32), (26, 25)]:
        record = closest_node(tree, actual)
        assert record.value == expected
        print record.input_sets
