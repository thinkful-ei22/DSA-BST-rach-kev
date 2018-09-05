const BinarySearchTree = require('./BST');
//each child adds a 1 to the height
//when both children are null, return base case to out
//and add all of them up
function height(bst) {
  let leftSide = 0;
  let rightSide = 0;
  if (!bst.left && !bst.right) {
    return 1;
  }
  if (bst.left) {
    leftSide = 1 + height(bst.left);
    // console.log(leftSide, 'left');
  }
  if (bst.right) {
    rightSide = 1 + height(bst.right);
    // console.log(rightSide, 'right');
  }

  return leftSide > rightSide ? leftSide : rightSide;
}


//is it BST?
/* BST v BT -- check if left side increments from root to end getting smaller 
and if right side gets bigger

check if left child is less than the parent
check if right child is greater than the parent
*/


function isSearchTree(bst, min, max) {
  if(min !== undefined && bst.key < min){
    return false;
  }
  if(max !== undefined && bst.key > max){
    return false;
  }
  if (bst.left && !isSearchTree(bst.left, min, bst.key)){
    return false;
  }
  // console.log(leftSide, 'left');
  if (bst.right && !isSearchTree(bst.right, bst.key, max)){ 
    return false;
  }
  return true;
}

function main() {
  const bst = new BinarySearchTree();
  bst.insert(3, null);
  bst.insert(7, null);
  bst.insert(6, null);
  bst.insert(2, null);
  bst.insert(11, null);
  bst.insert(2.5, null);
  bst.insert(13, null);
  bst.insert(20, null);
  // console.log(bst);
  //console.log(height(bst));
  console.log(JSON.stringify(
    isSearchTree(bst, 2, 20), null, 2)
  );
}

main();