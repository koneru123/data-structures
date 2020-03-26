class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.name = name;
    this.queueMethods = {};
  }

  enqueue() {
    var sizeVar = this.size().length;
    queueMethods[sizeVar] = this.name;
  }

  dequeue() {
    var initialDequedValue = this.queueMethods[0];
    delete this.queueMethods[0];
    for (var key in this.queueMethods) {
      this.queueMethods[key - 1] = this.queueMethods[key];
    }
    var sizeVar1 = this.size().length;
    delete this.queueMethods[sizeVar1 - 1];
    return initialDequedValue;
  }

  size() {
    var result = Object.keys(this.queueMethods);
    return result.length;
  }

}
