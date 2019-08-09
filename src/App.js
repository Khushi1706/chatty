import React, { Component } from 'react';
import './style.css';
import './App.css';
import { Sidebar } from "./containers/Sidebar";
import { MessagesList } from "./containers/MessagesList";
import { AddMessage } from "./containers/AddMessage";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { setSelectedUser } from './actions'
import 'react-notifications/lib/notifications.css';
import { connect } from 'react-redux';
let self;
class App extends Component {
  constructor(props) {
    super(props);
    self = this;
    this.message_id = 0;
  }

  componentDidUpdate() {
    if (this.props.notification.sender_id !== 0 &&
      this.props.notification.sender_id !== this.props.userId &&
      this.props.notification.sender_id !== this.props.selectedUserId &&
      this.props.notification.message_id !== this.message_id) {
      this.message_id = this.props.notification.message_id
      NotificationManager.success(this.props.notification.message, this.props.notification.author, 10000, () => {
        self.props.dispatch(self.props.notification.sender_id)
      })
    }
  }

  render() {
    return (
      <div className="container">
        <h3 className=" username">Welcome {this.props.name}</h3>
        <div className="messaging">
          <div className="inbox_msg">
            <Sidebar />
            <div className="mesgs">
              <div className="msg_history">
                <MessagesList />
              </div>
            </div>
          </div>
          <AddMessage />
        </div>
        <NotificationContainer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch: (id) => {
    dispatch(setSelectedUser(id))
  }
})

export default connect(state => ({
  notification: state.notification,
  userId: state.ids.userId,
  selectedUserId: state.ids.selectedUserId,
  name: state.setName.name
}), mapDispatchToProps)(App);
