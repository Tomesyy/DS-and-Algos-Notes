 // In object we have keys while we have inndex in arrays

// A hash function is a function that generates a values of fixed length for each input that it gets
// IDEMPOTENT - a function given the same input will always give the same output

let user = {
	age: 54,
	name: 'Kylie',
	magic: true,
	scream: function() {
		console.log('ahhhhh!');
	}

}

user.age // O(1)
user.spell = 'abra kadabra'; // O(1)
user.scream(); // O(1)

const a = new Map();
const b = new Set();

// collison - when the hash function asign two things to the same memory address

// when you have a collison it slows down the hashtable with time complexity of
// O(n/k) - k is the length of the hashtable --> O(n) 


class HashTable {
	constructor(size){
		this.data = new Array(size);
	}

	_hash(key) {
		let hash = 0;
		for(let i = 0; i < key.length; i++){
			hash = (hash + key.charCodeAt(i) * i)
			% this.data.length
		}
		return hash;
	}

	set(key, value){
		let address = this._hash(key);
		if(!this.data[address]){
			this.data[address] = [];
		}
		this.data[address].push([key, value])
		return this.data;
	}

	get(key){
		let address = this._hash(key);
		const currentBucket = this.data[address];
		if(currentBucket){
			for(let i = 0; i < currentBucket.length; i++){
				if(currentBucket[i].includes(key)){
					return currentBucket[i][1];
				}
			}
		}
		return undefined
	}

	keys(){
		const keysArray = [];
		for(let i = 0; i < this.data.length; i++){
			if(this.data[i]) {
				keysArray.push(this.data[i][0][0]);
			}
		}
		return keysArray;
	}
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 54);
myHashTable.set('oranges', 2);
myHashTable.get('apples');
myHashTable.keys();
