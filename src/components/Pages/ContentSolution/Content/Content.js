import React  from 'react';
import './Content.css'
import { useEffect , useRef } from 'react';
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
          useEffect(() => {
            // Add 'visible' class after component mounts for entrance animation
            const timer = setTimeout(() => {
              document.querySelector('.CT-container').classList.add('visible');
            }, 100);
        
            return () => clearTimeout(timer);
          }, []);
          const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
          const laptopRef = useRef(null);
        
          useEffect(() => {
            // Add 'visible' class after component mounts for entrance animation
            const timer = setTimeout(() => {
              document.querySelector('.CT-container').classList.add('visible');
            }, 100);
        
            return () => clearTimeout(timer);
          }, []);
        
          useEffect(() => {
            const handleMouseMove = (e) => {
              if (laptopRef.current) {
                const laptopRect = laptopRef.current.getBoundingClientRect();
                const laptopCenterX = laptopRect.left + laptopRect.width / 2;
                const laptopCenterY = laptopRect.top + laptopRect.height / 2;
        
                // Calculate distance between mouse and laptop center
                const distanceX = e.clientX - laptopCenterX;
                const distanceY = e.clientY - laptopCenterY;
                
                // Calculate the total distance using Pythagorean theorem
                const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
                
                // Maximum range of effect (in pixels)
                const maxRange = 500;
                
                if (distance < maxRange) {
                  // Calculate movement intensity based on distance
                  const intensity = (1 - distance / maxRange) * 50; // max 30px movement
                  
                  // Calculate movement direction
                  const moveX = (distanceX / distance) * -intensity;
                  const moveY = (distanceY / distance) * -intensity;
                  
                  setMousePosition({ x: moveX, y: moveY });
                } else {
                  setMousePosition({ x: 0, y: 0 });
                }
              }
            };
        
            window.addEventListener('mousemove', handleMouseMove);
            return () => window.removeEventListener('mousemove', handleMouseMove);
          }, []);

  

        

          

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
    <div className="CT-container">
      <div className="CT-content">
        <div className="illustration-container">
          <div className="purple-blob"></div>
          <div 
            className="laptop-container"
            ref={laptopRef}
            style={{
              transform: `translate(-50%, -50%) translate(${mousePosition.x}px, ${mousePosition.y}px)`
            }}
          >
            <div className="laptop">
              <p className="laptop-text">Content</p>
            </div>
          </div>
        </div>
        <div className="text-content">
          <h1 className="CT-title">
            The Prodigious eLearning Courses for you
          </h1>
          <p className="CT-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in ipsum
            reprehenderit in voluptate velit esse cillum dolore.
          </p>
          <button className="discover-button">
            Discover new Courses
          </button>
        </div>
      </div>
    </div>
    
   

    </div>
  );
};
export default Content;