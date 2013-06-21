describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  describe(".addToTail", function(){

    // add more tests here to test the functionality of linkedList
    it("should create a head if there is no head and have the value return correctly", function() {
      linkedList.addToTail("test");
      expect(linkedList.head.value).toEqual("test");
    });


    it("should create a tail if a head is created", function() {
      linkedList.addToTail("test");
      expect(linkedList.tail.value).toEqual("test");
    });

    it("should create a new tail if a second node is created", function() {
      linkedList.addToTail("test");
      linkedList.addToTail("test2");
      expect(linkedList.tail.value).toEqual("test2");
    });

    it("the second node should point to the third node in a three-node list", function() {
      linkedList.addToTail("test");
      linkedList.addToTail("test2");
      linkedList.addToTail("test3");
      expect(linkedList.head.next.next.value).toEqual("test3");
    });
  });

  describe(".contains", function(){

    // add more tests here to test the functionality of linkedList
    it("should return true if the linked list contains the target value", function() {
      linkedList.addToTail("test");
      expect(linkedList.contains("test")).toEqual(true);
    });

    it("should traverse all nodes to find, or not find, the target", function() {
      linkedList.addToTail("blah");
      linkedList.addToTail("what");
      linkedList.addToTail("ever");
      expect(linkedList.contains("ever")).toEqual(true);
  //    expect(linkedList.contains("doesn't exist")).toEqual(false);
    });
  });

  describe(".removeHead", function(){

    // add more tests here to test the functionality of linkedList
    it("should delete nothing if no head exists", function() {
      linkedList.removeHead();
      expect(linkedList.removeHead()).toEqual(undefined);
    });

    it("should delete head and update tail", function() {
      linkedList.addToTail("what");
      linkedList.addToTail("ever");
      linkedList.removeHead();
      expect(linkedList.head.value).toEqual("ever");
      expect(linkedList.tail.value).toEqual("ever");
    });

  });

  describe(".addToHead", function(){

    // add more tests here to test the functionality of linkedList
    it("should create a head if there is no head and have the value return correctly", function() {
      linkedList.addToHead("test");
      expect(linkedList.head.value).toEqual("test");
    });

    it("should create a new head and have that new head point to the old head", function() {
      linkedList.addToTail("test");
      linkedList.addToTail("test2");
      linkedList.addToHead("test3");
      expect(linkedList.head.value).toEqual("test3");
      expect(linkedList.head.next.value).toEqual("test");
    });

  });

  describe(".removeTail", function(){

    // add more tests here to test the functionality of linkedList
    it("should remove the last node of the linked list and return its value", function() {
      linkedList.addToTail("test");
      linkedList.addToTail("test2");
      linkedList.addToTail("test3");
      linkedList.removeTail();
      expect(linkedList.removeTail()).toEqual("test2");
    });

  });

});