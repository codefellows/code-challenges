def reverse1(in_str: str) -> str:
    """Reverse an input string."""
    out_str = []
    for i in range(len(in_str)):
        out_str.append(in_str[len(in_str) - i - 1])
    return "".join(out_str)


def reverse2(in_str: str) -> str:
    """Reverse an input string."""
    return in_str[::-1]
