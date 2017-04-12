# Linked List - Constructor and Push

## Description

A `LinkedList` consists of a collection of `Node` objects, with each `Node` pointing to the next one.
The `Node` objects themselves also contain some type of data value (e.g. string, boolean, float, etc.).

![A linked list](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Singly-linked-list.svg/408px-Singly-linked-list.svg.png)

This is the basis for such built-in data structures as `Arrays` in JavaScript and `lists` in Python.

While classical arrays (not the actual JS `Array` object but the abstract structure) require some fixed, unchanging size and pre-declared data type to be used, linked lists are variable in size and can contain whatever you want it to contain.

Linked lists benefit from quick insertion and storage, as well as easy removal from the front of the list.
One of the drawbacks is that insertion in the middle of the list, and searching through the list itself are very time intensive, especially as the list gets very large.
You can read more about them [here](https://en.wikipedia.org/wiki/Linked_list#Linearly_linked_lists).

The Linked List supports only a small handful of attributes:

- `head`: the node at the very front of the list; a new list has a `null` head.
- `length`: the size of the list at any time; a new list has a length of 0.

It also supports a few specific methods:

- `push(value)`: add a new node containing `value` at the `head` of the list, pointing to the old `head` of the list as the next node.
- `pop()`: remove the `head` node from the list and return it. If the list is empty, return `null`.
- `search(value)`: search for the node containing the given `value` and return it. Otherwise, return `null`.
- `remove(value)`: remove one node from the list that containing `value`

## Task
