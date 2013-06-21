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
      expect(tree.children[0].value).toEqual("child");
    });

    it("should be able to add two children to the parent node", function() {
      tree.addChild("parent");
      tree.addChild("child1");
      tree.addChild("child2");
      expect(tree.children[1].value).toContain("child2");
      expect(tree.children[0].value).toContain("child1");
    });

    it("should be able to add children on any level", function() {
      tree.addChild("parent");
      tree.addChild("child1");
      tree.addChild("child2");
      tree.children[1].addChild("child of child2");
      expect(tree.children[1].children[0].value).toContain("child of child2");
    });

  });
  describe(".contains", function(){
    it("should return false when there is no node", function() {
      expect(tree.contains("bubblegum")).toEqual(false);
    });

    it("should return true when the node does exist", function() {
      tree.addChild("test");
      expect(tree.contains("test")).toEqual(true);
    });

    it("should check all nodes for the value", function() {
      tree.addChild("test");
      tree.addChild("node");
      tree.addChild("another");
      tree.addChild("yeah!");
      expect(tree.contains("another")).toEqual(true);
    });

    it("should multiple levels of the tree for the value", function() {
      tree.addChild("test");
      tree.addChild("node");
      tree.children[0].addChild("nodeChild");
      expect(tree.contains("nodeChild")).toEqual(true);
    });
  });
  // Add more tests here to test the functionality of tree.
});