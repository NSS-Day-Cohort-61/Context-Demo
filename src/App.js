import React, { useState } from 'react'
import UserContext from './UserContext'
import UserContainer from './components/UserContainer'

const users = [
  { id: 1, name: 'Alice', email: 'alice@example.com', phone: '555-1111' },
  { id: 2, name: 'Bob', email: 'bob@example.com', phone: '555-2222' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com', phone: '555-3333' },
]

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null)

  return (
    <UserContext.Provider value={{ users, selectedUser, setSelectedUser }}>
      <UserContainer />
    </UserContext.Provider>
  )
}

export default App
