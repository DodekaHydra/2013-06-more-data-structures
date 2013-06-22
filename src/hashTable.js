var HashTable = function(){
  this._limit = 8;
  this.counter = 0;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value){
  var index = getIndexBelowMaxForKey(key, this._limit);
  var result = [];
  var keyPairObject = {};
  var thisIndex = this._storage.get(index);
  keyPairObject[key] = value;
  if (thisIndex){
    result = thisIndex;
  } else {
    this.counter++;
  }


  // REDISTRIBUTION

  if (this.counter / this._limit > 0.75){
  //  this._limit *= 2;
    var redistributable = [];
    var newTable = [];
    for (var tier = 0; tier < this._limit; tier++){
        newTable.push(this._storage.get(tier));
        console.log("NT", newTable);
    }
    for (var i=0;i<newTable.length;i++){
     
    }
    // _.each(newTable, function(val, ind, arr){
    //   redistributable.push(val);
    //   console.log("REDIS", redistributable);
    // });
  }

  result.push(keyPairObject);
  this._storage.set(index, result);
};

HashTable.prototype.retrieve = function(key){
  var index = getIndexBelowMaxForKey(key, this._limit);
  var thisIndex = this._storage.get(index);
  for (var i = 0; i < thisIndex.length; i++){
    if (thisIndex[i].hasOwnProperty(key)){
      return thisIndex[i][key];
    }
  }
};

HashTable.prototype.remove = function(key){
  var index = getIndexBelowMaxForKey(key, this._limit);
  var thisIndex = this._storage.get(index);
  for (var i = 0;i < thisIndex.length;i++){
    if (thisIndex[i].hasOwnProperty(key)){
      thisIndex.splice(i,1);
    }
  }
  if (thisIndex.length === 1) {
    this.counter--;
  }
};