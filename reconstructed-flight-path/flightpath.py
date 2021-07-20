def reconstruct_flight_path(ticket_list):
  
  starting_ticket = get_starting_ticket(ticket_list)
  flight_path = [starting_ticket.origin]
  destination = starting_ticket.destination
  
  # converting to HashTable will make generating ordered list of airports easier
  tickets = { ticket.origin:ticket.destination for ticket in ticket_list }

  # iterate through daisy chain of origins/destinations 
  while destination:
    flight_path.append(destination)
    destination = tickets.get(destination)

  return flight_path

def get_starting_ticket(tickets):
  destinations = (ticket.destination for ticket in tickets)
  
  for ticket in tickets:
    if ticket.origin not in destinations:
      return ticket

  
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
