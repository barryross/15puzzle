import React, {Component} from 'react'
import shuffle from '../utilities/shuffle'
import GamePiece from './GamePiece'
import './styles.scss'
class GameBoard extends Component {

	state = {
		pieces: []
	}
	componentDidMount = () => {
		this.setState({pieces:this.generateTiles()})
	}

	generateTiles = () => {
		let tiles  = [...Array(16).keys()]
		return shuffle(tiles)
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
					{ pieces.map( piece => 	<GamePiece key={piece} num={piece}/> )}
				</div>
			</section>
		)
	}
}

export default GameBoard