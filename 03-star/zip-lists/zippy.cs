using System;
using System.Collections.Generic;

namespace Zippy
{
    class Program
    {
        //This solution works when:
        // LL1 > LL2
        // LL2 < LL1
        // LL1 == LL2
        static void Main(string[] args)
        {
            LinkedList<int> ll1 = new LinkedList<int>();
            LinkedList<int> ll2 = new LinkedList<int>();

            ll1.AddFirst(1);
            ll1.AddLast(2);
            ll1.AddLast(3);
            ll1.AddLast(4);
            ll1.AddLast(5);
            ll1.AddLast(6);
            ll1.AddLast(7);

            ll2.AddFirst(1);
            ll2.AddLast(2);
            ll2.AddLast(3);
            ll2.AddLast(4);
            ll2.AddLast(5);
            ll2.AddLast(6);
            ll2.AddLast(7);
            ll2.AddLast(8);
            ll2.AddLast(9);
            ll2.AddLast(10);

          LinkedList<int> zippedList = ZipIt(ll1, ll2);
        }

        public static LinkedList<int> ZipIt(LinkedList<int> ll1, LinkedList<int> ll2)
        {
            //Create temp linked list to hold new values.
            LinkedList<int> tempLL = new LinkedList<int>();

            //set current pointers from each list
            LinkedListNode<int> current1 = ll1.First;
            LinkedListNode<int> current2 = ll2.First;

            //Add the first value to the temp LL
            tempLL.AddLast(current1.Value);

            //Add first item in second ll. 
            tempLL.AddLast(current2.Value);


            //Run While loop when one of the other LL still has values in it
            while (current1.Next != null || current2.Next != null)
            {
                //only add node to LL if it exists
                if (current1.Next != null)
                {
                    tempLL.AddLast(current1.Next.Value);
                    current1 = current1.Next;
                }
                
                //only add node to LL if it exists
                if (current2.Next != null)
                {
                    tempLL.AddLast(current2.Next.Value);
                    current2 = current2.Next;

                }
            }

            //return temp with combined linked lists
            return tempLL;
        }
    }
}
