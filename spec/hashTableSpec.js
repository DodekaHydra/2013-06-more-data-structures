describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = new HashTable();
  });

  it("should have methods named 'insert' and 'retrieve", function() {
    expect(hashTable.insert).toEqual(jasmine.any(Function));
    expect(hashTable.retrieve).toEqual(jasmine.any(Function));
  });
  describe(".insert", function() {

    it("should insert something into storage", function() {
      hashTable.insert("test",1);
      expect(hashTable.retrieve("test")).toEqual(1);
    });


    it("should be able to insert multiple values into storage", function() {
      hashTable.insert("first", 1);
      hashTable.insert("second", 2);
      expect(hashTable.retrieve("first")).toEqual(1);
      expect(hashTable.retrieve("second")).toEqual(2);
    });

    it("should overwrite the value at a key given a new value", function() {

      hashTable.insert("dupe",4);
      hashTable.insert("dupe",5);
      expect(hashTable.retrieve("dupe")).toEqual(4);
    });
  });
  describe(".retrieve", function() {
  });
  describe(".remove", function() {
    it("should remove the intended key", function() {
      hashTable.insert("test",1);
      hashTable.remove("test");
      expect(hashTable.retrieve("test")).toBe(undefined);
  });
    it("should *only* remove the intended key", function() {
      hashTable.insert("test",1);
      hashTable.insert("test2",2);
      hashTable.remove("test");
      expect(hashTable.retrieve("test")).toBe(undefined);
      expect(hashTable.retrieve("test2")).toBe(2);
  });
  });
  describe("collisions", function() {
    it("should throw an error when key does not exist", function() {
      hashTable.insert("test",1);
      expect(hashTable.retrieve("what's this")).toBe(undefined);
    });

    it("should stack objects to a single index in the event of a collision", function() {
      hashTable._limit = 1;
      hashTable.insert("test",1);
      hashTable.insert("test2",2);
      hashTable.insert("another val", "yay!");
      hashTable.insert("ohhhhhhh", "yeeaaaahhh");
      debugger;
      expect(hashTable.retrieve("test")).toBe(1);
      expect(hashTable.retrieve("test2")).toBe(2);
    });
});
  // add more tests here to test the functionality of hashTable
});