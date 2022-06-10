# Serialize a URL Query String as an Object

Consider a URL query string of a format like this:

```javascript
username=codefellows&password=flergtheblerg&age=4&open=true&courses=javascript&courses=python&courses=dotnet&courses=java
```

Write a function `serialize()` that will take in that query string as an argument and return an object built from that query string, like so

```javascript
let query = "username=codefellows&password=flergtheblerg&age=4&open=true&courses=javascript&courses=python&courses=dotnet&courses=java"
serialize(query) -> {
    username: 'codefellows',
    password: 'flergtheblerg',
    age: 4,
    open: true,
    courses: ['javascript', 'python', 'dotnet', 'java']
}
```

Pay attention to edge cases!
