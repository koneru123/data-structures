class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(name) {
    this.name = name;
    this.storage = {};
  }

  push(value) {
    var sizeVar = Object.keys(this.storage).length;
    this.storage[sizeVar] = value;
    //console.log(this.storage);
  }

  pop() {
    var sizeVar1 = Object.keys(this.storage).length;
    var value = this.storage[sizeVar1 - 1];
    delete this.storage[sizeVar1 - 1];
    return value;
  }

  size() {
    var result = Object.keys(this.storage);
    console.log(result.length);
    return result.length;
  }
}

const stack1 = new Stack();
stack1.push('priya');
stack1.push('koneru');
stack1.pop();
console.log(stack1.size());