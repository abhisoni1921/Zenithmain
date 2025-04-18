/* AboutUs.css */
.about-container {
  font-family: 'Arial', sans-serif;
  line-height: 1.8;
  color: #333;
  width: 100%;
  max-width: 100%;
  max-height: 500px;
  margin: 0 ;
  padding: 0% 0.1rem;
  border: 1px solid transparent;
  border-radius: 8px;
  animation: fadeIn 1s ease-out;
  text-align: justify;
}

.about-header {
  text-align: left;
  margin-bottom: 3rem;
}

.about-header h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
}

.about-header p {
  font-size: 1.2em;
  color: #7f8c8d;
}

.about-section,
.vision-mission,
.about-logo,
.about-colors,
.founders,
.useful-links,
.contact {
  margin-bottom: 0%;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 40px;
  border-radius: 6px;
  opacity: 0;
  animation: slideIn 0.8s ease-out forwards;
}

.about-section { animation-delay: 0.2s; }
.vision-mission { animation-delay: 0.4s; }
.about-logo { animation-delay: 0.6s; }
.about-colors { animation-delay: 0.8s; }
.founders { animation-delay: 1s; }
.useful-links { animation-delay: 1.2s; }
.contact { animation-delay: 1.4s; }

.about-header h1,
.about-section h2,
.vision-mission h3,
.about-logo h3,
.about-colors h3,
.founders h3,
.useful-links h3,
.contact h3 {
  font-weight: 540;
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid rgba(224, 224, 224, 0.3);
  padding-bottom: 10px;
  position: relative;
}

.about-section h2::after,
.vision-mission h3::after,
.about-logo h3::after,
.about-colors h3::after,
.founders h3::after,
.useful-links h3::after,
.contact h3::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(to right, #2980b9, #2c3e50);
  transition: width 0.3s ease;
}

.about-section:hover h2::after,
.vision-mission:hover h3::after,
.about-logo:hover h3::after,
.about-colors:hover h3::after,
.founders:hover h3::after,
.useful-links:hover h3::after,
.contact:hover h3::after {
  width: 100%;
}

.about-section p,
.about-logo p,
.about-colors p,
.founders p,
.contact address {
  font-size: 1em;
  color: #555;
  margin-bottom: 15px;
  text-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
}

.vision-mission {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}

.vision, .mission {
  flex: 1;
  min-width: 320px;
  padding: 10px;
  background: linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(249,249,249,0.4) 100%);
  border-radius: 6px;
  transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}

.vision:hover, .mission:hover {
  background: linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(249,249,249,0.6) 100%);
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.vision ul, .mission ol {
  padding-left: 30px;
  list-style-position: outside;
}

.about-colors ul {
  padding-left: 30px;
  list-style: none;
}

.about-colors ul li {
  margin-bottom: 10px;
  opacity: 0;
  animation: slideInList 0.5s ease-out forwards;
}

.about-colors ul li strong {
  color: #2c3e50;
}

.founder {
  margin-bottom: 30px;
  padding: 10px;
  /* background-color: rgba(255, 255, 255, 0.4); */
  border-radius: 6px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.founder:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.founder h4 {
  font-size: 1.5em;
  color: #2980b9;
  margin-bottom: 10px;
}

.founder p {
  margin: 10px 0;
  font-size: 1.1em;
  color: #555;
}

.useful-links ul {
  padding-left: 30px;
  list-style-type: disc;
}

.useful-links ul li {
  margin-bottom: 10px;
  opacity: 0;
  animation: slideInList 0.5s ease-out forwards;
}

.contact address {
  font-style: normal;
  line-height: 1.8;
  margin-bottom: 20px;
}

.contact a {
  transition: color 0.3s ease;
  position: relative;
  display: inline-block;
}

.contact a:hover {
  color: #3498db;
  text-decoration: none;
}

.contact a::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -2px;
  left: 0;
  background-color: #3498db;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.contact a:hover::after {
  transform: scaleX(1);
}

.Discover-hero-container {
  height: auto;
  display: flex;
  align-items: flex-start;
  margin: 0;
  padding: 0;
  margin-top: -62px;
  background: transparent;
  max-width: 100%;
  width: 100%;
  transition: all 0.3s ease-in-out;
}

.Discover-hero-content {
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  max-width: 100%;
  margin: 0 auto;
  background: linear-gradient(rgba(139, 18, 64, 0.588), rgba(73, 1, 85, 0.5));
  width: 100%;
  height: 60vh;
  animation: fadeIn 0.8s ease-in-out;
}

.Discover-hero-image-container {
  flex: 0 0 40%;
  max-width: 150%;
  transform: translateX(-100%);
  animation: slideInLeft 1s ease-out forwards;
  padding: 4rem;
  margin: 4rem;
  width: 500px;
  height: auto;
}

.Discover-hero-image {
  width: 100%;
  height: auto;
  border-radius: 1rem;
  transition: transform 0.3s ease;


}

.Discover-hero-image:hover {
  transform: scale(1.05);
}

.Discover-hero-text {
  flex: 0 0 50%;
  padding-top: 0;
  transform: translateX(100%);
  animation: slideInRight 1s ease-out forwards;
}

.Discover-logo-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: fadeIn 0.8s ease-out 0.5s forwards;
}

.Discover-logo-text {
  font-size: 2rem;
  font-weight: bold;
  color: #2d3748;
  transition: color 0.3s ease;
}

.Discover-logo-badge {
  background-color: #553C9A;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 1.25rem;
  transition: all 0.3s ease;
}

.Discover-logo-badge:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.Discover-hero-title {
  font-size: 3rem;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 1.5rem;
  color: #000000;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
  opacity: 0;
  animation: fadeIn 0.8s ease-out 0.7s forwards;
  padding: 1rem;
  gap: 1rem;
  margin: 1rem;
}


.Discover-hero-description {
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #2d3748;
  max-width: 600px;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
  opacity: 0;
  animation: fadeIn 0.8s ease-out 0.9s forwards;
}

.Discover-view-solutions-btn {
  background-color: #96085d;
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0;
  animation: fadeIn 0.8s ease-out 1.1s forwards;
}

.Discover-view-solutions-btn:hover {
  background-color: #319795;
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Animation Keyframes */
@keyframes fadeIn {
  from {
      opacity: 0;
  }
  to {
      opacity: 1;
  }
}

@keyframes slideInLeft {
  from {
      transform: translateX(-100%);
  }
  to {
      transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
      transform: translateX(100%);
  }
  to {
      transform: translateX(0);
  }
}


.timeline-container {
  max-width: 100%;
  margin: 0 auto;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.5);
}

.timeline-header {
  text-align: center;
  margin-bottom: 3rem;
}

.timeline-title {
  font-size: 2.25rem;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.timeline-badge {
  background-color: #16a34a;
  color: white;
  padding: 0.25rem 1rem;
  border-radius: 0.25rem;
}

.timeline-content {
  position: relative;
}

.timeline-line {
  
  position: absolute;
  left: 4rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: #e5e7eb;
}

.timeline-item {
  position: relative;
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.timeline-marker {
  position: absolute;
  left: 4rem;
  transform: translateX(-50%);
  width: 1rem;
  height: 1rem;
  background-color: white;
  border: 4px solid #d1d5db;
  border-radius: 50%;
}

.timeline-year {
  width: 4rem;
  font-weight: bold;
  font-size: 1.25rem;
}

.timeline-card {
  margin-left: 3rem;
  background-color: rgba(152, 251, 152, 0.3);
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  flex: 1;
}

.timeline-card-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}

.timeline-avatar {
  width: 2rem;
  height: 2rem;
  background-color: #e5e7eb;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.timeline-avatar svg {
  width: 1.25rem;
  height: 1.25rem;
  color: #4b5563;
}

.timeline-card-title {
  font-size: 1.25rem;
  font-weight: 600;
}

.timeline-card-description {
  color: #4b5563;
}

/* Hover effects */
.timeline-card:hover {
  transform: translateY(-2px);
  transition: transform 0.2s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.timeline-marker:hover {
  background-color: #16a34a;
  border-color: #16a34a;
  transition: all 0.2s ease;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .timeline-container {
    padding: 1rem;
  }
  
  .timeline-line {
    left: 1.5rem;
  }
  
  .timeline-marker {
    left: 1.5rem;
  }
  
  .timeline-year {
    width: 3rem;
    font-size: 1rem;
  }
  
  .timeline-card {
    margin-left: 2rem;
  }
}

footer {
  text-align: center;
  margin-top: 0%;
  font-size: 1em;
  color: #7f8c8d;
  background: linear-gradient(rgba(255, 0, 150, 0.5), rgba(0, 204, 255, 0.5));
  padding: 10px;
  border-radius: 6px;
}

a {
  color: #2980b9;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* Keyframe Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  from {
      opacity: 0;
      transform: translateY(30px);
  }
  to {
      opacity: 1;
      transform: translateY(0);
  }
}

@keyframes slideInList {
  from {
      opacity: 0;
      transform: translateX(-20px);
  }
  to {
      opacity: 1;
      transform: translateX(0);
  }
}

/* Media Queries */
@media (max-width: 768px) {
  .hero-container {
      min-height: auto;
      padding-top: 1rem;
  }

  .hero-content {
      flex-direction: column;
      text-align: center;
      gap: 1.5rem;
  }

  .hero-image-container {
      max-width: 100%;
  }

  .logo-container {
      justify-content: center;
  }

  .hero-title {
      font-size: 2.5rem;
  }

  .hero-description {
      margin-left: auto;
      margin-right: auto;
  }
}

/* Scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Backdrop blur */
.about-section,
.vision-mission,
.about-logo,
.about-colors,
.founders,
.useful-links,
.contact {
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

/* Scroll reveal animation */
@media (prefers-reduced-motion: no-preference) {
  .about-section,
  .vision-mission,
  .about-logo,
  .about-colors,
  .founders,
  .useful-links,
  .contact {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s ease, transform 0.6s ease;
  }

  .visible {
      opacity: 1;
      transform: translateY(0);
  }
}
/* .about-section {
  padding: 4rem 2rem;
  max-width: 100%;
  margin: 0 auto;
}

.about-content {
  margin-bottom: 3rem;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.grid-item {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .image-grid {
    grid-template-columns: 1fr;
  }
  
  .grid-item {
    height: 200px;
  }
} */

/* .academy-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;
  background-color: #fff;
  max-width: 100%;
  margin: 0 auto;
}

.academy-content {
  flex: 1;
  max-width: 600px;
  padding-right: 4rem;
}

.academy-title {
  font-size: 3.5rem;
  font-weight: 500;
  color: #1e1f21;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.academy-description {
  font-size: 1.25rem;
  color: #4f4f4f;
  margin-bottom: 2rem;
  line-height: 1.5;
}

.get-started-button {
  background-color: #1e1f21;
  color: white;
  border: none;
  padding: 0.875rem 1.75rem;
  border-radius: 24px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.get-started-button:hover {
  background-color: #2c2d30;
}

.academy-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle-graphic {
  width: 400px;
  height: 400px;
  position: relative;
  background-color: #ff5263;
  border-radius: 8px;
  overflow: hidden;
}

.inner-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
  background-color: #ff5263;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
}

.lines {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    -45deg,
    rgba(0, 0, 0, 0.1) 0px,
    rgba(0, 0, 0, 0.1) 1px,
    transparent 1px,
    transparent 20px
  );
}

@media (max-width: 768px) {
  .academy-container {
    flex-direction: column;
    padding: 2rem;
  }

  .academy-content {
    padding-right: 0;
    margin-bottom: 2rem;
  }

  .academy-title {
    font-size: 2.5rem;
  }

  .circle-graphic {
    width: 300px;
    height: 300px;
  }
}

 */