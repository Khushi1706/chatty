import { connect } from 'react-redux'
import MessagesListComponent from '../components/MessagesList'



export const MessagesList = connect(state => (
    {
        messages: [...state.messages].filter((message) => (
            message.receiver_id === state.ids.userId && message.author_id === state.ids.selectedUserId)
            || (message.receiver_id === state.ids.selectedUserId && message.author_id === state.ids.userId)),
        userId: state.ids.userId
    }), {})(MessagesListComponent)