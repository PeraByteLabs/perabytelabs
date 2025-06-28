import React, { useState } from 'react';
import NavigationBar from './components/NavigationBar';
import HomePage from './components/HomePage';
import SkillsPage from './components/SkillsPage';
import GamesPage from './components/GamesPage';
import BooksPage from './components/BooksPage';
import ResourcesPage from './components/ResourcesPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'skills':
        return <SkillsPage />;
      case 'games':
        return <GamesPage />;
      case 'books':
        return <BooksPage />;
      case 'resources':
        return <ResourcesPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="d-flex flex-column vh-100">
      <NavigationBar handlePageChange={handlePageChange} />
      <div className="flex-grow-1">
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
}

export default App;