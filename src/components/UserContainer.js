import React from 'react'
import UserList from './UserList'
import UserDetails from './UserDetails'
import { Container, Row, Col } from 'reactstrap'

const UserContainer = ({ users, selectedUser, onUserClick }) => {
  return (
    <Container style={{ 'margin-top': '3rem' }}>
      <Row>
        <Col md="4">
          <UserList users={users} onUserClick={onUserClick} />
        </Col>
        <Col md="8">{selectedUser && <UserDetails user={selectedUser} />}</Col>
      </Row>
    </Container>
  )
}

export default UserContainer
