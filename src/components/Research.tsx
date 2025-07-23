import React from 'react';
import { Globe, Code, ExternalLink } from 'lucide-react';

const LabWebsite = () => {
  return (
    <section id="lab-website" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Lab Website Project</h2>
          <p className="text-lg text-gray-600">
            A responsive, multi-page website developed for the Intelligent Systems Design (Intellisys) Lab at the University of New Haven.
          </p>
        </div>

        <div className="bg-gray-100 rounded-xl p-6 shadow-md">
          <div className="flex items-center gap-4 mb-4">
            <Globe className="text-blue-600 w-8 h-8" />
            <h3 className="text-xl font-semibold text-gray-800">Project Overview</h3>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            This website highlights the lab’s mission, active research in AI—including cognitive impairment detection, traffic management, recommendation systems, and data uncertainty analysis—and showcases publications, people, and collaboration opportunities.
            Built using HTML5, Bootstrap 5, and custom CSS, it offers a clean user interface with a navigation bar, carousel, and dynamic project cards. The site is structured and scalable, and designed with accessibility in mind.
          </p>

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
              <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
              <ul className="list-disc list-inside text-gray-700">
                <li>Responsive Navigation Bar & Dropdown Menus</li>
                <li>Carousel for Featured Research Projects</li>
                <li>Project Cards for Key Initiatives</li>
                <li>Multi-page Layout (Home, Research, Publications, People, Join Us)</li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <a
              href="https://your-github-or-live-link.com"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition"
              target="_blank" rel="noopener noreferrer"
            >
              <ExternalLink className="mr-2 w-4 h-4" />
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabWebsite;
