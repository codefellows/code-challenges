# -*- coding: utf-8 -*-
"""
Question:

    You are working on a team producing estimates of population for some
    creature, given a complex set of inputs. Your team keeps records of the
    simulation runs you've done and their results.

    For each new simulation, you are asked to find the previous run with a
    value nearest to the current result so that you can compare the inputs
    used.

    Write an algorithm that will return this data as quickly as possible.


Students may assume a binary search tree, and even one that self-balances (to
minimize the amortized cost of searching an unbalanced tree)  I provide a
sketch of a BST here to allow the demo tests to run and to give you an idea of
what a BST implementation might look like in Python.

Students MAY NOT assume that a given set of inputs to the simulation will
always produce the same result, so more than one set of inputs may be
associated with a given result value.

Students should come up with some way of associating a set of inputs with the
result (my solution below creates a set of inputs carried with each tree node
where the value of the node is the result (so comparison will work)). They
should, therefore, be asked to design the "node" to be stored in their binary
search tree.

    possible design considerations for this:

        * should all input sets be stored regardless of whether they are
          unique? If yes, then a list of lists is fine, if no, then a Python
          set or dictionary is the appropriate data structure for input sets.
          If they go this route, they should be able to detect that a simple
          Python LIST will not be able to be inserted into a set or dictionary,
          and they should use a TUPLE instead (as shown in my simple example)

In case of a new value that exactly splits the difference between two previous
results, it is acceptable to return only the first one found.

Run time for the algorithm they create should be O(log n)

This problem is adapted from:

http://codercareer.blogspot.com/2013/03/no-45-closest-node-in-binary-search-tree_2.html

"""


def closest_node(tree, val):
    """this is the meat of the solution"""
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
