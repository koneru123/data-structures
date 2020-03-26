var Stack = function(name) {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(Stack.prototype);

  someInstance.name = name;

  return someInstance;
};

var stackMethods = {};
//var storage = {};

Stack.prototype.push = function(name) {
  this.name = name;
  var sizeVar = this.size().length;
  stackMethods[sizeVar] = this.name;
};

Stack.prototype.pop = function() {
  var sizeVar1 = this.size().length;
  var value = stackMethods[sizeVar1 - 1];
  delete stackMethods[sizeVar1 - 1];
  return value;
};

Stack.prototype.size = function() {
  var result = Object.keys(stackMethods);
  return result.length;
};

var stack1 = Stack();


