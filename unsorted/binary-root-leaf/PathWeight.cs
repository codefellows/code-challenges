using System;
using System.Collections.Generic;
using System.Text;
using Tree;

namespace DSQuestions
{
	class PathWeight
	{
		/*
		 * Big O Time: O(n)
		 * n = the number of possible nodes
		 * Big O Space: O(h)
		 * h = height of the call stack for recursion	 
		*/

		public void GetWeight(Node tree, int targetWeight)
		{
			bool isEqual = AddWeight(tree.Root, 0, targetWeight);

			if (isEqual)
			{
				Console.WriteLine($"The target weight of {targetWeight} is found");
			}
			else
			{
				Console.WriteLine($"The target weight of {targetWeight} was not found");
			}
		}

		public bool GetWeight(Node root, int targetWeight, int currentWeight)
		{
			if (root.LeftChild == null && root.RightChild == null)
			{
				if (currentWeight + (int)root.Value == targetWeight)
				{
					return true;
				}

				return false;
			}
			else
			{
				if (root.LeftChild != null)
				{
					if (GetWeight(root.LeftChild, currentWeight + (int)root.Value, targetWeight))
					{
						return true;
					};
				}

				if (root.RightChild != null)
				{
					if (GetWeight(root.RightChild, currentWeight + (int)root.Value, targetWeight))
					{
						return true;
					}
				}
			}
			return false;
		}
	}
}
