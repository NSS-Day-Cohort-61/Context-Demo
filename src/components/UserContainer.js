import React, { useContext } from 'react'
import UserContext from '../UserContext'
import UserList from './UserList'
import UserDetails from './UserDetails'
import { Container, Row, Col } from 'reactstrap'

const UserContainer = () => {
  const { selectedUser } = useContext(UserContext)

  return (
    <Container style={{ 'margit-top': '3rem' }}>
      <Row>
        <Col md="4">
          <UserList />
        </Col>
        <Col md="8">{selectedUser && <UserDetails />}</Col>
      </Row>
    </Container>
  )
}

export default UserContainer
