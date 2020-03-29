const strings = ['a', 'b', 'c', 'd'];
//using a 32bits system : 4*4 = 16 byte of storage

strings[2]

// push 
strings.push('e'); // O(1)

//pop
strings.pop(); // O(1)

//unshift
strings.unshift('x'); // O(n) - which is not the best

//splice
string.splice(2, 0, 'alien'); // O(n/2) --> O(n) 

console.log(strings);


// building an array
class MyArray {
	constructor() {
		this.length = 0;
		this.data = {};
	}

	get(index){
		return this.data[index];
	}

	push(item){
		this.data[this.length] = item;
		this.length++;
		return this.length;
	}

	pop() {
		const lastItem = this.data[this.length - 1];
		delete this.data[this.length - 1];
		this.length--;
		return lastItem;

	}

	delete(index) {
		const item = this.data[index];
		delete this.data[index];
		this.shiftItems(index);
		return item;
	}

	shiftItems(index) {
		for (let i = index; i < this.length - 1; i++) {
			this.data[i] = this.data[i+1];
		}
		delete this.data[this.length - 1]
		this.length--;
	}
}

const newArray = new MyArray();
console.log(newArray.get(0));

