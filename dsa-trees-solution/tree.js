"use strict";

/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }

  /** sumValues(): add up all values of invoking node and its children.
   * Returns sum as an integer. */
  sumValues() {

    // the sum of self + their children, recursively
    let sum = this.val;

    for (let child of this.children) {
      sum += child.sumValues();
    }

    return sum;
  }

  /** countEvens(): starting from the invoking node and moving through its
   * children, count how many nodes have even values. Returns that count as
   * an integer. */
  countEvens() {

    // the even-count of self + their children, recursively
    let count = this.val % 2 === 0 ? 1 : 0;

    for (let child of this.children) {
      count += child.countEvens();
    }

    return count;
  }

  /** numGreater(lowerBound): starting from the invoking node and moving through
   * its children, return a count of the number of nodes whose value is greater
   * than lowerBound. */
  numGreater(lowerBound){

    // the gt-bound count of self + their children, recursively
    let count = this.val > lowerBound ? 1 : 0;

    for (let child of this.children) {
      count += child.numGreater(lowerBound);
    }

    return count;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all values in the tree. */
  sumValues() {
    // base case: if tree is empty. Note: must handle this here because if we have
    // an empty tree, ie this.root is null, we'll get an error when we try to
    // call a method on null later on.
    if (this.root === null) {
      return 0;
    }

    return this.root.sumValues();
  }

  /** countEvens(): count all nodes in the tree that have even values. */
  countEvens() {
    // base case: if tree is empty
    if (this.root === null) {
      return 0;
    }

    return this.root.countEvens();
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */
  numGreater(lowerBound) {
    // base case: if tree is empty
    if (this.root === null) {
      return 0;
    }

    return this.root.numGreater(lowerBound);
  }
}

module.exports = { Tree, TreeNode };
