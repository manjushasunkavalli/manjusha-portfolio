/*import React from 'react';
import { BookOpen, Users, Calendar, Globe, Brain, Database, Activity, Zap } from 'lucide-react';

const Research = () => {
  const researchAreas = [
    {
      title: "Cognitive Impairment Detection",
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      description: "Developed deep learning approaches to automatically assess cognitive measures using action recognition. These methods detect balance, rhythm, and coordination during cognitively demanding tasks, aiding diagnosis of neurodevelopmental disorders, brain injuries, and dementia.",
      publications: [
        "Res-ViT: Residual Vision Transformers – ICTAI 2023",
        "Deep Action Recognition for Cognitive Assessment – PETRA 2023", 
        "Cognitive Assessment with Skeleton-based Action Recognition – ICDEc 2023",
        "Mind in Action: Action Recognition for Cognitive Testing – DEXA 2023",
        "Deep-Cogn: Skeleton-based Cognitive Behavior Assessment – ICTAI 2022"
      ]
    },
    {
      title: "Traffic Management Systems",
      icon: <Activity className="w-8 h-8 text-teal-600" />,
      description: "Proposed deep learning models that forecast traffic speed, travel time, taxi fares, and energy consumption across vehicle types to support smarter transportation infrastructures.",
      publications: [
        "DeepFEC: Energy Consumption Prediction – WWW 2021",
        "Speed Prediction on Real-Life Traffic Data – MOBIQUITOUS 2020",
        "Taxi Fare Estimation using Temporal ResNet – MOBIQUITOUS 2020",
        "Travel Time Prediction with Transfer Learning – IEEE Smart City 2020"
      ]
    },
    {
      title: "Recommendation Systems",
      icon: <Users className="w-8 h-8 text-green-600" />,
      description: "Focused on predicting next Points-of-Interest (POIs) using deep learning models that consider spatial, temporal, and social data for both individuals and groups.",
      publications: [
        "Group POI Prediction – DEXA 2023",
        "Influence-based Deep Networks – ECIR 2022",
        "Spatio-Temporal Learning for POIs – ICTAI 2021"
      ]
    },
    {
      title: "Data Analysis Under Uncertainty",
      icon: <Database className="w-8 h-8 text-purple-600" />,
      description: "Pioneered skyline query computation on uncertain and incomplete data using Dempster-Shafer theory. Enhanced decision systems with more accurate query results over imperfect data.",
      publications: [
        "Efficient Skyline over Incomplete Data – ICTAI 2020",
        "Spatial Skyline over Incomplete Data – JSA 2018",
        "Skyline Queries over RDF – IJAR 2018",
        "Semantic Skyline Queries – IDEAS 2018",
        "Skyline Maintenance Techniques – ICTAI 2017, IPMU 2016",
        "TripAdvisor Review Skyline – ICDEc 2017",
        "Distributed Skyline & Top-k – AICCSA 2016, ICTAI 2016",
        "Object-Relational Evidential DBs – ICDEc 2016"
      ]
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
    },
    {
      name: "ICTAI - IEEE International Conference on Tools with Artificial Intelligence",
      role: "Research Presenter",
      year: "2023, 2022, 2020, 2017",
      location: "Various Locations",
      presentation: "Multiple presentations on cognitive assessment and skyline queries"
    },
    {
      name: "PETRA - Pervasive Technologies Related to Assistive Environments",
      role: "Research Presenter", 
      year: "2023",
      location: "Corfu, Greece",
      presentation: "Deep Action Recognition for Cognitive Assessment"
    },
    {
      name: "DEXA - Database and Expert Systems Applications",
      role: "Research Presenter",
      year: "2023",
      location: "Penang, Malaysia", 
      presentation: "Mind in Action: Action Recognition for Cognitive Testing"
    }
  ];

  return (
    <section id="research" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Research & Publications</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Contributing to the advancement of AI, data science, and healthcare analytics through research, 
            publications, and academic collaborations across cognitive assessment, traffic systems, and data uncertainty.
          </p>
        </div>

        {/* Research Areas *//*}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Research Areas</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  {area.icon}
                  <h4 className="text-xl font-bold text-gray-900">{area.title}</h4>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{area.description}</p>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Key Publications:</h5>
                  <ul className="space-y-1">
                    {area.publications.map((pub, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        {pub}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conferences *//*}
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

        {/* Intellisys Lab Research Portal *//*}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Intellisys Lab Research Portal</h3>
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-8 h-8" />
                  <h4 className="text-2xl font-bold">Intellisys Lab Website</h4>
                </div>
                <p className="text-indigo-100 mb-6 leading-relaxed">
                  Designed and developed a comprehensive research portal for the Intelligent Systems Laboratory, 
                  showcasing cutting-edge research in AI, machine learning, and data science. The website serves 
                  as a central hub for research publications, project showcases, and academic collaborations.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-300" />
                    <span>Interactive research project galleries</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-yellow-300" />
                    <span>AI/ML research publication database</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-yellow-300" />
                    <span>Faculty and student researcher profiles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-yellow-300" />
                    <span>Research data visualization tools</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h5 className="text-xl font-bold mb-4">Technical Implementation</h5>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-indigo-200">Frontend:</span>
                    <span className="font-medium">HTML, Bootstrap 5, Custom CSS</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-indigo-200">Features:</span>
                    <span className="font-medium">Multi-page navigation, project carousel, responsive layout</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-indigo-200">Deployment:</span>
                    <span className="font-medium">Static hosting (GitHub Pages)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Research;*/

import React from 'react';
import { BookOpen, Users, Calendar, Globe, Brain, Database, Activity, Zap } from 'lucide-react';

const Research = () => {
  const researchAreas = [
    {
      title: "Cognitive Impairment Detection",
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      description: "Developed deep learning approaches to automatically assess cognitive measures using action recognition. These methods detect balance, rhythm, and coordination during cognitively demanding tasks, aiding diagnosis of neurodevelopmental disorders, brain injuries, and dementia.",
      publications: [
        "Res-ViT: Residual Vision Transformers – ICTAI 2023",
        "Deep Action Recognition for Cognitive Assessment – PETRA 2023", 
        "Cognitive Assessment with Skeleton-based Action Recognition – ICDEc 2023",
        "Mind in Action: Action Recognition for Cognitive Testing – DEXA 2023",
        "Deep-Cogn: Skeleton-based Cognitive Behavior Assessment – ICTAI 2022"
      ]
    },
    {
      title: "Traffic Management Systems",
      icon: <Activity className="w-8 h-8 text-teal-600" />,
      description: "Proposed deep learning models that forecast traffic speed, travel time, taxi fares, and energy consumption across vehicle types to support smarter transportation infrastructures.",
      publications: [
        "DeepFEC: Energy Consumption Prediction – WWW 2021",
        "Speed Prediction on Real-Life Traffic Data – MOBIQUITOUS 2020",
        "Taxi Fare Estimation using Temporal ResNet – MOBIQUITOUS 2020",
        "Travel Time Prediction with Transfer Learning – IEEE Smart City 2020"
      ]
    },
    {
      title: "Recommendation Systems",
      icon: <Users className="w-8 h-8 text-green-600" />,
      description: "Focused on predicting next Points-of-Interest (POIs) using deep learning models that consider spatial, temporal, and social data for both individuals and groups.",
      publications: [
        "Group POI Prediction – DEXA 2023",
        "Influence-based Deep Networks – ECIR 2022",
        "Spatio-Temporal Learning for POIs – ICTAI 2021"
      ]
    },
    {
      title: "Data Analysis Under Uncertainty",
      icon: <Database className="w-8 h-8 text-purple-600" />,
      description: "Pioneered skyline query computation on uncertain and incomplete data using Dempster-Shafer theory. Enhanced decision systems with more accurate query results over imperfect data.",
      publications: [
        "Efficient Skyline over Incomplete Data – ICTAI 2020",
        "Spatial Skyline over Incomplete Data – JSA 2018",
        "Skyline Queries over RDF – IJAR 2018",
        "Semantic Skyline Queries – IDEAS 2018",
        "Skyline Maintenance Techniques – ICTAI 2017, IPMU 2016",
        "TripAdvisor Review Skyline – ICDEc 2017",
        "Distributed Skyline & Top-k – AICCSA 2016, ICTAI 2016",
        "Object-Relational Evidential DBs – ICDEc 2016"
      ]
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
    },
    {
      name: "ICTAI - IEEE International Conference on Tools with Artificial Intelligence",
      role: "Research Presenter",
      year: "2023, 2022, 2020, 2017",
      location: "Various Locations",
      presentation: "Multiple presentations on cognitive assessment and skyline queries"
    },
    {
      name: "PETRA - Pervasive Technologies Related to Assistive Environments",
      role: "Research Presenter", 
      year: "2023",
      location: "Corfu, Greece",
      presentation: "Deep Action Recognition for Cognitive Assessment"
    },
    {
      name: "DEXA - Database and Expert Systems Applications",
      role: "Research Presenter",
      year: "2023",
      location: "Penang, Malaysia", 
      presentation: "Mind in Action: Action Recognition for Cognitive Testing"
    }
  ];

  return (
    <section id="research" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Research & Publications</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Contributing to the advancement of AI, data science, and healthcare analytics through research, 
            publications, and academic collaborations across cognitive assessment, traffic systems, and data uncertainty.
          </p>
        </div>

        {/* Research Areas */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Research Areas</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  {area.icon}
                  <h4 className="text-xl font-bold text-gray-900">{area.title}</h4>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{area.description}</p>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Key Publications:</h5>
                  <ul className="space-y-1">
                    {area.publications.map((pub, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        {pub}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conferences */}
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

        {/* Intellisys Lab Research Portal */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Intellisys Lab Research Portal</h3>
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-8 h-8" />
                  <h4 className="text-2xl font-bold">Intellisys Lab Website</h4>
                </div>
                <p className="text-indigo-100 mb-6 leading-relaxed">
                  Designed and developed a comprehensive research portal for the Intelligent Systems Laboratory, 
                  showcasing cutting-edge research in AI, machine learning, and data science. The website serves 
                  as a central hub for research publications, project showcases, and academic collaborations.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-300" />
                    <span>Interactive research project galleries</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-yellow-300" />
                    <span>AI/ML research publication database</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-yellow-300" />
                    <span>Faculty and student researcher profiles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-yellow-300" />
                    <span>Research data visualization tools</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h5 className="text-xl font-bold mb-4">Technical Implementation</h5>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-indigo-200">Frontend:</span>
                    <span className="font-medium">HTML5, Bootstrap 5, Custom CSS</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-indigo-200">Features:</span>
                    <span className="font-medium">Multi-page navigation, carousel, responsive layout</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-indigo-200">Deployment:</span>
                    <span className="font-medium">GitHub Pages, AWS S3, CloudFront</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-indigo-200">CI/CD Pipeline:</span>
                    <span className="font-medium">GitHub Actions, AWS CodePipeline</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-indigo-200">Monitoring & Testing:</span>
                    <span className="font-medium">Lighthouse, Web Vitals, axe DevTools</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Research;

