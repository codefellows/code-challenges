using System;
using System.Diagnostics;

namespace FinalSolution
{
    class Node
    {
        public int Value { get; set; }
        public Node Left { get; set; }
        public Node Right { get; set; }
    }

    class NearestNeighbor
    {
        public static Node ClosestElement(Node root, int key)
        {
            Node closestElement = root, node = root;

            while (node != null)
            {
                if (node.Value == key)
                    return closestElement;
                if (Math.Abs(key - node.Value) < Math.Abs(key - closestElement.Value))
                {
                    closestElement = node;
                }
                if (node.Value > key)
                    node = node.Left;
                else
                    node = node.Right;
            }
            return closestElement;
        }
    }

}
