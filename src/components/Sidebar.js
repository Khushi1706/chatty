import React from 'react'
import PropTypes from 'prop-types'

const Sidebar = ({ users, dispatch, userId, selectedUserId }) => (
    <div className="inbox_people">
        <div class="headind_srch">
            <div class="recent_heading">
              <h4>Recent</h4>
            </div>
            </div>
        <div className="inbox_chat">
            {
                users.filter(user => userId !== user.id).length > 0 ?
                    <ul>
                        {users.filter(user => userId !== user.id).map(user => (
                            <li key={user.id} onClick={(e) => { onItemSelect(e, user.id, dispatch) }} >
                                <div className={(selectedUserId === user.id ? "chat-selected" : "") + " chat_list"}>
                                    <div className="chat_people">
                                        <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="khushi" /> </div>
                                        <div className="chat_ib">
                                            <h5>{user.name} <span className="chat_date">{monthNames[new Date().getMonth()]} {(new Date()).getDay()}</span></h5>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    : <p className="singleuser"> Oops! Looks like youre the only user, open a new browser window to start chatting!</p>
            }
        </div>
    </div>
)

const onItemSelect = (e, id, dispatch) => {
    e.preventDefault();
    dispatch(id)
}
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
  "July", "Aug", "Sep", "Oct", "Nov", "Dec"
];

Sidebar.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    dispatch: PropTypes.func.isRequired,
    userId: PropTypes.string.isRequired,
    selectedUserId: PropTypes.string.isRequired
}


export default Sidebar