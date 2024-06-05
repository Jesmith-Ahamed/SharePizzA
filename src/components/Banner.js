import React from 'react'
import { Col,Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {
  return (
    <Container fluid>
        <Row className='justify-content-center align-item-center'>
           <Col lg={8}>
           <Carousel>
      <Carousel.Item interval={2000}>
        <img 
         className='d-block w-100'
         src={require('../assets/one.jpeg')}
         alt='First Slide'
        />
        <Carousel.Caption>
          <h3>Margherita Pizza</h3>
          <p className='d-none d-sm-block'>
            Deceptively simple, the Margherita pizza is made with basil, fresh mozzarella, and tomatoes. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img 
         className='d-block w-100'
         src={require('../assets/two.jpeg')}
         alt='First Slide'
        />
        <Carousel.Caption>
          <h3>Sicilian Pizza</h3>
          <p className='d-none d-sm-block'>sfincione (thick sponge) has a thick, extra fluffy crust with a crunchy exterior. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img 
         className='d-block w-100'
         src={require('../assets/three.jpeg')}
         alt='First Slide'
        />
        <Carousel.Caption>
          <h3>Hawaiian Pizza</h3>
          <p className='d-none d-sm-block'>
          Hawaiian pizza may be one of the most controversial and famous pizza styles. The iconic topping combination of pineapple and ham usually ...
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
           </Col>
        </Row>
        <div className='text-center '>
        <h3 className='display-5 mt-3'>Pizzas for Every Occasion</h3>
        <p className='lead text-muted'>It tastes like bread tomato and cheese, chewy, moist, slightly acidic, and sharp.</p>
        </div>
    </Container>
  );
}

export default Banner
