function gridPaths(m, n) {
    if (m == 1 || n == 1) {
        return 1;
    }
    return gridPaths(m - 1, n) + gridPaths(m, n - 1);
}