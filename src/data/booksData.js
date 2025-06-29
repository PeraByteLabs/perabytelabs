import { skillsData } from './skillsData';

const generateDummyBooks = () => {
  const books = [];
  skillsData.forEach(pillar => {
    pillar.skills.forEach(skill => {
      for (let i = 1; i <= 5; i++) {
        books.push({
          id: `${skill.name.toLowerCase().replace(/\s/g, '-')}-book-${i}`,
          skill: skill.name,
          title: `${skill.name} Story ${i}`,
          description: `A captivating storybook designed to foster ${skill.name.toLowerCase()} in young readers. This book is perfect for ${skill.ages[0].split(':')[0]} age group.`, // Using first age group for description
          link: '#',
          image: `https://via.placeholder.com/300x200?text=${skill.name.replace(/\s/g, '+ ')}+Book+${i}`,
          type: i % 2 === 0 ? 'coloring' : 'story', // Alternate between coloring and story
        });
      }
    });
  });
  return books;
};

export const allBooks = generateDummyBooks();
