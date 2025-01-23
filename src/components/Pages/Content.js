import React from 'react';
import { useLocation } from 'react-router-dom';

const Content = () => {
  const location = useLocation();
  const hash = location.hash;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Content Solutions</h1>
      
      <div id="solutions" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Assessment Content Solutions</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700">
            Comprehensive assessment content designed to evaluate various skills and competencies.
          </p>
        </div>
      </div>

      <div id="learning" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Learning Content Solutions</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700">
            High-quality educational content tailored for effective learning outcomes.
          </p>
        </div>
      </div>

      <div id="interactive" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Interactive Content Solutions</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700">
            Engaging interactive content that enhances the learning experience.
          </p>
        </div>
      </div>
    </div>
  );
};

// Careers.js
// import React from 'react';

// const Careers = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       <h1 className="text-4xl font-bold text-gray-900 mb-8">Careers at ZESPL</h1>
//       <div className="max-w-4xl">
//         <p className="text-lg text-gray-700 mb-6">
//           Join our team of innovators and educators shaping the future of learning.
//         </p>
//         <div className="bg-white p-6 rounded-lg shadow-md mb-8">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Join Us?</h2>
//           <ul className="space-y-3 text-gray-700">
//             <li>• Innovative work environment</li>
//             <li>• Professional growth opportunities</li>
//             <li>• Collaborative team culture</li>
//             <li>• Impact-driven projects</li>
//           </ul>
//         </div>
//         {/* Add job listings section here */}
//       </div>
//     </div>
//   );
// };
export { Home, About, Learning, Assessment, Content };