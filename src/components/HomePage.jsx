import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const HomePage = ({ handlePageChange }) => {
  return (
    <Container className="my-5">
      {/* Headline */}
      <h1 className="display-4 fw-bold text-center mb-5">
        Tomorrow’s Success Depends on More Than Just Knowing — It Starts with the Core Skills Framework
      </h1>

      {/* Situation */}
      <section className="mb-5">
        <h2 className="h4 text-primary mb-3">Situation</h2>
        <p className="lead">
          In a world reshaped by AI, automation, and constant change, knowledge alone is no longer enough.
          Today’s children will enter a world where most future jobs don't exist yet, and adaptability, empathy, and resilience matter more than memorizing facts.
        </p>
      </section>

      {/* Complication */}
      <section className="mb-5">
        <h2 className="h4 text-primary mb-3">Complication</h2>
        <p className="lead">
          But parents face a silent crisis. There is no structured, trusted, or science-backed guide for building the skills children truly need for life — just a flood of disconnected books, educational toys, and apps.
          Meanwhile, the pressure to prepare kids for an uncertain future is greater than ever.
        </p>
      </section>

      {/* Solution */}
      <section className="mb-5">
        <h2 className="h4 text-primary mb-3">Solution</h2>
        <p className="lead">
          Introducing the Core Skills Framework — a science-backed, age-targeted skill development model designed to guide parents in raising whole children through playful, purposeful books and games.
          We focus on the 12 most essential lifelong skills children need to thrive — academically, socially, emotionally, and professionally.
        </p>
      </section>

      {/* Framework Introduction */}
      <section className="mb-5 p-4 bg-light rounded shadow-sm">
        <h2 className="h4 text-primary mb-3">What is the Core Skills Framework?</h2>
        <p>
          The Core Skills Framework stands for Cognitive, Operational, Relational, and Emotional — four developmental pillars that include 12 measurable, age-aligned skills:
        </p>
        <ul>
          <li>🧠 Cognitive: Critical Thinking, Problem Solving, Creative Thinking</li>
          <li>🛠️ Operational: Planning & Goal Setting, Concentration & Memory, Curiosity</li>
          <li>🤝 Relational: Cooperation & Teamwork, Communication, Conflict Resolution & Negotiation</li>
          <li>💪 Emotional: Self-Awareness & Control, Empathy & Perspective-Taking, Perseverance & Grit</li>
        </ul>
        <Button variant="outline-primary" onClick={() => handlePageChange('skills')}>Explore more about the Framework</Button>
      </section>

      {/* Evidence & Credibility */}
      <section className="mb-5 p-4 bg-light rounded shadow-sm">
        <h2 className="h4 text-primary mb-3">📚 Backed by Research:</h2>
        <ul>
          <li>UNICEF’s 12 Transferable Skills framework, OECD’s Learning Compass 2030, and CASEL’s SEL model all emphasize lifelong skills like empathy, critical thinking, and self-regulation.</li>
          <li>According to the World Economic Forum, by 2025, 50% of all employees will need reskilling — and creativity, problem solving, and emotional intelligence top the list.</li>
          <li>Harvard’s Center on the Developing Child stresses that executive function and SEL in early years predict academic and career success better than IQ.</li>
          <li>Angela Duckworth (Grit), Carol Dweck (Growth Mindset), and other thought leaders emphasize persistence, adaptability, and lifelong curiosity as success multipliers.</li>
        </ul>
        <Button variant="outline-primary" onClick={() => handlePageChange('resources')}>Access Parent Resources for in-depth research</Button>
      </section>

      {/* Benefits for Parents & Children */}
      <section className="mb-5 p-4 bg-light rounded shadow-sm">
        <h2 className="h4 text-primary mb-3">✅ Why it Matters for You:</h2>
        <ul>
          <li>You get structured, ready-to-use resources aligned with your child’s developmental stage — no more guesswork.</li>
          <li>Your child builds a foundation not only for school success, but for life as a curious, resilient, emotionally intelligent person.</li>
          <li>The Core Skills Framework isn’t just for kids. Many adults use our tools for their own personal development and parenting growth.</li>
          <li>You become a more confident parent — with research-driven support behind every story and game you use.</li>
        </ul>
      </section>

      {/* Products */}
      <section className="mb-5">
        <h2 className="h4 text-primary text-center mb-4">Our Products</h2>
        <Row className="g-4 justify-content-center">
          <Col md={6}>
            <Card className="card-3d h-100 text-center">
              <Card.Body>
                <div className="icon-large mb-3">📚</div>
                <Card.Title as="h3">Books</Card.Title>
                <Card.Text>
                  Our books are designed to spark curiosity and imagination. We offer a range of coloring books and story books that are both entertaining and educational, aligned with the Core Skills Framework.
                </Card.Text>
                <Button variant="primary" onClick={() => handlePageChange('books')}>Explore Our Books</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="card-3d h-100 text-center">
              <Card.Body>
                <div className="icon-large mb-3">🎮</div>
                <Card.Title as="h3">Games</Card.Title>
                <Card.Text>
                  We believe that games are a powerful tool for learning. Our games are designed to be fun and engaging, while also teaching children the 12 core skills in an interactive way.
                </Card.Text>
                <Button variant="primary" onClick={() => handlePageChange('games')}>Explore Our Games</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Call to Action - Placeholder */}
      <section className="text-center mb-5">
        <h2 className="h4 text-primary mb-3">Ready to Empower Your Child?</h2>
        <p className="lead mb-4">Join our community and start building the skills for tomorrow, today.</p>
        <Button variant="success" size="lg" onClick={() => handlePageChange('contact')}>Get Started Now</Button>
      </section>
    </Container>
  );
};

export default HomePage;
