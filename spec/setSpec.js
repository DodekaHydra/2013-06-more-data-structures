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
      set.add("any string");
      expects(set._storage).toEqual("any string");
    });

    it("Once a value is added to a set, adding it a second time should not increase the size of the set.", function() {

    });
    it(" ", function() {

    });
  });
  describe(".contains", function() {
    it(" ", function() {

    });
  });

  describe(".remove", function() {
    it(" ", function() {

    });
  });
});