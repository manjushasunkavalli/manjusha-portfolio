/*import React from 'react';
import { BookOpen, Users, Award, Calendar, ExternalLink, FileText } from 'lucide-react';

const Research = () => {
  const publications = [
    {
      title: "Transformer-Based Models for Healthcare Text Classification: A Comparative Study",
      authors: "Manjusha Devi Sunkavalli, Dr. John Smith, Dr. Sarah Johnson",
      journal: "Journal of Medical Informatics",
      year: "2024",
      status: "Published",
      abstract: "This study presents a comprehensive comparison of transformer-based models including BERT, RoBERTa, and GPT for healthcare text classification tasks. We evaluated model performance on clinical notes, medical reports, and patient records.",
      keywords: ["BERT", "Healthcare NLP", "Text Classification", "Clinical Data"],
      citations: 12,
      link: "#"
    },
    {
      title: "Explainable AI in Insurance Risk Assessment: Using SHAP and LIME for Model Interpretability",
      authors: "Manjusha Devi Sunkavalli, Dr. Michael Brown",
      journal: "AI in Finance and Insurance",
      year: "2024",
      status: "Under Review",
      abstract: "We propose a framework for implementing explainable AI techniques in insurance risk assessment models. Our approach uses SHAP and LIME to provide interpretable insights into model decisions for regulatory compliance.",
      keywords: ["Explainable AI", "SHAP", "LIME", "Insurance Analytics", "Risk Assessment"],
      citations: 0,
      link: "#"
    },
    {
      title: "ETL Pipeline Optimization for Large-Scale Healthcare Data Processing",
      authors: "Manjusha Devi Sunkavalli, Dr. Lisa Chen, Dr. Robert Wilson",
      journal: "Data Engineering Quarterly",
      year: "2023",
      status: "Published",
      abstract: "This paper presents novel optimization techniques for ETL pipelines processing large-scale healthcare data. We demonstrate significant performance improvements using parallel processing and intelligent data partitioning strategies.",
      keywords: ["ETL", "Healthcare Data", "Pipeline Optimization", "Big Data"],
      citations: 28,
      link: "#"
    }
  ];

  const researchAreas = [
    {
      title: "Natural Language Processing",
      description: "Transformer models, BERT, GPT, text classification, and sentiment analysis for healthcare and business applications",
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      projects: 5,
      publications: 3
    },
    {
      title: "Explainable AI",
      description: "Model interpretability using SHAP, LIME, and other XAI techniques for regulatory compliance and trust",
      icon: <Award className="w-8 h-8 text-teal-600" />,
      projects: 3,
      publications: 2
    },
    {
      title: "Healthcare Analytics",
      description: "Clinical data analysis, risk stratification, cost optimization, and predictive modeling in healthcare",
      icon: <Users className="w-8 h-8 text-green-600" />,
      projects: 8,
      publications: 4
    },
    {
      title: "Data Engineering",
      description: "ETL pipeline optimization, data warehousing, and scalable data processing architectures",
      icon: <FileText className="w-8 h-8 text-amber-600" />,
      projects: 12,
      publications: 3
    }
  ];

  const conferences = [
    {
      name: "International Conference on Data Science and Analytics",
      role: "Presenter",
      year: "2024",
      location: "Boston, MA",
      presentation: "Transformer Models in Healthcare: Challenges and Opportunities"
    },
    {
      name: "AI in Healthcare Symposium",
      role: "Keynote Speaker",
      year: "2024",
      location: "New York, NY",
      presentation: "Explainable AI for Medical Decision Support Systems"
    },
    {
      name: "IEEE International Conference on Big Data",
      role: "Session Chair",
      year: "2023",
      location: "Santa Clara, CA",
      presentation: "ETL Optimization Strategies for Healthcare Data"
    }
  ];

  const collaborations = [
    {
      institution: "University of New Haven",
      department: "Computer Science & Engineering",
      role: "Research Assistant",
      duration: "2024 - Present",
      focus: "AI/ML Research, NLP, Computer Vision"
    },
    {
      institution: "Accenture Research Labs",
      department: "Healthcare Analytics Division",
      role: "Research Collaborator",
      duration: "2023 - 2024",
      focus: "Healthcare Cost Optimization, Risk Analytics"
    },
    {
      institution: "Downtown Evening Soup Kitchen",
      department: "Data Analytics Team",
      role: "Research Analyst",
      duration: "2025",
      focus: "Community Impact Analysis, Program Effectiveness"
    }
  ];

  return (
    <section id="research" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Research & Publications</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Contributing to the advancement of AI, data science, and healthcare analytics through research, 
            publications, and academic collaborations
          </p>
        </div>

        {/* Research Areas *//*}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Research Areas</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="mb-4">{area.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{area.title}</h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{area.description}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{area.projects} Projects</span>
                  <span>{area.publications} Publications</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Publications *//*}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Recent Publications</h3>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{pub.title}</h4>
                    <p className="text-blue-600 font-medium mb-2">{pub.authors}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center gap-1">
                        <BookOpen size={14} />
                        {pub.journal}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {pub.year}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        pub.status === 'Published' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {pub.status}
                      </span>
                      {pub.citations > 0 && (
                        <span className="text-gray-500">{pub.citations} citations</span>
                      )}
                    </div>
                  </div>
                  <a
                    href={pub.link}
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200 mt-4 lg:mt-0"
                  >
                    <ExternalLink size={16} />
                    View Paper
                  </a>
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">{pub.abstract}</p>
                
                <div className="flex flex-wrap gap-2">
                  {pub.keywords.map((keyword, i) => (
                    <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conference Presentations *//*}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Conference Presentations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conferences.map((conf, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {conf.role}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{conf.name}</h4>
                <div className="text-sm text-gray-600 mb-3">
                  <p className="flex items-center gap-1 mb-1">
                    <Calendar size={14} />
                    {conf.year} • {conf.location}
                  </p>
                </div>
                <p className="text-gray-700 font-medium">{conf.presentation}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Research Collaborations *//*}
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-8 text-center">Research Collaborations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collaborations.map((collab, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-6">
                <h4 className="text-lg font-bold mb-2">{collab.institution}</h4>
                <p className="text-blue-100 font-medium mb-2">{collab.department}</p>
                <div className="text-sm text-blue-200 mb-3">
                  <p className="mb-1">{collab.role}</p>
                  <p>{collab.duration}</p>
                </div>
                <p className="text-sm">{collab.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;*/

import React from 'react';
import { BookOpen, Users, Award, Calendar, ExternalLink, FileText, Lightbulb, Globe } from 'lucide-react';

const Research = () => {
  return (
    <section id="research" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Research Portfolio</h2>
        </div>

        {/* Research Areas */}
        <div className="space-y-16">
          {/* Cognitive Impairment Detection */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Lightbulb className="text-blue-600" /> Cognitive Impairment Detection
            </h3>
            <p className="text-gray-700 mb-4">
              Developed deep learning approaches to automatically assess cognitive measures using action recognition. These methods detect balance, rhythm, and coordination during cognitively demanding tasks, aiding diagnosis of neurodevelopmental disorders, brain injuries, and dementia.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
              <li>Res-ViT: Residual Vision Transformers – ICTAI 2023</li>
              <li>Deep Action Recognition for Cognitive Assessment – PETRA 2023</li>
              <li>Cognitive Assessment with Skeleton-based Action Recognition – ICDEc 2023</li>
              <li>Mind in Action: Action Recognition for Cognitive Testing – DEXA 2023</li>
              <li>Deep-Cogn: Skeleton-based Cognitive Behavior Assessment – ICTAI 2022</li>
            </ul>
          </div>

          {/* Traffic Management Systems */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Globe className="text-teal-600" /> Traffic Management Systems
            </h3>
            <p className="text-gray-700 mb-4">
              Proposed deep learning models that forecast traffic speed, travel time, taxi fares, and energy consumption across vehicle types to support smarter transportation infrastructures.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
              <li>DeepFEC: Energy Consumption Prediction – WWW 2021</li>
              <li>Speed Prediction on Real-Life Traffic Data – MOBIQUITOUS 2020</li>
              <li>Taxi Fare Estimation using Temporal ResNet – MOBIQUITOUS 2020</li>
              <li>Travel Time Prediction with Transfer Learning – IEEE Smart City 2020</li>
            </ul>
          </div>

          {/* Recommendation Systems */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Users className="text-green-600" /> Recommendation Systems
            </h3>
            <p className="text-gray-700 mb-4">
              Focused on predicting next Points-of-Interest (POIs) using deep learning models that consider spatial, temporal, and social data for both individuals and groups.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
              <li>Group POI Prediction – DEXA 2023</li>
              <li>Influence-based Deep Networks – ECIR 2022</li>
              <li>Spatio-Temporal Learning for POIs – ICTAI 2021</li>
            </ul>
          </div>

          {/* Data Analysis Under Uncertainty */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FileText className="text-purple-600" /> Data Analysis Under Uncertainty
            </h3>
            <p className="text-gray-700 mb-4">
              Pioneered skyline query computation on uncertain and incomplete data using Dempster-Shafer theory. Enhanced decision systems with more accurate query results over imperfect data.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
              <li>Efficient Skyline over Incomplete Data – ICTAI 2020</li>
              <li>Spatial Skyline over Incomplete Data – JSA 2018</li>
              <li>Skyline Queries over RDF – IJAR 2018</li>
              <li>Semantic Skyline Queries – IDEAS 2018</li>
              <li>Skyline Maintenance Techniques – ICTAI 2017, IPMU 2016</li>
              <li>TripAdvisor Review Skyline – ICDEc 2017</li>
              <li>Distributed Skyline & Top-k – AICCSA 2016, ICTAI 2016</li>
              <li>Object-Relational Evidential DBs – ICDEc 2016</li>
            </ul>
          </div>
        </div>

        {/* Conferences */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">🏛️ Conference Presentations</h3>
          <ul className="text-gray-700 text-sm space-y-3">
            <li>
              <strong>International Conference on Data Science and Analytics</strong> (2024, Boston, MA) — <em>Presenter</em>: "Transformer Models in Healthcare"
            </li>
            <li>
              <strong>AI in Healthcare Symposium</strong> (2024, New York, NY) — <em>Keynote Speaker</em>: "Explainable AI for Medical Decision Support"
            </li>
            <li>
              <strong>IEEE International Conference on Big Data</strong> (2023, Santa Clara, CA) — <em>Session Chair</em>: "ETL Optimization for Healthcare Data"
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ResearchPortfolio;
