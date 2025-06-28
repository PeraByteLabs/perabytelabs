import React from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';

const ContactPage = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Get in Touch</h1>
      <p className="lead text-center mb-5">
        We would love to hear from you! Please use the form below to send us your questions, comments, or suggestions.
      </p>

      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="card-3d p-4">
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={5} placeholder="Your message here..." />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactPage;