import React from 'react';

const BooksPage = () => {
  return (
    <div className="container mt-5">
      <h1>Inspiring a Love of Reading</h1>
      <p>Our books are designed to spark curiosity and imagination. We offer a range of coloring books and story books that are both entertaining and educational.</p>
      <h3>Coloring Books</h3>
      <ul>
        <li><a href="#">Coloring Book 1: The Mindful Artist</a></li>
        <li><a href="#">Coloring Book 2: The Curious Explorer</a></li>
        <li><a href="#">Coloring Book 3: The Cooperative Creator</a></li>
      </ul>
      <h3>Story Books</h3>
      <ul>
        <li><a href="#">Story Book 1: The Little Robot Who Could</a></li>
        <li><a href="#">Story Book 2: The Girl Who Asked Why</a></li>
        <li><a href="#">Story Book 3: The Boy Who Built a Team</a></li>
      </ul>
    </div>
  );
}

export default BooksPage;
