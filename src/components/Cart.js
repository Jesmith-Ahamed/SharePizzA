import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Orders from './Orders';

const Cart = () => {
    const[show , setShow]=useState(false);
  return (
    <>
      <Button variant="light" onClick={()=>setShow(!show)}className="me-2">
      <i class="bi bi-cart-check-fill"></i>
      </Button>
      <Offcanvas show={show} onHide={()=>setShow(!show  )} placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart:</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         <Orders/>
         <div className='text-end my-2 '>
            <Button variant='primary rounded'>Check Out</Button>
         </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Cart
