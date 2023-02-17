# Reconstruct a Flight Path

> I'm a business traveller with several legs on my trip. Each leg has a plane ticket with the origin and destination for the flight. At security, I dropped all my tickets! Now they're in a jumbled mess! Please write a function that takes these tickets, and tells me the list of cities that I will visit, in order.


## Example input/output

If the candidate hasn't asked for these by about the 5 minute mark, politely ask whether they would like a specific example.

**Inputs**

* A PlaneTicket with origin "New York City" and destination "Washington, DC"
* A PlaneTicket with origin "San Francisco" and destination "New York City"
* A PlaneTicket with origin "Seattle" and destination "San Francisco"
* A PlaneTicket with origin "Washington, DC" and destination "Chicago"

**Outputs**

* [ "Seattle", "San Francisco", "New York City", "Washington, DC", "Chicago" ]

## FAQs

> Will there be any loops?

Each city appears at most twice in the list of tickets: once as a destination, and once as an origin.

> Are there any extra tickets?

Every ticket will be used exactly once in creating the correct itinerary.

> Does every origin and destination line up?

You can assume that the origin and destination are airport codes, or cities, or whatever... but you're guaranteed that they'll be unique.

> Do I return the tickets in order?

Output type should be an array of strings.

> How should I represent this?

Depending on language, the `PlaneTicket` instance could be be a simple Dictionary/Object, but should have have origin & destination as keys/properties. It might be more natural to represent tham as a class, [see below](#Language Gimmies)

### Iterative + Map Solution

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

#### Pseudocode

```
function Ticket Sorter
has argument List of Tickets
create Ticket Map from List, where each Ticket is an Entry with Key Origin and value Destination
starting city is the city in Ticket Map Keys that is not in Ticket Map Value
  (that is, Set Ticket Map Keys - Set Ticket Map Values)
initialize Return Array with starting city
set Current City to Ticket Map's value at key Starting City
while Current City is not null
  push Current City into Return Array
  set Curent City to Ticket Map's value at key Current City
```

### Sorting

The question can be solved directly and expressively using each language's built in Comparator sorting mechanism. This requires a compare function that returns less than 0 for a.origin == b.destination, greater than 0 for a.destination === b.origin, or 0 otherwise. (Idiomatically, that's -1, 1, and 0). Note that a second pass will be required to pull the first origin and then all destinations. The analysis should be "Whatever the runtime provides" which is perfectly acceptable! But they should recognize that for most languages, that is probably O(N log N) for runtime and either O(1) or O(n) for space, depending on whether the runtime does it in-place or with a new array.

#### Pseudocode

```
function Ticket Comparison
has arguments Ticket A, Ticket B
returns 1 (Sort A to the Right) if Ticket A's Origin is Ticket B's Destination.
returns -1 (Sort A to the Left) if Ticket A's Destination is Ticket B's Origin.
returns 0 (No evaluation of sort order) otherwise.
```

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

```
class PlaneTicket {
  constructor(origin, destination) {
    this.origin = origin;
    this.destination = destination;
  }
}
```

### TypeScript

```typescript
class PlaneTicket {
  constructor(
    readonly origin: string,
    readonly destination: string
  ) {}
}
```
