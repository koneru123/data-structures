class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(name) {
    this.name = name;
    this.stackMethods = {};
  }

  push() {
    this.name = name;
    var sizeVar = this.size().length;
    this.stackMethods[sizeVar] = this.name;
  }

  pop() {
    var sizeVar1 = Object.keys(stackMethods).length;
    var value = this.stackMethods[sizeVar1 - 1];
    delete this.stackMethods[sizeVar1 - 1];
    return value;
  }

  size() {
    var result = Object.keys(this.stackMethods);
    return result.length;
  }
}