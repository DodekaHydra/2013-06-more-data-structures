// Note: sets should not use up any more space than necessary. Once a value is added to a set, adding it a second time should not increase the size of the set.
// Note: Until the extra credit section, your sets should handle only string values.

var makeSet = function(){
  var set = Object.create(setPrototype); // fix me
  set._storage = undefined;
  return set;
};

var setPrototype = {};

// An .add() method, takes any string and adds it to the set
setPrototype.add = function(){
};

// A .contains() method, takes any string and returns a boolean reflecting whether it can be found in the set
setPrototype.contains = function(){
};

// A .remove() method, takes any string and removes it from the set, if present
setPrototype.remove = function(){
};
