import React from 'react';
import { Accordion } from 'react-bootstrap';

const SkillsPage = () => {
  return (
    <div className="container mt-5">
      <h1>The 12 Core Skills Your Child Needs in the Age of AI</h1>
      <p>Our framework is built on four key pillars: Cognitive, Operational, Relational, and Emotional. These pillars encompass the 12 core skills that are crucial for a child's holistic development.</p>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>🧠 COGNITIVE PILLAR</Accordion.Header>
          <Accordion.Body>
            <p>Skills that support academic learning, logical reasoning, and intellectual understanding. These are foundational abilities that enable children to process information, solve problems, and think creatively.</p>
            <h5>1. Critical Thinking</h5>
            <p>The ability to analyze information, evaluate evidence, and make reasoned judgments based on logic.</p>
            <ul>
              <li><strong>4–5:</strong> Asks why/how, recognizes simple cause-effect, spots basic contradictions.</li>
              <li><strong>6–8:</strong> Compares facts, questions assumptions, identifies main ideas.</li>
              <li><strong>9–11:</strong> Analyzes arguments, evaluates evidence, understands bias.</li>
            </ul>
            <h5>2. Problem Solving</h5>
            <p>The process of identifying challenges, generating solutions, implementing strategies, and evaluating outcomes.</p>
            <ul>
              <li><strong>4–5:</strong> Uses trial-and-error, identifies basic problems, seeks help when stuck.</li>
              <li><strong>6–8:</strong> Breaks problems into parts, considers multiple solutions, persists through frustration.</li>
              <li><strong>9–11:</strong> Uses logic, tests ideas, reflects on strategies.</li>
            </ul>
            <h5>3. Creative Thinking</h5>
            <p>The ability to generate original ideas by thinking beyond conventional boundaries.</p>
            <ul>
              <li><strong>4–5:</strong> Engages in imaginative play, finds new uses for objects, enjoys open-ended tasks.</li>
              <li><strong>6–8:</strong> Generates ideas, adapts plans, approaches problems from new angles.</li>
              <li><strong>9–11:</strong> Creates detailed projects, integrates feedback, challenges norms.</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>🔧 OPERATIONAL PILLAR</Accordion.Header>
          <Accordion.Body>
            <p>Skills that help children manage themselves and tasks. These executive functions support goal achievement and organization.</p>
            <h5>4. Planning & Goal Setting</h5>
            <p>The ability to envision outcomes, organize actions, and adapt plans toward achieving goals.</p>
            <ul>
              <li><strong>4–5:</strong> Sequences tasks, sets simple goals, follows basic steps.</li>
              <li><strong>6–8:</strong> Plans projects, sets short-term goals, tracks progress.</li>
              <li><strong>9–11:</strong> Manages complex tasks, sets long-term goals, adapts plans.</li>
            </ul>
            <h5>5. Concentration & Memory</h5>
            <p>The ability to focus attention and retain information effectively.</p>
            <ul>
              <li><strong>4–5:</strong> Focuses 10–15 min, remembers routines, filters simple distractions.</li>
              <li><strong>6–8:</strong> Focuses 20–30 min, uses memory tools, manages attention.</li>
              <li><strong>9–11:</strong> Focuses 45+ min, applies advanced memory strategies.</li>
            </ul>
            <h5>6. Curiosity</h5>
            <p>The intrinsic motivation to explore and understand through active questioning and discovery.</p>
            <ul>
              <li><strong>4–5:</strong> Asks many questions, explores, shows wonder and interest.</li>
              <li><strong>6–8:</strong> Researches topics, connects ideas, explores challenging subjects.</li>
              <li><strong>9–11:</strong> Investigates deeply, questions ideas, shares discoveries.</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>🤝 RELATIONAL PILLAR</Accordion.Header>
          <Accordion.Body>
            <p>Skills that support effective interaction, relationship-building, and social contribution.</p>
            <h5>7. Cooperation & Teamwork</h5>
            <p>The ability to work with others toward shared goals, balancing personal input with group success.</p>
            <ul>
              <li><strong>4–5:</strong> Takes turns, shares, follows basic rules, helps with simple tasks.</li>
              <li><strong>6–8:</strong> Takes on roles, coordinates with peers, supports teammates.</li>
              <li><strong>9–11:</strong> Leads teams, resolves conflicts, adapts to roles.</li>
            </ul>
            <h5>8. Communication</h5>
            <p>The ability to express and receive ideas clearly and respectfully across modes.</p>
            <ul>
              <li><strong>4–5:</strong> Expresses needs clearly, listens and responds, notices nonverbal cues.</li>
              <li><strong>6–8:</strong> Explains clearly, adapts to audience, participates in discussions.</li>
              <li><strong>9–11:</strong> Presents ideas clearly, navigates difficult conversations.</li>
            </ul>
            <h5>9. Conflict Resolution & Negotiation</h5>
            <p>The ability to manage disagreements constructively and reach positive outcomes.</p>
            <ul>
              <li><strong>4–5:</strong> Uses words to express disagreement, asks for help, understands fairness.</li>
              <li><strong>6–8:</strong> Identifies perspectives, creates win-win solutions, stays calm in conflict.</li>
              <li><strong>9–11:</strong> Mediates conflicts, negotiates, maintains relationships.</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>💪 EMOTIONAL PILLAR</Accordion.Header>
          <Accordion.Body>
            <p>Skills that support emotional intelligence, self-regulation, and personal resilience.</p>
            <h5>10. Self-Awareness & Control</h5>
            <p>Recognizing and managing one’s emotions, behaviors, and choices.</p>
            <ul>
              <li><strong>4–5:</strong> Names basic emotions, uses simple calming strategies, shows impulse control.</li>
              <li><strong>6–8:</strong> Describes complex emotions, uses regulation strategies, chooses responses.</li>
              <li><strong>9–11:</strong> Manages emotions in pressure, reflects on values.</li>
            </ul>
            <h5>11. Empathy & Perspective-Taking</h5>
            <p>Understanding others' emotions and viewpoints, and responding compassionately.</p>
            <ul>
              <li><strong>4–5:</strong> Recognizes others' emotions, offers comfort, shows basic empathy.</li>
              <li><strong>6–8:</strong> Identifies others' feelings, considers perspectives, supports appropriately.</li>
              <li><strong>9–11:</strong> Understands diverse views, acts with compassion and awareness.</li>
            </ul>
            <h5>12. Perseverance & Grit</h5>
            <p>The ability to sustain effort and motivation toward long-term goals despite setbacks.</p>
            <ul>
              <li><strong>4–5:</strong> Completes tasks, tries again after setbacks, celebrates effort.</li>
              <li><strong>6–8:</strong> Works through frustration, learns from mistakes, stays motivated.</li>
              <li><strong>9–11:</strong> Maintains effort on goals, uses setbacks to grow.</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default SkillsPage;
