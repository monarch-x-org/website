import React from 'react';
import './FeaturedNews.css';

const FeaturedNews: React.FC = () => {
  const featuredArticle = {
    id: 1,
    title: "FEATURED NEWS ARTICLE HEADLINE PLACEHOLDER TEXT HERE FOR MAIN STORY",
    date: "SEP 10, 2025",
    image: "/images/news-featured.jpg",
    category: "ESPORTS",
    featured: true
  };

  const sideArticles = [
    {
      id: 2,
      title: "SIDE NEWS ARTICLE 1 HEADLINE PLACEHOLDER TEXT",
      date: "SEP 10, 2025",
      image: "/images/news-side-1.jpg",
      category: "ESPORTS"
    },
    {
      id: 3,
      title: "SIDE NEWS ARTICLE 2 HEADLINE PLACEHOLDER TEXT",
      date: "AUG 21, 2025",
      image: "/images/news-side-2.jpg",
      category: "PARTNERSHIPS"
    },
    {
      id: 4,
      title: "SIDE NEWS ARTICLE 3 HEADLINE PLACEHOLDER TEXT",
      date: "AUG 03, 2025",
      image: "/images/news-side-3.jpg",
      category: "VALORANT"
    }
  ];

  return (
    <section className="featured-news">
      <div className="featured-container">
        <h1 className="section-title">FEATURED NEWS</h1>
        
        <div className="featured-grid">
          <div className="featured-main">
            <article className="featured-article">
              <div className="featured-image-wrapper">
                <div className="featured-image" style={{ backgroundImage: `url(${featuredArticle.image})` }}>
                  <div className="featured-placeholder">
                    <span className="icon">👥</span>
                  </div>
                </div>
              </div>
              <div className="featured-content">
                <div className="article-meta">
                  <span className="article-date">{featuredArticle.date}</span>
                </div>
                <h2 className="featured-title">{featuredArticle.title}</h2>
                <button className="read-more-btn">
                  <span>READ MORE</span>
                  <span className="arrow">→</span>
                </button>
              </div>
            </article>
          </div>
          
          <div className="featured-sidebar">
            {sideArticles.map((article) => (
              <article key={article.id} className="side-article">
                <div className="side-article-image" style={{ backgroundImage: `url(${article.image})` }}>
                  <div className="side-placeholder">
                    <span className="icon">👥</span>
                  </div>
                </div>
                <div className="side-article-content">
                  <h3 className="side-article-title">{article.title}</h3>
                  <span className="side-article-date">{article.date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedNews;
