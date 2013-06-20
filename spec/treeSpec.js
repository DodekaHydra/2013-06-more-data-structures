describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });

  describe(".addChild", function(){
    it("should be able to add a child to an empty tree", function() {
      tree.addChild("test");
      expect(tree.value).toEqual("test");
    });

    it("should be able to add a child to a node", function() {
      tree.addChild("test");
      tree.addChild("child");
      expect(tree.children.value).toEqual("child");
    });

    it("should be able to add two children to the parent node", function() {
      tree.addChild("parent");
      tree.addChild("child1");
      tree.addChild("child2");
      expect(tree.children).toContain("child2");
      expect(tree.children).toContain("child1");
    });
  });

  // Add more tests here to test the functionality of tree.
});