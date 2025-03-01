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
  const brands = [
    { name: 'IC Solutions', logo: 'https://s3-us-west-2.amazonaws.com/naspovaluepoint/1652128715_ICSolutions%20Logo.jpg' },
    { name: 'Exotec', logo: 'https://mma.prnewswire.com/media/2072473/Exotec_Logo_2023_Logo.jpg?w=600' },
    { name: 'Proview', logo: 'https://www.vhv.rs/dpng/d/88-881545_proview-logo-hd-png-download.png' },
    { name: 'Uniqa', logo: 'https://www.uniqagroup.com/grp/newsroom/UNIQA_mainlogo_blue_V1_4c.png' },
    { name: 'Clutch', logo: 'https://www.teralogistics.com/wp-content/uploads/2024/02/Movex-Logo-gmail.png' },
    { name: 'Gartner', logo: 'https://companieslogo.com/img/orig/IT_BIG-36956903.png?t=1597269509' },
    { name: 'Movex', logo: 'https://logosrated.net/wp-content/uploads/2016/08/Proview-Technology-Logo-1-247x179.jpg' }
  ];
  const cardsData = [
    {
      title: 'Web Development',
      image: 'https://img.freepik.com/free-photo/3d-render-low-poly-plexus-design-network-communications_1048-14542.jpg?semt=ais_hybrid',
      links: [
        { text: 'Frontend Projects', url: '#' },
        { text: 'Backend Projects', url: '#' },
        { text: 'Full Stack Projects', url: '#' }
      ]
    },
    {
      title: 'Mobile Apps',
      image: 'https://img.freepik.com/free-photo/abstract-background-with-low-poly-design_1048-8478.jpg?semt=ais_hybrid',
      links: [
        { text: 'iOS Projects', url: '#' },
        { text: 'Android Projects', url: '#' },
        { text: 'Cross Platform', url: '#' }
      ]
    },
    {
      title: 'Cloud Solutions',
      image: 'https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?semt=ais_hybrid',
      links: [
        { text: 'AWS Projects', url: '#' },
        { text: 'Azure Projects', url: '#' },
        { text: 'Google Cloud', url: '#' }
      ]
    }
  ];
  const [activePanel, setActivePanel] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const togglePanel = (panel) => {
    setActivePanel(activePanel === panel ? null : panel);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
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
    <div className="brands-section">
      
      
      <div className="marquee-container">
        <div className="marquee-content">
          {[...brands, ...brands].map((brand, index) => (
            <div key={index} className="brand-card">
              <img 
                src={brand.logo} 
                alt={brand.name}
                className="brand-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="Lab-hero-container">
      <div className="Lab-hero-content">
      

        
 
      </div>
      
    </div>
    <div className="HI-cards-container">
      {cardsData.map((card, index) => (
        <div key={index} className="HI-card-container">
          <img 
            src={card.image} 
            alt={card.title} 
            className="HI-card-image"
          />
          <div className="HI-overlay">
            <h3 className="HI-overlay-title">{card.title}</h3>
            <ul className="HI-links-list">
              {card.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href={link.url} className="HI-link-item">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
   
    <div className="contact-container">
      <div className="sidebar">
        <h2 className="us">Navigation</h2>
        <div className="accordion">
          <div className="accordion-item">
            <button 
              className={`accordion-button ${activePanel === 'howLong' ? 'active' : ''}`}
              onClick={() => togglePanel('howLong')}
            >
              How long does it take to respond?
            </button>
            {activePanel === 'howLong' && (
              <div className="panel">
                <p>We typically respond within 24-48 hours during business days.</p>
              </div>
            )}
          </div>

          <div className="accordion-item">
            <button 
              className={`accordion-button ${activePanel === 'accordion' ? 'active' : ''}`}
              onClick={() => togglePanel('accordion')}
            >
              Additional Information
            </button>
            {activePanel === 'accordion' && (
              <div className="panel">
                <p>Explore more about our services and offerings here.</p>
              </div>
            )}
          </div>

          <div className="accordion-item">
            <button 
              className={`accordion-button ${activePanel === 'add' ? 'active' : ''}`}
              onClick={() => togglePanel('add')}
            >
              Custom Options
            </button>
            {activePanel === 'add' && (
              <div className="panel">
                <p>Add your custom content or requests here.</p>
              </div>
            )}
          </div>

          <div className="accordion-item">
            <button 
              className={`accordion-button ${activePanel === 'research' ? 'active' : ''}`}
              onClick={() => togglePanel('research')}
            >
              Research Resources
            </button>
            {activePanel === 'research' && (
              <div className="panel">
                <p>Access our latest research papers and studies.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="form-section">
        <h2 className="us" >Get in Touch</h2>
        <p className="form-subtitle">We'd love to hear from you! Fill out the form below.</p>
        
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>

    </div>
  );
};
export default AlgniteLab;