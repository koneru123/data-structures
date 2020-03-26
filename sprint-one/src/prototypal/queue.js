var Queue = function(name) {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);

  someInstance.storage = {};

  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    var sizeVar = this.size();
    this.storage[sizeVar] = value;
  },
  dequeue: function() {
    var initialDequedValue = this.storage[0];
    delete this.storage[0];
    for (var key in this.storage) {
      this.storage[key - 1] = this.storage[key];
    }
    var sizeVar1 = Object.keys(this.storage).length;
    delete this.storage[sizeVar1 - 1];
    return initialDequedValue;
  },
  size: function() {
    var result = Object.keys(this.storage);
    return result.length;
  }
};

/* Queue.prototype.enqueue = function(name) {
  this.name = name;
  var sizeVar = Object.keys(queueMethods).length;
  queueMethods[sizeVar] = this.name;
};

Queue.prototype.dequeue = function() {
  var initialDequedValue = queueMethods[0];
  delete queueMethods[0];
  for (var key in queueMethods) {
    queueMethods[key - 1] = queueMethods[key];
  }
  var sizeVar1 = Object.keys(queueMethods).length;
  delete queueMethods[sizeVar1 - 1];
  return initialDequedValue;
};

Queue.prototype.size = function() {
  var result = Object.keys(queueMethods);
  return result.length;
}; */


