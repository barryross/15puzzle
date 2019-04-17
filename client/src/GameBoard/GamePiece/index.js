import React from 'react'
import PropTypes from 'prop-types';
import './styles.scss'

const GamePiece = ({num, onClick, imgUrl, position}) => {
	console.log("piece position", position())
	let x = position().x
	let y = position().y
	return (
		<div 
			style={
				{
					backgroundImage:`url(${imgUrl})`,
					backgroundPosition: `${-((x -1) * 100)}px ${((y) * 100)}px`
				}
			}
			data-id={num}
			onClick={()=>onClick(num)} 
			className={`GamePiece ${num === 0 ? 'blackout' : ""}`}>
			{/* <img src={imgUrl}/> */}
		</div>)
}

GamePiece.propTypes = {
  num: PropTypes.number.isRequired
};

export default GamePiece