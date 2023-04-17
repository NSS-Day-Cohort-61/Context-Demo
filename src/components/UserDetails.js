import React, { useContext } from 'react'
import UserContext from '../UserContext'
import { Card, CardBody, CardTitle } from 'reactstrap'

const UserDetails = () => {
  const { selectedUser } = useContext(UserContext)

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h2">User Details</CardTitle>
        <p>Name: {selectedUser.name}</p>
        <p>Email: {selectedUser.email}</p>
        <p>Phone: {selectedUser.phone}</p>
      </CardBody>
    </Card>
  )
}

export default UserDetails
