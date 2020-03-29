// stacks - you can think about them as plates stack intop of eachother vertically 
// LIFO - last in First Out 
// the idea of browser history and the idea of undo and redo

// Queues
// FIFO - First in First Out 
// The idea of a rollercoster and the idea of ordering an uber and the
// idea of a printer - the person that prints first gets his result first

// enqueueO(1) - push (add to the first) 
// dequeueO(1) - POP(but unlike pop which removes from the back, it removes from the front)

// stacks 

// example brower history

// google 1st 
//udemy.com 2nd
//youtube 3rd 

// Queues

// Matt -- Joy -- Samir -- Pavel

// Recursion - means a function that calls itself
// A stack overflow
function foo() {
	foo();
}
 
 // Building stack
 class Node {
 	constructor(value){
 		this.value = value;
 		this.next = null;
 	}
 }

 class Stack {
 	constructor(){
 		this.top = null;
 		this.bottom = null;
 		this.length = 0;
 	}

 	peek() {
 		return this.top;

 	}
 	push(value){
 		const newNode = new Node(value);
 		if (this.bottom === null){
 			this.bottom = newNode;
 			this.top = newNode;
 			this.length ++;
 		} else {
 			const holdingPointer = this.top;
 			this.top = newNode;
 			this.top.next = holdingPointer;
 			this.length++;
 		}
 		return this;
 	}
 	pop(){
 		const holdingPointer = this.top.next;
 		delete this.top;
 		this.top = holdingPointer
 		this.length--;
 		return this;

 	}
 }

 const myStack = new Stack();
 myStack.push("google");
 myStack.push("udemy");
 myStack.push("discord");


// building a stack  with array

 class Stack {
 	constructor(){
 		this.stack = [];
 		this.length = 0;
 	}

 	peek() {
 		return this.stack[this.length - 1];

 	}
 	push(value){
 		this.stack.push(value);
 		this.length++;
 		return this;
 	}
 	pop(){
 		this.stack.pop();
 		this.length--;
 		return this;
 	}
 }


// Building queues

class Node {
	constructor(value){
		this.value = value;
		this.next = null;
	}
}

 class Queue {
 	constructor(){
 		this.first = null;
 		this.last = null;
 		this.length = 0;
 	}

 	peek() {
 		return this.first;
 	}
 	enqueue(value){
  		const newNode = new Node(); 
 		if(this.length === 0){
 			this.first = newNode;
 			this.last = newNode;
 			this.length++;
 		} else {
 			this.last.next = newNode;
 			this.last = newNode;
 			this.length++;
 		}
 		return this;
 	}
 	dequeue(){
 		const holdingPointer = this.first.next;
 		delete this.first;
 		this.first = holdingPointer;
 		this.length--;
 		return this;

 	} 
 }

 const myQueue = new Queue();