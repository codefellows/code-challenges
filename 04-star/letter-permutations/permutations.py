#!usr/bin/env python

def permutations(n):
    """Return all n! permutations of n letters, starting at a."""
    letters = list('abcdefghijklmnopqrstuvwxyz')
    if n < 1 or n > 26:
        raise ValueError('You need to use a value between 1 and 26')
    if n == 1:
        return ["a"]
    results = []
    for perm in permutations(n - 1):
        for i in range(len(perm) + 1):
            results.append(perm[:i] + letters[n - 1] + perm[i:])
    return results


if __name__ == '__main__':
    assert permutations(1) == ['a']
    assert permutations(2) == ['ba', 'ab']
    assert permutations(3) == ['cba', 'bca', 'bac', 'cab', 'acb', 'abc']
