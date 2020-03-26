var Queue = function(name) {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.name = name;
  someInstance.storage = {};

  someInstance.enqueue = queueMethods.enqueue;
  someInstance.dequeue = queueMethods.dequeue;
  someInstance.size = queueMethods.size;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(name) {
  this.name = name;
  var sizeVar = Object.keys(this.storage).length;
  this.storage[sizeVar] = this.name;
};

queueMethods.dequeue = function() {
  var initialDequedValue = this.storage[0];
  delete this.storage[0];
  for (var key in this.storage) {
    this.storage[key - 1] = this.storage[key];
  }
  var sizeVar1 = Object.keys(this.storage).length;
  delete this.storage[sizeVar1 - 1];
  return initialDequedValue;
};

queueMethods.size = function() {
  var result = Object.keys(this.storage);
  return result.length;
};

var queue1 = Queue();
queue1.enqueue('a');
queue1.enqueue('b');
queue1.dequeue();
queue1.enqueue('c');
console.log(queue1.dequeue()); //b

