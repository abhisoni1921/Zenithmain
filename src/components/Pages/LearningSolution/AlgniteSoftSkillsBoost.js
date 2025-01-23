import React from 'react';
import { useLocation } from 'react-router-dom';

const AlgniteSoftSkillsBoost = () => {
  const location = useLocation();
  const hash = location.hash;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div id="zespl" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">About ZESPL</h2>
        <p className="text-gray-700">
          ZESPL is dedicated to revolutionizing education through technology-driven solutions.
          Our comprehensive suite of tools and services helps institutions deliver better learning outcomes.
        </p>
      </div>

      <div id="vision" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision and Mission</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Vision</h3>
          <p className="text-gray-700 mb-4">
            To be the global leader in educational technology solutions, empowering learners worldwide.
          </p>
          <h3 className="text-xl font-semibold mb-3">Mission</h3>
          <p className="text-gray-700">
            To provide innovative, accessible, and effective learning and assessment solutions
            that enhance educational outcomes for all stakeholders.
          </p>
        </div>
      </div>

      <div id="leadership" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Add leadership team members here */}
        </div>
      </div>
    </div>
  );
};
export default AlgniteSoftSkillsBoost;