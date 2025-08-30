import React from 'react';
import { BarChart3, Brain, Database, TrendingUp } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: "Data Analysis & ETL",
      description: "Expert in building SQL pipelines, ETL workflows using Informatica PowerCenter, SSIS, Java and Python automation"
    },
    {
      icon: <Brain className="w-8 h-8 text-teal-600" />,
      title: "AI Research & NLP",
      description: "Experienced in transformer models (BERT, GPT), PyTorch, and model interpretability using SHAP and LIME"
    },
    {
      icon: <Database className="w-8 h-8 text-amber-600" />,
      title: "Data Warehousing",
      description: "Proficient in Oracle, SQL Server, Teradata, PostgreSQL with strong PL/SQL and database optimization skills"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      title: "Business Intelligence",
      description: "Skilled in Power BI, Tableau, SAP BO dashboards and translating complex data into business value"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
           I'm a results-driven Data Analyst and AI Researcher with a strong foundation in data warehousing, ETL processes, statistical modeling, and machine learning. I've worked across domains—from healthcare analytics for Cigna and Zurich Farmers Insurance Group manufacturing & IoT data engineering for Honeywell through Accenture, to cutting-edge AI research at the University of New Haven.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With over 5 years of experience across healthcare, insurance, academic research, and nonprofit sectors, 
              I specialize in transforming complex data into actionable insights. From building ETL pipelines to 
              fine-tuning transformer models, I bridge the gap between raw data and business value.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Accenture, I worked on major client engagements including Cigna and Zurich Farmers Insurance Group, where I delivered data-driven solutions in healthcare analytics, claims optimization, and risk stratification, and Honeywell, where I focused on manufacturing and IoT data engineering. My work involved leveraging tools like Informatica, Power BI, and advanced machine learning models.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Beyond consulting, I contributed to AI and NLP research at the University of New Haven and 
              applied data solutions to community impact initiatives with the Downtown Evening Soup Kitchen. 
              I’m passionate about solving real-world problems through data and continuously exploring the 
              evolving landscape of AI, NLP, and MLOps.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Python</span>
              <span className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium">SQL</span>
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">Power BI</span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Informatica</span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">AWS</span>
              <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">ServiceNow</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Key Achievements</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold">5+</span>
                </div>
                <div>
                  <p className="font-semibold">Years Experience</p>
                  <p className="text-blue-100">In data analysis and AI research</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <div>
                  <p className="font-semibold">Major Organizations</p>
                  <p className="text-blue-100">Healthcare, Insurance & Academia</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold">16</span>
                </div>
                <div>
                  <p className="font-semibold">Certifications</p>
                  <p className="text-blue-100">MLOps, Spark, AWS, NLP, SQL, Data Science</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">{item.icon}</div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h4>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
