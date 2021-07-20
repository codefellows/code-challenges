# Reconstruct a Flight Path

> Source: given as an interview question for interns at Google circa 2012

You are given an array of `PlaneTicket` instances; each ticket has an `Origin` and a `Destination`. These tickets represents a single multi-city itinerary flown by a single person. Reconstruct the person's flight path to return the cities visited in the order they were flown to.

## Example input/output (do not give unless explicitly asked)

Input: [
  PlaneTicket(origin="JFK",destination="IAD"),
  PlaneTicket(origin="SFO",destination="JFK"),
  PlaneTicket(origin="SEA",destination="SFO"),
  PlaneTicket(origin="IAD",destination="ORD"),
]
Output: [ "SEA", "SFO", "JFK", "IAD", "ORD" ]

## Notes

Each city appears at most twice in the list of tickets: once as a destination, and once as an origin.

Every ticket will be used exactly once in creating the correct itinerary.

You can assume that the origin and destination are airport codes, or cities, or whatever... but you're guaranteed that they'll be unique.

Output type should be an array of strings.

Depending on language, the `PlaneTicket` instance could be be a simple Dictionary/Object, but should have have origin & destination as keys/properties.

### Secrets for the Interviewer

There are multiple ways to approach this problem. But they usually revolve around solving 2 sub-problems.

### Find Starting Ticket

The first task is to determine which ticket represents the start of the trip.

An efficient way to do this is to make a set of destiations then iterate through the tickets looking for the ticket with an origin that is NOT also a destination.

This can also be accomplished by finding the difference of the origin set and destination set, if language supports set operations.

Could also be done with nested iteration, though it is less efficient.

This question is actually about reconstructing a LinkedList given only the edges.

### Generate Array of Airport Codes

Once starting ticket has been identified then the task is to gather list of Airport codes in proper order. This can be efficiently handled by converting array of `PlaneTicket` instances to a HashTable where key is `origin` and `value` is destination.

Less efficiently it's possible to find the corresponding plane ticket each time through the loop.
