/*enqueue(string) - Add a string to the back of the queue
dequeue() - Remove and return the string at the front of the queue
size() - Return the number of items in the queue*/

//i
//o
var Queue = function(name) {
  var someInstance = {};
  someInstance.name = name;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.enqueue = function(value) {
    var sizeVar = Object.keys(storage).length;
    storage[sizeVar] = value;
    //console.log(storage);
  };

  someInstance.dequeue = function() {
    var initialDequedValue = storage[0];
    delete storage[0];
    for (var key in storage) {
      storage[key-1] = storage[key];
    }
    var sizeVar1 = Object.keys(storage).length;
    delete storage[sizeVar1 - 1];
    return initialDequedValue;
  };

  someInstance.size = function() {
    var result = Object.keys(storage);
    return result.length;
  };

  return someInstance;
};

//var queue1 = Queue();
// queue1.enqueue('priya');
// queue1.enqueue('koneru');
// console.log(queue1.size());
// queue1.dequeue();
// queue1.dequeue();
// console.log(queue1.size()); //0
