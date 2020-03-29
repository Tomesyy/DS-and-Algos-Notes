// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4];
// it should return 2

// Given an array = [2,1,1,2,3,5,1,2,4];
// it should return 1
function reocurring(){
	array.forEach(array)
}

//Given an array = [2,3,4,5];
// it should return undefined

function reoccurring(arr){
	for(let i = 0; i < arr.length; i++){
		for(j = i+1; j < arr.length; j++){
			if(arr[i] === arr[j]){
				return arr[i]
			}
		}
	}
	return undefined
} // O(n^2)
// O(1)

function reoccurring2(arr){
	let map = {};
	for(let i = 0; i < arr.length; i++){
		if(map[arr[i]] !== undefined){
			return arr[i];
		} else {
			map[input[i]] = i;
		}
	}
	return undefined;
} // O(n)