import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const BooksPage = () => {
  const coloringBooks = [
    {
      title: 'The Mindful Artist',
      description: 'A coloring book designed to promote mindfulness and artistic expression.',
      link: '#',
      image: 'https://via.placeholder.com/150/FFC0CB/000000?text=Coloring+Book+1', // Placeholder image
    },
    {
      title: 'The Curious Explorer',
      description: 'Explore new worlds and concepts through coloring, fostering curiosity and learning.',
      link: '#',
      image: 'https://via.placeholder.com/150/ADD8E6/000000?text=Coloring+Book+2', // Placeholder image
    },
    {
      title: 'The Cooperative Creator',
      description: 'Coloring activities that encourage teamwork and collaborative creativity.',
      link: '#',
      image: 'https://via.placeholder.com/150/90EE90/000000?text=Coloring+Book+3', // Placeholder image
    },
  ];

  const storyBooks = [
    {
      title: 'The Little Robot Who Could',
      description: 'A heartwarming story about perseverance and overcoming challenges.',
      link: '#',
      image: 'https://via.placeholder.com/150/DDA0DD/000000?text=Story+Book+1', // Placeholder image
    },
    {
      title: 'The Girl Who Asked Why',
      description: 'An adventurous tale that encourages curiosity and critical thinking.',
      link: '#',
      image: "https://via.placeholder.com/150/FFD700/000000?text=Story+Book+2", // Placeholder image
    },
    {
      title: 'The Boy Who Built a Team',
      description: 'A story about leadership, cooperation, and the power of working together.',
      link: '#',
      image: 'https://via.placeholder.com/150/FFA07A/000000?text=Story+Book+3', // Placeholder image
    },
  ];

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Inspiring a Love of Reading</h1>
      <p className="lead text-center mb-5">
        Our books are designed to spark curiosity and imagination. We offer a range of coloring books and story books that are both entertaining and educational.
      </p>

      <h2 className="mb-4">Coloring Books</h2>
      <Row xs={1} md={2} lg={3} className="g-4 mb-5">
        {coloringBooks.map((book, index) => (
          <Col key={index}>
            <Card className="card-3d h-100">
              <Card.Img variant="top" src={book.image} alt={book.title} />
              <Card.Body className="text-center">
                <Card.Title as="h5">{book.title}</Card.Title>
                <Card.Text>{book.description}</Card.Text>
                <a href={book.link} className="btn btn-primary mt-3">View on Amazon</a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <h2 className="mb-4">Story Books</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {storyBooks.map((book, index) => (
          <Col key={index}>
            <Card className="card-3d h-100">
              <Card.Img variant="top" src={book.image} alt={book.title} />
              <Card.Body className="text-center">
                <Card.Title as="h5">{book.title}</Card.Title>
                <Card.Text>{book.description}</Card.Text>
                <a href={book.link} className="btn btn-primary mt-3">View on Amazon</a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BooksPage;