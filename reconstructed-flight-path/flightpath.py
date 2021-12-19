def reconstruct_flight_path(tickets):

    airports = [] # list of airport codes to return
    origin_map = {} # origin:destination per ticket
    
    # build origin map per ticket
    for ticket in tickets:
        origin_map[ticket.origin] = ticket.destination

    # store destinations as set for O(1) lookup
    destinations = set(origin_map.values())


    # find the starting ticket
    starting_ticket = None
    for ticket in tickets:
      if not ticket.origin in destinations:
          starting_ticket = ticket
          break

    # start the airport list with the starting ticket's origin
    airports.append(starting_ticket.origin)

    # store the starting ticket's destination
    destination = starting_ticket.destination

    # as long as there are destinations remaining, 
    # add them to airport list
    while destination:
        airports.append(destination)
        destination = origin_map.get(destination) # will eventually be None
    
    return airports # output list of airport codes


class PlaneTicket:
    def __init__(self, origin, destination):
        self.origin = origin
        self.destination = destination



# TESTS

tickets = [
  PlaneTicket(origin="SEA",destination="SFO"),
  PlaneTicket(origin="JFK",destination="IAD"),
  PlaneTicket(origin="SFO",destination="JFK"),
  PlaneTicket(origin="IAD",destination="ORD"),
]

actual = reconstruct_flight_path(tickets)
expected = ['SEA','SFO','JFK','IAD','ORD']
assert actual == expected, actual
	
print("TESTS PASSED")  
