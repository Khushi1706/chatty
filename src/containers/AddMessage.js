import { connect } from 'react-redux'
import AddMessageComponent from '../components/AddMessage'
import { addMessage } from '../actions'


const mapDispatchToProps = dispatch => ({
    dispatch: (message, author, author_id, receiver_id, timestamp) => {
        dispatch(addMessage(message, author, author_id, receiver_id, timestamp))
    }
})

export const AddMessage = connect((state) => ({ sender_id: state.ids.userId, receiver_id: state.ids.selectedUserId }), mapDispatchToProps)(AddMessageComponent)