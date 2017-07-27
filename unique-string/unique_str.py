def unique(in_str: str) -> bool:
    """Check a string to see if it has all unique characters."""
    str_sort = sorted(in_str)
    for idx, item in enumerate(str_sort):
        try:
            if item == str_sort[idx + 1]:
                return False
        except IndexError:
            pass
    return True

def unique2(in_str: str) -> bool:
    return len(in_str) == len(set(in_str))
