import React, { useState, useEffect, useCallback, useRef } from "react";
import "./Hero.css";
import { getAvailableShopItems, ShopItem } from "../../../config/shopItems";

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [nextSlideIndex, setNextSlideIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');
  
  // Touch/swipe handling
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Get available shop items from external data file
  const products: ShopItem[] = getAvailableShopItems();

  const changeSlide = useCallback((newSlide: number | ((prev: number) => number), direction: 'left' | 'right' = 'right') => {
    if (isTransitioning) return;
    
    const slideIndex = typeof newSlide === 'function' ? newSlide(currentSlide) : newSlide;
    if (slideIndex === currentSlide) return;
    
    setNextSlideIndex(slideIndex);
    setSlideDirection(direction);
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentSlide(slideIndex);
      setIsTransitioning(false);
    }, 250);
  }, [currentSlide, isTransitioning]);

  // Auto-rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        changeSlide((prev) => (prev + 1) % products.length);
      }
    }, 7000); // Change every 7 seconds

    return () => clearInterval(interval);
  }, [products.length, isTransitioning, changeSlide]);

  const nextSlide = () => {
    changeSlide((prev) => (prev + 1) % products.length, 'right');
  };

  const prevSlide = () => {
    changeSlide((prev) => (prev - 1 + products.length) % products.length, 'left');
  };

  const goToSlide = (index: number) => {
    if (index !== currentSlide) {
      const direction = index > currentSlide ? 'right' : 'left';
      changeSlide(index, direction);
    }
  };

  // Touch handlers for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const swipeThreshold = 50; // Minimum distance for a swipe
    const diff = touchStartX.current - touchEndX.current;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swiped left - go to next slide
        nextSlide();
      } else {
        // Swiped right - go to previous slide
        prevSlide();
      }
    }
    
    // Reset values
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="hero" id="shop">
      <div className="hero-container">
        <div 
          className="hero-carousel-container"
          ref={carouselRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation arrows positioned outside slides */}
          <div className="hero-navigation">
            <button className="nav-arrow prev" onClick={prevSlide}>
              <span>‹</span>
            </button>
            <button className="nav-arrow next" onClick={nextSlide}>
              <span>›</span>
            </button>
          </div>
          
          {/* Current product slide */}
          <div className={`hero-product-slide current-slide ${isTransitioning ? `slide-out-${slideDirection === 'right' ? 'left' : 'right'}` : ''}`}>
            <div className="hero-content">
              <div className="hero-text">
                <span className="hero-category">{products[currentSlide].category}</span>
                <h1 className="hero-title">{products[currentSlide].title}</h1>
                <div className="hero-price">{products[currentSlide].price}</div>
                {products[currentSlide].shopifyLink ? (
                  <a 
                    href={products[currentSlide].shopifyLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hero-cta"
                  >
                    VIEW PRODUCT <span>→</span>
                  </a>
                ) : (
                  <button className="hero-cta" disabled>
                    COMING SOON <span>→</span>
                  </button>
                )}
              </div>
            </div>
            
            <div className="hero-visual">
              <div className="product-showcase">
                <div className="product-display">
                  <div className="product-icon">
                    {products[currentSlide].icon}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Next product slide (only visible during transition) */}
          {isTransitioning && (
            <div className={`hero-product-slide next-slide slide-in-${slideDirection === 'right' ? 'right' : 'left'}`}>
              <div className="hero-content">
                <div className="hero-text">
                  <span className="hero-category">{products[nextSlideIndex].category}</span>
                  <h1 className="hero-title">{products[nextSlideIndex].title}</h1>
                  <div className="hero-price">{products[nextSlideIndex].price}</div>
                  {products[nextSlideIndex].shopifyLink ? (
                    <a 
                      href={products[nextSlideIndex].shopifyLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hero-cta"
                    >
                      VIEW PRODUCT <span>→</span>
                    </a>
                  ) : (
                    <button className="hero-cta" disabled>
                      COMING SOON <span>→</span>
                    </button>
                  )}
                </div>
              </div>
              
              <div className="hero-visual">
                <div className="product-showcase">
                  <div className="product-display">
                    <div className="product-icon">
                      {products[nextSlideIndex].icon}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
