def replace_spaces(in_str: str) -> str:
    """Replace all spaces with "20%"."""
    return "".join(list(map(lambda x: "%20" if x == " " else x, in_str)))
