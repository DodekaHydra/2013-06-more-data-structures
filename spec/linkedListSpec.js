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

  });
});