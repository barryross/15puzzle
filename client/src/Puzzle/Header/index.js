import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from 'semantic-ui-react'
import './styles.scss'

const PuzzleHeader = ({moves, inversions, referenceImage, toggle}) => {
	return (
		<header className="PuzzleHeader">
			<div><strong>Moves:</strong> {moves}  <strong>Inversions:</strong>: {inversions}</div>
			<Checkbox 
				checked={referenceImage}
				onChange={toggle}
				label="Display reference image" slider/>
		</header>
	)
}

PuzzleHeader.propTypes = {
	moves: PropTypes.number.isRequired,
	inversions: PropTypes.number.isRequired,
	referenceImage: PropTypes.bool.isRequired,
	toggle: PropTypes.func.isRequired,
};

export default PuzzleHeader