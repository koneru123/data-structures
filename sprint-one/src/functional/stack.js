/* Functional instantiation: a simple "maker" pattern

Do:
Work within the src/functional/ folder
Define all functions and properties within the maker function
Don't:
Use the keyword new, the keyword this, or any prototype chains
Capitalize the maker function name
Example: The provided classes Stack and Queue already follow this pattern */

/*
push(string) - Add a string to the top of the stack
pop() - Remove and return the string on the top of the stack
size() - Return the number of items on the stack*/

var Stack = function(name) {
  var someInstance = {};
  someInstance.name = name;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var sizeVar = Object.keys(storage).length;
    storage[sizeVar] = value;
    //return storage;
  };

  someInstance.pop = function() {
    var sizeVar1 = Object.keys(storage).length;
    var value = storage[sizeVar1 - 1];
    delete storage[sizeVar1 - 1];
    return value;
  };

  someInstance.size = function() {
    var result = Object.keys(storage);
    return result.length;
  };

  return someInstance;
};

//var stack1 = Stack();
//stack1.push('a');
//stack1.push('koneru');
//stack1.pop(); //a
//stack1.size() //1
