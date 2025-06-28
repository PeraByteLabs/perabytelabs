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

      {/* How It Works - Visual Journey */}
      <section className="how-it-works-section py-5">
        <Container>
          <h2 className="text-center mb-5 display-5 fw-bold">How It Works</h2>
          <Row className="g-4 text-center">
            <Col md={4}>
              <div className="how-it-works-step p-4 rounded shadow-sm bg-white h-100">
                <div className="icon-large mb-3">1️⃣</div>
                <h3 className="h5">Choose a Path: Story or Game</h3>
                <p>Select from our curated collection of engaging storybooks or interactive games tailored to your child's age and interests.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="how-it-works-step p-4 rounded shadow-sm bg-white h-100">
                <div className="icon-large mb-3">2️⃣</div>
                <h3 className="h5">Kids Engage & Grow</h3>
                <p>Through playful narratives and challenging activities, children naturally develop critical thinking, problem-solving, and emotional intelligence.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="how-it-works-step p-4 rounded shadow-sm bg-white h-100">
                <div className="icon-large mb-3">3️⃣</div>
                <h3 className="h5">Parents Track Progress</h3>
                <p>Access insights and resources to understand your child's developmental journey and support their growth every step of the way.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured Products - Interactive Grid */}
      <section className="featured-products-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5 display-5 fw-bold">Featured Products</h2>
          <Row className="g-4 justify-content-center">
            <Col md={6}>
              <Card className="card-3d h-100">
                <Card.Img variant="top" src="https://via.placeholder.com/400x250/4A90E2/FFFFFF?text=Featured+Game" alt="Featured Game" />
                <Card.Body className="text-center">
                  <Card.Title as="h3">The Adventure of Curious Minds</Card.Title>
                  <Card.Text>An exciting game that sparks curiosity and problem-solving skills through interactive challenges.</Card.Text>
                  <Button variant="primary" onClick={() => handlePageChange('games')}>Try Demo</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="card-3d h-100">
                <Card.Img variant="top" src="https://via.placeholder.com/400x250/50E3C2/FFFFFF?text=Featured+Storybook" alt="Featured Storybook" />
                <Card.Body className="text-center">
                  <Card.Title as="h3">The Little Explorer's Big Journey</Card.Title>
                  <Card.Text>A heartwarming storybook that teaches empathy and resilience through a captivating narrative.</Card.Text>
                  <Button variant="primary" onClick={() => handlePageChange('books')}>Read Sample</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* The Science Behind It - Infographic Style Block */}
      <section className="science-behind-it-section py-5">
        <Container>
          <h2 className="text-center mb-5 display-5 fw-bold">The Science Behind It</h2>
          <Row className="align-items-center">
            <Col md={6}>
              {/* Placeholder for Visual timeline or infographic */}
              <div className="science-visual-placeholder rounded shadow-lg mb-4 mb-md-0" style={{ height: '300px', backgroundColor: 'rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="display-1">📊</span>
              </div>
            </Col>
            <Col md={6}>
              <p className="lead mb-4">
                Developed using data from extensive research and leading educational frameworks, our approach is rooted in proven methodologies.
                We integrate insights from cognitive science, developmental psychology, and educational research to ensure our products are not only engaging but also highly effective.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <Button variant="primary" onClick={() => handlePageChange('resources')}>View Research</Button>
                <Button variant="outline-primary" onClick={() => handlePageChange('contact')}>Meet Our Experts</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials Carousel */}
      <section className="testimonials-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5 display-5 fw-bold">What Parents and Educators Say</h2>
          <Row className="justify-content-center">
            <Col md={8}>
              {/* Placeholder for Carousel - will need react-bootstrap Carousel component */}
              <div className="p-4 rounded shadow-sm bg-white text-center">
                <p className="lead fst-italic mb-3">“I finally know how to help my child grow skills that matter.”</p>
                <p className="fw-bold">— Happy Parent</p>
              </div>
              {/* More testimonials would go here in a carousel */}
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action - Big Emotional Prompt */}
      <section className="call-to-action-section py-5 bg-primary text-white text-center">
        <Container>
          <h2 className="display-5 fw-bold mb-4">Your Child Deserves More Than Just Screen Time.</h2>
          <p className="lead mb-5">Start Their Learning Adventure Today.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Button variant="success" size="lg" onClick={() => handlePageChange('books')}>Explore Products</Button>
            <Button variant="outline-light" size="lg" onClick={() => handlePageChange('contact')}>Take the Free Skill Quiz</Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HomePage;
