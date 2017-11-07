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

    class Tree
    {
        public Node Insert(Node root, int value)
        {
            if (root == null)
            {
                root = new Node
                {
                    Value = value
                };
            }
            else if (value < root.Value)
            {
                root.Left = Insert(root.Left, value);
            }
            else
            {
                root.Right = Insert(root.Right, value);
            }

            return root;
        }

        public void Traverse(Node root)
        {
            if (root == null)
            {
                return;
            }
            Console.WriteLine(root.Value);

            Traverse(root.Left);
            Traverse(root.Right);
        }
    }
    class NearestNeighbor
    {
        static void Main(string[] args)
        {
            Node root = null;
            Tree bst = new Tree();
            int SIZE = 20;
            int[] a = new int[SIZE];

            Random random = new Random();


            for (int i = 0; i < SIZE; i++)
            {
                a[i] = random.Next(100);
            }


            for (int i = 0; i < SIZE; i++)
            {
                root = bst.Insert(root, a[i]);
            }

            bst.Traverse(root);

            Console.WriteLine("Who is the nearest neigbor?");
            string number = Console.ReadLine();

            Console.WriteLine(ClosestElement(root, Convert.ToInt32(number)).Value);

        }

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
