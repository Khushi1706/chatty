import * as types from '../constants/ActionTypes'
const setName = (state = {name : ""}, action) => {
    switch (action.type) {
        case types.CURRENT_USER_NAME:
            return { ...state, name: action.name}
        default:
            return state
    }
}
export default setName