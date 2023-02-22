using System.Collections.Generic;

namespace ReconFlightPath
{
    class Reconstruct
    {
        static void Main(string[] args)
        {
            Stack<PlaneTicket> tickets = new Stack<PlaneTicket>();

            tickets.Push(new PlaneTicket("SEA", "SFO"));
            tickets.Push(new PlaneTicket("JFK", "IAD"));
            tickets.Push(new PlaneTicket("SFO", "JFK"));
            tickets.Push(new PlaneTicket("IAD", "ORD"));

            List<string> path = Method1(tickets);
        }

        public static List<string> Method1(Stack<PlaneTicket> path)
        {
            return [];
        }
    }

    // DATA
    // Data classes and helpers for the problem

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
}
