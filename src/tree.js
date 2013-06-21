var makeTree = function(){
  var newTree = {
    value: undefined,
    children: []
  };
  _.extend(newTree, makeTree.treeMethods);
  return newTree;
};

makeTree.treeMethods = {};

// target is optional if specific node is desired
makeTree.treeMethods.addChild = function(val){
  var node = makeTree();
  node.value = val;
  node.children = [];

  if (this.value){
    this.children.push(node);
  } else {
    this.value= val;
  }
};

makeTree.treeMethods.contains = function(val){
//  var level = this.children;
//  var tempLevel = level;
//  var numLevels = 1;
  // underscore's reduce on children; memo is if true [start false]
  // if node has val, return true; else return calling contains on child
  // reduce statement return memo or chi
  return this.value === val ? true : _.reduce(this.children, function(memo, item){
    return memo || item.contains(val);
  }, false);
  };
  // if (this.value){
  //   if (this.value === val) {
  //     return true;
  //   } else {
  //     for (var tier = 0; tier < numLevels; tier++) {
  //       for (var nodes = 0; nodes < level.length; nodes++) {
  //         if (level[nodes].value === val) { return true; }
  //         if (level[nodes].children) {
  //           tempLevel = level[nodes].children;
  //         }
  //       }
  //       if (tempLevel !== level) {
  //         level = tempLevel;
  //         numLevels++;
  //       }
  //     }
  //   }
  // }
  // return false;

// if tree is empty, then value of the tree sends in the passed in value; 
// otherwise the object is passed in to the array with value equal to the passed in value and children has blank array

// var tree = {
//   value: "test",
//   children: [{{
//     value: "node",
//     children: [{
//       value: "another",
//       children: [{
//         value: "okay"
//         children: undefined
//       }]
//     }]
//   },{
//     value: "next node"
//     children: [{
//       value: "and here we go"
//       children: undefined
//     }]
//   }}]
// }

// {
//   tree:{
//     test:undefined
//     node:undefined
//     another:
//   }
//  }
// }
