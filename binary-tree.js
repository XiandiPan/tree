"use strict";

/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** minDepthToIncompleteNode(): return the minimum depth of the tree to an
   * incomplete node-- that is, the length of the shortest path from the root to
   * a node with less than two children. */
  minDepthToIncompleteNode() {

    if ( (this.left === null || this.right === null) ) return 1

    return Math.min(
      this.left.minDepthToIncompleteNode(), 
      this.right.minDepthToIncompleteNode()
    ) + 1
  }

  /** maxDepth(): return the maximum depth from the invoking node -- that is,
   * the length of the longest path from the invoking node to a leaf. */
  maxDepth() {

    const leftDepth = this.left ? this.left.maxDepth() : 0;
    const rightDepth = this.right ? this.right.maxDepth() : 0;

    return Math.max(
      leftDepth,
      rightDepth
    ) + 1;
  }

  /** minDepth(): return the minimum depth from the invoking node -- that is,
   * the length of the shortest path from the invoking node to a leaf. */
  minDepth() {

    const leftDepth = this.left ? this.left.minDepth() : 0;
    const rightDepth = this.right ? this.right.minDepth() : 0;

    return Math.min(
      leftDepth,
      rightDepth
    ) + 1;
  }

  /** nextLarger(lowerBound): return the smallest value from the invoking node
   * that is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    
   
  }
  
  
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepthToIncompleteNode(): return the minimum depth of the tree to an
   * incomplete node-- that is, the length of the shortest path from the root to
   * a node with less than two children. */

  // this is a stack or recursion problem; we'll use recursion

  minDepthToIncompleteNode() {
    if (!this.root) return 0;
    return this.root.minDepthToIncompleteNode();
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  maxDepth() {
    if (!this.root) return 0;
return this.root.maxDepth()
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  minDepth() {
if (!this.root) return 0
    return this.root.minDepth()

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * that is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
if (!this.root) return null
    return this.root.nextLarger()

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
if (!this.root) return null
    return this.root.areCousins()

  }
}

module.exports = { BinaryTree, BinaryTreeNode };
