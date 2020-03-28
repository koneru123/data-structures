var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // Sets the value as target of node
  // Adds the node as child of the tree
  const len = this.children.length;
  if (len === 0) {
    this.children[0] = Tree(value);
  } else {
    this.children[len] = Tree(value);
  }
};

treeMethods.contains = function(target) {
  // Time complexity: linear;
  //console.log('start' + this.value + ' target=' + target);
  if (this.value === target) {
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
    return false;
  }
};

//tree.children = [{value: 5, children: []}]

//tree.children = [{value: 5, children: [{value: 22, children: []}]}, {value: 10, children: []}];

var tree = Tree();
tree.addChild(5);
tree.addChild(6);
tree.children[0].addChild(7);
tree.children[1].addChild(8);
console.log(tree.contains(7)); //true
console.log(tree.contains(8)); //true