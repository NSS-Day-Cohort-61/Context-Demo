import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

const UserList = ({ users, onUserClick }) => {
  return (
    <div>
      <h2>User List</h2>
      <ListGroup>
        {users.map((user) => (
          <ListGroupItem
            key={user.id}
            onClick={() => onUserClick(user)}
            tag="button"
            action
          >
            {user.name}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  )
}

export default UserList
