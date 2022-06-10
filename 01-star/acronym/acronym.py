def acronym(in_string):
    """Return the acronym of the input string."""
    if not in_string:
        return
    forbidden = ['a', 'for', 'an', 'and', 'of', 'or', 'the', 'to', 'with']
    output = ''
    for word in in_string.split(' '):
        if word.lower() not in forbidden:
            output += word[0].upper()
    return output


def acronym2(in_string):
    forbidden = ['a', 'for', 'an', 'and', 'of', 'or', 'the', 'to', 'with']
    return ''.join(map(lambda x: x[0].upper() if x.lower() not in forbidden else '', in_string.split(' ')))
