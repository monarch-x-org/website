import React, { useEffect, useState } from 'react';
import './AboutHero.css';

const AboutHero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="about-hero">
      <div className="about-hero-background">
        <div className="parallax-layer layer-1" style={{ transform: `translateY(${scrollY * 0.5}px)` }}></div>
        <div className="parallax-layer layer-2" style={{ transform: `translateY(${scrollY * 0.3}px)` }}></div>
        <div className="parallax-layer layer-3" style={{ transform: `translateY(${scrollY * 0.1}px)` }}></div>
      </div>
      
      <div className="about-hero-content">
        <div className="about-hero-text-wrapper">
          <h1 className="about-hero-title">
            <span className="title-line">WE ARE</span>
            <span className="title-line monarch">MONARCH X</span>
          </h1>
          <p className="about-hero-subtitle">
            Redefining excellence in competitive gaming
          </p>
          <div className="about-hero-stats">
            <div className="stat">
              <span className="stat-number">2020</span>
              <span className="stat-label">Founded</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Championships</span>
            </div>
            <div className="stat">
              <span className="stat-number">100+</span>
              <span className="stat-label">Players</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <span className="scroll-text">Scroll to explore</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default AboutHero;
