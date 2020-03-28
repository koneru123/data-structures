// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

/*
storage = {5:[2,1], 2:[1,5], 1:[3,5], 3: [5,5], 4: [4,4]};

storage = {5:[2,1], 2:[1,5], 1:[3,5]}
storage = {5:[2,1], 2:[5]} */
// storage = {4: {4, 4}}

// Add a node to the graph, passing in the node's value.
// Time complexity: constant time operation
Graph.prototype.addNode = function(node) {
  var len = Object.keys(this.storage).length;
  if (!this.storage.hasOwnProperty(node)) {
    this.storage[node] = [];
  }
  //this.storage[node] = [];
  console.log(this.storage);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
// Time complexity: linear time operation
Graph.prototype.contains = function(node) {
  var doesContain = false;
  for (var key in this.storage) {
    if (parseInt(key) === node) {
      doesContain = true;
      break;
    } else {
      doesContain = false;
    }
  }
  return doesContain;
};

// Removes a node from the graph.
// Time complexity: linear time operation
Graph.prototype.removeNode = function(node) {
  var arr1 = this.storage[node];
  for (var i = 0; i < arr1.length; i++) {
    this.removeEdge(node, arr1[i]);
  }
  delete this.storage[node];

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
// Time complexity: constant time operation
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var hasEdge = false;
  for (var key in this.storage) {
    if (parseInt(key) === fromNode) {
      if (this.storage[key][0] === toNode || this.storage[key][1] === toNode) {
        hasEdge = true;
      }
    }
  }
  return hasEdge;
};

// Connects two nodes in a graph by adding an edge between them.
// Time complexity: constant time operation
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].push(toNode);
  this.storage[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
// Time complexity: constant time operation
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // create an array variable called arr1
  var arr1 = this.storage[fromNode];
  // create arr2 variable this.storage[toNode]
  var arr2 = this.storage[toNode];

  // we assign this.storage[fromNode] to that arr1
  // we loop through arr1
  for (var i = 0; i < arr1.length; i++) {
    // if individual array element is equal to toNode
    if (arr1[i] === toNode) {
      // then delete toNode from arr1
      delete arr1[i];
    }
  }

  for (var j = 0; j < arr2.length; j++) {
    // if individual array element is equal to fromNode
    if (arr2[j] === fromNode) {
      // then delete toNode from arr2
      delete arr2[j];
    }
  }

  // we loop through arr2 and check if individual array element is equal to fromNode
  // if yes, delete fromNode from arr2
};
// storage = {4: [2, 5], 5: [3, 4], 2: [], 3: []};
// storage = {4: [2], 5: [3], 2: [], 3: []};

// Pass in a callback which will be executed on each node of the graph.
// Time complexity: linear time operation
Graph.prototype.forEachNode = function(cb) {
  for (let key in this.storage) {
    cb(this.key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var graph = new Graph();
graph.addNode(4);
graph.addNode(5);
graph.addEdge(5, 4);
console.log(graph.hasEdge(4, 5)); // true
graph.removeNode(5);
console.log(graph.hasEdge(4, 5)); // false
/* graph.addEdge(5, 4);
console.log(graph.hasEdge(4, 5));//true
graph.removeEdge(4, 5);
//graph.removeNode(5);
console.log(graph.hasEdge(4, 5));//false */