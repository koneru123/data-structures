var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

//var stackMethods = {};

Stack.prototype.push = function(value) {
  var sizeVar = Object.keys(this.storage).length;
  this.storage[sizeVar] = value;
};

Stack.prototype.pop = function() {
  var sizeVar1 = Object.keys(this.storage).length;
  var value = this.storage[sizeVar1 - 1];
  delete this.storage[sizeVar1 - 1];
  return value;
};

Stack.prototype.size = function() {
  var result = Object.keys(this.storage);
  return result.length;
};




