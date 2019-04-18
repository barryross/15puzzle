import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from 'semantic-ui-react'

const Header = ({moves, inversions, referenceImage, toggle}) => {
	return (
		<header>
			<div>Moves : {moves}  Inversions: {inversions}</div>
			<Checkbox 
				checked={referenceImage}
				onChange={toggle}
				label="Display reference image" slider/>
		</header>
	)
}

Header.propTypes = {
	moves: PropTypes.number.isRequired,
	inversions: PropTypes.number.isRequired,
	referenceImage: PropTypes.bool.isRequired,
	toggle: PropTypes.func.isRequired,
};

export default Header