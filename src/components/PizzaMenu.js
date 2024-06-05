import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const PizzaMenu = () => {
  return (
    <Card className='m-2'>
      <Card.Img variant="top" src={require('../PizzaImage/one.jpeg.jpg')} />
      <Card.Body>
        <Card.Text>
        sweet, sour, salty, bitter and umami, making it a perfectly balanced drink.
        </Card.Text>
        <div className='text-center'>
        <Button variant="primary"><i class="bi bi-basket"></i> Add to Busket</Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default PizzaMenu
