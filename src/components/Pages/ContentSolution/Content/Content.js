import React  from 'react';
import './Content.css'
import { useEffect } from 'react';
import  { useState  } from 'react';



const Content = () => {


        useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
        const originalCards = [
            {
              imageUrl: "/img1.jpg",
              title: "Mountain Adventure",
              description: "Explore the majestic peaks and valleys",
              link: "#",
              viewMore: "https://example.com/mountains"
            },
            {
              imageUrl: "/img2.jpg",
              title: "Ocean Escape",
              description: "Discover hidden beaches and coral reefs",
              link: "#",
              viewMore: "https://example.com/ocean"
            },
            {
              imageUrl: "/img3.jpg",
              title: "Urban Explorer",
              description: "Navigate through city landscapes",
              link: "#",
              viewMore: "https://example.com/urban"
            }
          ];
        
          const originalLength = originalCards.length;
          const extendedCards = [
            originalCards[originalLength - 1],
            ...originalCards,
            originalCards[0]
          ];
        
          const [currentIndex, setCurrentIndex] = useState(2);
          const [transitionEnabled, setTransitionEnabled] = useState(true);
        
          useEffect(() => {
            if (currentIndex === 1) {
              setTimeout(() => {
                setTransitionEnabled(false);
                setCurrentIndex(originalLength + 1);
              }, 500);
            } else if (currentIndex === originalLength + 2) {
              setTimeout(() => {
                setTransitionEnabled(false);
                setCurrentIndex(2);
              }, 500);
            }
          }, [currentIndex, originalLength]);
        
          const handleNext = () => {
            if (currentIndex >= originalLength + 2) return;
            setTransitionEnabled(true);
            setCurrentIndex(prev => prev + 1);
          };
        
          const handlePrev = () => {
            if (currentIndex <= 1) return;
            setTransitionEnabled(true);
            setCurrentIndex(prev => prev - 1);
          };
  


  

        

          

  return (
    <div className="-container">

    <div className="header-container">
      <video 
        className="background-video" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source 
          src="/video6.mp4" 
          type="video/mp4" 
        />
      </video>
      <div className="overlay"></div>
      <div className="background-animation">
        {[...Array(50)].map((_, index) => (
          <div 
            key={index} 
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      <div className="content">

        <h1 className="title">
          Content
        </h1>
        {/* <p className="subtitle">
          The premium WordPress theme designed to elevate your online<br />
          presence to unparalleled heights.
        </p> */}
  
      </div>
    </div>
   
    
   

    </div>
  );
};
export default Content;