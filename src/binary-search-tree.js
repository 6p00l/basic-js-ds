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

  find(data) {
    let node = this.rootNode;

    if (node.data === data) {
      return node;
    }

    while (true) {
      if (node.data === data) {
        return node;
      }
      if (data > node.data) {
        if (node.right != null) {
          node = node.right;
          continue;
        } else return null;
      }
      if (data < node.data) {
        if (node.left != null) {
          node = node.left;
          continue;
        } else return null;
      }
    }
  }

  remove(value) {
    if (this.rootNode === null) {
      return null;
    }

    let delnode = this.find(value);
    if (delnode === null) {
      return;
    }
    let prev = this.prev(value);
    function del() {
      if (value < prev.data) {
        prev.left = null;
      } else prev.right = null;
    }

    while (this.has(value)) {
      if (delnode.left === null || delnode.right === null) {
        if (delnode.left === null && delnode.right === null) {
          del();
          continue;
        } else {
          if (delnode.left === null) {
            if (value < prev.data) {
              prev.left = delnode.right;
            } else prev.right = delnode.right;
          }
          if (delnode.right === null) {
            if (value < prev.data) {
              prev.left = delnode.left;
            } else prev.right = delnode.left;
          }
        }
        continue;
      }
      let last = this.find(this.min(delnode.right));
      delnode.data = last.data;
    }
  }

  min(node = this.rootNode) {
    if (node.left === null) return node.data;
    else return this.min(node.left);
  }

  max(node = this.rootNode) {
    while (node.right != null) {
      node = node.right;
    }
    return node.data;
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

  prev(value) {
    let node = this.rootNode;
    let prev = node;
    while (true) {
      if (node.data === value) {
        return prev;
      } else prev = node;
      if (value < node.data) {
        node = node.left;
        continue;
      }
      if (value > node.data) {
        node = node.right;
        continue;
      }
    }
  }
}

module.exports = {
  BinarySearchTree,
};
