// searching and traversal
// breadth first seraching - BFS
// depth first searching - DFS
// linear search
// binary search

// linear search - time complexity O(n);
const beasts = ['Centaur', 'Godzilla', 'Mosura', 'Minotaur', 'Hydra', 'Nessie'];

beasts.indexOf("Godzilla") // return 1

beasts.findIndex(function(item) {
	return item === 'Godzilla';
}); // return Godzilla

beasts.find(function(item){
	return item === 'Godzilla';
}); // returns Godzilla

beasts.includes('Godzilla');

// binary search
// O(log n)

// Traversal - can be thought of as visiting every node

// Breadth first Search - BFS - moving from left to right
// Depth first Search - DFS

//       9
//    4     20
// 1    6 15   170
BFS [9, 4, 20, 1, 6, 15, 170];
DFS [9, 4, 1, 6, 20, 15, 170];

// when you use each
// time complexity is the same for all traversals
// closer path ---- more memory - BFS
// less memory ---- can get slow  

// QUICK EXERCISE

// If you know a solution is not far from the root of the 
// tree: 
BFS

// If the tree is very deep and solutions are rare:
BFS

// if the tree is very wide:
DFS

// if solutions are frequent but located deep in the tree: 
DFS

// determining whether a path exists between two nodes:
DFS


// finding the shortest path: 
BFS


// coding exercise

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
	breadthFirstSearch(){
		let currentNode = this.root;
		let list = [];
		let queue = [];
		queue.push(currentNode);

		while(queue.length > 0){
			currentNode = queue.shift();
			list.push(currentNode.value);
			if(currentNode.left){ 
				queue.push(currentNode.left)
			}
			if(currentNode.right){
				queue.push(currentNode.right);
			}
		}
		return list;
	}
	breadthFirstSearchRecursive(queue, list) {
		if(queue.length === 0){
			return list 
		}
		const currentNode = queue.shift();
		list.push(currentNode.value);
		if(currentNode.left){
			queue.push(currentNode.left)
		}
		if(currentNode.right){
			queue.push(currentNode.right);
		}
		return this.breadthFirstSearchRecursive(queue, list);
	}

	// DFS can be return in 3 ways
	//       9
	//    4     20
	// 1    6 15   170
	// InOrder - [1, 4, 6, 9, 15, 20, 170];
	// PreOrder - [9, 4, 1, 6, 20, 15, 170];
	// PostOrder - [1, 6, 4, 15, 170, 20, 9];
	DFSInOrder() {
		return traverseInOrder(this.root, [])
	}
	DFSPreOrder() {
		return traversePostOrder(this.root, [])		
	}
	DFSPostOrder() {
		return traversePreOrder(this.root, [])
	}


}

// DFS can be return in 3 ways
	//       9
	//    4     20
	// 1    6 15   170
	// InOrder - [1, 4, 6, 9, 15, 20, 170];
	// PreOrder - [9, 4, 1, 6, 20, 15, 170];
	// PostOrder - [1, 6, 4, 15, 170, 20, 9];



function traverseInOrder(node, list){
	if(node.left){
		traverseInOrder(node.left, list);
	}
	list.push(node.value);
	if(node.right){
		traverseInOrder(node.left, list);
	}
	return list;
}
function traversePreOrder (node, list){
	list.push(node.value);
	if(node.left){
		traversePreOrder(node.left, list);
	}
	if(node.right){
		traversePreOrder(node.right, list);
	}
	return list;
}
traversePreOrder(9, []);
traversePreOrder(4, [9]);

//       9
//    4     20
// 1    6 15   170
function traversePostOrder(node, list){
	if(node.left){
		traversePostOrder(node.left, list);
	}
	if(node.right){
		traversePostOrder(node.right, list);
	} 
	list.push(node.value);
	return list;
}
const tree = new BinarySearchTree();
tree.breadthFirstSearch();
tree.breadthFirstSearchRecursive([tree.root], []);


// shortest path
// they allow us to find the shortest path of a weighted graph

// Bellman-Ford algorithm O(n^2) - is very effective for solving 
// shortest path because it can accept negative wieghted graph

// Dijstra - bellman can take more time to run. Dijstra 
// run faster 

// in other shortest path we dont consider the weights 
// on the edges - example google maps for traffic










var newArr = [];

function recursivelyReverseAnArray(array){
	if(array.length === 0){
		return newArr;
	}
	let value = array.pop();
	newArr.push(value);
	recursivelyReverseAnArray(array);
}
