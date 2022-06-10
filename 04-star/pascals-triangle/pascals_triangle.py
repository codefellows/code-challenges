# -*- coding: utf-8 -*-


def pascal(n):
    """Generates the first N rows of Pascal's triangle."""
    final = []
    prev = []
    for i in range(n):
        current = [1]
        for j in range(len(prev)):
            current.append(sum(prev[j:j + 2]))
        final.append(current)
        prev = current
    return final


def pascal2(n):
    """Generates the first N rows of Pascal's triangle recursively."""
    if n < 1:
        raise ValueError('n must be at least 1')
    final = []
    for i in range(1, n + 1):
        final.append(_pascal_recursive(i))
    return final


def _pascal_recursive(n):
    """Generates the Nth row of Pascal's triangle."""
    output = [1]
    if n > 1:
        prev = _pascal_recursive(n - 1)
        for i in range(len(prev)):
            output.append(sum(prev[i:i + 2]))
    return output


if __name__ == '__main__':
    for n in range(11):
        for l in pascal(n):
            print(l)
        print("----")
