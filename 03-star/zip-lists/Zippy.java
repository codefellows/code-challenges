package day06;

public class Zippy {
    public static LinkedList mergeLists (LinkedList ll1, LinkedList ll2) {
        // Create four variables to point at the first two things in each list.
        // This allows us to rearrange them without losing reference
        ListNode top = ll1.root;
        ListNode topTemp = ll1.root.next;

        ListNode bot = ll2.root;
        ListNode botTemp = ll2.root.next;

        while (topTemp != null && botTemp != null) {
            // point the top to the bottom
            // point to bottom to the second thing on top
            top.next = bot;
            bot.next = topTemp;

            // inchworm the first top and bottom pointers forward
            top = topTemp;
            bot = botTemp;

            // inchworm the second top and bottom points forward
            topTemp = topTemp.next;
            botTemp = botTemp.next;
        }

        // make sure the last top one is connected to the last bottom one
        if (top.next != bot) {
            top.next = bot;
        }

        // make sure the last bottom one points back at the very-last top one
        if (bot.next == null) {
            bot.next = topTemp;
        }

        return ll1;
    }
}

