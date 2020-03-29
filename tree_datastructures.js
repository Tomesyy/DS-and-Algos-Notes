// Tree datastructure
// Binary tree
// each node can only have 0 1 or 2 node and each child can only have one parent
// perfect binary tree - all leaf nodes are full... a node either 0 children
// or 2 children and 
// full binary tree - simply says that a node has 0 or 2 children

// properties of a perfect binary tree
// the number of node doubles as we move downward
// the number of node on the last level equals the all nodes
// on the upper levels plus 1


// O(log N)
level 0: 2^0 = 1;
level 1: 2^1 = 2;
level 2: 2^2 = 4;
level 3: 2^3 = 8;

number of nodes = 2^h - 1;
log nodes = steps;








// Binary search tree
// rules
// All child node to the right of the root node must be 
// greater than the root node
// A node can only have up to 2 children

// balanced bst vs unbalanced bst
// unbalanced bst when it acts like a linked list 
// with big o notation of o(n)

class Node {
	constructor(value){   
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree{
	constructor(){
		this.root = null;
	}
	insert(value){
		const newNode = new Node(value);
		if(this.root === null){
			this.root = newNode;
			return this
		} else {
			let newRoot = this.root;
			while(true){
				if(newNode.value > newRoot.value){
					if(!newRoot.right){
						newRoot.right = newNode;
						return this;
					}
					newRoot = newRoot.right;
				} else {
					if(!newRoot.left){
						newRoot.left = newNode;
						return this
					}
					newRoot = newRoot.left;
				}
			}
		}
	}
	lookup(value){
		let currentNode = this.root;
		while(currentNode){
			if(value === currentNode.value){
				return currentNode;
			} else if(value > currentNode.value){
				currentNode = currentNode.right;
			} else if (value < currentNode.value){
				currentNode = currentNode.left;
			}
		}
		return false;
	}
	remove(value){

	}

}

const tree = new BinarySearchTree();
JSON.stringify(traverse(tree.root));


function traverse(node){
	const tree = { value: node.value};
	tree.left = node.left === null ? null : traverse(node.left);
	tree.right = node.right === null ? null : traverse(node.right);
	return tree;
}

// Red black tree
//avl trees
// they are used to balance trees


// another type of tree
// heap
// binary heap - every child belongs to a parent that has 
// a greater value(more priority)
// we dont have to think of balancing 
// priority queue 

// Trie
// it is used for searching most often with text
// it is used searching a dictionary and auto prediction








