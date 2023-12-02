def numeralToInteger(numeral: str) -> int:
    _values = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000
    }

    result = 0

    for i in range(0, len(numeral)):
      
        first = _values[numeral[i]]
        # Is there a roman numeral at i + 1, what is it?
        if(i + 1 < len(numeral)):
          
            second = _values[numeral[i + 1]]
            # // if the first numeral char value is greater the the preceding, just add it to the result
            if(first >= second):
                result = result + first
            else:
                # // if preceding numeral is larger, than add the difference between the first and second, skip the next number in our loop by incrementing by 1 here.
                result = result + second - first
                i += 1
        else:
            result = result + first

    return result


tests = [
    {
        "case": "MMII",
        "expected": 2002
    },
    {
        "case": "XVII",
        "expected": 17
    },
    {
        "case": "IX",
        "expected": 9
    },
    {
        "case": "XXXIV",
        "expected": 34
    }
]

for test in tests:
    actual = numeralToInteger(test["case"])
    print(f'{test["case"]} should equal {test["expected"]}, value is {actual}')
