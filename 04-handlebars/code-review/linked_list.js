'use strict';

function Node (value, next){
  this.value = values;
  this.next = next;
};

// [5] -> [6] -> [3] -> [18]
// ['apple'] -> ['turkey'] -> ['pie'] -> ['pb&j']

function LinkedList(){
  this.head = null;
}
LinkedList.prototype.push = function(value){
  this.head = new Node(value, this.head);
};
LinkedList.prototype.display = function(){
  // visualize whatever data is in your linked list as a string.
  // ex: [5] -> [6] -> [3] -> [18]
  /*
  var list = new LinkedList();
  list.push(18);
  list.push(3);
  list.push(6);
  list.push(5);
  list.display() returns '[5] -> [6] -> [3] -> [18]'
  */
};
