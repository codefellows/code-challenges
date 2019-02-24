using System.Collections.Generic;

namespace ReconFlightPath
{
    /// <summary>
    /// Space and time are both O(n)
    /// </summary>
    class Reconstruct
    {
        static void Main(string[] args)
        {
            Stack<PlaneTicket> tickets = new Stack<PlaneTicket>();

            tickets.Push(new PlaneTicket("SEA", "SFO"));
            tickets.Push(new PlaneTicket("JFK", "IAD"));
            tickets.Push(new PlaneTicket("SFO", "JFK"));
            tickets.Push(new PlaneTicket("IAD", "ORD"));

            ReconstructPath(tickets);
        }

        public static List<string> ReconstructPath(Stack<PlaneTicket> path)
        {
            // Create a Hashtable (Dictionary is C#'s version of a Hashtable, note the strongly typed)
            Dictionary<string, PlaneTicket> tickets = new Dictionary<string, PlaneTicket>();

            //Create a hashset to find the first ticket in the list
            HashSet<string> destinations = new HashSet<string>();

            // This will be used to hold the items from our stack, it's easier to traverse a list vs a stack
            List<PlaneTicket> allCities = new List<PlaneTicket>();

            // Our return List of cities visited (including final destination)
            List<string> outputCities = new List<string>();

            PlaneTicket nextTicket = null;

            // Make sure that there is still an item in the stack....
            while (path.TryPeek(out nextTicket))
            {
                PlaneTicket reference = path.Pop();

                // add each ticket to the dictionary, basewd off of orgin for key, and actual ticket for value.
                tickets.Add(reference.Origin, reference); // O(n) space

                // In order to find the first, let's put the destinations in the Hashset for later use. 
                destinations.Add(reference.Destination); // O(n) Space

                // this is the actual transfer from the stack to the list for easier traversal. We will traverse this list to find the first ticket. 
                allCities.Add(reference); // o(n) space
            }

            // Find the first ticket in the trip by comparing the origins against destination's hashset
            foreach (PlaneTicket city in allCities)
            {
                // if there is not a match between an origin and a destination...this means we found our first ticket
                if (!destinations.Contains(city.Origin)) // O(n) time
                {
                    // Set our reference to the ticket that we know is the 1st
                    nextTicket = city;
                }
            }

            // add the first destination to the return list (where the user started their trip)
            outputCities.Add(nextTicket.Origin);

            // build out the rest of the output cities 
            while (tickets.ContainsKey(nextTicket.Destination)) // O(n) time
            {
                tickets.TryGetValue(nextTicket.Destination, out nextTicket);
                outputCities.Add(nextTicket.Origin);
            }

            // add final destination to the output cities
            outputCities.Add(nextTicket.Destination);

            return outputCities;

        }
    }


    public class PlaneTicket
    {
        public string Origin { get; set; }
        public string Destination { get; set; }

        public PlaneTicket(string origin, string destination)
        {
            Origin = origin;
            Destination = destination;
        }
    }

    class Node
    {
        public PlaneTicket PlaneTicket { get; set; }
        public Node Next { get; set; }
        public Node Previous { get; set; }
    }

}
