import React from 'react';
import { useLocation } from 'react-router-dom';

const Assessment = () => {
  const location = useLocation();
  const hash = location.hash;

  const solutions = [
    {
      id: 'apti-assess',
      title: 'Algnite Apti Assess',
      description: 'Comprehensive aptitude assessment platform'
    },
    {
      id: 'tech-assess',
      title: 'Algnite Tech Assess',
      description: 'Technical skills evaluation system'
    },
    {
      id: 'assess360',
      title: 'Algnite Assess360',
      description: 'Complete assessment solution'
    },
    {
      id: 'hire',
      title: 'Algnite HIRE',
      description: 'Recruitment assessment platform'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Assessment Solutions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
