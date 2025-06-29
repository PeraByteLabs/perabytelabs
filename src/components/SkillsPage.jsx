import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { skillsData } from '../data/skillsData';
import SkillsGrid from './SkillsGrid';

const SkillsPage = () => {
  const [filter, setFilter] = useState('All');

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const allSkills = skillsData.flatMap(pillar =>
    pillar.skills.map(skill => ({
      ...skill,
      pillar: pillar.pillar, // Add pillar information to each skill for filtering and styling
      pillarShort: pillar.pillar.split(' ')[0].toLowerCase().replace('🧠', 'cognitive').replace('🔧', 'operational').replace('🤝', 'relational').replace('💪', 'emotional') // For CSS classes
    }))
  );

  const filteredSkills = allSkills.filter(skill => filter === 'All' || skill.pillarShort === filter.toLowerCase());

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">The 12 Core Skills Your Child Needs in the Age of AI</h1>
      <p className="lead text-center mb-5">Our framework is built on four key pillars: Cognitive, Operational, Relational, and Emotional. These pillars encompass the 12 core skills that are crucial for a child's holistic development.</p>

      {/* Filter Controls */}
      <div className="filter-controls text-center mb-4">
        <Button
          variant={filter === 'All' ? 'primary' : 'outline-primary'}
          onClick={() => handleFilterChange('All')}
          className="mx-2 mb-2"
        >
          All Categories
        </Button>
        {skillsData.map((pillar, index) => (
          <Button
            key={index}
            variant={filter === pillar.pillarShort ? 'primary' : 'outline-primary'}
            onClick={() => handleFilterChange(pillar.pillarShort)}
            className="mx-2 mb-2"
          >
            {pillar.pillar.split(' ')[1]}
          </Button>
        ))}
      </div>

      {/* Skills Grid */}
      <SkillsGrid skills={filteredSkills} />
    </Container>
  );
};

export default SkillsPage;
