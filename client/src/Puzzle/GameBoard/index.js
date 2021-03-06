import React from 'react'
import PropTypes from 'prop-types'
import GamePiece from '../GamePiece'
import VictoryModal from '../VictoryModal'
import {findPosition } from '../../utilities/gameboard'

import './styles.scss'

const GameBoard = ({pieces, imgUrl, handleGamePieceClick, showModal, closeModal, restart}) => {

	return (
		<div className="GameBoard">
			{ pieces.map ( piece => 	{
				let position = findPosition(piece)
				return (
					<GamePiece 
							position={position} 
							imgUrl={imgUrl} 
							onClick={handleGamePieceClick} 
							key={piece} 
							num={piece}/> 
						)
				})}
			{ showModal &&	
					<VictoryModal 
						closeModal={closeModal} 
						restart={restart} show={showModal} /> }
		</div>
	)
}


GameBoard.propTypes = {
	pieces: PropTypes.array.isRequired,
	imgUrl: PropTypes.string,
};

export default GameBoard