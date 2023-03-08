# Reconstructed Flight Path Hall of Fame

## Monica Ramirez

![Monica Ramirez Flight Path Whiteboard](https://user-images.githubusercontent.com/498712/220987877-dfb0baaf-5717-4946-a2a8-f7eed33d8709.jpg)

This whiteboard follows the guidance of using a specific example case to drive the general solution to perfection.
The example case was chosen to explicitly call out that the tickets should not happen to already be in order.
Using a list of tuples for the data model was inspired - while an OOAD approach may be more "senior", choosing tuples meant that step one of creating the map was `dict(lst)`.

The visualization does not include an explicit section on finding the starting city, but does include the information accidentally.
The code for finding the starting city could have used the builtin Python set difference method.
The while loop for building the final list is about as tight as can be - it initializes with the starting city, so only needs to push the destination city.
Step through has all the state changes, and big-o was spot on (looks like the square didn't get included in the screenshot, but it was in the interview).
