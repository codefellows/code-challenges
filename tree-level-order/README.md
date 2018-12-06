# Code Challenge

Write a function to generate a level-order printout of a k-ary tree. That is, given a tree, display the node values, with new lines between each level of the tree.  

## Specifications
- Read all of the following instructions carefully. Name things exactly as described, or you will get a ZERO without comment 
- Do all your work in a public repository called `data-structures-and-algorithms`, with a well-formated, detailed top level README.md matching the example provided by your instructor
- Create a branch in your repository called `print_level_order`
- On your branch, create...
    - _C#_: your method named `PrintLevelOrder` outside of `Main()` in your `Program.cs` file
    - _JavaScript_: a file called `print_level_order.js`
    - _Python_: a file called `print_level_order.py`
- Include any language-specific configuration files required for this challenge to become an individual component, module, library, etc.
    - _NOTE: You can find an example of this configuration for your course in your class lecture repository._

## Feature Tasks
- Write a function based on the specifications above, which takes in a k-ary tree. 
Without utilizing any of the built-in methods available to your language, return a string that contains a listing of all values in the tree, with new lines in-between each level of the tree. 

## Structure and Testing

Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

Write at least three test assertions for each method that you define. 

Ensure your tests are passing before you submit your solution.

## Example

Input:
![K-ary Tree](k-ary.PNG)

Output: 
```
A 
B C D E F G 
H I J K L M 
N O P Q
```

## Documentation: Your README.md

```markdown
# Level-order printout of a K-ary Tree
<!-- Short summary or background information -->

## Challenge
<!-- Description of the challenge -->

## Solution
<!-- Embedded whiteboard image -->

```

## Submission Instructions
1. Take a photo of your completed whiteboard, matching the example whiteboard layout
     1. Copy your photo into an `/assets` directory in your repo
     1. Give the image file the same name as the branch you are working on
     1. Embed the image in your README.md documentation
1. Create a pull request from your branch to your `master` branch
1. In your open pull request, leave as a comment [a checklist](https://github.com/blog/1825-task-lists-in-all-markdown-documents){:target="_blank"} of the specifications and tasks above, with the actual steps that you completed checked off
1. Submitting your completed work to Canvas:
    1. Copy the link to your open pull request and paste it into the corresponding Canvas assignment
    1. Leave a description of how long this assignment took you in the comments box
    1. Add any additional comments you like about your process or any difficulties you may have had with the assignment
1. Merge your branch into `master`, and delete your branch (don't worry, the PR link will still work)
