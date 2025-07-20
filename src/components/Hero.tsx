import React from 'react';
import { ChevronDown, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-teal-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Manjusha Devi Sunkavalli
          </h1>
          <div className="text-2xl md:text-3xl mb-6 text-blue-100 font-medium">
            Data Engineer | Analyst | AI Developer
          </div>
                    <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Data Analyst and AI Researcher with 5+ years of experience turning complex data into 
            insights across healthcare, insurance, and research. I build end-to-end solutions using 
            Python, SQL, Power BI, and AWS—designing ETL pipelines, developing ML models, and 
            creating dashboards that support smart, data-driven decisions.
          </p>


          <div className="flex items-center justify-center gap-2 mb-8 text-blue-200">
            <MapPin size={20} />
            <span>New York, NY, USA</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="https://drive.google.com/file/d/1hLbR3A7cwyMlBm3bbTkkiT-jgpK07A8p/view?usp=drive_link" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </a>
            <div className="flex gap-4">
              <a 
                href="mailto:manjushadevi526@gmail.com" 
                className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                title="Email"
              >
                <Mail size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/manjusha-devi-sunkavalli-511212326" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                title="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://github.com/manjushasunkavalli" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                title="GitHub"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white hover:text-blue-200 transition-colors duration-300"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;


