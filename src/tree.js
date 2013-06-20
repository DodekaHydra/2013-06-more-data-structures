var makeTree = function(){
  var newTree = {};
  newTree.value = undefined;
  newTree.children = undefined;

  _.extend(newTree, makeTree.treeMethods);
  return newTree;
};

makeTree.treeMethods = {};

makeTree.treeMethods.addChild = function(val){
  if (this.value){
    if (!this.children){
      this.children = [];
    }
    this.children.value = val;
    this.children.push(val);
  } else {
    this.value = val;
  }
};

makeTree.treeMethods.contains = function(){
};
