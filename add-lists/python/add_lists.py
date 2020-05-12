from linked_list import LinkedList


def add_lists(*list_nums):
    """
    input: varying number of numbers where each number 
    is contained in a linked list
    output: sum of the numbers in linked list
    """

    sum = 0

    for num in list_nums:
        sum += list_to_num(num)

    return num_to_list(sum)


def list_to_num(lst):

    node = lst.head

    if not node:
        return 0

    num = 0

    pow = 0

    while node:

        num += node.val * 10 ** pow

        pow += 1

        node = node.next

    return num


def num_to_list(num):

    num_list = LinkedList()

    [num_list.push(int(ch)) for ch in str(num)]

    return num_list


# stretch
def multiply_lists(*nums):

    product = 1

    for num in nums:
        product *= list_to_num(num)

    return num_to_list(product)
