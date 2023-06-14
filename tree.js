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
    let stack = [this];

    let sum = 0;

    if (stack.length === 0){
      return 0;
    }

    while(stack.length){
      let current = stack.pop();
      sum += current.val;
  

      for (let child of current.children)
        stack.push(child)
    }
    return sum;
  }

  /** countEvens(): starting from the invoking node and moving through its
   * children, count how many nodes have even values. Returns that count as
   * an integer. */
  countEvens() {

  let stack = [this];
  let evenCount = 0;

  if (stack.length === 0){
    return 0;
  }

  while (stack.length){
    let current = stack.pop();

    if (current.val % 2 === 0){
      evenCount +=1;
    }

    for (let child of current.children)
        stack.push(child)
  }

  return evenCount;
  }

  /** numGreater(lowerBound): starting from the invoking node and moving through
   * its children, return a count of the number of nodes whose value is greater
   * than lowerBound. */
  numGreater(lowerBound){


    let stack = [this];
    let count = 0;

    if (stack.length === 0){
      return 0;
    }

    while (stack.length){
      let current = stack.pop();

      if ( current.val > lowerBound ){
        count += 1;
      }

      for (let child of current.children)
        stack.push(child)
    }
    return count;

  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
    //  console.log("this.root===", this.root)
  }

  /** sumValues(): add up all values in the tree. */
  sumValues() {

    if ( this.root === null){
      return 0;
    }

    return this.root.sumValues()

  }

  /** countEvens(): count all nodes in the tree that have even values. */
  countEvens() {
    if ( this.root === null){
      return 0;
    }

    return this.root.countEvens();

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */
  numGreater(lowerBound) {
    if ( this.root === null){
      return 0;
    }

    return this.root.numGreater(lowerBound);

  }
}

module.exports = { Tree, TreeNode };


























