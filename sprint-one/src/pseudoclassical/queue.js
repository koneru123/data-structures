var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

//var queueMethods = {};

Queue.prototype.enqueue = function(value) {
  var sizeVar = Object.keys(this.storage).length;
  this.storage[sizeVar] = value;
  console.log(this.storage);
};

Queue.prototype.dequeue = function() {
  var initialDequedValue = this.storage[0];
  delete this.storage[0];
  for (var key in this.storage) {
    this.storage[key - 1] = this.storage[key];
  }
  var sizeVar1 = Object.keys(this.storage).length;
  delete this.storage[sizeVar1 - 1];
  return initialDequedValue;
};

Queue.prototype.size = function() {
  var result = Object.keys(this.storage);
  return result.length;
};

var queue1 = new Queue();
queue1.enqueue('a');
console.log(queue1.dequeue());