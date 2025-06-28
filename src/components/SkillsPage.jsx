import React from 'react';
import { Accordion, Container, Row, Col, Card } from 'react-bootstrap';

const SkillsPage = () => {
  const skillsData = [
    {
      pillar: '🧠 COGNITIVE PILLAR',
      description: 'Skills that support academic learning, logical reasoning, and intellectual understanding. These are foundational abilities that enable children to process information, solve problems, and think creatively.',
      skills: [
        {
          name: 'Critical Thinking',
          definition: 'The ability to analyze information, evaluate evidence, and make reasoned judgments based on logic.',
          ages: [
            '4–5: Asks why/how, recognizes simple cause-effect, spots basic contradictions.',
            '6–8: Compares facts, questions assumptions, identifies main ideas.',
            '9–11: Analyzes arguments, evaluates evidence, understands bias.',
          ],
        },
        {
          name: 'Problem Solving',
          definition: 'The process of identifying challenges, generating solutions, implementing strategies, and evaluating outcomes.',
          ages: [
            '4–5: Uses trial-and-error, identifies basic problems, seeks help when stuck.',
            '6–8: Breaks problems into parts, considers multiple solutions, persists through frustration.',
            '9–11: Uses logic, tests ideas, reflects on strategies.',
          ],
        },
        {
          name: 'Creative Thinking',
          definition: 'The ability to generate original ideas by thinking beyond conventional boundaries.',
          ages: [
            '4–5: Engages in imaginative play, finds new uses for objects, enjoys open-ended tasks.',
            '6–8: Generates ideas, adapts plans, approaches problems from new angles.',
            '9–11: Creates detailed projects, integrates feedback, challenges norms.',
          ],
        },
      ],
    },
    {
      pillar: '🔧 OPERATIONAL PILLAR',
      description: 'Skills that help children manage themselves and tasks. These executive functions support goal achievement and organization.',
      skills: [
        {
          name: 'Planning & Goal Setting',
          definition: 'The ability to envision outcomes, organize actions, and adapt plans toward achieving goals.',
          ages: [
            '4–5: Sequences tasks, sets simple goals, follows basic steps.',
            '6–8: Plans projects, sets short-term goals, tracks progress.',
            '9–11: Manages complex tasks, sets long-term goals, adapts plans.',
          ],
        },
        {
          name: 'Concentration & Memory',
          definition: 'The ability to focus attention and retain information effectively.',
          ages: [
            '4–5: Focuses 10–15 min, remembers routines, filters simple distractions.',
            '6–8: Focuses 20–30 min, uses memory tools, manages attention.',
            '9–11: Focuses 45+ min, applies advanced memory strategies.',
          ],
        },
        {
          name: 'Curiosity',
          definition: 'The intrinsic motivation to explore and understand through active questioning and discovery.',
          ages: [
            '4–5: Asks many questions, explores, shows wonder and interest.',
            '6–8: Researches topics, connects ideas, explores challenging subjects.',
            '9–11: Investigates deeply, questions ideas, shares discoveries.',
          ],
        },
      ],
    },
    {
      pillar: '🤝 RELATIONAL PILLAR',
      description: 'Skills that support effective interaction, relationship-building, and social contribution.',
      skills: [
        {
          name: 'Cooperation & Teamwork',
          definition: 'The ability to work with others toward shared goals, balancing personal input with group success.',
          ages: [
            '4–5: Takes turns, shares, follows basic rules, helps with simple tasks.',
            '6–8: Takes on roles, coordinates with peers, supports teammates.',
            '9–11: Leads teams, resolves conflicts, adapts to roles.',
          ],
        },
        {
          name: 'Communication',
          definition: 'The ability to express and receive ideas clearly and respectfully across modes.',
          ages: [
            '4–5: Expresses needs clearly, listens and responds, notices nonverbal cues.',
            '6–8: Explains clearly, adapts to audience, participates in discussions.',
            '9–11: Presents ideas clearly, navigates difficult conversations.',
          ],
        },
        {
          name: 'Conflict Resolution & Negotiation',
          definition: 'The ability to manage disagreements constructively and reach positive outcomes.',
          ages: [
            '4–5: Uses words to express disagreement, asks for help, understands fairness.',
            '6–8: Identifies perspectives, creates win-win solutions, stays calm in conflict.',
            '9–11: Mediates conflicts, negotiates, maintains relationships.',
          ],
        },
      ],
    },
    {
      pillar: '💪 EMOTIONAL PILLAR',
      description: 'Skills that support emotional intelligence, self-regulation, and personal resilience.',
      skills: [
        {
          name: 'Self-Awareness & Control',
          definition: 'Recognizing and managing one’s emotions, behaviors, and choices.',
          ages: [
            '4–5: Names basic emotions, uses simple calming strategies, shows impulse control.',
            '6–8: Describes complex emotions, uses regulation strategies, chooses responses.',
            '9–11: Manages emotions in pressure, reflects on values.',
          ],
        },
        {
          name: 'Empathy & Perspective-Taking',
          definition: 'Understanding others\' emotions and viewpoints, and responding compassionately.',
          ages: [
            '4–5: Recognizes others\' emotions, offers comfort, shows basic empathy.',
            '6–8: Identifies others\' feelings, considers perspectives, supports appropriately.',
            '9–11: Understands diverse views, acts with compassion and awareness.',
          ],
        },
        {
          name: 'Perseverance & Grit',
          definition: 'The ability to sustain effort and motivation toward long-term goals despite setbacks.',
          ages: [
            '4–5: Completes tasks, tries again after setbacks, celebrates effort.',
            '6–8: Works through frustration, learns from mistakes, stays motivated.',
            '9–11: Maintains effort on goals, uses setbacks to grow.',
          ],
        },
      ],
    },
  ];

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