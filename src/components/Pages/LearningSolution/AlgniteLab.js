import React  from 'react';
import { useLocation } from 'react-router-dom';
import './AlgniteLab.css'
import { useEffect,useState } from 'react';
import { ArrowRight } from 'lucide-react';
// import Slider from "react-slick";


const cards = [
  { title: 'Card 1', content: 'Content for card 1', image:'/img1.jpg' },
  { title: 'Card 2', content: 'Content for card 2',image:'/img2.jpg' },
  { title: 'Card 3', content: 'Content for card 3',image:'/img3.jpg' },
  { title: 'Card 4', content: 'Content for card 4',image:'/img4.jpg' },
  { title: 'Card 5', content: 'Content for card 5',image:'/img5.jpg' },
];
const cardsData = [
  {
    imageUrl: "/img1.jpg",
    description: "Experience the beauty of nature with our guided mountain tours",
    link: "/tours/mountain"
  },
  {
    imageUrl: "/img2.jpg",
    description: "Discover hidden beaches and coastal treasures",
    link: "/tours/beach"
  },
  {
    imageUrl: "/img3.jpg",
    description: "Explore ancient ruins and historical landmarks",
    link: "/tours/historical"
  },
  {
    imageUrl: "/img4.jpg",
    description: "Immerse yourself in local culture and traditions",
    link: "/tours/cultural"
  },
  {
    imageUrl: "/img5.jpg",
    description: "Adventure through pristine wilderness",
    link: "/tours/wilderness"
  }
];

const AlgniteLab = () => {
  const location = useLocation();
  const hash = location.hash;
        useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
        const originalLength = cards.length;
  
  const extendedCards = [
    ...cards.slice(-2),
    ...cards,
    ...cards.slice(0, 2),
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
    <div className="Lab-container">

    <div className="header-container">
      <video 
        className="background-video" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source 
          src="/video3.mp4" 
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
        <div className="version-badge">
          Version 4.2 just landed!
        </div>
        <h1 className="title">
          Stratus is a better way<br />
          to build websites
        </h1>
        {/* <p className="subtitle">
          The premium WordPress theme designed to elevate your online<br />
          presence to unparalleled heights.
        </p> */}
        <button className="cta-button">
          Get started
          <span className="arrow">→</span>
        </button>
      </div>
    </div>
    <div className="Lab-hero-container">
      <div className="Lab-hero-content">

        
 
      </div>
      
    </div>
    <div className="relative max-w-6xl mx-auto p-5">
      <button 
        className="absolute top-1/2 -left-16 -translate-y-1/2 bg-white border-2 border-gray-800 rounded-full w-10 h-10 cursor-pointer text-xl z-10 hover:bg-gray-800 hover:text-white"
        onClick={handlePrev}
      >
        &lt;
      </button>
      
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex - 2) * (100 / 3)}%)`,
            transition: transitionEnabled ? 'transform 0.5s ease' : 'none',
          }}
        >
          {extendedCards.map((card, index) => (
            <div key={index} className="flex-none w-1/3 px-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={card.imageUrl} 
                  alt={card.description} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-gray-600 text-sm mb-4">{card.description}</p>
                  <a 
                    href={card.link}
                    className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button 
        className="absolute top-1/2 -right-16 -translate-y-1/2 bg-white border-2 border-gray-800 rounded-full w-10 h-10 cursor-pointer text-xl z-10 hover:bg-gray-800 hover:text-white"
        onClick={handleNext}
      >
        &gt;
      </button>
    </div>

    </div>
  );
};
export default AlgniteLab;