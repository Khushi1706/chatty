import * as types from '../constants/ActionTypes'

let nextMessageId = 0

export const addMessage = (message, author, author_id, receiver_id, timestamp) => ({
	type: types.ADD_MESSAGE,
	id: nextMessageId++,
	message,
	author,
	author_id,
	receiver_id,
	timestamp
})

export const addUser = (name) => ({
	type: types.ADD_USER,
	name
})

export const setUserId = (id) => ({
	type: types.SENDER_ID,
	payload: id
})

export const messageRecieved = (message, author, author_id, receiver_id, timestamp) => ({
	type: types.MESSAGE_RECIEVED,
	id: nextMessageId++,
	message,
	author,
	author_id,
	receiver_id,
	timestamp
})

export const setNotification = (message, author, sender_id, message_id) => ({
	type: types.NOTIFICATION,
	message,
	author,
	sender_id,
	message_id
})

export const populateUsersList = users => ({
	type: types.USERS_LIST,
	users
})

export const setSelectedUser = id => ({
	type: types.SELECTED_USER_ID,
	payload: id
})

export const setUserName = name => ({
	type: types.CURRENT_USER_NAME,
	 name
})