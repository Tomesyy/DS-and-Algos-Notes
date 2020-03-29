// sorting algorithm 
const letters = ['a', 'd', 'z', 'e', 'r', 'b'];
const basket = [2, 65, 34, 2, 1, 7, 8];

// Bubble Sort 
// Insertion Sort 
// Selection Sort
// Merge Sort
// Quick Sort

// Bubble Sort

function bubbleSort(array){ // time complexity of O(n^2)
	for(let i = 0; i < array.length; i++){
		for(let j = i + 1; j < array.length; i++){
			if(array[i] > array[j]){
				let temp = array[j];
				array[j] = array[i];
				array[i] = temp;
			}
		}
		
	}
}

// Selection Sort
function selectionSort(array){ // time complexity of O(n^2);
	for(let i = 0; i < array.length; i++){
		let smallest = array[i];
		let position = i;
		for(let j = i+1; j < array.length; j++){
			if(array[j] < smallest){
				smallest = array[j];
				position = j;
			}
		}
		let temp = array[i];
		array[i] = smallest;
		array[position] = temp;
	}
	return array;
}

// Insertion Sort
function insertionSort(array){
	for(let i = 0; i < array.length; i++){
		if(array[i] < array[0]){
			array.unshift(array.splice(i, 1)[0]);
		} else {
			for(let j = 1; j < i; j++){
				if(array[i] > array[j-1] && array[i] < array[j]){
					array.splice(j, 0, array.splice(i,1)[0]);
				}
			}
		}
	}
}

// Merge Sort
// is one of the most efficient ways to solve a list

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array){
	if(array.length === 1){
		return array
	}
	// split array in into right and left
	let length = array.length;
	let middle = Math.floor(array.length / 2);
	let left = array.slice(0, middle);
	let right = array.slice(middle, length);


	return merge(
		mergeSort(left),
		mergeSort(right)
	)
}

function merge(left, right){
	// comparison 
	const result = [];
	let leftIndex = 0;
	let rightIndex = 0;
	while(leftIndex < left.length && rightIndex < right.length){
		if(left[leftIndex] < right[rightIndex]){
			result.push(left[leftIndex]);
			leftIndex++
		} else{
			result.push(right[rightIndex]);
			rightIndex++
		}
	}
	return result.concat(left.slice(leftIndex).concat(right.slice(rightIndex)));
}

// Quick sort
// pick a pivid 
// is pretty much the best to use but it has a very bad worst case
// where the pivid is the highest value in the array  thereby
// having to compare through the whole array 

// insertion should be used with only a few items
// you are never going to use bubble sort
// selection sort too 
// merge sort is pretty good except youre bothered about space complexity
// quick sort is better than mergesort with less space complaxity but the worst case is bad if you dont pick your pivid properly
 
// non-commparison sorting -- counting sort and radix
// they only work with numbers and the range of the numbers go from 1 to 100
// wont work on any type of data


// sorting exercise

//1. - sort 10 schools aroung your house by distance:
 insertion sort 

// 2. eBay sorts listings by the current Bid amount:
radix or counting 

// 3. Sport scores on ESPN
quick sort

// 4. Massive database(cant fit all into memory) needs to 
// sort through past years users data
Merge sort

// 5. almost sorted Udemy review data needs to update and add
// 2 new reviews
insertion sort

// 6. temperature records for the past 50 years in 
//canada
radix counting sort 

// 7. large user name database n
//needs to be sorted. data is very 
Quick sort

// you want to teach sorting for the first time
Buuble sort
 