/*
If N is even, puzzle instance is solvable if
the blank is on an even row counting from the bottom (second-last, fourth-last, etc.) and number of inversions is odd.
the blank is on an odd row counting from the bottom (last, third-last, fifth-last, etc.) and number of inversions is even.
*/

// Returns true if the order of pieces is solveable
export const isSolveable = (array) => {
	let inv = countInversions(array)
	let idxZero = findIdx(array, 0) //0 represents empty square
	let posZero = findPosition(idxZero)

	if (posZero.y % 2 === 1 && inv % 2 === 0){
		console.log("solveable!")
		return true
	}else if (posZero.y % 2 === 0 && inv % 2 === 1){
		console.log("solveable!")
		return true
	}else{
		console.log("not solveable!")
		return false
	}
	
}

export const isSwappable = (posPiece, posZero, pieces) =>{
	if(posPiece.y === posZero.y && Math.abs(posPiece.x - posZero.x) === 1){
		return true
	}else if(posPiece.x === posZero.x && (Math.abs(posPiece.y - posZero.y) === 1)){
		return true
	}else{
		return false
	}
}

/* Returns the number of inversions present 
(i.e. number of times a larger number appears before a smaller one)
*/
export const countInversions = (array) => {
	let inv = 0;
	for (let i = 0; i < array.length; i++){ 
		// For each item, we want to count the number of items with a higher index and lower value
		for (let j = i + 1;  j < array.length; j++){
			if( array[i] > array[j] && array[j] !== 0 ) inv++
		}
	}
	return inv
}


/*
Given a 4 x 4 matrix that looks like

00 01 02 03 
04 05 06 07 
08 09 10 11
12 13 14 15

Provided an integer, 0...15, the function returns the (x,y) coordinates for that integer
where the bottom-left is (1,1) and the top-right is (4,4)

*/

export const findPosition = (idx) => {
	idx++
	let x, y
	x = idx - (Math.ceil((idx)/4) - 1) * 4
	y =  5 - Math.ceil((idx) / 4) //+ 1 compensates for "0"
	return {x, y}
}


/* Provided an array of integers (array), and an integer (value), the following
returns the index of the value in the array, or -1 if not present
*/
export const findIdx = (array, value) => {
		return array.indexOf(value)
}