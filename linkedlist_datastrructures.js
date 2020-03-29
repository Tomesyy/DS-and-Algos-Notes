// singley and doubly
 // linked list is a list that is linked
 const basket = ['apples', 'grapes', 'pears'];  


 // linked list always searchs from head node to tail node
 // linked list: apples --> grapes --> pears

 apples
 8947 --> grapes 
           8742 --> pears
                     372 --> null 

// Pointer explanation

const obj1 = { a: true };
const obj2 = obj1;

delete obj1;
// console.log('1', obj1);
console.log('2', obj2); // { a: true }

//The computer is only going to delete memory that is unused

// Building my first linked list datastructures
// 10 --> 5 --> 16
let myLinkedList = {
	head: {
		value: 10,
		next: {
			value: 5,
			next: {
				value: 16,
				next: null
			}
		}
	}
}
class Node {
	constructor(value){
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}
class LinkedList {
	constructor(value){
		this.head = {
			value: value,
			next: null
		}
		this.tail = this.head;
		this.length = 1;
	}
	append(value){
		const newNode = new Node(value);
		this.tail.next = newNode
		this.tail = newNode
		this.length ++;
		return this;
	}
	prepend(value){
		const newNode = new Node(value);
		newNode.next = this.head;
		this.length ++;
		return this;
	}
	printList(){
		const array = [];
		let currentNode = this.head;
		while(currentNode !== null){
			array.push(currentNode.value);
			currentNode = currentNode.next;
		}
		return array;
	}
	traverseToIndex(index){
		// check params
		let counter = 0;
		let currentNode = this.head;
		while(counter !== index){
			currentNode = currentNode.next;
			counter++;
		}
		return currentNode;
	}
	insert(index, value){
		if(index >= this.length){
			return this.append(value);
		}
		const newNode = new Node(value);
		const leader = this.traverseToIndex(index - 1);
		const nextUp = this.traverseToIndex(index);
		leader.next = newNode;
		newNode.next = nextUp;
		this.length++;
		return this.printList();
	}
	remove(index){ 
		const leader = this.traverseToIndex(index - 1);
		const node = this.traverseToIndex(index);
		leader.next = node.next;
		this.length --;
		return this.printList();
	}
	[1,2,3,4]
	reverse () {
		if(!this.head.next){
			return this.head;
		}
		let first = this.head;
		let second = first.next;
		while(second){
			temp = second.next;
			second.next = first;
			first = second;
			second = temp;
		}
		this.head.next = null;
		this.head = first;
		return this.printList();
	}
}



const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.prepend(1);

// Doubly Linked List
class Node {
	constructor(value){
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}
class DoublyLinkedList {
	constructor(value){
		this.head = {
			value: value,
			prev: null,
			next: null
		}
		this.tail = this.head;
		this.length = 1;
	}
	append(value){
		const newNode = new Node(value);
		newNode.prev = this.tail;
		this.tail.next = newNode;
		this.tail = newNode;
		this.length ++;
		return this;
	}
	prepend(value){
		const newNode = new Node(value);
		newNode.next = this.head;
		this.head.prev = newNode;
		this.length ++;
		return this;
	}
	printList(){
		const array = [];
		let currentNode = this.head;
		while(currentNode !== null){
			array.push(currentNode.value);
			currentNode = currentNode.next;
		}
		return array;
	}
	traverseToIndex(index){
		// check params
		let counter = 0;
		let currentNode = this.head;
		while(counter !== index){
			currentNode = currentNode.next;
			counter++;
		}
		return currentNode;
	}
	insert(index, value){
		if(index >= this.length){
			return this.append(value);
		}
		const newNode = new Node(value);
		const leader = this.traverseToIndex(index - 1);
		const nextUp = this.traverseToIndex(index);
		leader.next = newNode;
		newNode.prev = newNode;
		newNode.next = nextUp;
		this.length++;
		return this.printList();
	}
	remove(index){ 
		const leader = this.traverseToIndex(index - 1);
		const node = this.traverseToIndex(index);
		const upNext = node.next;
		leader.next = upNext;
		upNext.prev = leader;
		this.length --;
		return this.printList();
	}
}
 
// Exercise linkedList
 