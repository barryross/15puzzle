import React from 'react'
import PropTypes from 'prop-types';
import './styles.scss'

const GamePiece = ({num, onClick, imgUrl, position}) => {
	console.log("position", position)
	let x = position.x === 1 ? 0 : position.x
	console.log("x", x)
	return (
		<div 
			style={
				{
					backgroundImage:`url(${imgUrl})`,
					backgroundPosition: 
						`${x * 100}px
						${-((4 - position.y) * 100)}px`
				}
			}
			data-id={num}
			data-d={x*100}
			onClick={()=>onClick(num)} 
			className={`GamePiece ${num === 0 ? 'blackout' : ""}`}>
		</div>)
}

GamePiece.propTypes = {
	position: PropTypes.object.isRequired,
	onClick: PropTypes.func.isRequired,
	num: PropTypes.number.isRequired,
	imgUrl: PropTypes.string.isRequired,
};

export default GamePiece