def is_arithmetic(a, b, c):
    return (
        a + b == c or 
        a - b == c or
        a * b == c or
        (b and a / b == c)
    )