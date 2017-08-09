# -*- coding: utf-8 -*-
import sys


def all_parens(num):
    if num == 0:
        return []
    if num == 1:
        return ['()']
    else:
        sub_parens = all_parens(num - 1)
        return set(
            ['(' + parens + ')' for parens in sub_parens] +
            ['()' + parens for parens in sub_parens] +
            [parens + '()' for parens in sub_parens]
        )

if __name__ == '__main__':
    pairs = all_parens(int(sys.argv[1]))
    print '\n'.join(pairs)


def all_parens2(num):
    if num == 1:
        return ['()']
    else:
        sub_parens = all_parens2(num - 1)
        output = set()
        for parens in sub_parens:
            output.add(parens + '()')
            output.add('()' + parens)
            output.add('(' + parens + ')')
        return list(output)
