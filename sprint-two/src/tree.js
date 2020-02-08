var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  extend(newTree, treeMethods);
  return newTree;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // var child = new Tree(5)
  // this.children.push(child);
  var newChild = new Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {

  for (var i = 0; i < this.children.length; i++){
    if (this.children[i].value === target){
      return true;
    }
  }

  return false;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
