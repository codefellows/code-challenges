import pytest
from nearest_neighbor import BinarySearchTree, find_nearest_neighbor

def test_bst():
    tree = BinarySearchTree()
    tree.insert('apples')
    tree.insert('bananas')
    assert tree.root.value == 'apples'
    assert tree.root.right.value == 'bananas'
    assert tree.root.left == None
    

def test_nearest_value():
    tree = BinarySearchTree()
    tree.insert(10)
    tree.insert(15)
    tree.insert(5)

    result = find_nearest_neighbor(tree, 11)

    assert result == 10

def test_nearest_value_left():
    tree = BinarySearchTree()
    tree.insert(10)
    tree.insert(15)
    tree.insert(5)

    result = find_nearest_neighbor(tree, 4)

    assert result == 5

def test_empty_tree():
    tree = BinarySearchTree()
    with pytest.raises(ValueError):
        assert find_nearest_neighbor(tree, 0)




