def rotate(img_arr: list) -> list:
    """Rotate a matrix by 90 degrees."""
    n = len(img_arr)
    rotated = []
    for i in range(n):
        new_row = []
        for j in range(n):
            new_row.append(img_arr[j][n - i - 1])
        rotated.append(new_row)
    return rotated