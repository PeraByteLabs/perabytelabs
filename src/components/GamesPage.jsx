import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { digitalGames, nonDigitalGames } from '../data/gamesData';

const GamesPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  const handleShowModal = (game) => {
    setSelectedGame(game);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Learning Through Play: Our Educational Games</h1>
      <p className="lead text-center mb-5">
        We believe that games are a powerful tool for learning. Our digital games are designed to be fun and engaging, while also teaching children the 12 core skills. We work with child development experts to create games that are age-appropriate and effective.
        Additionally, we provide a comprehensive collection of non-digital games and activities to foster skill development in real-life settings.
      </p>

      {/* Digital Games Section */}
      <h2 className="text-center mb-4">Digital Games</h2>
      <Row xs={1} md={2} lg={3} className="g-4 mb-5">
        {digitalGames.map((game) => (
          <Col key={game.id}>
            <Card className="card-3d h-100 text-center">
              <Card.Img variant="top" src={game.image} alt={game.title} />
              <Card.Body>
                <Card.Title as="h5">{game.title}</Card.Title>
                <Card.Text>{game.description.substring(0, 100)}...</Card.Text>
                <Button variant="primary" onClick={() => handleShowModal(game)}>More Info</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Non-Digital Games Section */}
      <h2 className="text-center mb-4">Non-Digital Games & Activities</h2>
      <p className="lead text-center mb-5">
        Beyond digital experiences, we offer a vast library of real-life games and activities, categorized by skill, to encourage hands-on learning and development.
      </p>
      {nonDigitalGames.map(pillar => (
        <div key={pillar.pillar} className="mb-4">
          <h3>{pillar.pillar}</h3>
          {pillar.skills.map(skill => (
            <div key={skill.name} className="mb-3">
              <h4>{skill.name} Activities</h4>
              <ul>
                {skill.activities.slice(0, 5).map(activity => ( // Displaying first 5 activities for brevity
                  <li key={activity.id}>{activity.title}: {activity.description}</li>
                ))}
                {/* Add a button to show all 200 activities if needed */}
              </ul>
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
