import React, { useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import PizzaMenu from './PizzaMenu'

const Menu = () => {

    const[menu]=useState([1,2,3,4,5,6])
  return (
    <section id='menu' className='bg-light'>
        <Container>
            <div className='text-center'>
            <h3 className='text-primary my-3 py-5'>Treat Yourself with our  Everyday Menu <i class="bi bi-tiktok"></i></h3>
            </div>
            <Row className='m-3'>
                {
                    menu.map((item)=>{
                        return(
                            <Col md={6} lg={4} key={item}>
                            <PizzaMenu/>
                            </Col>
                        );
                    })
                }
                
            </Row>
           

        </Container>
    </section>
  )
}

export default Menu
