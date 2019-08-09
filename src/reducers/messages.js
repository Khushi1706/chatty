import * as types from '../constants/ActionTypes'
const messages = (state = [], action) => {
    switch (action.type) {
        case types.ADD_MESSAGE:
            return state.concat([
                {
                    message: action.message,
                    author: action.author,
                    id: action.id,
                    author_id: action.author_id,
                    receiver_id: action.receiver_id,
                    timestamp: action.timestamp
                }
            ])
        case types.MESSAGE_RECIEVED:
            return state.concat([
                {
                    message: action.message,
                    author: action.author,
                    id: action.id,
                    author_id: action.author_id,
                    receiver_id: action.receiver_id,
                    timestamp: action.timestamp
                }
            ])
        default:
            return state
    }
}
export default messages