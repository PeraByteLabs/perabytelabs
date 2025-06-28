import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const HomePage = () => {
  return (
    <Container className="my-5 text-center">
      <h1 className="display-4 fw-bold mb-4">Empowering the Next Generation with the 12 Core Skills for the AI Age</h1>
      <p className="lead mb-5">
        Welcome to our platform, dedicated to helping children develop the essential skills they need to thrive in an increasingly complex world.
        We provide engaging games, books, and resources designed to foster critical thinking, creativity, and emotional intelligence.
        Our mission is to partner with parents to raise resilient, adaptable, and compassionate leaders of tomorrow.
      </p>

      <Row className="g-4">
        <Col md={4}>
          <Card className="card-3d h-100">
            <Card.Body>
              <div className="icon-large mb-3">🧠</div>
              <Card.Title as="h3">Core Skills Development Framework</Card.Title>
              <Card.Text>
                Discover the 12 essential skills for the AI age, categorized into Cognitive, Operational, Relational, and Emotional pillars.
              </Card.Text>
              <a href="#skills" className="btn btn-primary mt-3">Learn More</a>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="card-3d h-100">
            <Card.Body>
              <div className="icon-large mb-3">🎮</div>
              <Card.Title as="h3">Games</Card.Title>
              <Card.Text>
                Engaging and educational games designed to foster critical thinking, creativity, and problem-solving skills.
              </Card.Text>
              <a href="#games" className="btn btn-primary mt-3">Explore Games</a>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="card-3d h-100">
            <Card.Body>
              <div className="icon-large mb-3">📚</div>
              <Card.Title as="h3">Books</Card.Title>
              <Card.Text>
                Inspiring coloring and story books that spark curiosity and imagination in young minds.
              </Card.Text>
              <a href="#books" className="btn btn-primary mt-3">Find Books</a>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="card-3d h-100">
            <Card.Body>
              <div className="icon-large mb-3">👨‍👩‍👧‍👦</div>
              <Card.Title as="h3">Parent Resources</Card.Title>
              <Card.Text>
                Comprehensive research, articles, and tools to support parents in nurturing their children's growth.
              </Card.Text>
              <a href="#resources" className="btn btn-primary mt-3">Access Resources</a>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="card-3d h-100">
            <Card.Body>
              <div className="icon-large mb-3">✉️</div>
              <Card.Title as="h3">Contact Us</Card.Title>
              <Card.Text>
                Have questions or feedback? Reach out to us through our contact form.
              </Card.Text>
              <a href="#contact" className="btn btn-primary mt-3">Get in Touch</a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;