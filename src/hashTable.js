var HashTable = function(){
  this._limit = 8;
  this._bucketFlag = {};
  // this.bucket = [];
  // for (var i = 0;i < this.limit;i++){
  //   this.bucket[i] = undefined;
  // }

  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value){
  // create hash
  var index = getIndexBelowMaxForKey(key, this._limit);
  var result = [];
  var keyPairObject = {};
  var thisIndex = this._storage.get(index);
  keyPairObject[key] = value;
  if (thisIndex){
    // for each thing in bucket[index],
    //if theres already something at that hash
    if (Array.isArray(thisIndex)){
      result = thisIndex;
      result.push(keyPairObject);
      this._storage.set(index,result);
    } else {
      result.push(thisIndex);
      this._storage.set(index,result);
    }
  } else {
    result.push(thisIndex);
    this._storage.set(index, keyPairObject);
  }
  // this.bucket[index] = key;
};

HashTable.prototype.retrieve = function(key){
  var index = getIndexBelowMaxForKey(key, this._limit);
  var thisIndex = this._storage.get(index);
  var result;
  if (thisIndex /*&& this.bucket[index] === key*/) {
    if (Array.isArray(thisIndex)){
      result = _.filter(thisIndex, function(obj, ind, arr){
        if (obj.hasOwnProperty(key)){
          return obj[key];
        }
      });
    } else {
      return this._storage.get(index)[key];
    }
  }
};

HashTable.prototype.remove = function(key){
  var index = getIndexBelowMaxForKey(key, this._limit);
  thisIndex = this._storage.get(index);
  if (Array.isArray(thisIndex)){
    _.each(thisIndex, function(val, ind, thisIndex) {
      if (innerKey in thisIndex[ind] === key) { thisIndex[ind] = undefined; }
    });
  } else {
    thisIndex = undefined;
  }

// when you create a bucket store this._bucketFlag as [0]
// when you find an array bucket stored



  // find the value contained at an index in this._storage
  // if it's not an array, then set it to undefined
  // if it is an array, you want to find the index of the object that has our input string key as its key
    // check array[0] to make sure it === this._bucketFlag
    // --> each and inside of each you could use pluck or just access the key
  // set that to undefined

  // _.each(this.bucket,function(value,index,collection){
  //   if (value===key){
  //     del
};




// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you

// You will use the provided hash function to convert any key into an array index. Try interacting with it from the console first.

//A limitedArray helper has been provided for you. Use it to store all inserted values. Try interacting with it from the console first.

//Once you have a working, naive hash table, make sure it handles collisions correctly. Test this by reducing the size limit for storage to 1 and seeing if the hash table can keep track of 2 different key-value pairs.

