import React from 'react'
import { Card, CardBody, CardTitle } from 'reactstrap'

const UserDetails = ({ user }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h2">User Details</CardTitle>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
      </CardBody>
    </Card>
  )
}

export default UserDetails
