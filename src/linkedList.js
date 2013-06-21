// Note: don't use an array to do this.
var makeLinkedList = function(){
  var linkedList = {};
  linkedList.head = null;
  linkedList.tail = null;
  var result;
  linkedList.addToTail = function(value){
    if (linkedList.tail){
      linkedList.tail.next = makeNode(value);
      linkedList.tail = linkedList.tail.next;
    } else {
       linkedList.head = makeNode(value);
       linkedList.tail = linkedList.head;
    }
   };

  linkedList.removeHead = function(){
    if (linkedList.head){
      result = linkedList.head;
      linkedList.head = result.next;
      return result;
    }
  };

  linkedList.contains = function(target){
    // checks to see if node exists
    // _.contains = _.include = function(obj, target) {}
    // pull while around whole if structure
    var currentNode = linkedList.head;
    // remove this if statement as it repeats inside
    while (currentNode.value) {
      if (currentNode.value === target) {
        return true;
      }
      if (currentNode.next) {
        currentNode = currentNode.next;
      }
      else {
        return false;
      }
    }
  };

  return linkedList;
};

var makeNode = function(value){
  var newNode = {};
  newNode.value = value;
  newNode.next = null;

  newNode.removeNextNode = function(){
    /*in order to remove a node, you need to have the pointer from
    the previous node which identifies the node to delete*/
    newNode.next=newNode.next.next;
  };

  return newNode;
};
/*/* newNode = {
       value: "value"
       next: "next pointer"
     };

   eachNode = {
       #: "node contents as string"
       next: point to next object
   }

how do we access the third node?
linkedList.contains(3)*/