# Create a Command Line Database

Inspired By: Reading [Designing Data-Intensive Applications](https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable-ebook/dp/B06XPJML5D/ref=sr_1_1?s=digital-text&ie=UTF8&qid=1510170181&sr=1-1&keywords=designing+data+intensive+applications)

Databases are great and we take them for granted all the time.
Let's fix that by making our own.

Design and implement your own database system!
It's a simple system that allows for creating tables, inserting values into tables, and retrieving values from tables.

The commands that should be supported are as follows:

| Command | Operation |
| --- | --- |
| CREATE <tablename> | Creates a table in your database |
| ADD TO <tablename> col1=val1, col2=val2, col3=val3 | Adds new data to your database; any column not filled in gets the language-specific NULL value by default |
| GET FROM <tablename> col1, col2, col3 | Retrieves data from the specified columns of the specified table |
| GET FROM <tablename> * | Retrieves all the data from the specified table |
| QUIT | Closes the database |

The data that it takes in doesn't need to be permanently persisted in any way.
It's only persisted in the objects you build.

Your program should be able to be run from the command line in the language of your choice like so:

**If Python**
```
$ python database.py
```

**If JavaScript**
```
$ node database.js
```

**If C#**
```
C:\> csc Database.cs
C:\> Database
```

**If Java**
```
C:\> javac database.java
C:\> java database
```

When run, the user sees a prompt like so:

```
Welcome to the Code Fellows Database Management System!
Input your command below...

</> 
```

With `</>` being the indicator of the command prompt.