import React from 'react'
import UserList from './UserList'
import UserDetails from './UserDetails'

const UserContainer = ({ users, selectedUser }) => {
  return (
    <div>
      <UserList users={users} />
      {selectedUser && <UserDetails user={selectedUser} />}
    </div>
  )
}

export default UserContainer
