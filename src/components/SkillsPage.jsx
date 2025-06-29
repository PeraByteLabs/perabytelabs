import React from 'react';
import { Accordion, Container, Row, Col, Card } from 'react-bootstrap';
import { skillsData } from '../data/skillsData';

const SkillsPage = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">The 12 Core Skills Your Child Needs in the Age of AI</h1>
      <p className="lead text-center mb-5">Our framework is built on four key pillars: Cognitive, Operational, Relational, and Emotional. These pillars encompass the 12 core skills that are crucial for a child's holistic development.</p>

      <Accordion defaultActiveKey="0" className="skills-accordion">
        {skillsData.map((pillarData, index) => (
          <Accordion.Item eventKey={String(index)} key={index}>
            <Accordion.Header>
              <h2 className="h5 mb-0">{pillarData.pillar}</h2>
            </Accordion.Header>
            <Accordion.Body>
              <p>{pillarData.description}</p>
              <Row xs={1} md={2} lg={3} className="g-4">
                {pillarData.skills.map((skill, skillIndex) => (
                  <Col key={skillIndex}>
                    <Card className="card-3d h-100">
                      <Card.Body>
                        <Card.Title as="h5">{skill.name}</Card.Title>
                        <Card.Text>{skill.definition}</Card.Text>
                        <h6>Age Group Progression:</h6>
                        <ul>
                          {skill.ages.map((age, ageIndex) => (
                            <li key={ageIndex}>{age}</li>
                          ))}
                        </ul>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
};

export default SkillsPage;
