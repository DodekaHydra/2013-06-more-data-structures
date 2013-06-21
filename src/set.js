// Note: sets should not use up any more space than necessary. Once a value is added to a set, adding it a second time should not increase the size of the set.
// Note: Until the extra credit section, your sets should handle only string values.

var makeSet = function(){
  var set = Object.create(makeSet.setPrototype); // fix me
  set._storage = {};
  // detect incoming value type and assignt to primitive or complex- set value to value and key to stringified
  set._primitiveStorage = {};
  set._complexStorage = {};
  set.counter = 0;
  return set;
};

makeSet.setPrototype = {};

// An .add() method, takes any string and adds it to the set
makeSet.setPrototype.add = function(val){
  if (typeof val === "string" || typeof val === "number" || typeof val === "boolean") {
    if (!this._primitiveStorage[val]){
      var newKey = JSON.stringify(val);
      this._primitiveStorage[newKey] = val;
    }
  } else {
    this.counter++;
    this._complexStorage[this.counter] = val;
  }
};

// A .contains() method, takes any string and returns a boolean reflecting whether it can be found in the set
makeSet.setPrototype.contains = function(val){
  var result = false;
  if (typeof val === "string" || typeof val === "number" || typeof val === "boolean") {
    for (var primKey in this._primitiveStorage){
      if (this._primitiveStorage[primKey] === val){
        result = true;
      }
    }
  } else {
    var strVal = String(val);
    _.each(this._complexStorage, function(value, index, array){
      var strValue = String(value);
      if (strValue === strVal){
        result = true;
      }
    });
  }
  return result;
};

// A .remove() method, takes any string and removes it from the set, if present
makeSet.setPrototype.remove = function(val){
  if (this.contains(val)){
    delete this._primitiveStorage[JSON.stringify(val)];
  } else if (this.contains(val)) {
    for (var key in this._complexStorage){
      if (this._complexStorage[key] === val)
        delete this._complexStorage[key];
    }
  }
};
