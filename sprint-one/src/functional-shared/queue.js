var Queue = function(name) {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.name = name;

  someInstance.enqueue = queueMethods.enqueue;
  someInstance.dequeue = queueMethods.dequeue;
  someInstance.size = queueMethods.size;

  return someInstance;
};

var queueMethods = {};
var storage = {};

queueMethods.enqueue = function(name) {
  this.name = name;
  var sizeVar = Object.keys(storage).length;
  storage[sizeVar] = this.name;
};

queueMethods.dequeue = function() {
  var initialDequedValue = storage[0];
  delete storage[0];
  for (var key in storage) {
    storage[key - 1] = storage[key];
  }
  var sizeVar1 = Object.keys(storage).length;
  delete storage[sizeVar1 - 1];
  return initialDequedValue;
};

queueMethods.size = function() {
  var result = Object.keys(storage);
  return result.length;
};

var queue1 = Queue();
queue1.enqueue('a');
queue1.enqueue('b');
queue1.dequeue();
queue1.enqueue('c');
console.log(queue1.dequeue()); //b

