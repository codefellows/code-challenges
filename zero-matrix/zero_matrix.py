def zero_out(matrix):
    """Given a matrix, will find which columns have zeros and lines zero."""
    out_matrix = []
    bad_cols = []
    for i in range(len(matrix)):
        try:
            bad_cols.append(matrix[i].index(0))
            out_matrix.append(list(map(lambda x: 0, matrix[i])))
        except ValueError:
            out_matrix.append(matrix[i])

    if bad_cols:
        for i in range(len(out_matrix)):
            for j in bad_cols:
                out_matrix[i][j] = 0

    return out_matrix
