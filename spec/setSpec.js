describe("set", function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).toEqual(jasmine.any(Function));
    expect(set.contains).toEqual(jasmine.any(Function));
    expect(set.remove).toEqual(jasmine.any(Function));
  });



  describe(".add", function() {
    it("Should take any string and add it to the set", function(){
    set.add("strang");
      expect(set.contains("strang")).toEqual(true);
    });

    it("Once a value is added to a set, adding it a second time should not increase the size of the set.", function() {
      set.add("strang");
      set.add("strang");
      expect(_.size(set._primitiveStorage)).toEqual(1);
    });

    it("Should accept object literals, function definitions, null, undefined, and empty arrays", function() {
      set.add({});
      set.add(function(){});
      set.add(null);
      set.add(undefined);
      set.add([]);
      expect(_.size(set._complexStorage)).toEqual(5);
    });

  });
  describe(".contains", function() {
    it("it should have a .contains() method, that takes any string and returns a boolean reflecting whether it can be found in the set ", function() {
      set.add("strang");
      expect(set.contains("strang")).toEqual(true);
    });
  });

  describe(".remove", function() {
    it("should have a .remove() method, thattakes any string and removes it from the set, if present ", function() {
      set.add("strang");
      set.remove("strang");
      expect(_.size(set._primitiveStorage)).toEqual(0);
    });
  });
});