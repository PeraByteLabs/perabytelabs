import { skillsData } from './skillsData';

const generateDummyGames = () => {
  const games = [];
  skillsData.forEach(pillar => {
    pillar.skills.forEach(skill => {
      for (let i = 1; i <= 5; i++) {
        games.push({
          id: `${skill.name.toLowerCase().replace(/\s/g, '-')}-game-${i}`,
          skill: skill.name,
          title: `${skill.name} Adventure ${i}`,
          description: `A digital game designed to enhance ${skill.name.toLowerCase()} through interactive challenges and fun scenarios. This game focuses on ${skill.ages[0].split(':')[0]} age group.`, // Using first age group for description
          link: '#',
          image: `https://via.placeholder.com/300x200?text=${skill.name.replace(/\s/g, '+ ')}+Game+${i}`,
        });
      }
    });
  });
  return games;
};

export const digitalGames = generateDummyGames();

export const nonDigitalGames = skillsData.map(pillar => ({
  pillar: pillar.pillar,
  skills: pillar.skills.map(skill => ({
    name: skill.name,
    activities: Array.from({ length: 200 }, (_, i) => ({
      id: `${skill.name.toLowerCase().replace(/\s/g, '-')}-activity-${i + 1}`,
      title: `${skill.name} Activity ${i + 1}`,
      description: `A real-life activity to develop ${skill.name.toLowerCase()} skills. This activity is suitable for various age groups and can be done at home or outdoors.`,
    })),
  })),
}));
