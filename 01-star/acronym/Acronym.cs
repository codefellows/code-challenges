using System;
using System.Collections.Generic;

namespace acronym
{
	class Program
	{
		/*
		 Write a function that will take in a string and return the acronym of that string. Words that cannot go in the acronym: ['a', 'for', 'an', 'and', 'of', 'or', 'the', 'to', 'with']
			 */
		static void Main(string[] args)
		{
			//Input:
			Acronym("The Federal Bureau of Investigation");
			// Output: FBI
		}

		static string Acronym(string phrase)
		{
			string[] words = phrase.Split(' ');
			string acro = "";

			for (int i = 0; i < words.Length; i++)
			{
				// check if the word is forbidden.
				if (!IsForbidden(words[i].ToLower()))
				{
					// if it isn't, Take the first letter of the word
					acro += words[i][0];
				}
			}
			return acro.ToUpper() ;
		}

		static bool IsForbidden(string word)
		{
			// Using a list is easiest implementation. The alternative is to create a for loop to see if it exists, or a hashmap to see if the word exists. 
			List<string> forbidden = new List<string> { "a", "for", "and", "of", "or", "the", "to", "with" };
			if (forbidden.Contains(word))
			{
				return true;
			}
			return false;
		}
	}
}
