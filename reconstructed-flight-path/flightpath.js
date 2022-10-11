let getFlightPath = tickets => {

  let flightPaths = [];
  let flights = new Map();
  let destinations = new Map();
  let origination = '';

  tickets.forEach(path => {
    // this is purely to decorate the input (tickets) into a map so that
    // we can easily .get()/.set() the values later on.  Could have easily
    // just used an object or evan an array for this, but lets stick with
    // more classic data structures.
    flights.set(path.origin, path.destination);

    // Setting this as a unique set of destinations. The next loop
    // will go through this to find the origination flight, which
    // is the one entry in tickets list without a destination
    destinations.set(path.destination);
  });

  // grab the actual originaion -- the one that's not in the destinations map
  // Could have been an array that we filtered on, but that's too javascript-y
  // keeping it closer to classic DS
  tickets.forEach(path => {
    if (!destinations.has(path.origin)) { origination = path.origin; }
  });


  // Now, go through the flights, beginning with the origin, building a list
  // based on following the destinations. Using an array here, but could easily
  // be a linked list or a map. That's really just a delivery mechanism.
  let currentFlight = origination;
  while (currentFlight) {
    flightPaths.push(currentFlight);
    currentFlight = flights.get(currentFlight);
  }

  return flightPaths;

}

let sortFlightPath = tickets => {
  // This version has an unconditional access to item 0, so needs to check empty input.
  if (tickets.length === 0) return [];
  
  // Make a copy of the tickets array, so as not to change the input array.
  tickets = [...tickets]
  
  // Sort the array:
  //   A ticket that has an origin as another ticket's destination comes to the right
  //   Vice versa: A ticket that has a destination the same as the other ticket's origin comes to the left
  //   Otherwise, return 0. 0 can mean equal, but more generally, it means "don't sort one way or the other"
  //      when comparing these two items. Other items will compare differently.
  // This is _not_ a total ordering. Disjoint flight paths will sort into two (or more) sequences, but the
  // final collation will not include the later origins. Loop flight paths will be in the correct order for
  // the loop, but it's unclear where the initial item will be.
  // (The problem as stated in the readme will not have loops or disjoints).
  tickets.sort((a, b) => {
    if (a.origin === b.destination) return 1;
    if (a.destination === b.origin) return -1;
    return 0;
  });
  
  // Collate the cities - the first ticket origin, and then every destination.
  return [tickets[0].origin, ...tickets.map(t => t.destination)];
}


let paths = [
  { origin: 'SEA', destination: 'SFO' },
  { origin: 'DFW', destination: 'PHX' },
  { origin: 'SFO', destination: 'PHI' },
  { origin: 'PHI', destination: 'DFW' },
];

console.log(getFlightPath(paths));
console.log(sortFlightPath(paths));
