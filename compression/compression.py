def str_compress(in_str: str) -> str:
    """Compress a given string based on counts of repeated characters."""
    out_str = ""
    counter = 1
    prev = ""
    for item in in_str:
        if prev:
            if item == prev:
                counter += 1
            else:
                out_str += "{}{}".format(prev, counter)
                counter = 1
        prev = item
    out_str += "{}{}".format(prev, counter)
    return out_str if len(out_str) < len(in_str) else in_str
