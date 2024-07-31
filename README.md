# Remove Nth Node From End of List

## auther : ibrahim zakarneh

## Overview

This project provides a TypeScript function to remove the nth node from the end of a singly-linked list. The implementation ensures efficient node deletion, handling edge cases like removing the head node.

### Explanation:

1. Counting Nodes: First, traverse the entire list to count the total number of nodes.
2. Calculate Position: Calculate the position of the node to be removed from the start of the list.
3. Edge Case for Head Removal: If the node to be removed is the head, return the next node as the new head.
4. Traversal to Node Before Target: Traverse the list again to reach the node just before the one to be removed.
5. Remove Node: Update the next pointer of the current node to skip the target node, effectively removing it from the list.

## getting started

### Prerequisites:-

- Node.js
- TypeScript

### Installation:-

Compile and run: npm run dev
