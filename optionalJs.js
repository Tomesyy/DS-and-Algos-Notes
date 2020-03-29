// reference type
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

// object1 === object3 --> false
// object1 === object2 --> true

// context vs scope
// scope is created once it sees a curly bracket
function b() {
	let a = 4;
}
// keyword this refers to the object it is in



// instantiation
// is when you make a copy of an object and you reuse the code
class Player {
	constructor(name, type){
		this.name = name,
		this.type = type
	}
	introduce() {
		console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
	}
}

class Wizard extends Player {
	constructor(name, type){
		super(name, type)
	}
	play() {
		console.log(`WEEEEEE I'm a ${this.type}`);
	}
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic ');
