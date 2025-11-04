import React from 'react';
import './AboutMission.css';

const AboutMission: React.FC = () => {
  return (
    <section className="about-mission">
      <div className="mission-container">
        <div className="mission-content">
          <div className="mission-text">
            <h2 className="section-title">OUR MISSION</h2>
            <p className="mission-statement">
              To build the world's most prestigious esports organization by fostering 
              exceptional talent, creating unforgettable moments, and inspiring the next 
              generation of competitive gamers.
            </p>
            <div className="mission-pillars">
              <div className="pillar">
                <div className="pillar-icon">🎯</div>
                <h3>Excellence</h3>
                <p>Striving for perfection in every match, every strategy, every moment.</p>
              </div>
              <div className="pillar">
                <div className="pillar-icon">🤝</div>
                <h3>Community</h3>
                <p>Building lasting connections with fans, players, and partners worldwide.</p>
              </div>
              <div className="pillar">
                <div className="pillar-icon">💡</div>
                <h3>Innovation</h3>
                <p>Pioneering new approaches to training, content, and fan engagement.</p>
              </div>
            </div>
          </div>
          <div className="mission-visual">
            <div className="visual-element">
              <div className="rotating-crown">👑</div>
              <div className="orbit orbit-1"></div>
              <div className="orbit orbit-2"></div>
              <div className="orbit orbit-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
