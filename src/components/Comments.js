import React from 'react'
import { Container, Row, Col, Form, FloatingLabel, InputGroup } from 'react-bootstrap'

const Comments = () => {
    return (
        <section id='contact' className='bg-light py-3'>
            <div className="text-center my-2 py-3">
                <h2 className="display-6 text-primary">
                    Comments <i class="bi bi-chat-right-text"></i>
                </h2>
            </div>
            <Container>
                <Row className='justify-content-center'>
                    <Col md={6}>
                        <Form>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><i class="bi bi-envelope-open-fill"></i></InputGroup.Text>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email address"
                                >
                                    <Form.Control type="email" placeholder="email" />
                                </FloatingLabel>
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><i class="bi bi-person-circle"></i></InputGroup.Text>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Name"
                                >
                                    <Form.Control type="name" placeholder="Name" />
                                </FloatingLabel>

                            </InputGroup>
                            <FloatingLabel
                                controlId="floatingTextarea"
                                label="Comments"
                                className="mb-3"
                            >
                                <Form.Control as="textarea" placeholder="Leave a comment here" />
                            </FloatingLabel>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Comments
