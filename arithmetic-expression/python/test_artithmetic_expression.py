from .arithmetic_expression import is_arithmetic


def test_plus():
    assert is_arithmetic(2, 3, 5)


def test_minus():
    assert is_arithmetic(5, 4, 1)


def test_multiplication():
    assert is_arithmetic(3, 5, 15)


def test_division():
    assert is_arithmetic(10, 2, 5)


def test_invalid():
    assert not is_arithmetic(3, 3, 8)


def test_with_negatives():
    assert is_arithmetic(10, -2, 8)


def test_divide_by_zero():
    assert not is_arithmetic(2, 0, 100)


def test_argument_order_matters():
    assert is_arithmetic(10, 2, 8)
    assert not is_arithmetic(2, 10, 8)
