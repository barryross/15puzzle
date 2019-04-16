import React from 'react'
import PropTypes from 'prop-types';
import './styles.scss'

const GamePiece = ({num}) => <div className={`GamePiece ${num === 0 ? 'blackout' : ""}`}>{num}</div>

GamePiece.propTypes = {
  num: PropTypes.number.isRequired
};

export default GamePiece