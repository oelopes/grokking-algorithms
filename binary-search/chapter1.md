# Chapter 1

## Binary Search

Binary search is an algorithm; its input is a `sorted list` of elements. If an element you’re looking for is in that list, binary search returns the position where it’s located. Otherwise, binary search returns `null`.
To do that it starts at the middle of the `sorted list` and eliminate half the remaining values every time

### Example:
I have a list with 100 numbers `[1,2,3,4...99,100]` to find the number I'm thinking, in this case `57`, you would start guessing at `50` like so:
```50 -> higher -> 75 -> lower -> 63 -> lower -> 57```  
