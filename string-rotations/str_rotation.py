def rotation(s1, s2):
    """Check if string 2 is a rotation of string 1."""
    return False if len(s1) != len(s2) else s2 in s1 + s1
