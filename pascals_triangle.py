# -*- coding: utf-8 -*-


def generate(num_rows):
    """generate a list of num_rows lists in the form of pascal's triangle:


    n = 1 ->     [1]
    n = 2 ->    [1,1]
    n = 3 ->   [1,2,1]
    n = 4 ->  [1,3,3,1]
    n = 5 -> [1,4,6,4,1]
    """
    final = []
    prev = []
    for i in xrange(num_rows):
        current = [1]
        for j in xrange(len(prev)):
            current.append(sum(prev[j:j+2]))
        final.append(current)
        prev = current
    return final


if __name__ == '__main__':
    for n in xrange(11):
        for l in generate(n):
            print l
        print "----"
