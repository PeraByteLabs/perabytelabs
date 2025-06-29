import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './SkillsGrid.css'; // Import the CSS file

const SkillsGrid = ({ skills }) => {
  return (
    <Container>
      <Row xs={1} md={2} lg={3} className="g-4">
        {skills.map((skill, index) => (
          <Col key={index}>
            <div className={`skill-card ${skill.pillarShort}`}> {/* Outer wrapper for hover detection */}
              <Card className="skill-card-inner h-100"> {/* Inner card for styling and content */}
                <Card.Body>
                  <div className="skill-content-wrapper"> {/* New wrapper for transformable content */}
                    <div className="category-label">
                      {skill.pillar.split(' ')[0]} {skill.pillar.split(' ')[1].replace('COGNITIVE', 'Cognitive').replace('OPERATIONAL', 'Operational').replace('RELATIONAL', 'Relational').replace('EMOTIONAL', 'Emotional')}
                    </div>
                    <Card.Title as="h5">{skill.name}</Card.Title>
                    <Card.Text className="short-summary">
                      {skill.definition}
                    </Card.Text>
                    <Card.Text className="detailed-description">
                      <h6>Age Group Progression:</h6>
                      <ul>
                        {skill.ages.map((age, ageIndex) => (
                          <li key={ageIndex}>{age}</li>
                        ))}
                      </ul>
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SkillsGrid;
