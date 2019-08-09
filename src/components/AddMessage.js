import React from 'react'
import PropTypes from 'prop-types'

const AddMessage = ({ dispatch, sender_id, receiver_id }) => {
	let input
	return (
		<div className="type_msg">
			<div className="input_msg_write">
				{
					receiver_id !== 0 ? (
						<div>
							<input className="write_msg" placeholder="Type a message" onKeyPress={(e) => {
								if (e.key === 'Enter') {
									dispatch(input.value, 'Me', sender_id, receiver_id,(new Date()).getTime())
									input.value = ''
								}
							}}
								type="text"
								ref={(node) => {
									input = node
								}} />
							<button className="msg_send_btn" onClick={(e) => {
								return(
									dispatch(input.value, 'Me', sender_id, receiver_id),
									input.value = '')}}
							><i className="fa fa-paper-plane-o" aria-hidden="true"></i></button>
						</div>) :
						<div>
							Please select a user to chat
						</div>
				}
			</div>
		</div>
	)
	
}



AddMessage.propTypes = {
	dispatch: PropTypes.func.isRequired,
	sender_id: PropTypes.string.isRequired,
	receiver_id: PropTypes.string.isRequired
}

export default AddMessage

