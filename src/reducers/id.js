import * as types from '../constants/ActionTypes'
const ids = (state = {
    userId: 0,
    selectedUserId: 0
}, action) => {
    switch (action.type) {
        case types.SENDER_ID:
            return { ...state, userId: action.payload }
        case types.SELECTED_USER_ID:
            return { ...state, selectedUserId: action.payload }
        default:
            return state
    }
}
export default ids