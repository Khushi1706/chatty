import *  as types from '../constants/ActionTypes'
import { addUser, messageRecieved, populateUsersList, setUserId, setNotification, setUserName } from '../actions'
let id = uuidv4();
const setupSocket = (dispatch, username) => {
	const socket = new WebSocket('ws://localhost:8989')

	socket.onopen = () => {
		socket.send(JSON.stringify({
			type: types.ADD_USER,
			name: username,
			id: id
		}));
		dispatch(setUserId(id))
		dispatch(setUserName(username))
	}
	socket.onmessage = (event) => {
		const data = JSON.parse(event.data)
		switch (data.type) {
			case types.ADD_MESSAGE:
				dispatch(messageRecieved(data.message, data.author, data.author_id, data.receiver_id, data.timestamp))
				dispatch(setNotification(data.message, data.author, data.author_id, data.id))
				break
			case types.ADD_USER:
				dispatch(addUser(data.name))
				break
			case types.USERS_LIST:
				dispatch(populateUsersList(data.users))
				break
			default:
				break
		}
	}
	return socket
}

function uuidv4() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		var r = Math.random() * 16 | 0, v = c === 'x' ? r : ((r & 0x3) | 0x8);
		return v.toString(16);
	});
}

export default setupSocket