import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { allBooks } from '../data/booksData';
import { skillsData } from '../data/skillsData';
import './SkillsGrid.css'; // Re-using the CSS for card styling

const BooksPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleShowModal = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  // Group books by skill for display
  const booksBySkill = skillsData.map(pillar => ({
    ...pillar,
    skills: pillar.skills.map(skill => ({
      ...skill,
      books: allBooks.filter(book => book.skill === skill.name),
      pillarShort: pillar.pillar.split(' ')[0].toLowerCase().replace('🧠', 'cognitive').replace('🔧', 'operational').replace('🤝', 'relational').replace('💪', 'emotional') // For CSS classes
    }))
  }));

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Inspiring a Love of Reading</h1>
      <p className="lead text-center mb-5">
        Our books are designed to spark curiosity and imagination. We offer a range of coloring books and story books that are both entertaining and educational.
      </p>

      {booksBySkill.map(pillar => (
        <div key={pillar.pillar} className="mb-5">
          <h2 className="text-center mb-4">{pillar.pillar.replace('🧠 ', '').replace('🔧 ', '').replace('🤝 ', '').replace('💪 ', '')}</h2>
          {pillar.skills.map(skill => (
            <div key={skill.name} className="mb-4">
              <h3>{skill.name}</h3>
              <Row xs={1} md={2} lg={3} className="g-4">
                {skill.books.map(book => (
                  <Col key={book.id}>
                    <div className={`skill-card ${skill.pillarShort}`}> {/* Re-using skill-card for hover effects */}
                      <Card className="skill-card-inner h-100 text-center"> {/* Re-using skill-card-inner */}
                        <Card.Img variant="top" src={book.image} alt={book.title} />
                        <Card.Body>
                          <div className="skill-content-wrapper"> {/* Re-using skill-content-wrapper */}
                            <div className="category-label">
                              {skill.pillar.split(' ')[0]} {skill.pillar.split(' ')[1].replace('COGNITIVE', 'Cognitive').replace('OPERATIONAL', 'Operational').replace('RELATIONAL', 'Relational').replace('EMOTIONAL', 'Emotional')}
                            </div>
                            <Card.Title as="h5">{book.title}</Card.Title>
                            <Card.Text className="short-summary">{book.description.substring(0, 100)}...</Card.Text>
                            <Card.Text className="detailed-description">
                              {book.description}
                            </Card.Text>
                            <Button variant="primary" onClick={() => handleShowModal(book)} className="mt-3">More Info</Button>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </div>
      ))}

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