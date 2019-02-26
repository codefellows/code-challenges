class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  reconstruct(list) {

    let _add = (arr, start, end) => {

      if (end - start >= 1) {
        let mid = Math.floor(start + ((end - start) / 2));
        let root = new Node(arr[mid]);
        root.left = _add(arr, start, mid);
        root.right = _add(arr, mid + 1, end);
        return root;
      }
      return null;
    };

    this.root = _add(list, 0, list.length);

  }

  // Call this to "prove" that the algorithm works. It should produce the same array you started with.
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

}


let list = [2,4,6,8,10,12,14,16];

let tree = new BinarySearchTree();
tree.reconstruct(list);

console.log(list);
console.log(tree.inOrder());