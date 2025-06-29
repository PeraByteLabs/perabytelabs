import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { digitalGames } from '../data/gamesData';
import { skillsData } from '../data/skillsData';
import './SkillsGrid.css'; // Re-using the CSS for card styling

const GamesPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  const handleShowModal = (game) => {
    setSelectedGame(game);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  // Group digital games by skill for display
  const gamesBySkill = skillsData.map(pillar => ({
    ...pillar,
    skills: pillar.skills.map(skill => ({
      ...skill,
      games: digitalGames.filter(game => game.skill === skill.name),
      pillarShort: pillar.pillar.split(' ')[0].toLowerCase().replace('🧠', 'cognitive').replace('🔧', 'operational').replace('🤝', 'relational').replace('💪', 'emotional') // For CSS classes
    }))
  }));

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Learning Through Play: Our Educational Games</h1>
      <p className="lead text-center mb-5">
        We believe that games are a powerful tool for learning. Our digital games are designed to be fun and engaging, while also teaching children the 12 core skills. We work with child development experts to create games that are age-appropriate and effective.
      </p>

      {gamesBySkill.map(pillar => (
        <div key={pillar.pillar} className="mb-5">
          <h2 className="text-center mb-4">{pillar.pillar.replace('🧠 ', '').replace('🔧 ', '').replace('🤝 ', '').replace('💪 ', '')}</h2>
          {pillar.skills.map(skill => (
            <div key={skill.name} className="mb-4">
              <h3>{skill.name} Games</h3>
              <Row xs={1} md={2} lg={3} className="g-4">
                {skill.games.map(game => (
                  <Col key={game.id}>
                    <div className={`skill-card ${skill.pillarShort}`}> {/* Re-using skill-card for hover effects */}
                      <Card className="skill-card-inner h-100 text-center"> {/* Re-using skill-card-inner */}
                        <Card.Img variant="top" src={game.image} alt={game.title} />
                        <Card.Body>
                          <div className="skill-content-wrapper"> {/* Re-using skill-content-wrapper */}
                            <div className="category-label">
                              {skill.pillar.split(' ')[0]} {skill.pillar.split(' ')[1].replace('COGNITIVE', 'Cognitive').replace('OPERATIONAL', 'Operational').replace('RELATIONAL', 'Relational').replace('EMOTIONAL', 'Emotional')}
                            </div>
                            <Card.Title as="h5">{game.title}</Card.Title>
                            <Card.Text className="short-summary">{game.description.substring(0, 100)}...</Card.Text>
                            <Card.Text className="detailed-description">
                              {game.description}
                            </Card.Text>
                            <Button variant="primary" onClick={() => handleShowModal(game)} className="mt-3">More Info</Button>
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

      {/* Game Details Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedGame?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedGame?.image} alt={selectedGame?.title} className="img-fluid mb-3" />
          <p><strong>Skill Focus:</strong> {selectedGame?.skill}</p>
          <p>{selectedGame?.description}</p>
          <a href={selectedGame?.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Play Now</a>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default GamesPage;