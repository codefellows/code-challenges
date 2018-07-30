using System;
using System.Collections.Generic;
using System.Text;
using Tree;

namespace DSQuestions
{
	class PathWeight
	{
		/*
		 * Big O Space: O(n)
		 * n = the number of possible nodes
		 * Big O Space: O(h)
		 * h = height of the call stack for recursion	 
		*/

		public void GetWeight(Tree tree, int targetWeight)
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

		public bool AddWeight(Node root, int currentWeight, int targetWeight)
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
					if (AddWeight(root.LeftChild, currentWeight + (int)root.Value, targetWeight))
					{
						return true;
					};
				}

				if (root.RightChild != null)
				{
					if (AddWeight(root.RightChild, currentWeight + (int)root.Value, targetWeight))
					{
						return true;
					}
				}
			}
			return false;
		}
	}
}
