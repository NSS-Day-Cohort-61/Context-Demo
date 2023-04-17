import React, { useContext } from 'react'
import UserContext from '../UserContext'
import { ListGroup, ListGroupItem } from 'reactstrap'

const UserList = () => {
  const { users, setSelectedUser } = useContext(UserContext)

  return (
    <div>
      <h2>User List</h2>
      <ListGroup>
        {users.map((user) => (
          <ListGroupItem
            key={user.id}
            onClick={() => setSelectedUser(user)}
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
