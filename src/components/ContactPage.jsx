import React from 'react';
import { Form, Button } from 'react-bootstrap';

const ContactPage = () => {
  return (
    <div className="container mt-5">
      <h1>Get in Touch</h1>
      <p>We would love to hear from you! Please use the form below to send us your questions, comments, or suggestions.</p>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ContactPage;
