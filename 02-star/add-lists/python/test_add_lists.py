from add_lists import add_lists, multiply_lists
from linked_list import LinkedList


def test_1_plus_2():
    actual = add_lists(LinkedList([1]), LinkedList([2]))
    expected = "[3]"
    assert str(actual) == expected


def test_12_plus_34():
    actual = add_lists(LinkedList([1, 2]), LinkedList([3, 4]))
    expected = "[6] -> [4]"
    assert str(actual) == expected


def test_6_plus_7():
    actual = add_lists(LinkedList([6]), LinkedList([7]))
    expected = "[3] -> [1]"
    assert str(actual) == expected


def test_leet_code():
    actual = add_lists(LinkedList([3, 4, 2]), LinkedList([4, 6, 5]))
    expected = "[7] -> [0] -> [8]"
    assert str(actual) == str(expected)


def test_jagged():
    actual = add_lists(LinkedList([1, 2]), LinkedList([1, 1, 2]))
    expected = "[4] -> [2] -> [1]"
    assert str(actual) == str(expected)


# Bonus


def test_3_numbers():
    actual = add_lists(LinkedList([1, 2]), LinkedList([3, 4]), LinkedList([5, 6]))
    expected = "[2] -> [0] -> [1]"
    assert str(actual) == str(expected)


def test_multiply():
    actual = multiply_lists(LinkedList([1, 0]), LinkedList([2, 5]))
    expected = "[0] -> [5] -> [2]"
    assert str(actual) == str(expected)
