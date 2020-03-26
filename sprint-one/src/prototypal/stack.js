var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);

  //this.name = name;
  someInstance.storage = {};

  return someInstance;
};

var stackMethods = {
  push: function(value) {
    var sizeVar = this.size();
    this.storage[sizeVar] = value;
  },
  pop: function() {
    var sizeVar1 = this.size();
    var value = this.storage[sizeVar1 - 1];
    delete this.storage[sizeVar1 - 1];
    return value;
  },
  size: function() {
    var result = Object.keys(this.storage);
    return result.length;
  }
};

var stack1 = Stack();
stack1.push('priya');
console.log(stack1.size());




