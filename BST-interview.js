const BinarySearchTree = require('./BST');
//each child adds a 1 to the height
//when both children are null, return base case to out
//and add all of them up
function height(bst){
  let leftSide = 0;
  let rightSide = 0;
  if(!bst.left && !bst.right){
    return 1;
  }
  if(bst.left){
    leftSide = 1 + height(bst.left);
    // console.log(leftSide, 'left');
  }
  if(bst.right){
    rightSide = 1 + height(bst.right);
    // console.log(rightSide, 'right');
  }
  
  return leftSide > rightSide ? leftSide : rightSide;
}


function main(){
  const bst = new BinarySearchTree();
  bst.insert(3, null);
  bst.insert(7, null);
  bst.insert(6, null);
  bst.insert(2, null);
  bst.insert(11, null);
  bst.insert(2.5, null);
  bst.insert(13, null);
  bst.insert(20, null);

  console.log(height(bst));
}

main();