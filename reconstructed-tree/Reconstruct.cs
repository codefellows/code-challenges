using System;

namespace ReconstructTree
{
	class Program
	{
		static void Main(string[] args)
		{
			int[] arr = { 1, 2, 3, 4, 5, 6, 7, 8, 9};
			ReconstructTree(arr);
		}

		static BST ReconstructTree(int[] arr)
		{
			return new BST
			{
				Root = ReconstructTree(arr, 0, arr.Length)
			};

		}

		static Node ReconstructTree(int[] arr, int start, int end)
		{
			if (end - start >= 1)
			{
				int mid = start + ((end - start) / 2);
				Node root = new Node { Value = arr[mid] };
				root.LeftChild = ReconstructTree(arr, start, mid);
				root.RightChild = ReconstructTree(arr, mid + 1, end);
				return root;
			}

			return null;
		}
	}

	class Node
	{
		public Node LeftChild { get; set; }
		public Node RightChild { get; set; }
		public int Value { get; set; }
	}

	class BST
	{
		public Node Root { get; set; }
	}
}
