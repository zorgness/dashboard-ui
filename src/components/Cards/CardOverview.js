import React from 'react'
import Card from 'react-bootstrap/Card';

const CardOverview = () => {
  return (
    <Card
    bg={ 'primary'}

    text={'white'}
    style={{ width: '18rem' }}
    className="mb-2"
  >
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Title>{ 'primary'} Card Title </Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default CardOverview
