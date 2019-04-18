import React from 'react'
import PropTypes from 'prop-types'
import GamePiece from '../GamePiece'
import solvability, { findPosition } from '../../utilities/gameboard'

import './styles.scss'

const GameBoard = ({pieces, imgUrl, handleGamePieceClick}) => {
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
		</div>
	)
}


GameBoard.propTypes = {
	pieces: PropTypes.array.isRequired,
	imgUrl: PropTypes.string,
};

export default GameBoard