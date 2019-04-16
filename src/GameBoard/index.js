import React, {Component} from 'react'
import shuffle from '../utilities/shuffle'
import solvability, { findIdx, findPosition } from '../utilities/solvability'
import GamePiece from './GamePiece'
import './styles.scss'
class GameBoard extends Component {

	state = {
		pieces: [],
		count:0
	}

	componentDidMount = () => {
		let tiles = this.generateTiles();
		while (!solvability(tiles)){
			tiles = this.generateTiles()
		}
		this.setState({pieces:tiles})

	}
  
	generateTiles = () => {
		let tiles  = [...Array(16).keys()]
		return shuffle(tiles)
	}

	handleGamePieceClick = (num) => {
		const { pieces } = this.state
		// Get location of clicked piece
		let pidx = findIdx(pieces, num)
		let zidx = findIdx(pieces, 0)
		let p = findPosition(pieces, pidx)
		let z = findPosition(pieces, zidx)
		// console.log("location of", num, p)
		// console.log("location of 0", z)
		if(p.y === z.y && Math.abs(p.x - z.x) === 1){
			// console.log("should swap with 0, case 1")
			this.swapPieces(pieces, pidx, zidx)
		}else if(p.x === z.x && (Math.abs(p.y - z.y) === 1)){
			// console.log("should swap with 0, case 2")
			this.swapPieces(pieces, pidx, zidx)
		}else{
			console.log("no go!");
		}
		
	}

	swapPieces = (array, idx1, idx2) => {
		let tmp = array[idx1]
		array[idx1] = array[idx2]
		array[idx2] = tmp
		this.setState({pieces:array})
	}

	/*
		State tracks:
			- number of moves
			- the actual moves
			- current location of pieces on the gameboard
			- 

		Methods
			- movePiece
			- newGame/scramble


		Initialization
			- queries api for an image
			- creates tiles
			- scrambles tiles
			- checks if puzzle is solveable

	*/


	render(){
		const { pieces } = this.state
		return(
			<section>
				<h1>15 Puzzle</h1>
				<div className="GameBoard">
					{ pieces.map( piece => 	<GamePiece onClick={this.handleGamePieceClick} key={piece} num={piece}/> )}
				</div>
			</section>
		)
	}
}

export default GameBoard