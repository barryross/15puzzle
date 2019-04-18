import React, {Component} from 'react'
import shuffle from '../utilities/shuffle'
import {isSolveable, isSwappable, countInversions, findIdx, findPosition } from '../utilities/gameboard'
import Header from './Header'
import GameBoard from './GameBoard'
import axios from 'axios'
import './styles.scss'


class Puzzle extends Component {

	state = {
		pieces: [],
		moves:0,
		inversions:0,
		posZero:null,
		imgUrl:null,
		referenceImage:true
	}

	 componentDidMount = async () => {
		// let response =  await axios.get('/api/photos/random')

		//If we received an image from the server
		// if(response.data.success){
		// 	const { regular } = response.data.response.urls;
		// 	this.setState({imgUrl:regular})
		// }
		this.setState({imgUrl:"https://picjumbo.com/wp-content/uploads/vineyards-on-italian-coast-free-photo-DSC04256-2210x1473.jpg"})
		let tiles = this.generateTiles();
		// // while (!isSolveable(tiles)){
		// // 	tiles = this.generateTiles()
		// // }
		this.setState({pieces:tiles, inversions:countInversions(tiles)})
	}
  
	generateTiles = () => {
		let tiles  = [...Array(16).keys()]
		tiles =  shuffle(tiles)
		 tiles = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
		 tiles = [1,2,3,4,5,6,7,8,9,10,0,15,13,14,12,11]
		return tiles
	}

	handleGamePieceClick = (num) => {
		console.log("NUM", num)
		const { pieces } = this.state
		
		let idxPiece = findIdx(pieces, num)
		let idxZero = findIdx(pieces, 0)
		let posPiece = findPosition(idxPiece)
		let posZero = findPosition(idxZero)

		if ( isSwappable(posPiece, posZero)) this.swapPieces(pieces, idxPiece, idxZero)

		let inversions = countInversions(pieces)

		this.setState(state =>{
			return {
				moves:state.moves+1,
				inversions
			}
		})
	}

	swapPieces = (array, idx1, idx2) => {
		let tmp = array[idx1]
		array[idx1] = array[idx2]
		array[idx2] = tmp
		this.setState({pieces:array})
	}

	toggleReferenceImage = () => {
		this.setState(state => { return {referenceImage: !state.referenceImage }} )
	}

	render(){
		const { pieces, moves, inversions, imgUrl, referenceImage} = this.state
		let idxZero = findIdx(pieces, 0)
		let posZero = findPosition(pieces, idxZero)
		console.log("DF", this.state.inversions === 0 && posZero.x === 4 && posZero.y ==1)
		if(this.state.inversions === 0 && posZero.x === 4 && posZero.y ==1){
			return(
				<div class="victory">You've won!</div>
			)
		}else{
			return(
				<section className="Puzzle">hi
					<Header
						toggle={this.toggleReferenceImage}
						inversions={inversions}
						moves={moves}
						referenceImage={referenceImage}
					/>hi
					<GameBoard
						imgUrl={imgUrl}
						pieces={pieces}
						handleGamePieceClick={this.handleGamePieceClick}
					/>
					{ referenceImage && 
							<div 
							style={{backgroundImage:`url(${imgUrl})`}}
							className="Reference-container">
							</div> 
					}
				</section>
			)
		}

	}
}

export default Puzzle