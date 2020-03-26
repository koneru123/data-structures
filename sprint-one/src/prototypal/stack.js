var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(Stack.stuff);

  //this.name = name;
  someInstance.storage = {};

  return someInstance;
};

Stack.stuff = {};

Stack.stuff.push = function(value) {
  var sizeVar = this.size().length;
  this.storage[sizeVar] = value;
};

Stack.stuff.pop = function() {
  var sizeVar1 = this.size().length;
  var value = this.storage[sizeVar1 - 1];
  delete this.storage[sizeVar1 - 1];
  return value;
};

Stack.stuff.size = function() {
  var result = Object.keys(this.storage);
  return result.length;
};




