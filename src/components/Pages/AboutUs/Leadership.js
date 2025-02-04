import React ,{useState}from 'react';
import { useLocation } from 'react-router-dom';
import './Leadership.css'
import { ArrowRight } from 'lucide-react';

 const Leadership = () => {
  const location = useLocation();
  const hash = location.hash;
    const [translateX, setTranslateX] = useState(0);
  const offerings = [
    {
      title: 'Skill Exchange',
      image: '/com2.jpeg',
      cta: 'Explore Jobs',
      link: '#'
    },
    {
      title: 'Engineers Ensemble',
      image: '/com1.jpeg',
      cta: 'Join Community',
      link: '#'
    },
    {
      title: 'Micro Learning',
      image: '/api/placeholder/500/300',
      cta: 'Know More',
      link: '#'
    },
    {
      title: 'Expert Network',
      image: '/api/placeholder/500/300',
      cta: 'Connect Now',
      link: '#'
    },
    {
      title: 'Career Growth',
      image: '/api/placeholder/500/300',
      cta: 'Learn More',
      link: '#'
    },
    {
      title: 'Tech Workshops',
      image: '/api/placeholder/500/300',
      cta: 'Register Now',
      link: '#'
    }
  ];
  const features = [
    {
      icon: "⚙️",
      title: "Fast Performance",
      description: "Optimized for a smaller build size, faster dev compilation and dozens of other improvements."
    },
    {
      icon: "📱",
      title: "Perfect Responsive",
      description: "Our Theme is full perfect for all device. You can visit our Theme all device easily."
    },
    {
      icon: "💬",
      title: "Fast & Friendly Support",
      description: "We are provide 24 hours support for all clients.You can purchase without hesitation."
    },
    {
      icon: "👆",
      title: "Easy to Use",
      description: "Create your own custom Theme or section by copying, pasting, and assembling."
    }
  ];

  const handleNext = () => {
    if (translateX > -(offerings.length - 3) * 100) {
      setTranslateX(prev => prev - 100);
    }
  };

  const handlePrev = () => {
    if (translateX < 0) {
      setTranslateX(prev => prev + 100);
    }
  };

  return (
    <div className="new-banner-container">
      <div className="new-banner-header">
        <h3>Our Advantage</h3>
        <h2>What We Also Offer</h2>
      </div>
      
      <div className="new-offerings-container">
        <button 
          className="new-nav-button new-prev" 
          onClick={handlePrev}
          disabled={translateX >= 0}
        >
          <ArrowRight className="rotate-180" />
        </button>
        
        <div className="new-offerings-wrapper">
          <div 
            className="new-offerings-grid"
            style={{
              transform: `translateX(${translateX}%)`,
            }}
          >
            {offerings.map((offering, index) => (
              <div key={index} className="new-offering-card">
                <div className="new-card-content">
                  <img src={offering.image} alt={offering.title} />
                  <div className="new-overlay">
                    <h3>{offering.title}</h3>
                    <a href={offering.link} className="new-cta-link">
                      {offering.cta} <ArrowRight className="new-arrow-icon" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button 
          className="new-nav-button new-next" 
          onClick={handleNext}
          disabled={translateX <= -(offerings.length - 3) * 100}
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};
export default Leadership;