You work for a company whose job it is to send messages in the form of letters cut out of magazines.
They need you to write a function that will be able to indicate whether or not a message can be sent given the letters available.

You are given two strings, both case-insensitive:
    - a message to be sent
    - all of the letters available, unsorted

Write a function that takes both of those strings as arguments and returns a boolean value indicating whether or not the message to be sent can actually be sent. Ignore punctuation and capitalization.

Any solution written should have no greater time complexity than O(N), where "N" is the number of available letters.

Ex:

```
can_send("You're the best!", "nxaikthaqcrpoeq") -> False
can_send("You're the best!", "eeursoytethb") -> True
```