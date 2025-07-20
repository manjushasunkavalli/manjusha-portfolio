import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Data Analyst",
      company: "Downtown Evening Soup Kitchen",
      location: "New Haven, CT, USA",
      period: "2025",
      type: "Non-Profit Analytics",
      description: [
        "Led ETL validation and data mapping initiatives for external data partnerships",
        "Executed comprehensive campaign analysis and profiling on healthcare claims data",
        "Developed data quality frameworks and validation processes for donor and program data",
        "Created automated reporting systems for program effectiveness and impact measurement"
      ],
      technologies: ["Python", "SQL", "AWS", "Power BI", "Data Mapping", "ETL Validation", "Campaign Analysis"]
    },
    {
      title: "AI Research Assistant",
      company: "University of New Haven",
      location: "New Haven, CT, USA",
      period: "2024 - 2025",
      type: "Academic Research",
      description: [
        "Researched NLP, Computer Vision, and Reinforcement Learning with focus on transformer models (BERT, GPT)",
        "Integrated ML models using FastAPI and Flask with monitoring via Prometheus & Grafana",
        "Led experiments with SHAP and LIME for model interpretability and explainable AI",
        "Developed end-to-end MLOps pipelines for model deployment and monitoring"
      ],
      technologies: ["PyTorch", "Hugging Face", "BERT", "GPT", "FastAPI", "Flask", "SHAP", "LIME", "MLOps"]
    },
    {
      title: "Teaching Assistant – Artificial Intelligence",
      company: "University of New Haven",
      location: "New Haven, CT, USA",
      period: "2024",
      type: "Academic Mentorship",
      description: [
        "Assisted in instruction of graduate-level AI and Machine Learning courses",
        "Mentored students in applied ML projects including deep learning, NLP, and model evaluation",
        "Provided code reviews and support on assignments using PyTorch, TensorFlow, and Scikit-learn",
        "Led tutorials on MLOps best practices using AWS and Python tooling"
      ],
      technologies: ["Python", "PyTorch", "TensorFlow", "Scikit-learn", "NLP", "AWS", "Teaching"]
    },
    {
      title: "Senior Data Analyst (Client: Cigna)",
      company: "Accenture",
      location: "Bangalore, India",
      period: "2023 - 2024",
      type: "Healthcare Analytics",
      description: [
        "Optimized healthcare analytics for cost containment and risk stratification across multiple business units",
        "Built comprehensive SQL pipelines and interactive dashboards using Tableau for executive reporting",
        "Developed statistical models using R and Python for predictive healthcare analytics",
        "Automated ETL workflows using SSIS and Python, reducing manual processing time by 60%"
      ],
      technologies: ["Informatica", "SQL", "Power BI", "Python", "R", "SSIS", "Healthcare Analytics", "Statistical Modeling"]
    },
    {
      title: "Data Analyst (Client: Zurich Farmers Insurance Group)",
      company: "Accenture",
      location: "Bangalore, India",
      period: "2021 - 2023",
      type: "Insurance Analytics",
      description: [
        "Built comprehensive risk profiling tools and statistical analysis models for insurance products",
        "Created executive dashboards and KPI tracking systems using Tableau and Power BI",
        "Automated ETL pipelines and regulatory reporting processes using Python and SSIS",
        "Conducted advanced statistical analyses for risk assessment and pricing optimization"
      ],
      technologies: ["Python", "SQL", "Tableau", "Informatica", "Power BI", "SSIS", "Risk Analysis", "Statistical Modeling"]
    }
  ];

  const education = {
    degree: "Master of Science in Data Science",
    school: "University of New Haven",
    location: "New Haven, CT, USA",
    period: "2024 - 2025",
    courses: [
      "Machine Learning & Predictive Analytics",
      "Artificial Intelligence",
      "Distributed & Scalable Data Engineering",
      "Data Visualization & Storytelling (Power BI)",
      "Natural Language Processing",
      "Deep Learning & Computer Vision",
      "Cloud Computing for Data Applications",
      "Advanced Statistical Methods for Data Science",
      "Math for Data Scientists",
      "Intro to Data Science",
      "Leadership & Entrepreneurship",
      "R Programming"
    ]
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience & Education</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional journey across healthcare, insurance, academic research, and non-profit analytics
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Professional Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="mb-4 lg:mb-0">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h4>
                    <div className="flex items-center gap-2 text-blue-600 font-medium mb-2">
                      <Building size={16} />
                      {exp.company}
                    </div>
                    <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>

                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6">Education</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-2">{education.degree}</h4>
              <div className="flex items-center gap-2 mb-2">
                <Building size={16} />
                {education.school}
              </div>
              <div className="flex flex-wrap gap-4 text-blue-100 text-sm mb-4">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  {education.period}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  {education.location}
                </div>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Key Coursework:</h5>
              <div className="grid grid-cols-2 gap-2">
                {education.courses.map((course, i) => (
                  <span key={i} className="bg-white/20 px-3 py-1 rounded text-sm">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
