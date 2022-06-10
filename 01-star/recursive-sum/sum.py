"""Add the numbers from 1 through N."""


def recursive_sum(n):
    """Recursively add the numbers from 1 up to N."""
    if n == 1:
        return 1
    return n + recursive_sum(n - 1)
