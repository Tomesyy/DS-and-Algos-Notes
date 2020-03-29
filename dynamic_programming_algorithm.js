// Dynamic programming
// Momoization

// dynamic programming is just an optimization technique
// using something called CACHE

// dynamic programming is a way to solve problems by 
//breaking it down to sub-problems and storing their
// solutions incase such sub problems occurs again

// Memoization ~~~~ caching
// caching is a way to store values so you can use them
// later on

function addTo80(n){
	return n + 80;
}

let cache = {};
function memoizedAddTo80(n){
	if(n in cache){
		return cache.n;
	} else {
		cache[n] = n + 80;
	}
} 

// using closures
function memoizedAddTo80(){
	let cache = {};
	return function(n){
		if(n in cache){
			return cache.n;
		} else {
			cache[n] = n + 80;
		}
	}
}

const memiozed = memoizedAddTo80();
memiozed(5);

// Memoization is a simple way to remember the calculation
// of a solved problem so you don't have to calculate it 
// again

function fibonacci(n){
	if(n < 2){
		return n
	}
	return fibonacci(n-1) + fibonacci(n - 2);
}

function fibonacciMaster() {
	let cache = {};
	return function fib(n) {
		if(n in cache){
			return cache[n];
		} else {
			if(n < 2){
				return n;
			} else {
				cache[n] = fib(n-1) + fib(n-2);
				return cache[n];
			}
		}
	}
}

const fasterFib = fibonacciMaster();
fasterFib(10); 

// Can be divided into subproblems
// Recursive Solutions
// Are there repetitive subproblems?
// Memoize subproblems
// Demand a raise from your boss

 