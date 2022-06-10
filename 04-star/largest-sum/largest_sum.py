def subarray_greatest_sum(numbers):
    if len(numbers) < 2:
        return numbers

    max_sum = numbers[0]
    max_i = 0
    max_j = 0

    for idx, item in enumerate(numbers):
        current_sum = 0
        for j in range(idx, len(numbers)):
            current_sum = sum(numbers[idx: j])
            if current_sum > max_sum:
                max_sum = current_sum
                max_i = idx
                max_j = j

    return numbers[max_i:max_j]


def kadanes_algorithm(numbers):
    """Solution in O(N) time."""
    max_here = max_so_far = numbers[0]
    start = end = 0
    for i in range(1, len(numbers)):
        if numbers[i] > max_here + numbers[i]:
            max_here = numbers[i]
            start = end = i
        else:
            max_here += numbers[i]
            if max_here > max_so_far:
                end = i + 1

        if max_here > max_so_far:
            max_so_far = max_here

    return numbers[start: end]
