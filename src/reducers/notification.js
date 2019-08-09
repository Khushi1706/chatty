import * as types from '../constants/ActionTypes'
const notification = (state = {
    message: "",
    author: "",
    sender_id: 0,
    message_id: 0
}, action) => {
    switch (action.type) {
        case types.NOTIFICATION:
            return { ...state, message: action.message, author: action.author, sender_id: action.sender_id, message_id: action.message_id }
        default:
            return state
    }
}
export default notification