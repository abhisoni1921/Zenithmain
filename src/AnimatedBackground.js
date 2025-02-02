import React from 'react';


const AnimatedBackground = () => {
  
  return (
    <div className="animated-background">
      <div className="floating-shapes">
        {[...Array(15)].map((_, index) => (
          <div key={index} className={`shape shape-${index + 1}`} />
        ))}
      </div>
      <style jsx>{`
        .animated-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          z-index: -1;
          background: linear-gradient(120deg, #f0f2f5 0%, #e6e9f0 100%);
        }

        .floating-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .shape {
          position: absolute;
          background: rgba(71, 98, 130, 0.1);
          border-radius: 50%;
          animation: float 20s infinite;
        }

        ${[...Array(15)].map((_, index) => `
          .shape-${index + 1} {
            width: ${Math.random() * 100 + 50}px;
            height: ${Math.random() * 100 + 50}px;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 5}s;
            animation-duration: ${15 + Math.random() * 10}s;
            transform-origin: ${-50 + Math.random() * 100}% ${-50 + Math.random() * 100}%;
          }
        `).join('')}

        @keyframes float {
          0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          33% {
            transform: translate(30px, -50px) rotate(120deg) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) rotate(240deg) scale(0.9);
          }
          100% {
            transform: translate(0, 0) rotate(360deg) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;