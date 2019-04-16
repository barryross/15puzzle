import React, {Component} from 'react'
import shuffle from '../utilities/shuffle'
import solvability, { countInversions, findIdx, findPosition } from '../utilities/solvability'
import GamePiece from './GamePiece'
import './styles.scss'
class GameBoard extends Component {

	state = {
		pieces: [],
		moves:0,
		inversions:null
	}

	componentDidMount = () => {
		let tiles = this.generateTiles();
		while (!solvability(tiles)){
			tiles = this.generateTiles()
		}
		this.setState({pieces:tiles, inversions:countInversions(tiles)})
	}
  
	generateTiles = () => {
		let tiles  = [...Array(16).keys()]
		tiles =  shuffle(tiles)
		return tiles
	}

	handleGamePieceClick = (num) => {
		const { pieces } = this.state
		this.setState(state =>{
			return {
				moves:state.moves+1,
				inversions: countInversions(pieces)
			}
		})

		let pidx = findIdx(pieces, num)
		let zidx = findIdx(pieces, 0)
		let p = findPosition(pieces, pidx)
		let z = findPosition(pieces, zidx)

		if(p.y === z.y && Math.abs(p.x - z.x) === 1){
			this.swapPieces(pieces, pidx, zidx)
		}else if(p.x === z.x && (Math.abs(p.y - z.y) === 1)){
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

	render(){
		const { pieces, moves, inversions } = this.state
		return(
			<section className="GameBoard-container">
				<header>Moves : {moves}  Inversions: {inversions} </header>
				<div className="GameBoard">
					{ pieces.map( piece => 	<GamePiece onClick={this.handleGamePieceClick} key={piece} num={piece}/> )}
				</div>
			</section>
		)
	}
}

export default GameBoard