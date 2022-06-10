// author: JB Tellez
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  append(value) {

    if (!this.root) {
      this.root = new Node(value);
      return;
    }

    let currentNode = this.root;
    const newNode = new Node(value);

    while (currentNode) {
      if (isLess(newNode, currentNode)) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  findNearestNeighbor(storiesCount) {

    if(!this.root) {
      throw new Error('Bad thing happened');
      return;
    }
    let current = this.root;

    let closest = this.root;

    while(current) {

      if(current.value.stories === storiesCount) {

        return current.value.hours;

      } else {

        if(Math.abs(current.value.stories - storiesCount) < Math.abs(closest.value.stories - storiesCount)) {
          closest = current;
        }
        
        if(storiesCount < current.value.stories) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
    }

    return closest.value.hours;

  }
}

function isLess(a, b) {
  return a.value.stories < b.value.stories;
}

// NOTE: Node's value is an object with shape {stories: int, hours: int}
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let tree = new BinarySearchTree();

tree.append({
  stories: 153,
  hours: 612
});
tree.append({
  stories: 117,
  hours: 502
});
tree.append({
  stories: 186,
  hours: 637
});
tree.append({
  stories: 222,
  hours: 1138
});
tree.append({
  stories: 84,
  hours: 420
});
tree.append({
  stories: 138,
  hours: 690
});
tree.append({
  stories: 142,
  hours: 536
});

console.log(tree.findNearestNeighbor(149));
