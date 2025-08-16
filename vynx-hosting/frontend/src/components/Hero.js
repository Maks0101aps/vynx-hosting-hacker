import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const text = "SECURE . FAST . RELIABLE . HACKER-READY";
  
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);
  
  return (
    <section className="hero">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-8 mx-auto">
            <div className="matrix-bg" id="matrix-bg"></div>
            <h2 className="display-4 fw-bold mb-4">
              <span className="terminal-text">{displayText}</span>
            </h2>
            <p className="lead mb-4">
              VYNX Hosting provides enterprise-grade infrastructure for the modern hacker. 
              Our secure, fast, and reliable hosting solutions are designed for developers, 
              security researchers, and tech enthusiasts who demand the best.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <button className="btn btn-primary btn-lg">
                GET STARTED
              </button>
              <button className="btn btn-outline-light btn-lg">
                VIEW PLANS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
