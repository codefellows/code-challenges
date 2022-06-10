#-*- coding: utf-8 -*-
#/usr/bin/env python


def serialize(query):
    """Serialize a query string into a dictionary."""
    parameters = query.split('&')
    output = {}
    for param in parameters:
        key, val = param.split('=')
        try:
            output[key].append(val) if isinstance(output[key], list) else output[key] = [output[key], val]
        except KeyError:
            output[key] = val
    return output


if __name__ == "__main__":
    query = "username=codefellows&password=flergtheblerg&age=4&open=true&courses=javascript&courses=python&courses=dotnet&courses=java"
    assert serialize(query) == {
        'username': 'codefellows',
        'password': 'flergtheblerg',
        'age': '4',
        'open': 'true',
        'courses': ['javascript', 'python', 'dotnet', 'java']
    }
