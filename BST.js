class BinarySearchTree{
  constructor(key = null, value= null, parent = null){
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }
  insert(key , value){
    //if tree is empty then this key being inserted is root
    if(this.key === null){
      this.key = key;
      this.value = value;
    }
    else if(key < this.key){
      //if the existing node does not have any left child (null),
      //then we can just add the new node
      if(this.left === null){
        this.left = new BinarySearchTree(key, value, this);
      }
      else {
        //if existing, call insert to recursive again
        this.left.insert(key, value);
      }
    }
    else {
      if (this.right === null){
        this.right = new BinarySearchTree(key , value, this);
      }
      else {
        this.right.insert(key , value);
      }
    }
  }
  find(key){
    //if the item found is at the root, return value
    if(this.key === key){
      return this.value;
    }
    else if ( key < this.key && this.left){
      return this.left.find(key);
    }
    else if(key > this.key && this.right){
      return this.right.find(key);
    }
    else {
      throw new Error('Key Error');
    }
  }
  remove(key){
    if(this.key === key){
      if(this.left && this.left){
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      }
      //if the node only has a left child, 
      //then replace node w/ its left
      else if(this.left){
        this._replaceWith(this.left);
      }
      //replace w/ right child
      else if(this.right){
        this._replaceWith(this.left);
      }
      //remove and call references to it by passing null
      else{
        this._replaceWith(null);
      }
    }
    else if(key < this.key && this.left){
      this.left.remove(key);
    }
    else if(key > this.key && this.right ){
      this.right.remove(key);
    }
    else{
      throw new Error('Key Error');
    }
  }
  _replaceWith(node){
    if (this.parent) {
      if (this === this.parent.left) {
        this.parent.left = node;
      }
      else if (this === this.parent.right) {
        this.parent.right = node;
      }

      if (node) {
        node.parent = this.parent;
      }
    }
    else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      }
      else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  } 
  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }
  _findMax(){
    if(!this.right){
      return this;
    }
    return this.right_findMax();
  }
}


module.exports = BinarySearchTree;