import { connect } from 'react-redux'
import SidebarComponent from '../components/Sidebar'
import { setSelectedUser } from './../actions';
//import { stat } from 'fs';

const mapDispatchToProps = dispatch => ({
    dispatch: (id) => {
        dispatch(setSelectedUser(id))
    }
})


export const Sidebar = connect(state => ({
    users: state.users,
    userId: state.ids.userId,
    selectedUserId: state.ids.selectedUserId
}), mapDispatchToProps)(SidebarComponent)