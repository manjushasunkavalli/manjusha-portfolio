import React from 'react';
import { Code, Database, BarChart3, Brain, Cog, Cloud } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6 text-blue-600" />,
      skills: [
        { name: "Python", level: 95 },
        { name: "SQL", level: 95 },
        { name: "R", level: 85 },
        { name: "PL/SQL", level: 95 },
        { name: "Unix Shell", level: 80 }
      ]
    },
    {
      title: "ETL Tools",
      icon: <Cog className="w-6 h-6 text-teal-600" />,
      skills: [
        { name: "Informatica PowerCenter", level: 90 },
        { name: "SSIS", level: 85 },
        { name: "Ab Initio", level: 80 }
      ]
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6 text-amber-600" />,
      skills: [
        { name: "Oracle", level: 90 },
        { name: "SQL Server", level: 95 },
        { name: "Teradata", level: 80 },
        { name: "PostgreSQL", level: 75 }
      ]
    },
    {
      title: "Visualization & BI",
      icon: <BarChart3 className="w-6 h-6 text-green-600" />,
      skills: [
        { name: "Power BI", level: 95 },
        { name: "Tableau", level: 90 },
        { name: "SAP BO", level: 75 },
        { name: "Cognos", level: 75 }
      ]
    },
    {
      title: "ML & AI",
      icon: <Brain className="w-6 h-6 text-purple-600" />,
      skills: [
        { name: "PyTorch", level: 85 },
        { name: "Hugging Face", level: 80 },
        { name: "TensorFlow", level: 75 },
        { name: "Scikit-learn", level: 85 },
        { name: "NLP", level: 80 }
      ]
    },
    {
      title: "Development & Tools",
      icon: <Cloud className="w-6 h-6 text-red-600" />,
      skills: [
        { name: "Git", level: 85 },
        { name: "AWS", level: 85 },
        { name: "Docker", level: 75 },
        { name: "Flask", level: 80 },
        { name: "JIRA", level: 85 },
        { name: "Excel (PowerPivot/VBA)", level: 95 }
      ]
    }
  ];

  const certifications = [
    {
      name: "HTML Essential Training",
      url: "https://drive.google.com/file/d/1yXZwewrpiXkCJ1pt4RYsj2tyglDbL_Cm/view?usp=sharing"
    },
    {
      name: "Working with REST & Web Data",
      url: "https://drive.google.com/file/d/1d8g41uYlVuA1yzhsy1axzQ5x3mXCky-q/view?usp=sharing"
    },
    {
      name: "Learning SQL Programming",
      url: "https://drive.google.com/file/d/1nuQCelVgYq2hY6rOy44mwRwiAQUFfhas/view?usp=sharing"
    },
    {
      name: "SQL Tips and Tricks for Data Science",
      url: "https://drive.google.com/file/d/1PeXHcOdkUBR7LoEgailOAicY40Lrbarq/view?usp=sharing"
    },
    {
      name: "Data Science Foundations: Data Engineering",
      url: "https://drive.google.com/file/d/11XrCXQsHCSCccQHqbrVDxRFa0pXr-3xV/view?usp=sharing"
    },
    {
      name: "Apache Spark Essential Training",
      url: "https://drive.google.com/file/d/1YFpK3oY3WmKa2q-b5yr0M5fuJYmS6X8-/view?usp=sharing"
    },
    {
      name: "Apache Kafka Essential Training (Getting Started - 2021)",
      url: "https://drive.google.com/file/d/1GybmdwlGIF-urqmFxo-TqJRrW8MLEIAK/view?usp=sharing"
    },
    {
      name: "MLOps Essentials (Model Development & Integration)",
      url: "https://drive.google.com/file/d/1xc9cGq-b0Ia3rokgesFxTx0Eqyj2WbZ4/view?usp=sharing"
    },
    {
      name: "MLOps Essentials (Model Deployment & Monitoring)",
      url: "https://drive.google.com/file/d/1XVoh3zy9LKWd8GkqY7ufrRFCtKzoM7Oo/view?usp=sharing"
    },
    {
      name: "Graph Databases (Neo4j)",
      url: "https://drive.google.com/file/d/1wd-NtFUadzp9ycsRU8e46-Bls3m9FWAq/view?usp=drive_link"
    },
    {
      name: "Data Science Methodologies: Making Business Sense",
      url: "https://drive.google.com/file/d/1uN8SitchQ_SK1X99HcNWph7Jbcsh3-zu/view?usp=sharing"
    },
    {
      name: "Accenture Certification - Data Engineering Excellence",
      url: null
    },
    {
      name: "Accenture Certification - AI and Intelligent Automation",
      url: null
    },
    {
      name: "Manual Testing",
      url: null
    },
    {
      name: "Automation Testing",
      url: null
    },
    {
      name: "Selenium",
      url: null
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technical skills across data analysis, machine learning, and software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              cert.url ? (
                <a
                  key={index}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-300"
                >
                  <span className="text-gray-800 font-medium hover:underline">{cert.name}</span>
                </a>
              ) : (
                <div
                  key={index}
                  className="bg-gray-100 border border-gray-200 rounded-lg p-4 text-center text-gray-700 font-medium"
                >
                  {cert.name}
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
