var LinkedList = function() {
  var list = {};
  var storage = {};
  list.head = null;
  list.tail = null;
  //storage.head = null;
  //storage.tail = null;

  //var storage = {};

  list.addToTail = function(value) {
    // if it is the first value in the list, it will be both the head and tail
    // Time complexity: constant time
    //Node(value);
    // creating a node instance
    var node1 = Node(value);
    // if the head is null then add node1 as head and tail
    if (list.head === null) {
      list.head = node1;
      list.tail = list.head;
      node1.next = null;
      // if head is not null, then make node1 as tail
    } else {
      list.tail = node1;
      list.head.next = value;
    }
  };

  list.removeHead = function() {
    // if we remove head, the next value becomes the head
    // if you remove the last value in the list, head and tail become null
    // Time complexity: constant time
    // delete list.head;
    //list.head = list.head
    var oldHeadValue = list.head.value;
    if (list.head.next === null) {
      list.head = null;
      list.tail = null;
    } else {
      list.head.next = list.tail.next;
      list.head.value = list.tail.value;
    }
    return oldHeadValue;
  };

  list.contains = function(target) {
    // Will return true if node exists in the list
    // Will return false if it does not exist in the list
    // Time complexity: linear
    for (var key in list) {
      var response = false;
      if (list[key].value !== target) {
        continue;
      } else if (list[key].value === target) {
        response = true;
        break;
      }
    }
    return response;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

var linkedlist1 = LinkedList();
linkedlist1.addToTail(4);
linkedlist1.addToTail(5);
linkedlist1.removeHead();

/*
 * Complexity: What is the time complexity of the above functions?
 */

// How to create a node

// if node is the last one, it will have a tail

// if node is the first one, it will have a head

// if node if the middle one, remove head, remove tail, add pointer to next node and the preceeding node will have pointer to the current node.

// when finding a node, we need to return true if node is existing in the list, if not return false