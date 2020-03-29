// recursion is a function that refers to itself inside of the function
 
// recursive function
// recursion is good for task that have repeated sub-task to do
// stackoverflow - a problem with recursion
// every recursion should have a base case


 function inception() {
 	inception();
 }
// adding a base case
let counter = 0;
function inception(){
	debugger;
	if(counter > 3){
		return 'done';
	}
	counter++; 
	return inception();
}

// rules
// identify the base case 
// identify the recursive case
// get closer and closer and return when needed.
// usually you have 3 returns.

let answer = 1;
function findFactorialRecursive(number){
	//code here
	if(number < 1){
		let finalAnswer = answer;
		answer = 1;
		return finalAnswer;
	}
	answer *= number;
	number--;
	return findFactorialRecursive(number);
}

// alternative method
function findFactorialRecursive(number){
	if(number === 2){
		return 2;
	}
	return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number){ 
	//code here
	let answer = 1;
	for(i = number; i > 0; i--){
		answer *= i;
	}

	return answer;
}

// EXERCISE FIBONACCI
function fibonacciIterative(n){
	//code here
	let arr = [0, 1];
	for (let i = 2; i < n - 1; i ++){
		arr.push(arr[i-2] + arr[i-1]);
	}
	return arr[n]  
}

function fibonacciIterativeRecursive(n){
	//code here 
	if(n < 2){
		return n
	}
	return fibonacciIterativeRecursive(n-1) + fibonacciIterativeRecursive(n-2);

} 

// anything that can be done recursively can be done iteratively(loop)

function fibonacciIterative(n){
	let arr = [0,1];
	for(let i = 2; i < n+1; i++){
		arr.push(arr[i-1] + arr[i-2])
	}
	return arr[n];
}

// tail call optimization - it allows javascript(es6) to do recursion
// without increasing the call stack

// when to use recursion
// everytime we are using a tree or converting soemthing
// into a tree, consider recursion

// exercises

// exercise reverse a string using iterative and recursive
// iterative
function reverseStringIterative(word){
	let answer = "";
	for(let i = word.length - 1; i >= 0; i--){
		answer += word[i];
	}
	return answer;
}

// Recursive
let counter = 0;
function reverseStringRecursive(string){
	let single = string[string.length - counter - 1];
	if(counter > string.length - 2){
		return single;
	}
	counter++;
	return single + reverseStringRecursive(string);

}
