import React from 'react';
import { Github, BarChart3, Brain, Database, Activity } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Healthcare Cost Optimization Dashboard",
      description: "Built comprehensive Tableau dashboards for healthcare analytics focusing on cost containment and risk stratification. Integrated SQL pipelines with statistical models using R and Python.",
      technologies: ["Java", "Power BI", "SQL", "Python", "R", "Healthcare Analytics"],
      icon: <Activity className="w-8 h-8 text-blue-600" />,
      category: "Healthcare Analytics",
      company: "Accenture (Client: Cigna)"
    },
    {
  title: "IoT Data Engineering in Manufacturing",
  description: "Designed and optimized SQL queries and ETL workflows for integrating IoT sensor and financial data. Delivered Power BI dashboards to provide supply chain and operational insights, improving reporting efficiency and decision-making.",
  technologies: ["SQL Server", "PostgreSQL", "ETL", "Power BI", "IoT Analytics", "Data Warehousing"],
  icon: <Database className="w-8 h-8 text-blue-600" />,
  category: "Manufacturing & IoT Data Engineering",
  company: "Accenture (Client: Honeywell)"
},
    {
      title: "NLP Text Classifier using BERT",
      description: "Developed transformer-based models for text classification using BERT and GPT architectures. Implemented model interpretability using SHAP and LIME for research purposes.",
      technologies: ["PyTorch", "BERT", "Hugging Face", "SHAP", "LIME"],
      icon: <Brain className="w-8 h-8 text-teal-600" />,
      category: "AI Research",
      company: "University of New Haven"
    },
    {
      title: "ETL Workflow Automation",
      description: "Automated ETL workflows using SSIS and Python for insurance data processing. Built robust data pipelines with error handling and monitoring capabilities.",
      technologies: ["SSIS", "Python", "SQL Server", "ETL", "Automation"],
      icon: <Database className="w-8 h-8 text-amber-600" />,
      category: "Data Engineering",
      company: "Accenture (Client: Zurich Farmers Insurance Group)"
    },
    {
      title: "Risk Analysis in Insurance",
      description: "Developed risk profiling tools and statistical models for insurance analytics. Created automated regulatory reporting systems and risk assessment dashboards.",
      technologies: ["Tableau", "R", "SQL", "Statistical Modeling", "Risk Analysis"],
      icon: <BarChart3 className="w-8 h-8 text-green-600" />,
      category: "Risk Analytics",
      company: "Accenture (Client: Zurich Farmers Insurance Group)"
    },
    {
      title: "Campaign Analysis & Data Mapping",
      description: "Led ETL validation and data mapping for external data partnerships. Executed comprehensive campaign analysis and profiling on healthcare claims data.",
      technologies: ["Python", "SQL", "Data Mapping", "Campaign Analysis"],
      icon: <Activity className="w-8 h-8 text-purple-600" />,
      category: "Healthcare Analytics",
      company: "Downtown Evening Soup Kitchen"
    },
    {
      title: "Academic Research in NLP",
      description: "Conducted research in Natural Language Processing, Computer Vision, and Reinforcement Learning. Integrated models using FastAPI and Flask with monitoring using Prometheus & Grafana.",
      technologies: ["NLP", "Computer Vision", "RL", "FastAPI", "Flask", "MLOps"],
      icon: <Brain className="w-8 h-8 text-red-600" />,
      category: "Academic Research",
      company: "University of New Haven"
    },
    {
      title: "AI Instruction & Mentorship",
      description: "Served as a Teaching Assistant for Artificial Intelligence courses, guiding students through hands-on machine learning and deep learning projects. Provided mentorship in Python, neural networks, and model evaluation techniques.",
      technologies: ["Python", "Machine Learning", "Neural Networks", "Model Evaluation", "Teaching"],
      icon: <Brain className="w-8 h-8 text-indigo-600" />,
      category: "Teaching & Mentoring",
      company: "University of New Haven"
    },
    {
      title: "Cloud Solutions on AWS",
      description: "As a Teaching Assistant, I guided students in designing and deploying scalable cloud solutions using AWS. Covered services like EC2, Lambda, S3, and CloudWatch with a focus on infrastructure automation and security best practices.",
      technologies: ["AWS", "EC2", "Lambda", "S3", "CloudWatch", "Teaching", "Infrastructure as Code"],
      icon: <Activity className="w-8 h-8 text-yellow-600" />,
      category: "Teaching & Cloud",
      company: "University of New Haven"
    },
    {
      title: "ServiceNow Automation & Integration",
      description: "Streamlined IT service management processes by integrating ServiceNow with enterprise systems. Built custom workflows and automated incident and change management tasks.",
      technologies: ["ServiceNow", "JavaScript", "REST APIs", "ITSM", "Workflow Automation"],
      icon: <Database className="w-8 h-8 text-pink-600" />,
      category: "IT Operations",
      company: "Accenture (Client: Zurich Farmers Insurance Group)"
    },
    {
      title: "Pacman AI Agent with Search Algorithms",
      description: "Implemented intelligent Pacman agents using various AI search algorithms including A*, minimax, and expectimax. Developed multi-agent systems with adversarial search and reinforcement learning for optimal game strategy.",
      technologies: ["Python", "AI Search Algorithms", "A*", "Minimax", "Expectimax", "Multi-Agent Systems", "Reinforcement Learning"],
      icon: <Brain className="w-8 h-8 text-orange-600" />,
      category: "AI Research",
      company: "University of New Haven"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects & Experience Highlights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of impactful projects across healthcare, insurance, cloud computing, teaching, and academic research domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-4">
                {project.icon}
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-blue-600 font-medium mb-3">{project.company}</p>
              <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
