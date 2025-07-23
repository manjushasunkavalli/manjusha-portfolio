import React from 'react';
import { Mail, Linkedin, Github, MapPin, Download } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Connect</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm always interested in discussing data science opportunities, research collaborations, 
            or innovative projects. Let's connect and explore how we can work together.
          </p>
        </div>

        {/* Get in Touch */}
        <div className="max-w-2xl mx-auto space-y-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:manjushadevi526@gmail.com" className="text-blue-600 hover:text-blue-800">
                      manjushadevi526@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/manjusha-devi-sunkavalli-511212326" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Manjusha Sunkavalli
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-600">New York, NY, USA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl p-6 text-white">
              <h4 className="text-xl font-bold mb-4">Download My Resume</h4>
              <p className="mb-4 text-blue-100">
                Get a comprehensive overview of my experience, skills, and achievements in data science and AI research.
              </p>
              <a
                href="https://drive.google.com/file/d/1NXNpQXMQIl07sKleZf3GVLmO36LPSoCH/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center mt-16">
          <div className="flex justify-center gap-6">
            <a
              href="mailto:manjushadevi526@gmail.com"
              className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
              title="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://linkedin.com/in/manjusha-devi-sunkavalli-511212326"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
              title="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/manjushasunkavalli"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors duration-300"
              title="GitHub"
            >
              <Github size={24} />
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 pt-8 mt-16">
          <div className="text-center">
            <div className="text-xl text-amber-600 font-semibold mb-4 bg-amber-50 rounded-lg py-3 px-6 inline-block">
              Currently exploring new opportunities — let's connect!
            </div>
            <p className="text-gray-600 text-sm">
              © 2025 Manjusha Devi Sunkavalli. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
