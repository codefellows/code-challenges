def abbreviate(word):
    if len(word) <= 2:
        return word
    return '{}{}{}'.format(word[0], len(word[1:-1]), word[-1])
