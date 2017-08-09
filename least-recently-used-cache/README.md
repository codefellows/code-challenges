# Least Recently Used Cache

Design and implement an LRU (Least Recently Used) cache.
This is a cache with fixed size in terms of the number of items it holds (supplied at instantiation).
Your program can treat the keys and values as strings.
You don’t need to support keys or values that contain spaces.
The cache must allow client code to get items from the cache and set items to the cache.
Once the cache is full, when the client wants to store a new item in the cache, an old item must be overwritten or
removed to make room.
The item we will remove is the Least Recently Used (LRU) item.
Note that your cache does not need persistence across sessions.

Please read input from stdin and print output to stdout and support the following format (please DO NOT print any kind of a prompt or extra line breaks).
All inputs and outputs exist on their own line:

The first input line should set the max number of items for the cache using the keyword SIZE.  The program should respond with ‘SIZE OK’. This must only occur as the first operation.

Set items with a line giving the key and value, separated by a space, 
your program should respond with 'SET OK'.

Get items with a line giving the key requested, your program should respond with the previously stored value, for example “GOT foo”. If the the key is not in the cache, it should reply with “NOTFOUND”.

‘EXIT’ should cause your program to exit.

If the input is invalid, your program should respond with ‘ERROR’

Sample Input
SIZE 3
GET foo
SET foo 1
GET foo
SET foo 1.1
GET foo
SET spam 2
GET spam
SET ham third
SET parrot four
GET foo
GET spam
GET ham
GET ham parrot
GET parrot
EXIT

Expected Output
SIZE OK
NOTFOUND
SET OK
GOT 1
SET OK
GOT 1.1
SET OK
GOT 2
SET OK
SET OK
NOTFOUND
GOT 2
GOT third
ERROR
GOT four