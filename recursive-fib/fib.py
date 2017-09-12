"""The recursive fibonacci sequence."""


def fib(n):
    """Calculate the Nth number of the fibonacci sequence."""
    if n < 1 or not isinstance(n, int):
        return None
    if n == 1:
        return 0
    if n == 2:
        return 1
    return fib(n - 1) + fib(n - 2)
