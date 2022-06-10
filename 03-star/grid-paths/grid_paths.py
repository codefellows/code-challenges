def grid_paths(m, n):
    if m == 1 or n == 1:
        return 1
    return grid_paths(m - 1, n) + grid_paths(m, n - 1)
