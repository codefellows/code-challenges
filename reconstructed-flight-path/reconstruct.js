let getFlightPath = tickets => {

  let flightPaths = [];
  let flights = new Map();
  let destinations = new Map();
  let origination = '';

  tickets.forEach( path => {
    // this is purely to decorate the input (tickets) into a map so that 
    // we can easily .get()/.set() the values later on.  Could have easily
    // just used an object or evan an array for this, but lets stick with
    // more classic data structures.
    flights.set(path.origin, path.destination) ;

    // Setting this as a unique set of destinations. The next loop
    // will go through this to find the origination flight, which
    // is the one entry in tickets list without a destination
    destinations.set(path.destination);
  });

  // grab the actual originaion -- the one that's not in the destinations map
  // Could have been an array that we filtered on, but that's too javascript-y
  // keeping it closer to classic DS
  tickets.forEach( path => {
    if ( ! destinations.has(path.origin) ) { origination = path.origin;  }
  });


  // Now, go through the flights, beginning with the origin, building a list
  // based on following the destinations. Using an array here, but could easily
  // be a linked list or a map. That's really just a delivery mechanism.
  let currentFlight = origination;
  while( currentFlight ) {
    flightPaths.push(currentFlight);
    currentFlight = flights.get(currentFlight);
  }

  return flightPaths;

}


let paths = [
  {origin:'SEA', destination:'SFO'},
  {origin:'DFW', destination:'PHX'},
  {origin:'SFO', destination:'PHI'},
  {origin:'PHI', destination:'DFW'},
];

console.log( getFlightPath(paths) );
