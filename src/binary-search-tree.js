const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    let newNode = new Node(data);
    if (this.rootNode === null) {
      this.rootNode = newNode;
    } else this.deep(this.rootNode, newNode);
  }

  has(data) {
    let node = this.rootNode;

    if (node.data === data) {
      return true;
    }

    while (true) {
      if (node.data === data) {
        return true;
      }
      if (data > node.data) {
        if (node.right != null) {
          node = node.right;
          continue;
        } else return false;
      }
      if (data < node.data) {
        if (node.left != null) {
          node = node.left;
          continue;
        } else return false;
      }
    }
  }

  find(data) {}

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    let root = this.rootNode;
    while (root.right != null) {
      root = root.right;
    }
    return root.data;
  }

  deep(node, newNode) {
    if (node.left === null && newNode.data < node.data) {
      node.left = newNode;
      return;
    }
    if (node.right === null && newNode.data > node.data) {
      node.right = newNode;
      return;
    }

    if (node.data === newNode.data) {
      return;
    }

    if (newNode.data < node.data) {
      this.deep(node.left, newNode);
    } else this.deep(node.right, newNode);
  }
}

module.exports = {
  BinarySearchTree,
};
