# Chapter 1

## Binary Search

Binary search is an algorithm; its input is a `sorted list` of elements. If an element you’re looking for is in that list, binary search returns the position where it’s located. Otherwise, binary search returns `null`.
To do that it starts at the middle of the `sorted list` and eliminate half the remaining values every time

### Example:
I have a list with 100 numbers `[1,2,3,4...99,100]` to find the number I'm thinking, in this case `57`, you would start guessing at `50` like so:

```50 -> higher -> 75 -> lower -> 63 -> lower -> 57```

Suppose you’re looking for a word in the dictionary. The dictionary has 240,000 words. In the worst case, using an simple search it would take 240,000 steps, using the Binary search it would take at most `18 steps`. In general, for any list of `n`, binary search will take `log2 n` steps to run in the worst case, whereas simple search will take `n` steps

## Big O
Big O notation tells you how fast an algorithm is. For example, suppose you have a list of size `n`. Simple search needs to check each element, so it will take `n` operations. The run time in Big O notation is `O(n)`. Binary search needs `log n` operations to check a list of size `n`. What’s the running time in Big O notation? It’s `O(log n)` **Big O notation lets you compare the number of operations. It tells you how fast the algorithm grows.**

### Some common Big O run times
Here are five Big O run times that you’ll encounter a lot, sorted from fastest to slowest:

- O(log n), also known as log time. Example: Binary search.
- O(n), also known as linear time. Example: Simple search.
- O(n * log n). Example: A fast sorting algorithm, like quicksort (chapter 4).
- O(n2). Example: A slow sorting algorithm, like selection sort (chapter 2).
- O(n!). Example: A really slow algorithm, like the traveling salesperson.

### Recap

- Binary search is a lot faster than simple search.
- O(log n) is faster than O(n), but it gets a lot faster once the list of items you’re searching through grows.
- Algorithm speed isn’t measured in seconds.
- have Algorithm times are measured in terms of growth of an algorithm.
- Algorithm times are written in Big O notation.
