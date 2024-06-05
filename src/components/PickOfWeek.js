import React, { useState } from 'react'
import { Container,Row, Col ,Button,Image, ToastContainer} from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';

const PickOfWeek = () => {
  const [show, setShow]=useState(false);
  return (
    <section id="musttry" className="my-3 " >
      <div className="text-center my-2 py-3">
        <h3 className=" text-primary">
          <i class="bi bi-search-heart"></i> Pick of the Week!
        </h3>
      </div>
      <Container className='bg-light'>
        <Row className='align-items-center'>
          <Col md={7}>
            <Image src={require('../PizzaImage/center.jpeg')} fluid alt='Pizza' rounded></Image>
          </Col>
          <Col md={5}>
            <div className='text-center'>
                <h2 className='h1'>Double cheese Fajita</h2>
                <p className='lead text-muted'>Just put a little bit of cooked meat, fish or beans in a bowl, a good helping of 2-3 types of veg, a little grated cheese and some toppings like guacamole, salsa, sour cream, shredded lettuce or spring onions out, and let them fill their own wraps.</p>
            </div>
            <div className='text-center'>
            <Button variant='primary' onClick={()=>{setShow(true)}}><i class="bi bi-basket"></i> Buy Now</Button>
            </div>
          </Col>
          </Row>
    <ToastContainer className='position-fixed bottom-0 end-0 p-3' position='bottom-end'>
      <Toast onClose={()=>setShow(false)} show={show} delay={3000} autohide>
        <Toast.Header closeButton={false}>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Added</strong>
        </Toast.Header>
        <Toast.Body>Item added to the cart!!!</Toast.Body>
      </Toast>
    </ToastContainer>   
   </Container>
 </section>
  )
}

export default PickOfWeek
