import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const Message = ({ message, userId }) => (
	<div>
		{
			!(userId === message.author_id) ?
				(<div className="incoming_msg">
					<div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
					<div className="received_msg">
						<div className="received_withd_msg">
							<p>{message.author} : {message.message}</p>
							<span className="time_date"> {moment(message.timestamp).startOf('second').fromNow()} </span></div>
					</div>
				</div>) :
				(
					<div className="outgoing_msg">
						<div className="incoming_msg_img float-right"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
						<div className="sent_msg">
							<p>{message.author} : {message.message}</p>
							<span className="time_date"> {moment(message.timestamp).startOf('second').fromNow()} </span>
						</div>
					</div>
				)
		}
	</div>
)

Message.propTypes = {
	message: PropTypes.object.isRequired,
	userId: PropTypes.string.isRequired
}

export default Message