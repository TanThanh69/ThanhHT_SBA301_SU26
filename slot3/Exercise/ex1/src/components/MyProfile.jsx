import React from 'react'
import Card from 'react-bootstrap/Card'

function MyProfile({ person }) {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={person.image} alt={person.name} />
      <Card.Body>
        <Card.Title>{person.name}</Card.Title>
        <Card.Text>ID: {person.id}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default MyProfile