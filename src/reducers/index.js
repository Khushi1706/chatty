import { combineReducers } from "redux";
import messages from "./messages";
import users from "./users";
import ids from "./id";
import notification from "./notification";
import setName from "./setName";

const chat = combineReducers({
    messages,
    users,
    ids,
    notification,
    setName
})

export default chat