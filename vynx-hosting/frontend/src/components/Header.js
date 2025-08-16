import React, { useState, useEffect } from 'react';

const Header = ({ setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerText, setHeaderText] = useState('');
  const fullText = 'VYNX HOSTING';
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setHeaderText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <header className="App-header">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center py-3">
          <h1 className="App-title">{headerText}<span className="terminal-text"></span></h1>
          
          <nav className="d-none d-md-block">
            <a href="#" className="nav-link" onClick={() => setCurrentPage('home')}>HOME</a>
            <a href="#" className="nav-link" onClick={() => setCurrentPage('services')}>SERVICES</a>
            <a href="#" className="nav-link" onClick={() => setCurrentPage('about')}>ABOUT</a>
            <a href="#" className="nav-link" onClick={() => setCurrentPage('contact')}>CONTACT</a>
          </nav>
          
          <button 
            className="d-md-none btn btn-primary" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            MENU
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="d-md-none py-3">
            <a href="#" className="nav-link d-block" onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }}>HOME</a>
            <a href="#" className="nav-link d-block" onClick={() => { setCurrentPage('services'); setIsMenuOpen(false); }}>SERVICES</a>
            <a href="#" className="nav-link d-block" onClick={() => { setCurrentPage('about'); setIsMenuOpen(false); }}>ABOUT</a>
            <a href="#" className="nav-link d-block" onClick={() => { setCurrentPage('contact'); setIsMenuOpen(false); }}>CONTACT</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
