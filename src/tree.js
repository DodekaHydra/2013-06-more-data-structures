var makeTree = function(){
  var newTree = {
    parent: null,
    value: undefined,
    children: []
    // firstChild: newTree.children[0]
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
    this.value = val;
  }
};

// used for .traverse exclusively
makeTree.treeMethods.nextSibling = function(node){
  var that = this;
  for(var i = 0; i < that.children.length; i++){
    if (that.children[i].value === node.value){
      return that.children[i + 1];
    }
  }
};

makeTree.treeMethods.contains = function(val){
  return this.value === val ? true : _.reduce(this.children, function(memo, item){
    return memo || item.contains(val);
  }, false);
};

makeTree.treeMethods.traverse = function(callback, node){
  node = node || this;
  callback(node);
  node = node.children[0];
  while (node) {
    node.traverse(callback, node);
    if (node.parent){
      node = node.parent.nextSibling(node);
    }
  }
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
