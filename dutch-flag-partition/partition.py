def partition(arr, idx):
    final = []
    left = []
    right = []
    for i in range(len(arr)):
        elif arr[i] == arr[idx]:
            final.append(arr[i])
        elif arr[i] < arr[idx]:
            left.append(arr[i])
        elif arr[i] > arr[idx]:
            right.append(arr[i])

    return left + final + right
