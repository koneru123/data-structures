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
    this.storage[node] = [node, node];
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
  //if (this.storage.hasOwnProperty(node)) {
  delete this.storage[node];
  //this.storage.removeEdge(node)
  //if (this.storage.contains(node)) {
  for (var key in this.storage) {
    for (var i = 0; i < this.storage[key].length; i++) {
      if (this.storage.hasEdge(node, this.storage[key][i])) {
        this.storage.removeEdge(node, this.storage[key][i]);
      }
    }
  }

  //}

  //}
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
  this.storage[fromNode] = [toNode];
  this.storage[toNode] = [fromNode];
};

// Remove an edge between any two specified (by value) nodes.
// Time complexity: constant time operation
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //var val1 = this.storage[fromNode];
  //var val2 = this.storage[toNode];
  delete this.storage[fromNode];
  delete this.storage[toNode];
  //this.storage[toNode] = [fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
// Time complexity: linear time operation
Graph.prototype.forEachNode = function(cb) {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var graph = new Graph();
graph.addNode(4);
graph.addNode(5);
graph.addEdge(5, 4);
console.log(graph.hasEdge(4, 5));//true
graph.removeNode(5);
console.log(graph.hasEdge(4, 5));//false