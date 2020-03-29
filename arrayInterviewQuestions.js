// Create a function that reverses a string:
// 'Hi My name is Andrei' should be:
// 'ierdnA si eman yM iH'
const name = 'I am Tomiwa';

function reverse(str){
	let reverse = "";
	//looping from the back 
	for(let i = str.length - 1; i >= 0; i--) {
		reverse += str[i];
	}
	return reverse;
}

function reverse2(str) {
	return str.split(" ").reverse().join('');
}


reverse(name); // should return 'awimoT ma I'

mergeSortedArrays([0,3,4,31], [4,6,30]);
// [0, 3, 4, 4, 6, 30, 31]

function mergeSortedArrays(arr1, arr2) {
	let combinedArrays = [];
	for(let i = 0; i <= arr1.length - 1; i++){
		combinedArrays.push(arr1[i]); 
	}
	for(let i = 0; i <= arr2.length - 1; i++){
		combinedArrays.push(arr2[i]); 
	}
	for(let i = 0; i <= combinedArrays.length - 1; i++){
		for(let j = i+1; j <= combinedArrays.length - 1; j++){
			if(combinedArrays[i] > combinedArrays[j]){
				let a = combinedArrays[i];
				combinedArrays[i] = combinedArrays[j];
				combinedArrays[j] = a;
			}
		}
	}
	return combinedArrays;
}