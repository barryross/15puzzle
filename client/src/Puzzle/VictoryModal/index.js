import React from 'react'
import { Button } from 'semantic-ui-react'
import './styles.scss'

const VictoryModal = ({closeModal, restart}) => {
 return (
	<div className="VictoryModal">
		<h1>You won!</h1>
		<div className="buttons">
			<Button color='black' 
			onClick={closeModal}
			>
				Cancel
			</Button>
			<Button
				positive
				icon='checkmark'
				labelPosition='right'
				content="Play again"
				onClick={restart}
			/>
		</div>
	</div>
 )
}

export default VictoryModal