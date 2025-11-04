import React, { useState } from 'react';
import './AboutValues.css';

interface Value {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

const AboutValues: React.FC = () => {
  const [activeValue, setActiveValue] = useState(0);

  const values: Value[] = [
    {
      id: 1,
      title: "INTEGRITY",
      description: "We compete with honor and respect, maintaining the highest standards of sportsmanship in every game.",
      icon: "⚖️",
      color: "rgba(238, 79, 145, 0.8)"
    },
    {
      id: 2,
      title: "PASSION",
      description: "Our love for gaming drives us to push boundaries and achieve the impossible.",
      icon: "🔥",
      color: "rgba(238, 79, 145, 0.7)"
    },
    {
      id: 3,
      title: "TEAMWORK",
      description: "Together we rise. Every victory is earned through trust, communication, and collaboration.",
      icon: "🤲",
      color: "rgba(238, 79, 145, 0.6)"
    },
    {
      id: 4,
      title: "GROWTH",
      description: "We never stop learning, evolving, and improving our craft to stay at the pinnacle of esports.",
      icon: "🌱",
      color: "rgba(238, 79, 145, 0.5)"
    }
  ];

  return (
    <section className="about-values">
      <div className="values-container">
        <h2 className="section-title">OUR VALUES</h2>
        
        <div className="values-grid">
          {values.map((value, index) => (
            <div
              key={value.id}
              className={`value-card ${activeValue === index ? 'active' : ''}`}
              onClick={() => setActiveValue(index)}
              style={{ '--value-color': value.color } as React.CSSProperties}
            >
              <div className="value-icon">{value.icon}</div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
              <div className="value-number">{String(index + 1).padStart(2, '0')}</div>
            </div>
          ))}
        </div>
        
        <div className="values-showcase">
          <div className="showcase-content">
            <div className="showcase-icon">{values[activeValue].icon}</div>
            <h3 className="showcase-title">{values[activeValue].title}</h3>
            <p className="showcase-description">{values[activeValue].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
