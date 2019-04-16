import React, {Component} from 'react'
import shuffle from '../utilities/shuffle'
import solvability, { findIdx, findPosition } from '../utilities/solvability'
import GamePiece from './GamePiece'
import './styles.scss'
class GameBoard extends Component {

	state = {
		pieces: []
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
		console.log("location of", num, findPosition(pieces, findIdx(pieces, num)))
		console.log("location of 0", findPosition(pieces, findIdx(pieces, 0)));
		// Get location of "0"
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