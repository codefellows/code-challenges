/*
  This sample is a full BST and Node class so that it'll run, along with the inOrder method to run as a proof.
  The actual answer is just the reconstruct(list) method.
*/


class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

   inOrder() {

    let results = [];

    let _walk = (node) => {
      if(node.left) _walk(node.left);
      results.push(node.value);
      if(node.right) _walk(node.right);
    };
    _walk(this.root);

    return results;
  }
  
  reconstruct(list) {
  
    // List should be sorted already if it came from an in-order traversal, but just in case...
    list.sort( (a,b) => a>b ); 

    this.root = _reconstructTree(list, 0, list.length);

    function _reconstructTree( arr, start, end ) {
      if (end - start >= 1) {
        let mid = Math.floor(start + ((end - start) / 2));
        let root = new Node( arr[mid] );
        root.left = _reconstructTree(arr, start, mid);
        root.right = _reconstructTree(arr, mid+1, end);
        return root;
      }

    }
    
  }
  
}

let values = [ 3, 4, 5, 6, 7, 9, 17, 20, 22 ];
let newTree = new BinarySearchTree();
newTree.reconstruct(values);

console.log('Start With', values);
console.log('In Order(after reconstruct)', newTree.inOrder());
