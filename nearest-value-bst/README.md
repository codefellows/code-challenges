# Nearest Neighbor in a Binary Search Tree

## Problem Statement 

We are helping a software team create a project management app. They'd like your help with the time estimation feature. 

They are constantly getting data from 1000s of actual finished projects, containing how many user stories are on the project, and the total number of hours the project took to complete. 

When a new project is proposed, we need you to give a quick rough estimate: report the hours from the existing project data that most closely matches the new project's number of user stories. You must return your result as efficiently as possible. 

## Example Inputs & Outputs

If asked, the interviewer can provide the following example data:

```
153 stories: 612 h
117 stories: 502 h
186 stories: 637 h
222 stories: 1138 h
84 stories: 420 h
138 stories: 690 h
142 stories: 536 h
```

Example input:
```
New project count of user stories: 149
```

Let the candidate identify the correct output: 
```
Rough estimate from the existing data set: _612 hours, based on 153 stories_. 
```

## Notes to the Interviewer

Students may assume a binary search tree, and even one that self-balances (to minimize the amortized cost of searching an unbalanced tree).

Students should come up with some way of keeping all the project data associated together. They should, therefore, be asked to design the "node" to be stored in their binary search tree.

In case of a new value that exactly splits the difference between two previous
results, it is acceptable to return either previous result found.

Run time complexity for the algorithm they create should be O(log n), since half of the existing data can be disregarded after every comparison. Space complexity should be O(1): No additional data structures are needed to run the search. 

## Resources

[Example solution and discussion of the underlying "nearest-neighbor" algorithm](http://codercareer.blogspot.com/2013/03/no-45-closest-node-in-binary-search-tree_2.html)
