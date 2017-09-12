# JS Only - Serialize a Form to an Object

Consider the following HTML form:

```html
<form id="the-form">
  <label>Username: </label><input type="text" name="username" value="codefellows" /><br />
  <label>Password: </label><input type="password" name="password" value="flergtheblerg" /><br />
  <input type="submit" value="Log In" />
</form>
```

jQuery allows you to select the form and serialize its data as either a string

```javascript
$('#the-form').serialize() -> "username=codefellows&password=flergtheblerg"
```

or an array of objects

```javascript
$('#the-form').serializeArray() -> [{username: 'codefellows'}, {password: 'flergtheblerg'}]
```

But you can't get the data back as a JavaScript object! Write a function that takes a jQuery-selected form and returns its data as an object. Don't forget fields that have multiple values!
