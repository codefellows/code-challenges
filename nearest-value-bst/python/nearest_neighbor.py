class BinarySearchTree(LoggingThing, BinaryTree):
    def __init__(self):
        self.root = None

    def insert(self, value):
        node = Node(value)

        if not self.root:
            self.root = node
            return

        current = self.root

        while current:

            if value < current.value:

                if current.left:
                    current = current.left
                else:
                    current.left = node
                    break

            else:
                if current.right:
                    current = current.right
                else:
                    current.right = node
                    break
  

class Node:

    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right



def find_nearest_neighbor(tree, target):

    def get_closest_node(node, target, closest = None):

        if not node:
            return closest

        closest = closest or node

        closest_distance = abs(closest.value - target)

        current_distance = abs(node.value - target)

        if current_distance == 0:
        
            return node
        
        elif current_distance < closest_distance:

            closest = node

        if target < node.value:
            return get_closest_node(node.left, target, closest)
        else:
            return get_closest_node(node.right, target, closest)
        
        
        return closest

    closest_node = get_closest_node(tree.root, target)

    if closest_node:
        return closest_node.value

    raise ValueError('bunk')


def find_nearest_neighbor_iterative(tree, val):
    
    closest = float('inf')

    neighbor = None
    
    current = tree.root
    
    while current:
        
        distance = abs(current.value - val)

        if distance == 0:
            return current.value

        if distance < closest:
            neighbor = current
            closest = distance
 
        if val < current.value:
            current = current.left
        else:
            current = current.right

    
    return neighbor and neighbor.value

    