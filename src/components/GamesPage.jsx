import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const GamesPage = () => {
  const games = [
    {
      title: 'The Creative Problem Solvers',
      description: 'A game designed to challenge children's creative thinking and problem-solving abilities through engaging puzzles and scenarios.',
      link: '#',
      icon: '💡',
    },
    {
      title: 'The Empathy Challenge',
      description: 'An interactive story-based game that helps children understand and respond to different emotions, fostering empathy and social awareness.',
      link: '#',
      icon: '❤️',
    },
    {
      title: 'The Goal-Setting Adventure',
      description: 'A fun adventure game where children learn to set goals, plan their steps, and persevere through challenges to achieve their objectives.',
      link: '#',
      icon: '🎯',
    },
  ];

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Learning Through Play: Our Educational Games</h1>
      <p className="lead text-center mb-5">
        We believe that games are a powerful tool for learning. Our games are designed to be fun and engaging, while also teaching children the 12 core skills.
        We work with child development experts to create games that are age-appropriate and effective.
      </p>

      <Row xs={1} md={2} lg={3} className="g-4">
        {games.map((game, index) => (
          <Col key={index}>
            <Card className="card-3d h-100 text-center">
              <Card.Body>
                <div className="icon-large mb-3">{game.icon}</div>
                <Card.Title as="h5">{game.title}</Card.Title>
                <Card.Text>{game.description}</Card.Text>
                <a href={game.link} className="btn btn-primary mt-3">Play Now</a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GamesPage;