def partition(arr, idx):
    final = [arr[idx]]
    left = []
    right = []
    for i in range(len(arr)):
        if i == idx:
            continue
        elif arr[i] == arr[idx]:
            final.append(arr[i])
        elif arr[i] < arr[idx]:
            left.append(arr[i])
        elif arr[i] > arr[idx]:
            right.append(arr[i])

    return left + final + right
