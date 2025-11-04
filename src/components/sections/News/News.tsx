import React from "react";
import "./News.css";

const News: React.FC = () => {
  return (
    <section className="news" id="news">
      <div className="container">
        <div className="news-header">
          <div className="news-title-section">
            <h2 className="news-title">FEATURED NEWS</h2>
          </div>
        </div>
        
        <div className="news-placeholder">
          <div className="placeholder-content">
            <h3>No news at the moment</h3>
            <p>Check back soon for updates from Monarch-X</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
