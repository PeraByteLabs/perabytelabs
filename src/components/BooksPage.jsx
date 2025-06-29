import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { allBooks } from '../data/booksData';

const BooksPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleShowModal = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const coloringBooks = allBooks.filter(book => book.type === 'coloring');
  const storyBooks = allBooks.filter(book => book.type === 'story');

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Inspiring a Love of Reading</h1>
      <p className="lead text-center mb-5">
        Our books are designed to spark curiosity and imagination, aligning with the 12 core skills. We offer a range of coloring books and story books that are both entertaining and educational, fostering a love for reading and learning.
      </p>

      {/* Coloring Books Section */}
      <h2 className="text-center mb-4">Coloring Books</h2>
      <Row xs={1} md={2} lg={3} className="g-4 mb-5">
        {coloringBooks.map((book) => (
          <Col key={book.id}>
            <Card className="card-3d h-100 text-center">
              <Card.Img variant="top" src={book.image} alt={book.title} />
              <Card.Body>
                <Card.Title as="h5">{book.title}</Card.Title>
                <Card.Text>{book.description.substring(0, 100)}...</Card.Text>
                <Button variant="primary" onClick={() => handleShowModal(book)}>More Info</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Story Books Section */}
      <h2 className="text-center mb-4">Story Books</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {storyBooks.map((book) => (
          <Col key={book.id}>
            <Card className="card-3d h-100 text-center">
              <Card.Img variant="top" src={book.image} alt={book.title} />
              <Card.Body>
                <Card.Title as="h5">{book.title}</Card.Title>
                <Card.Text>{book.description.substring(0, 100)}...</Card.Text>
                <Button variant="primary" onClick={() => handleShowModal(book)}>More Info</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Book Details Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedBook?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedBook?.image} alt={selectedBook?.title} className="img-fluid mb-3" />
          <p><strong>Skill Focus:</strong> {selectedBook?.skill}</p>
          <p>{selectedBook?.description}</p>
          <a href={selectedBook?.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View on Amazon</a>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default BooksPage;
