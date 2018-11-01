# Reconstruct a Flight Path

_Source: given as an interview question for interns at Google circa 2012_

You are given a stack that contains `PlaneTicket` instances; each ticket has an `Origin` and a `Destination`. This stack represents a single multi-city itinerary flown by a single person. Reconstruct that person's flight path, and return to me the cities they visited, in the order they visited them.

## Example input/output (do not give unless explicitly asked)

Input: [ JFK->IAD, SFO->JFK, IAD->ORD, SEA->SFO ]
Output: [ SEA, SFO, JFK, IAD, ORD ]

## Notes

This question uses a "stack" of plane tickets only for fun; the stack has no inherent meaning.

Each city appears at most twice in the stack of tickets: once as a destination, and once as an origin.

Every ticket will be used exactly once in creating the correct itinerary.

You can assume that the origin and destination are airport codes, or cities, or whatever... but you're guaranteed that they'll be unique.

Output type should be a List, but could be an array if they're struggling with a List.

### Secrets for the Interviewer

This question is actually about reconstructing a LinkedList given only the edges.

A few different solutions that work:

- Take the first ticket from the stack; make that the current ticket. Then, repeatedly traverse the stack to look for the ticket that has the origin matching the current ticket's destination, remove from the stack, and make it the current ticket; also do the same backwards, once you've reached the end of the itinerary. Runtime O(n^2).

- Make a map from the city names to the count of number of times they appear in the tickets (O(n)), so you can find the start and end (which are the cities with a count of 1). Traverse the stack to find one of those tickets, and then go either forwards or backwards through all of the tickets. Still O(n^2), but often makes more sense to people.

- Traverse the stack once and create a map from the city names to the ticket with an origin of that city (O(n)), and then use that map instead of traversing the stack repeatedly, to make it a O(n) solution.

- Traverse the stack once and create a map from city names to BOTH tickets that reference that city (using a Pair or similar).
