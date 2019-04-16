
// Logic for solveability taken from: https://www.defold.com/tutorials/15-puzzle/


// Returns true if the order of pieces is solveable
export default (array) => {
	let inv = countInversions(array)
	let idx = findIdx(array, 5)
	let pos = findPosition(array, idx)
	console.log("# of inversions", inv)
	console.log("idx of 5 if ", idx, array)
	console.log("pos of 5 is ", pos)
}

// Returns the number of inversions present
const countInversions = (array) => {
	let inv = 0;
	for (let i = 0; i < array.length; i++){ 
		// For each item, we want to count the number of items with a higher index and lower value
		for (let j = i + 1;  j < array.length; j++){
			if( array[i] > array[j] && array[j] !== 0 ) inv++
		}
	}
	return inv

}

//Assuming items of the array are mapped to a 4 x 4 grid
/*
Indices can be thought of as:
0  1  2  3
4  5  6  7
8  9  10 11
12 13 14 15
*/
//for a the following returns the x,y coordinates of the piece on the GameBoard
const findPosition = (array, idx) => {
	idx++
	let x, y
	x = idx - (Math.ceil((idx)/4) - 1) * 4
	y =  Math.ceil((idx) / 4) //+ 1 compensates for "0"
	return {x, y}
}

const findIdx = (array, value) => {
		return array.indexOf(value)
}