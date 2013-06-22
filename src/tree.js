var makeTree = function(){
  var newTree = {
    parent: null,
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
    node.parent = this;
    this.children.push(node);
  } else {
    this.value= val;
  }
};

makeTree.treeMethods.contains = function(val){
  return this.value === val ? true : _.reduce(this.children, function(memo, item){
    return memo || item.contains(val);
  }, false);
};

makeTree.treeMethods.removeFromParent = function(){
  var that = this;
  var parent = this.parent;
  if (parent){
    _.each(parent.children, function(kid, ind, parentChildren){
      if (kid.value === that.value){
//        kid.parent.children[ind] = undefined;
//        kid.parent = undefined;

        parentChildren.splice(ind,1);
      }
    });
  }
};
