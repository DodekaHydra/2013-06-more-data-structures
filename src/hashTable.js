var HashTable = function(){
  this._limit = 8;
  this.bucket = {};
  for (var i = 0;i < this.limit;i++){
    this.bucket[i] = undefined;
  }

  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value){
  var index = getIndexBelowMaxForKey(key, this._limit);
  //if 
  this._storage.set(index, value);
  this.bucket[index] = key;
};

HashTable.prototype.retrieve = function(key){
  var index = getIndexBelowMaxForKey(key, this._limit);
  if (this._storage.get(index) && this.bucket[index] === key) {
    console.log(this._storage.storage);
    return this._storage.get(index);
  } else {
    return false;
  }
};

HashTable.prototype.remove = function(key){
  _.each(this.bucket,function(value,index,collection){
    if (value===key){
      delete collection[index];
    }
  });
};


// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you

// You will use the provided hash function to convert any key into an array index. Try interacting with it from the console first.

//A limitedArray helper has been provided for you. Use it to store all inserted values. Try interacting with it from the console first.

//Once you have a working, naive hash table, make sure it handles collisions correctly. Test this by reducing the size limit for storage to 1 and seeing if the hash table can keep track of 2 different key-value pairs.

