import React from 'react';
import { Globe, Zap, Users, Brain, Database } from 'lucide-react';

const LabWebsite = () => {
  return (
    <section id="lab-website" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Intellisys Lab Website</h2>
          <p className="text-lg text-gray-600">
            A responsive research portal built for the Intelligent Systems Design Lab at the University of New Haven, showcasing ongoing AI/ML projects, publications, and research contributions.
          </p>
        </div>

        <div className="bg-gray-100 rounded-xl p-6 shadow-md">
          {/* Overview */}
          <div className="flex items-center gap-4 mb-4">
            <Globe className="text-indigo-600 w-8 h-8" />
            <h3 className="text-xl font-semibold text-gray-800">Project Overview</h3>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Intellisys Lab website serves as a centralized hub for communicating lab goals, faculty and student research, and technical advancements. It covers areas such as cognitive impairment detection, traffic forecasting, recommendation systems, and uncertain data analysis.
            Built with HTML5, Bootstrap 5, and custom CSS, the site features a clean, accessible interface and scalable structure for future research updates.
          </p>

          {/* Highlights */}
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Technologies Used:</h4>
              <ul className="list-disc list-inside text-gray-700">
                <li>HTML5 & CSS3</li>
                <li>Bootstrap 5</li>
                <li>JavaScript</li>
                <li>Responsive Design Principles</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
              <ul className="list-disc list-inside text-gray-700">
                <li>Multi-page layout (Home, Research, Publications, People, Join Us)</li>
                <li>Interactive project carousels and galleries</li>
                <li>Dynamic researcher profile cards</li>
                <li>Accessible, mobile-friendly UI</li>
              </ul>
            </div>
          </div>

          {/* Lab Focus */}
          <div className="mt-10">
            <h4 className="font-semibold text-gray-800 mb-4">Lab Research Focus:</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-yellow-500 mt-1" />
                <span>Cognitive Assessment using Deep Action Recognition</span>
              </div>
              <div className="flex items-start gap-3">
                <Database className="w-5 h-5 text-yellow-500 mt-1" />
                <span>Data Analysis over Uncertain & Incomplete Databases</span>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-yellow-500 mt-1" />
                <span>Recommendation Systems (POI, Group Preferences)</span>
              </div>
              <div className="flex items-start gap-3">
                <Brain className="w-5 h-5 text-yellow-500 mt-1" />
                <span>Smart Traffic Forecasting & Energy Optimization</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabWebsite;
