/* Functional instantiation with shared methods: same as step 1, but with shared methods

Do:
Work within the src/functional-shared/ folder
Create an object that holds the methods that will be shared by all instances of the class
Use the keyword this in your methods
Use _.extend  to copy the methods onto the instance
Don't:
Use the keyword new or prototype chains
Example: functional instantiation example  */

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.storage = {};
  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;
  someInstance.size = stackMethods.size;

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(name) {
  this.name = name;
  var sizeVar = Object.keys(this.storage).length;
  this.storage[sizeVar] = this.name;
};

stackMethods.pop = function() {
  var sizeVar1 = Object.keys(this.storage).length;
  var value = this.storage[sizeVar1 - 1];
  delete this.storage[sizeVar1 - 1];
  return value;
};

stackMethods.size = function() {
  var result = Object.keys(this.storage);
  return result.length;
};

// var stack1 = Stack();
// stack1.push('priya');
// stack1.pop();
// stack1.pop();
//stack1.push('koneru');
//stack1.pop();
//console.log(stack1.size());

var stack1 = Stack();
stack1.push('a');
stack1.push('b');
stack1.pop();
console.log(stack1.size());


