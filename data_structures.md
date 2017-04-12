# Introduction to Data Structures and Algorithms

Whenever we want to store or manipulate data, we use a data structure.
Typically we use primitive data structures to represent the data that we care about:

- strings to represent text
- floats or integers to represent numerical values
- booleans to represent a binary situation (yes/no, is/isn't, true/false)

To store and manipulate those primitive data types, we employ more complex data structures.
JavaScript (and most other languages) have a few that are already built-in, designed to efficiently hold and represent that data.

- arrays to represent lists of any type of object (primitive or complex)
- objects literals to represent basic objects with properties as key-value pairs
- object constructors to represent more complex behavior with properties and behaviors

While these are great and do what they do well, they don't represent the wider sphere of operations we may want to perform on some data.
Perhaps we want data accessible in a certain way, with relations or structuring not provided by these built-ins without a lot of manipulation.

## Enter: Abstract Data Structures

An abstract data type is a set of data values and associated operations that are theoretically specified and **independent of any one language**.
The specification dictates what type of data the structure can hold, as well as what behavior an implementation of that structure should allow.
The spec reasons about relations to other data types, how errors should be raised, etc.
It follows some mathematical model, and then the developer picks their choice language and implements that spec.

One example of an abstract data structure is the [Binary Search Tree](https://en.wikipedia.org/wiki/Binary_search_tree).

![Binary Search Tree from https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Binary_search_tree.svg/200px-Binary_search_tree.svg.png](https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Binary_search_tree.svg/200px-Binary_search_tree.svg.png)

It's a structure that's optimized for quick, efficient searching through a collection of values.
Every data node is related to every next data node depending on whether the value is greater than or less than its neighbor.
When properly structured, a value that could normally take 10,000 steps to search for can be found in 4.
No joke. 

## Why do we care?

There's the noble rationale of wanting to be prepared to implement the most efficient, most appropriate data structure for a given problem domain.
It'd streamline your code and fit the particular situation more perfectly than something more brute-force like a bunch of arrays all chained together, or a mob of `for` loops.

**Then there's practicality.**
Our job here is to get you prepared not just to do the work that may come when you're actively employed, but to give you the skills to get through the interview process that will get you there.

While the tech interview process is [evolving away from the whiteboard model](https://theoutline.com/post/1166/programmers-are-confessing-their-coding-sins-to-protest-a-broken-job-interview-process), there are still plenty of companies that include it as a part of their review process.
Often in these whiteboard interviews, questions about common Computer Science data structures and algorithms are asked.
As such, it's a good idea to get familiar with these concepts before you walk in the door for that first interview.

In each of the Code 401 courses we cover data structures and algorithms in fair detail.
However, I feel like the earlier you see these and learn to think in these ways, the better.

So, with that in mind, let's get you working on some of the more basic data structures in Code 301, and push you further down the path to becoming a fully-capable, full-stack software developer.
