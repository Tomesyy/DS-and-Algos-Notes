 // in a graph each item is called a node or a vertex
// nodes are then connected with edges

// linked list are a type of trees
// trees are a type of graphs

// directed and undirected graphs
// directed is one direction (one way)
// undirected - you can go back and forth

// wieghted and unweighted graphs
// weighted - you can have informations on the edges
// example is google maps

// cyclic and acyclic graphs
// cyclic - like a loop

 // Edge list
 const graph = [[0,2], [2,3], [2,1], [1,3]];

 // Adjacent list - using the index as the node value
const graph = [[2], [2,3], [0,1,3], [1,2]]

// Adjacent Matrix
const graph = {
	0: [0,0,1,0],
	1: [0,0,1,1],
	2: [1,1,0,1],
	3: [0,1,1,0]
}

// Building graphs

class Graph {
	constructor() {
		this.numberOfNodes = 0;
		this.adjacentList = {};
	}
	addVertex(node){
		this.adjacentList[node] = [];
		this.numberOfNodes++;
		return this;

	}
	addEdge(node1, node2){
		this.adjacentList[node1]push(node2);
		this.adjacentList[node2]push(node1);

	}
	showConnections(){
		const allNodes = Object.keys;
		(this.adjacentList);
		for(let node of allNodes){
			let nodeConnections =
			this.adjacentList[node];
			let connections = "";
			let vertex;
			for(vertex of nodeConnections){
				connections += vertex + " ";
			}
			console.log(node + "-->" + connections);
		}
	}
}
const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1');
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '2');
myGraph.addEdge('4', '5');
myGraph.addEdge('1', '2');
myGraph.addEdge('1', '0');
myGraph.addEdge('0', '2');
myGraph.addEdge('6', '5');

myGraph.showConnections();

