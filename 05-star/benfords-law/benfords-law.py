def benford(nums):

    counts = [0] * 10

    for num in nums:
        leading_digit = get_leading_digit(num)
        counts[leading_digit] += 1

    ones_count = counts[1]

    for i, count in enumerate(counts):
        if i == 1: continue
        if count >= ones_count:
            return False

    return True


def get_leading_digit(num):
    while num >= 10:
        num = num // 10
    return num

    
###############################
# TESTS
###############################

assert benford([15,25,15,25,15]) is True
assert benford([15,15,15,25,25]) is True
assert benford([15,25,15,25]) is False
assert benford([25,15,25,15]) is False

print("******** TESTS PASSED ********")
