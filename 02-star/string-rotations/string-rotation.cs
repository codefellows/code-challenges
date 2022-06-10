using System;

namespace string_rotations
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }

        //s1s1  = aterbottlewaterbottlew
        //s2 = erbottlewat

        public bool IsRotation(string s1, string s2)
        {
            int s1Length = s1.Length;
            int s2Length = s2.Length;

            if (s1Length == s2Length && s1Length > 0)
            {
                string s1s1 = s1 + s1;
                return s1s1.Contains(s2);
            }

            return false;
        }
    }
}
