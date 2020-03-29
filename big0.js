const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill',
 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(100).fill('nemo');

function findNemo(array) {
	for(let i = 0; i < array.length; i++){
		if(array[i] === 'nemo'){
			console.log('Found NEMO!');
		}
	}
}

findNemo(large); // 0(n) --> Linear Time

// 0(1) --> Constant time
const boxes = [0,1,2,3,4,5];

function compressFirstBox(boxes) {
	console.log(boxes[0]);
}

function logFirstTwoBoxes(boxes) {
	console.log(boxes[0]); // 0(1)
	console.log(boxes[1]); // 0(1)
}

logFirstTwoBoxes(boxes); // 0(2)


// exercise
function funChallenge(input) {
  let a = 10; // 0(1)
  a = 50 + 3; // 0(1)

  for (let i = 0; i < input.length; i++) { // 0(n)
    anotherFunction(); // 0(n)
    let stranger = true; // 0(n)
    a++; // 0(n)
  }
  return a; // 0(1)
}

// BIG 0(3 + 4n)

// exercise 2

function anotherFunChallenge(input) {
	let a = 5; // 0(1)
	let b = 10; // 0(1)
	let c = 50; // 0(1)
	for (let i = 0; i < input; i++){
		let x = i + 1; // 0(n)
		let y = i + 2; // 0(n)
		let z = i + 3; // 0(n)
	}
	for (let j = 0; j < input; j++) {
		let p = j * 2; // 0(n)
		let q = j * 2; // 0(n)
	}
	let whoAmI = "I don't know"; // 0(1)
}

// BIG 0(4 + 5n) --> 0(n)

// BIG 0 RULES
   
// log all pairs of array
const boxes = [1,2,3,4,5];
function logAllPairs(array) {
	for(let i = 0; i < array.length; i++){
		for(let j = 0; j < array.length; j++){
			let firstNumber = array[i].toString();
			let secondNumber = array[j].toString();
			console.log(firstNumber+secondNumber);
		}
	}
}

// BIG O(n*n) --> O(n^2)
// rule 4

function printAllNumbersThenAllPairSums(numbers) {
	console.log('these are the numbers: ');
	numbers.forEach(function(number) {
		console.log(number);
	});

	console.log('and these are their sums: ');
	numbers.forEach(function(firstNumber) {
		numbers.forEach(function(secondNumber) {
			console.log(firstNumber + secondNumber);
		});
	});
}

// O(n + n^2) --> O(n^2)



//**************************************************
// SPACE COMPLEXITY
//**************************************************

function boooo(n) {
	for(let i = 0; i < n.length; i++){
		console.log('booooo');
	}
}

booooo([1,2,3,4,5]); // SPACE COMPLEXITY OF O(1)

function arrayofHiNTimes(n) {
	let hiArray = [];
	for(let i = 0; i < n; i++){
		hiArray[i] = 'hi';
	}
	return hiArray;
}

arrayofHiNTimes(6); // SPACE COMPLEXITY OF O(n);

// EXERCISE

// find 1st, find Nth...
const array = [{
	tweet: 'hi',
    date: 2012
    }, {
    tweet: 'my',
    date; 2014
    }, {
    tweet: 'teddy',
    date: 2018
    }];

// O(n^2);

  






