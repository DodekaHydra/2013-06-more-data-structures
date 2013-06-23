// Implement a binarySearchTree class with the following properties:
// A .left property, a binary search tree (BST) where all values are lower than than it the current value.
// A .right property, a BST where all values are higher than than it the current value.
// A .insert() method, which accepts a value and places in the tree in the correct position.
// A .contains() method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
// A .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.
// Use case: Given a list of a million numbers, write a function that takes a new number and returns the closest number in the list using your BST. Profile this against the same operation using an array.

// PROPERTIES:
// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// The left and right subtree must each also be a binary search tree.
// There must be no duplicate nodes.

var makeBinarySearchTree = function(val){
  var newTree = {
    left: [],
    value: val,
    right: []
  };
  _.extend(newTree, makeBinarySearchTree.treeMethods);
  return newTree;
};

makeBinarySearchTree.treeMethods = {};

makeBinarySearchTree.treeMethods.insert = function(val){
  // accepts val and correctly places in tree

    if (val > this.value){
      if (this.right.length){
        this.right[0].insert(val);
      } else {
        this.right.push(makeBinarySearchTree(val));
      }
    } else if (val < this.value){
      if (this.left.length) {
        this.left[0].insert(val);
      } else {
        this.left.push(makeBinarySearchTree(val));
      }
    }
};

makeBinarySearchTree.treeMethods.contains = function(val){
  return this.value === val ? true :
    val > this.value ?
      _.reduce(this.right, function(memo, item){
        return memo || item.contains(val);
      }, false) :
      _.reduce(this.left, function(memo, item){
        return memo || item.contains(val);
      }, false);
};


makeBinarySearchTree.treeMethods.depthFirstLog = function(callback, node, dir){
  node = node || this;
  console.log(node.value);
  if (dir === "left" && node.left[0]){
    node = node.left[0];
  } else if (dir === "right"){
    node = node.right[0];
  }
  while(node.left[0] || node.right[0]){
    callback(node);
    node.depthFirstLog(callback,node,"left");
    node = node.right[0];
  }
  if (!node.left[0] && !node.right[0]) {
    callback(node);
  }
};
