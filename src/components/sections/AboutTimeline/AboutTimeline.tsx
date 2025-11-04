import React, { useEffect, useRef, useState } from 'react';
import './AboutTimeline.css';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  highlight?: boolean;
}

const AboutTimeline: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  const events: TimelineEvent[] = [
    {
      year: "2020",
      title: "THE BEGINNING",
      description: "Monarch X was founded with a vision to revolutionize competitive gaming.",
      highlight: true
    },
    {
      year: "2021",
      title: "FIRST CHAMPIONSHIP",
      description: "Our Valorant team wins their first major tournament, putting us on the map."
    },
    {
      year: "2022",
      title: "GLOBAL EXPANSION",
      description: "Expanded into multiple regions and added new game titles to our roster."
    },
    {
      year: "2023",
      title: "PARTNERSHIP EXCELLENCE",
      description: "Secured major sponsorships and launched community initiatives worldwide.",
      highlight: true
    },
    {
      year: "2024",
      title: "RECORD BREAKING",
      description: "Set new records with 15 championship wins across all divisions."
    },
    {
      year: "2025",
      title: "THE FUTURE",
      description: "Continuing to push boundaries and shape the future of esports.",
      highlight: true
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const items = timelineRef.current?.querySelectorAll('.timeline-item');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-timeline">
      <div className="timeline-container">
        <h2 className="section-title">OUR JOURNEY</h2>
        
        <div className="timeline" ref={timelineRef}>
          <div className="timeline-line"></div>
          
          {events.map((event, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} ${
                event.highlight ? 'highlight' : ''
              } ${visibleItems.includes(index) ? 'visible' : ''}`}
              data-index={index}
            >
              <div className="timeline-content">
                <div className="timeline-year">{event.year}</div>
                <h3 className="timeline-title">{event.title}</h3>
                <p className="timeline-description">{event.description}</p>
              </div>
              <div className="timeline-dot"></div>
            </div>
          ))}
        </div>
        
        <div className="timeline-cta">
          <h3>Ready to be part of our story?</h3>
          <button className="cta-button">Join Monarch X</button>
        </div>
      </div>
    </section>
  );
};

export default AboutTimeline;
