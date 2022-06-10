# Accept a list of integers representing heights of towers near a beach.
# The tower closest to the beach appears at the end of the array.
# Return a list of indexes of towers that can see the beach (towers that
# are taller than all other towers between themselves and the beach)
#          0  1  2  3  4  5  6  7
#  given: [3, 1, 5, 2, 1, 4, 1, 2]
# return: [      2        5     7]
def towers_with_views(towers):
    results = [len(towers) - 1]
    tallest = towers[-1]

    index = len(towers) - 2
    while index >= 0:
        height = towers[index]
        if height > tallest:
            tallest = height
            results.append(index)
        index -= 1
    return results

given = [3, 1, 5, 2, 1, 4, 1, 2]
expected = [7, 5, 2]
actual = towers_with_views(given)

print("Expected:", expected)
print("  Actual:", actual)
