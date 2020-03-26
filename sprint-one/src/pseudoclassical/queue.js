var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {};

Queue.prototype.enqueue = function(name) {
  this.name = name;
  var sizeVar = this.size().length;
  queueMethods[sizeVar] = this.name;
};

Queue.prototype.dequeue = function() {
  var initialDequedValue = queueMethods[0];
  delete queueMethods[0];
  for (var key in queueMethods) {
    queueMethods[key - 1] = queueMethods[key];
  }
  var sizeVar1 = this.size().length;
  delete queueMethods[sizeVar1 - 1];
  return initialDequedValue;
};

Queue.prototype.size = function() {
  var result = Object.keys(queueMethods);
  return result.length;
};
