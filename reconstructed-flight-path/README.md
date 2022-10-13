# Reconstruct a Flight Path

> Source: given as an interview question for interns at Google circa 2012

You are given an array of `PlaneTicket` instances; each ticket has an `Origin` and a `Destination`. These tickets represents a single multi-city itinerary flown by a single person. Reconstruct the person's flight path to return the cities visited in the order they were flown to.

## Example input/output (do not give unless explicitly asked)

**Inputs**

* A PlaneTicket with origin "New York City" and destination "Washington, DC"
* A PlaneTicket with origin "San Francisco" and destination "New York City"
* A PlaneTicket with origin "Seattle" and destination "San Francisco"
* A PlaneTicket with origin "Washington, DC" and destination "Chicago"

**Outputs**

* [ "Seattle", "San Francisco", "New York City", "Washington, DC", "Chicago" ]

## Notes

Each city appears at most twice in the list of tickets: once as a destination, and once as an origin.

Every ticket will be used exactly once in creating the correct itinerary.

You can assume that the origin and destination are airport codes, or cities, or whatever... but you're guaranteed that they'll be unique.

Output type should be an array of strings.

Depending on language, the `PlaneTicket` instance could be be a simple Dictionary/Object, but should have have origin & destination as keys/properties.

### Secrets for the Interviewer

There are multiple ways to approach this problem. But they usually revolve around solving 2 sub-problems.

#### Find Starting Ticket

The first task is to determine which ticket represents the start of the trip.

An efficient way to do this is to make a set of destiations then iterate through the tickets looking for the ticket with an origin that is NOT also a destination existing in the set.

This can also be accomplished by finding the difference of an origin set and a destination set, if the candidate's language supports set operations.

Could also be done with nested iteration, though it is less efficient.

This question is actually about reconstructing a LinkedList given only the edges.

#### Generate Array of Airport Codes

Once starting ticket has been identified then the task is to gather list of Airport codes in proper order. This can be efficiently handled by converting array of `PlaneTicket` instances to a HashTable where key is `origin` and `value` is destination.

Less efficiently it's possible to find the corresponding plane ticket each time through the loop.

### Sorting

The question can be solved directly and expressively using each language's built in Comparator sorting mechanism. This requires a compare function that returns less than 0 for a.origin == b.destination, greater than 0 for a.destination === b.origin, or 0 otherwise. (Idiomatically, that's -1, 1, and 0). Note that a second pass will be required to pull the first origin and then all destinations. The analysis should be "Whatever the runtime provides" which is perfectly acceptable! But they should recognize that for most languages, that is probably O(N log N) for runtime and either O(1) or O(n) for space, depending on whether the runtime does it in-place or with a new array.

## Language Gimmies

If the student wants to write a data class, provide these (depending on language). If they want to use a tuple or dict, that's fine too.

### Python

```python 
class PlaneTicket:
  def __init__(self, origin, destination):
    self.origin = origin
    self.destination = destination
```

### Java

```java
public class PlaneTicket {
  String origin;
  String destination;
  
  // constructor, accessors
}
```

### JavaScript

```javascript
{origin: "", destination: ""}
```

### TypeScript

```typescript
class PlaneTicket {
  constructor(readonly origin: string, readonly destination: string) {}
}
```
