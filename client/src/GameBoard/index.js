import React, {Component} from 'react'
import shuffle from '../utilities/shuffle'
import solvability, { countInversions, findIdx, findPosition } from '../utilities/solvability'
import GamePiece from './GamePiece'
import axios from 'axios'
import './styles.scss'
class GameBoard extends Component {

	state = {
		pieces: [],
		moves:0,
		inversions:null,
		posZero:null
	}

	 componentDidMount = async () => {
		// let response =  await axios.get('/api/photos/random')
		// console.log("RESPONSE", response)
		let tiles = this.generateTiles();
		// while (!solvability(tiles)){
		// 	tiles = this.generateTiles()
		// }
		this.setState({pieces:tiles, inversions:countInversions(tiles)})
	}
  
	generateTiles = () => {
	// 	let tiles  = [...Array(16).keys()]
	// 	tiles =  shuffle(tiles)
	let tiles = [1,2,3,4,5,6,7,8,9, 10, 0, 15,13, 14, 12, 11]
	console.log("solva", solvability(tiles))
		return tiles
	}

	handleGamePieceClick = (num) => {
		
		const { pieces } = this.state
		

		let idxPiece = findIdx(pieces, num)
		let idxZero = findIdx(pieces, 0)
		let posPiece = findPosition(pieces, idxPiece)
		let posZero = findPosition(pieces, idxZero)

		if(posPiece.y === posZero.y && Math.abs(posPiece.x - posZero.x) === 1){
			this.swapPieces(pieces, idxPiece, idxZero)
		}else if(posPiece.x === posZero.x && (Math.abs(posPiece.y - posZero.y) === 1)){
			this.swapPieces(pieces, idxPiece, idxZero)
		}else{
			console.log("no go!");
		}
		let inversions = countInversions(pieces)

		this.setState(state =>{
			return {
				moves:state.moves+1,
				inversions
			}
		})
	}

	swapPieces = (array, idx1, idx2) => {
		const { pieces } = this.state
		let tmp = array[idx1]
		array[idx1] = array[idx2]
		array[idx2] = tmp
		this.setState({pieces:array})
	
		
	}

	render(){
		const { pieces, moves, inversions } = this.state
		let idxZero = findIdx(pieces, 0)
		let posZero = findPosition(pieces, idxZero)
		if(this.state.inversions === 0 && posZero.x === 4 && posZero.y ==1){
			return(
				<div class="victory">You've won!</div>
			)
		}else{
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
}

export default GameBoard