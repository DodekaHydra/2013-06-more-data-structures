/*jshint expr:true*/

var HashTable = function(){
  this._limit = 8;
  this.counter = 0;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value){
  // If it's all full, make it bigger
  var that = this;
  if (this.counter / this._limit > 0.75 || this.counter / this._limit < 0.25) {
    this._limit = (this.counter / this._limit > 0.75) ? this._limit*2 : this._limit/2;
    var storage = [];
    for (var i = 0; i < this._limit; i++) {
      var val = this._storage.get(i);
      val && storage.push(val);
    }
    storage = _.flatten(storage, true);
 //   _.each(storage, function(val,ind,arr){
 //     that.remove(val[0]);
 //   });
    _.each(storage, function(val) {
      that._storage.set(getIndexBelowMaxForKey(val[0], this._limit), val[1]);
    });
  }

  var index = getIndexBelowMaxForKey(key, this._limit);
  var result = [];
  var keyPairObject = [key,value];
  var thisIndex = this._storage.get(index);
  if (thisIndex){
    result = thisIndex;
  } else {
    this.counter++;
  }
  result.push(keyPairObject);
  this._storage.set(index, result);
};

HashTable.prototype.retrieve = function(key){
  var index = getIndexBelowMaxForKey(key, this._limit);
  var thisIndex = this._storage.get(index);
  for (var i = 0; i < thisIndex.length; i++){
    if (thisIndex[i][0] === key){
      return thisIndex[i][1];
    }
  }
};

HashTable.prototype.remove = function(key){
  var index = getIndexBelowMaxForKey(key, this._limit);
  var thisIndex = this._storage.get(index);
  for (var i = 0;i < thisIndex.length;i++){
    if (thisIndex[i][0] === key){
      thisIndex.splice(i,1);
    }
  }
  if (thisIndex.length === 1) {
    this.counter--;
  }
};