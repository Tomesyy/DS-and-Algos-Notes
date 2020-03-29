// Given 2 arrays, create a function that let's a user know
// (true/false) whether these two arrays contain any common
// items 
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// should return false.
// -------------------
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// should return true.

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i'];

function compareArrays(array1, array2) {
	array1.forEach(item1 => {
		array2.forEach(item2 => {
			if(item1 === item2){
				return true;
			}
		});
	});
	return false;
}

// BETTER APPROACH

function compareArrays3(array1, array2) {
	// loop through first array and create object
	// where properties === items in the array
	let map = {};
	for (let i = 0; i < array1.length; i++){
		if(!map[array[i]]){
			const item = array1[i];
			map[item] = true;
		}
	}
	// loop through the second array and check if item
	// in the second array exists on created object.
	for(let j = 0; j < array2.length; j++){
		if(map[array2[j]]){
			return true;
		}
	}

	return false


}

// USING BUILT IN METHODS   

function compareArrays3(array1, array2) {
	return arr1.some(item => arr2.includes(item))
}

// O(a+b)