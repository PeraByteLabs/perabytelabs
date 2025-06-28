import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const HomePage = ({ handlePageChange }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section text-center py-5 bg-primary text-white d-flex align-items-center justify-content-center">
        <Container>
          <Row className="align-items-center">
            <Col md={7} className="text-md-start">
              <h1 className="display-3 fw-bold mb-3">Give Your Child the Skills for Life</h1>
              <p className="lead mb-4">Backed by science. Powered by play.</p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <Button variant="success" size="lg" onClick={() => handlePageChange('games')}>Explore Games</Button>
                <Button variant="outline-light" size="lg" onClick={() => handlePageChange('skills')}>See How It Works</Button>
              </div>
            </Col>
            <Col md={5} className="mt-4 mt-md-0">
              {/* Placeholder for high-impact image or video loop */}
              <div className="hero-visual-placeholder rounded shadow-lg" style={{ height: '300px', backgroundColor: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="display-1">🚀</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Value Proposition Grid */}
      <section className="value-proposition-section py-5 bg-light">
        <Container>
          <Row className="g-4 text-center">
            <Col md={4}>
              <Card className="card-3d h-100">
                <Card.Body>
                  <div className="icon-large mb-3">🌱</div>
                  <Card.Title as="h3">Growth Mindset</Card.Title>
                  <Card.Text>Builds lifelong learners from preschool to real world.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-3d h-100">
                <Card.Body>
                  <div className="icon-large mb-3">💡</div>
                  <Card.Title as="h3">Future Skills</Card.Title>
                  <Card.Text>Prepares for tomorrow’s world with the Core Skills Framework.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-3d h-100">
                <Card.Body>
                  <div className="icon-large mb-3">✨</div>
                  <Card.Title as="h3">Story & Play</Card.Title>
                  <Card.Text>Learning made magical through books, games & discovery tools.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomePage;