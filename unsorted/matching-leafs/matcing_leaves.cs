using System;
using System.Collections.Generic;

namespace DS_LeafsTheSame
{
    //There are two possible solutions. 
    // First is to traverse through the tree and then capture each of the leafs in an array and then compare them against each other.

    // the second solution is through stacks. This solution is listed below
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            // Let us create trees in above example 1
            Node root1 = new Node(1);
            root1.Left = new Node(2);
            root1.Right = new Node(3);
            root1.Left.Left = new Node(4);
            root1.Right.Left = new Node(6);
            root1.Right.Right = new Node(7);

            Node root2 = new Node(0);
            root2.Left = new Node(1);
            root2.Right = new Node(5);
            root2.Left.Right = new Node(4);
            root2.Right.Left = new Node(6);
            root2.Right.Right = new Node(7);

            if (LeafsMatch(root1, root2))
            {
                Console.WriteLine("Same");
            }
            else
            {
                Console.WriteLine("Not Same");

            }
        }

        public static bool LeafsMatch(Node tree1, Node tree2)
        {
            Stack<Node> s1 = new Stack<Node>();
            Stack<Node> s2 = new Stack<Node>();

            //Put both trees into each of the stacks.
            s1.Push(tree1);
            s2.Push(tree2);

            //Loop unitl either of the two stacks is not empty

            // Loop until either of two stacks is not empty
            while (s1.Count > 0 || s2.Count > 0)
            {
                // If one of the stacks is empty means other
                // stack has extra leaves so return false
                if (s1.Count == 0 || s2.Count == 0)
                    return false;

                Node temp1 = s1.Pop();
                while (temp1 != null && !temp1.IsLeaf())
                {
                    // Push right and left children of temp1.
                    // Note that right child is inserted 
                    // before left
                    if (temp1.Right != null)
                        s1.Push(temp1.Right);
                    if (temp1.Left != null)
                        s1.Push(temp1.Left);
                    temp1 = s1.Pop();
                }

                // same for tree2
                Node temp2 = s2.Pop();
                while (temp2 != null && !temp2.IsLeaf())
                {
                    if (temp2.Right != null)
                        s2.Push(temp2.Right);
                    if (temp2.Left != null)
                        s2.Push(temp2.Left);
                    temp2 = s2.Pop();
                }

                // If one is null and other is not, then 
                // return false
                if (temp1 == null && temp2 != null)
                    return false;
                if (temp1 != null && temp2 == null)
                    return false;

                // If both are not null and data is not 
                // same return false
                if (temp1 != null && temp2 != null)
                {
                    if (temp1.data != temp2.data)
                        return false;
                }
            }

            //all leaves are matched if it gets to this point
            return true;
        }


    }

    class Node
    {
        public int data;
        public Node Left { get; set; }
        public Node Right { get; set; }

        public Node(int x)
        {
            data = x;
            Left = Right = null;
        }
        public bool IsLeaf()
        {
            return (Left == null && Right == null);
        }
    }
}
