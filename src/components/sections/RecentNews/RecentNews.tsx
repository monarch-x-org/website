import React, { useState } from 'react';
import './RecentNews.css';

interface NewsArticle {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
}

const RecentNews: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('ALL NEWS');
  
  const filters = ['ALL NEWS', 'PARTNERSHIPS', 'PRESS RELEASE', 'VALORANT'];
  
  const articles: NewsArticle[] = [
    {
      id: 1,
      title: "NEWS ARTICLE 1 HEADLINE PLACEHOLDER TEXT",
      date: "SEP 10, 2025",
      category: "PRESS RELEASE",
      image: "/images/news-1.jpg"
    },
    {
      id: 2,
      title: "NEWS ARTICLE 2 HEADLINE PLACEHOLDER TEXT",
      date: "AUG 21, 2025",
      category: "PARTNERSHIPS",
      image: "/images/news-2.jpg"
    },
    {
      id: 3,
      title: "NEWS ARTICLE 3 HEADLINE PLACEHOLDER TEXT",
      date: "AUG 03, 2025",
      category: "VALORANT",
      image: "/images/news-3.jpg"
    },
    {
      id: 4,
      title: "NEWS ARTICLE 4 HEADLINE PLACEHOLDER TEXT",
      date: "JUL 31, 2025",
      category: "VALORANT",
      image: "/images/news-4.jpg"
    },
    {
      id: 5,
      title: "NEWS ARTICLE 5 HEADLINE PLACEHOLDER TEXT",
      date: "JUL 30, 2025",
      category: "PARTNERSHIPS",
      image: "/images/news-5.jpg"
    },
    {
      id: 6,
      title: "NEWS ARTICLE 6 HEADLINE PLACEHOLDER TEXT",
      date: "JUL 02, 2025",
      category: "PRESS RELEASE",
      image: "/images/news-6.jpg"
    }
  ];
  
  const filteredArticles = activeFilter === 'ALL NEWS' 
    ? articles 
    : articles.filter(article => article.category === activeFilter);

  return (
    <section className="recent-news">
      <div className="recent-container">
        <h2 className="section-title">RECENT NEWS</h2>
        
        <div className="news-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        
        <div className="news-grid">
          {filteredArticles.map((article) => (
            <article key={article.id} className="news-card">
              <div className="news-card-image" style={{ backgroundImage: `url(${article.image})` }}>
                <div className="news-placeholder">
                  <span className="icon">📰</span>
                </div>
              </div>
              <div className="news-card-content">
                <h3 className="news-card-title">{article.title}</h3>
                <span className="news-card-date">{article.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentNews;
