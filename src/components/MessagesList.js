import React from 'react'
import PropTypes from 'prop-types'
import Message from './Message'
const MessagesList = ({ messages, userId }) => (

	<div>
		<div>
			{messages.map(message => (
				<Message
					key={message.id} message={message} userId={userId}
				/>
			))}
		</div>
	</div>
)

MessagesList.propTypes = {
	messages: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			message: PropTypes.string.isRequired,
			author: PropTypes.string.isRequired,
		}).isRequired
	).isRequired,
	userId: PropTypes.string.isRequired
}

export default MessagesList