def reconstruct_flight_path(tickets):
    tickets = dict(tickets)
    current = List(Set(tickets.keys()) - Set(tickets.values()))[0]

    airports = [current]
    while current:
        current = tickets[current]
        airports.append(current)
    
    return airports

# TESTS
tickets = [("SEA", "SFO"), ("JFK", "IAD"), ("SFO", "JFK"), ("IAD", "ORD")]

actual = reconstruct_flight_path(tickets)
expected = ['SEA','SFO','JFK','IAD','ORD']
assert actual == expected, actual
	
print("TESTS PASSED")  
