import React from 'react';
import { useLocation } from 'react-router-dom';

const Learning = () => {
  const location = useLocation();
  const hash = location.hash;

  const solutions = [
    {
      id: 'apti-forge',
      title: 'Algnite Apti Forge',
      description: 'Comprehensive aptitude training platform'
    },
    {
      id: 'tech-forge',
      title: 'Algnite Tech Forge',
      description: 'Technical skills development solution'
    },
    {
      id: 'softskills-forge',
      title: 'Algnite SoftSkills Forge',
      description: 'Soft skills enhancement program'
    },
    {
      id: 'apti-boost',
      title: 'Algnite Apti Boost',
      description: 'Accelerated aptitude learning'
    },
    {
      id: 'softskills-boost',
      title: 'Algnite SoftSkills Boost',
      description: 'Rapid soft skills development'
    },
    {
      id: 'company-pulse',
      title: 'Algnite Company Specific Pulse',
      description: 'Customized corporate training solutions'
    },
    {
      id: 'lab',
      title: 'Algnite Lab',
      description: 'Hands-on learning environment'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Learning Solutions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((solution) => (
          <div 
            key={solution.id}
            id={solution.id}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              <span className="text-red-600 font-bold">Algnite</span>
              {' ' + solution.title.replace('Algnite ', '')}
            </h2>
            <p className="text-gray-600">{solution.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
