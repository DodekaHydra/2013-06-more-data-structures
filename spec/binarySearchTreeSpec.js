describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree(20);
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog", function() {
    expect(binarySearchTree.insert).toEqual(jasmine.any(Function));
    expect(binarySearchTree.contains).toEqual(jasmine.any(Function));
    expect(binarySearchTree.depthFirstLog).toEqual(jasmine.any(Function));
  });

  describe(".binarySearchTree", function() {

    it("should be able to add a value to an empty binarySearchTree", function() {
      expect(binarySearchTree.value).toEqual(20);
    });

    it("should be able to correctly add a value to the left and right", function() {
      binarySearchTree.insert(2);
      binarySearchTree.insert(30);
      expect(binarySearchTree.left[0].value).toEqual(2);
      expect(binarySearchTree.right[0].value).toEqual(30);
    });

    it("should be able to correctly add a value several levels down", function() {
      binarySearchTree.insert(1);
      binarySearchTree.insert(2);
      binarySearchTree.insert(3);
      binarySearchTree.insert(4);
      expect(binarySearchTree.left[0].value).toEqual(1);
      expect(binarySearchTree.left[0].right[0].value).toEqual(2);
      expect(binarySearchTree.left[0].right[0].right[0].value).toEqual(3);
      expect(binarySearchTree.left[0].right[0].right[0].right[0].value).toEqual(4);
    });
  });

  describe(".contains", function() {
    it("should be able to traverse the binarySearchTree in one direction to find a value", function() {
      binarySearchTree.insert(1);
      binarySearchTree.insert(2);
      binarySearchTree.insert(3);
      binarySearchTree.insert(4);
      expect(binarySearchTree.contains(4)).toEqual(true);
    });

    it("should be able to traverse the binarySearchTree in any direction to find a value", function() {
      binarySearchTree.insert(15);
      binarySearchTree.insert(12);
      binarySearchTree.insert(31);
      binarySearchTree.insert(42);
      expect(binarySearchTree.contains(12)).toEqual(true);
    });

  describe(".traverse", function(){
    it("should call a callback on all the nodes of the targeted binarySearchTree", function() {
      binarySearchTree.insert(10);
      binarySearchTree.insert(30);
      binarySearchTree.insert(5);
      binarySearchTree.insert(15);
      binarySearchTree.insert(25);
      binarySearchTree.insert(35);
      binarySearchTree.insert(2);
      binarySearchTree.insert(7);
      binarySearchTree.insert(12);
      binarySearchTree.insert(18);
      binarySearchTree.insert(22);
      binarySearchTree.insert(27);
      binarySearchTree.insert(32);
      binarySearchTree.insert(37);
      console.log(binarySearchTree);
      var results = [];
      var pushtoarray = function(node){
        results.push(node.value);
        return results;
      };
      binarySearchTree.depthFirstLog(pushtoarray);
      expect(results.length).toEqual(15);
      console.log(results);
    });
  });
  });
  // add more tests here to test the functionality of binarySearchTree
});