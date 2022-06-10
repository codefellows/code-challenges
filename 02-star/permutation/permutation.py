def is_perm(str1: str, str2: str) -> bool:
    """Check if str1 and str2 are permutations of each other."""
    return sorted(str1) == sorted(str2)
