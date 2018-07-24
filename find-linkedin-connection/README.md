# Find Mutual LinkedIn Connections


Feeding Frenzy is a growing company similar to Rover, where users can hire people that can feed their fish when they are away. 

You really want to work at this company. You know of a Codefellows alumna named Ursula Burns who works as a senior engineer there. You don't know her personally, but you'd like to network with her. 

You are not directly connected to her on LinkedIn, but you know a few other people who are.

Write a function that finds these mutual connections and organizes them by the most recent person you know. 

## How Students should Solve this Problem
* Students should conclude, with miminal help, that they are utilizing a graph data structure based off an adjacency list as the most optimal solution. 
* Students should ask clarifying questions specific to graphs, i.e. "Is this a directed or undirected graph? Is this a weighted graph?"
* Students may assume the graph itself is already implemented and all they need to do is traverse the graph where they are the starting point. However, they must ask enough clarifying questions to conclude this themselves.
* Students should determine that they are the key/starting point in an adjacency list. They should figure out that they, as the key, map back to a linked list or array of their adjacent neighbors, and they should traverse that linked list/array accordingly to determine if any of their adjacent neighbors connects to Ursula Burns. 
* Prefer linked list as the adjacent neighbors collection for better optimization, but array is fine too. 
* Students may assume that they will return multiple connections, i.e. returning 1 or 0 persons is not possible
* This solution will involve a double-nested linked list or array traversal, where for each of their adjacent neighbors, they will check their *neighbor's* adjacent neighbors by accessing the neighbor's key in the adjacency list hash table. 
* Students should know to optimize by marking previously visited connections as "visited" to skip over them.
* For sorting mutual connections by most recently known, students should verbally conclude that their edges have weights, where the weight corresponds to the length of time known in arbitrary units. However, conceiving that each neighbor node may already have a `lengthOfTimeKnown` property is OK too. 
* Students should conclude that they should store mutual connections in a `stack` or a `queue` if they are trying to organize connections by most recently known. (A queue is probably best for this as they can enqueue/dequeue off the same queue to maintain order. They would need two stacks to accomplish the same thing).



