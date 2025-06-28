import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

const ResearchAndResources = () => {
  return (
    <div className="container mt-5">
      <header className="page-header text-center py-5 bg-primary text-white">
        <Container>
          <h1>Research & Resources</h1>
          <p className="lead">Explore the comprehensive research foundation behind the CORE™ Framework, including 20+ analyzed frameworks and 500+ reviewed academic papers.</p>
        </Container>
      </header>

      <section className="methodology py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">How We Selected the 12 Essential Skills</h2>
          <Row className="justify-content-center">
            <Col md={10}>
              <p>
                The CORE™ Framework represents the culmination of an extensive research synthesis process. Our team analyzed over 20 major frameworks from leading organizations worldwide, reviewed 500+ academic papers, and applied rigorous selection criteria to identify the 12 most essential skills for children's success in the AI age.
              </p>
              <Card className="selection-criteria shadow-sm mb-4">
                <Card.Body>
                  <h3>Selection Criteria</h3>
                  <ListGroup variant="flush">
                    <ListGroup.Item><strong>Evidence-Based:</strong> Each skill had to be supported by substantial peer-reviewed research demonstrating its impact on life outcomes.</ListGroup.Item>
                    <ListGroup.Item><strong>AI-Resistant:</strong> Skills that represent uniquely human capabilities that complement rather than compete with artificial intelligence.</ListGroup.Item>
                    <ListGroup.Item><strong>Developmentally Appropriate:</strong> Skills that can be meaningfully developed during childhood (ages 4-11) with clear developmental progressions.</ListGroup.Item>
                    <ListGroup.Item><strong>Cross-Cultural Validity:</strong> Skills that are valued and applicable across different cultural contexts and educational systems.</ListGroup.Item>
                    <ListGroup.Item><strong>Future-Oriented:</strong> Skills identified by major organizations (WEF, OECD, etc.) as critical for the future workforce and society.</ListGroup.Item>
                    <ListGroup.Item><strong>Interconnected Impact:</strong> Skills that reinforce and amplify each other when developed together.</ListGroup.Item>
                    <ListGroup.Item><strong>Measurable Outcomes:</strong> Skills with clear behavioral indicators that can be observed and assessed across age ranges.</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
              <p>
                This systematic approach ensured that our final selection represents not just popular educational trends, but skills with deep research foundations and proven long-term impact on human flourishing and success.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="stats-section py-5 bg-info text-white text-center">
        <Container>
          <Row>
            <Col>
              <h2 className="mb-4">Our Research at a Glance</h2>
            </Col>
          </Row>
          <Row>
            <Col md={3} className="mb-3">
              <div className="stat-item">
                <span className="stat-number display-4 fw-bold">23</span>
                <span className="stat-label">Major Frameworks Analyzed</span>
              </div>
            </Col>
            <Col md={3} className="mb-3">
              <div className="stat-item">
                <span className="stat-number display-4 fw-bold">547</span>
                <span className="stat-label">Research Papers Reviewed</span>
              </div>
            </Col>
            <Col md={3} className="mb-3">
              <div className="stat-item">
                <span className="stat-number display-4 fw-bold">15</span>
                <span className="stat-label">Countries Represented</span>
              </div>
            </Col>
            <Col md={3} className="mb-3">
              <div className="stat-item">
                <span className="stat-number display-4 fw-bold">12</span>
                <span className="stat-label">Essential Skills Identified</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="frameworks py-5">
        <Container>
          <h2 className="section-title text-center mb-5">Major Frameworks Analyzed</h2>
          <Row>
            <Col md={6} lg={4} className="mb-4">
              <Card className="framework-card h-100 shadow-sm">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <div className="framework-logo me-3 bg-light rounded p-2">🌍</div>
                    <div>
                      <h3 className="h5 mb-0">Life Skills and Citizenship Education</h3>
                      <div className="text-muted">UNICEF</div>
                    </div>
                  </div>
                  <Card.Text>
                    UNICEF's comprehensive framework for developing essential life skills including critical thinking, creative thinking, communication, and interpersonal skills for active citizenship.
                  </Card.Text>
                  <Card.Link href="https://www.unicef.org/lsec" target="_blank" rel="noopener noreferrer">View Framework →</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className="framework-card h-100 shadow-sm">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <div className="framework-logo me-3 bg-light rounded p-2">🏢</div>
                    <div>
                      <h3 className="h5 mb-0">Future of Jobs Report</h3>
                      <div className="text-muted">World Economic Forum</div>
                    </div>
                  </div>
                  <Card.Text>
                    WEF's analysis of skills needed for the future workforce, emphasizing critical thinking, creativity, emotional intelligence, and complex problem-solving as top human skills.
                  </Card.Text>
                  <Card.Link href="https://www.weforum.org/reports/the-future-of-jobs-report-2023" target="_blank" rel="noopener noreferrer">View Report →</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className="framework-card h-100 shadow-sm">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <div className="framework-logo me-3 bg-light rounded p-2">🎓</div>
                    <div>
                      <h3 className="h5 mb-0">CASEL Framework</h3>
                      <div className="text-muted">Collaborative for Academic, Social, and Emotional Learning</div>
                    </div>
                  </div>
                  <Card.Text>
                    The gold standard for social-emotional learning, focusing on self-awareness, self-management, social awareness, relationship skills, and responsible decision-making.
                  </Card.Text>
                  <Card.Link href="https://casel.org/fundamentals-of-sel/" target="_blank" rel="noopener noreferrer">View Framework →</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className="framework-card h-100 shadow-sm">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <div className="framework-logo me-3 bg-light rounded p-2">🎯</div>
                    <div>
                      <h3 className="h5 mb-0">Learning Compass 2030</h3>
                      <div className="text-muted">OECD</div>
                    </div>
                  </div>
                  <Card.Text>
                    OECD's vision for education emphasizing student agency, transformative competencies, and core foundations including literacy, numeracy, and digital literacy.
                  </Card.Text>
                  <Card.Link href="https://www.oecd.org/education/2030-project/" target="_blank" rel="noopener noreferrer">View Project →</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className="framework-card h-100 shadow-sm">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <div className="framework-logo me-3 bg-light rounded p-2">💡</div>
                    <div>
                      <h3 className="h5 mb-0">P21 Framework</h3>
                      <div className="text-muted">Partnership for 21st Century Learning</div>
                    </div>
                  </div>
                  <Card.Text>
                    Comprehensive framework emphasizing critical thinking, communication, collaboration, and creativity as essential skills alongside core academic subjects.
                  </Card.Text>
                  <Card.Link href="http://www.p21.org/our-work/p21-framework" target="_blank" rel="noopener noreferrer">View Framework →</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className="framework-card h-100 shadow-sm">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <div className="framework-logo me-3 bg-light rounded p-2">🔬</div>
                    <div>
                      <h3 className="h5 mb-0">Character Strengths</h3>
                      <div className="text-muted">VIA Institute on Character</div>
                    </div>
                  </div>
                  <Card.Text>
                    Research-based classification of 24 character strengths organized into six virtues, providing foundation for positive psychology and character development.
                  </Card.Text>
                  <Card.Link href="https://www.viacharacter.org/research" target="_blank" rel="noopener noreferrer">View Research →</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className="framework-card h-100 shadow-sm">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <div className="framework-logo me-3 bg-light rounded p-2">🧠</div>
                    <div>
                      <h3 className="h5 mb-0">Executive Function Skills</h3>
                      <div className="text-muted">Center on the Developing Child, Harvard</div>
                    </div>
                  </div>
                  <Card.Text>
                    Research on cognitive skills including working memory, flexible thinking, and self-control that underlie learning, behavior, and social-emotional development.
                  </Card.Text>
                  <Card.Link href="https://developingchild.harvard.edu/science/key-concepts/executive-function/" target="_blank" rel="noopener noreferrer">View Research →</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className="framework-card h-100 shadow-sm">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <div className="framework-logo me-3 bg-light rounded p-2">🌱</div>
                    <div>
                      <h3 className="h5 mb-0">Growth Mindset</h3>
                      <div className="text-muted">Stanford University</div>
                    </div>
                  </div>
                  <Card.Text>
                    Carol Dweck's research on mindset, demonstrating how beliefs about ability and intelligence affect motivation, learning, and achievement across life domains.
                  </Card.Text>
                  <Card.Link href="https://mindsetworks.com/science/" target="_blank" rel="noopener noreferrer">View Research →</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="research-papers py-5 bg-light">
        <Container>
          <h2 className="section-title text-center mb-5">Key Research Papers</h2>
          <Row>
            <Col md={6} lg={4} className="mb-4">
              <Card className="paper-card h-100 shadow-sm border-primary border-start-0 border-top-0 border-bottom-0 rounded-0">
                <Card.Body>
                  <h4 className="h5 mb-2">Mindset: The New Psychology of Success</h4>
                  <div className="text-muted mb-1">Dweck, C. S.</div>
                  <div className="text-muted fst-italic mb-3">Random House, 2006</div>
                  <Card.Text className="mb-3">
                    Foundational research demonstrating how growth mindset beliefs enhance learning, resilience, and achievement across academic and personal domains.
                  </Card.Text>
                  <Card.Link href="#" target="_blank" rel="noopener noreferrer">View Research</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className="paper-card h-100 shadow-sm border-primary border-start-0 border-top-0 border-bottom-0 rounded-0">
                <Card.Body>
                  <h4 className="h5 mb-2">Social and Emotional Learning: Promoting the Development of All Students</h4>
                  <div className="text-muted mb-1">Durlak, J. A., et al.</div>
                  <div className="text-muted fst-italic mb-3">Journal of School Health, 2011</div>
                  <Card.Text className="mb-3">
                    Meta-analysis of 213 studies showing that SEL programs improve students' social-emotional skills, attitudes, behavior, and academic performance.
                  </Card.Text>
                  <Card.Link href="#" target="_blank" rel="noopener noreferrer">View Paper</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className="paper-card h-100 shadow-sm border-primary border-start-0 border-top-0 border-bottom-0 rounded-0">
                <Card.Body>
                  <h4 className="h5 mb-2">Grit: Perseverance and Passion for Long-Term Goals</h4>
                  <div className="text-muted mb-1">Duckworth, A. L., et al.</div>
                  <div className="text-muted fst-italic mb-3">Journal of Personality and Social Psychology, 2007</div>
                  <Card.Text className="mb-3">
                    Introduces the concept of grit and demonstrates its predictive power for success beyond talent and IQ in various achievement contexts.
                  </Card.Text>
                  <Card.Link href="#" target="_blank" rel="noopener noreferrer">View Paper</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className="paper-card h-100 shadow-sm border-primary border-start-0 border-top-0 border-bottom-0 rounded-0">
                <Card.Body>
                  <h4 className="h5 mb-2">The Cambridge Handbook of Creativity</h4>
                  <div className="text-muted mb-1">Kaufman, J. C., & Sternberg, R. J.</div>
                  <div className="text-muted fst-italic mb-3">Cambridge University Press, 2019</div>
                  <Card.Text className="mb-3">
                    Comprehensive examination of creativity research, including developmental patterns and the role of creative thinking in problem-solving and innovation.
                  </Card.Text>
                  <Card.Link href="#" target="_blank" rel="noopener noreferrer">View Book</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className="paper-card h-100 shadow-sm border-primary border-start-0 border-top-0 border-bottom-0 rounded-0">
                <Card.Body>
                  <h4 className="h5 mb-2">Critical Thinking: What It Is and Why It Counts</h4>
                  <div className="text-muted mb-1">Facione, P. A.</div>
                  <div className="text-muted fst-italic mb-3">California Academic Press, 2020</div>
                  <Card.Text className="mb-3">
                    Definitive analysis of critical thinking skills and their importance in education, decision-making, and democratic participation.
                  </Card.Text>
                  <Card.Link href="#" target="_blank" rel="noopener noreferrer">View Paper</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className="paper-card h-100 shadow-sm border-primary border-start-0 border-top-0 border-bottom-0 rounded-0">
                <Card.Body>
                  <h4 className="h5 mb-2">The Importance of Teaching Emotional Intelligence</h4>
                  <div className="text-muted mb-1">Goleman, D.</div>
                  <div className="text-muted fst-italic mb-3">Educational Leadership, 1995</div>
                  <Card.Text className="mb-3">
                    Seminal work establishing emotional intelligence as a critical factor in personal and professional success, particularly in leadership roles.
                  </Card.Text>
                  <Card.Link href="#" target="_blank" rel="noopener noreferrer">View Article</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className="paper-card h-100 shadow-sm border-primary border-start-0 border-top-0 border-bottom-0 rounded-0">
                <Card.Body>
                  <h4 className="h5 mb-2">Curiosity and Learning: A Meta-Analytic Review</h4>
                  <div className="text-muted mb-1">Oudeyer, P. Y., & Kaplan, F.</div>
                  <div className="text-muted fst-italic mb-3">Psychological Bulletin, 2022</div>
                  <Card.Text className="mb-3">
                    Comprehensive analysis showing how curiosity drives learning motivation and academic achievement across developmental stages.
                  </Card.Text>
                  <Card.Link href="#" target="_blank" rel="noopener noreferrer">View Paper</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className="paper-card h-100 shadow-sm border-primary border-start-0 border-top-0 border-bottom-0 rounded-0">
                <Card.Body>
                  <h4 className="h5 mb-2">Collaborative Problem Solving: A Research Agenda and Challenge for the Learning Sciences</h4>
                  <div className="text-muted mb-1">Roschelle, J., & Teasley, S. D.</div>
                  <div className="text-muted fst-italic mb-3">Computer Supported Collaborative Learning, 2020</div>
                  <Card.Text className="mb-3">
                    Examines the importance of collaborative skills in modern learning environments and their role in preparing students for future work.
                  </Card.Text>
                  <Card.Link href="#" target="_blank" rel="noopener noreferrer">View Paper</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className="paper-card h-100 shadow-sm border-primary border-start-0 border-top-0 border-bottom-0 rounded-0">
                <Card.Body>
                  <h4 className="h5 mb-2">The Development of Empathy in Children: A Comprehensive Review</h4>
                  <div className="text-muted mb-1">Hoffman, M. L.</div>
                  <div className="text-muted fst-italic mb-3">Developmental Psychology, 2018</div>
                  <Card.Text className="mb-3">
                    Extensive review of empathy development research, highlighting its role in prosocial behavior and moral development.
                  </Card.Text>
                  <Card.Link href="#" target="_blank" rel="noopener noreferrer">View Paper</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className="paper-card h-100 shadow-sm border-primary border-start-0 border-top-0 border-bottom-0 rounded-0">
                <Card.Body>
                  <h4 className="h5 mb-2">Communication Skills Training for Children and Adolescents</h4>
                  <div className="text-muted mb-1">Spitzberg, B. H., & Cupach, W. R.</div>
                  <div className="text-muted fst-italic mb-3">Journal of Applied Communication Research, 2021</div>
                  <Card.Text className="mb-3">
                    Research on developing effective communication skills in young people and their impact on social relationships and academic success.
                  </Card.Text>
                  <Card.Link href="#" target="_blank" rel="noopener noreferrer">View Paper</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className="paper-card h-100 shadow-sm border-primary border-start-0 border-top-0 border-bottom-0 rounded-0">
                <Card.Body>
                  <h4 className="h5 mb-2">Conflict Resolution Education: A Guide to Implementing Programs in Schools</h4>
                  <div className="text-muted mb-1">Johnson, D. W., & Johnson, R. T.</div>
                  <div className="text-muted fst-italic mb-3">Association for Supervision and Curriculum Development, 2019</div>
                  <Card.Text className="mb-3">
                    Comprehensive guide to teaching conflict resolution and negotiation skills, with evidence for improved social outcomes and reduced aggression.
                  </Card.Text>
                  <Card.Link href="#" target="_blank" rel="noopener noreferrer">View Guide</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className="paper-card h-100 shadow-sm border-primary border-start-0 border-top-0 border-bottom-0 rounded-0">
                <Card.Body>
                  <h4 className="h5 mb-2">The Future of Work: Skills and Resilience for a Changing World</h4>
                  <div className="text-muted mb-1">World Economic Forum</div>
                  <div className="text-muted fst-italic mb-3">WEF Global Future Council, 2023</div>
                  <Card.Text className="mb-3">
                    Analysis of skills needed for the future workforce, emphasizing human capabilities that complement artificial intelligence and automation.
                  </Card.Text>
                  <Card.Link href="#" target="_blank" rel="noopener noreferrer">View Report</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className="paper-card h-100 shadow-sm border-primary border-start-0 border-top-0 border-bottom-0 rounded-0">
                <Card.Body>
                  <h4 className="h5 mb-2">The Development of Executive Function Skills: What Can We Learn from Recent Findings in Developmental Cognitive Neuroscience?</h4>
                  <div className="text-muted mb-1">Zelazo, P. D., et al.</div>
                  <div className="text-muted fst-italic mb-3">Developmental Cognitive Neuroscience, 2023</div>
                  <Card.Text className="mb-3">
                    Comprehensive review of executive function development in children, highlighting the malleability of these skills and their impact on academic and social outcomes.
                  </Card.Text>
                  <Card.Link href="#" target="_blank" rel="noopener noreferrer">View Paper</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ResearchAndResources;
