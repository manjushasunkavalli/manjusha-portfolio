import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: "Keynote on Strategic Leadership & Innovation",
      description: "Presented a seminar on leadership mindset, strategic innovation, and entrepreneurial journey as a student speaker.",
      image: "https://i.imgur.com/Im9DtP0.jpeg",
      category: "Leadership",
      company: "University of New Haven",
      technologies: ["Public Speaking", "Leadership", "Entrepreneurship"]
    },
    {
      id: 2,
      title: "Academic Assistant in AI & Machine Learning",
      description: "Served as a TA supporting student learning in Artificial Intelligence, ML algorithms, and data science pipelines.",
      image: "https://i.imgur.com/ibaIyPh.jpeg",
      category: "Academia",
      company: "University of New Haven",
      technologies: ["Artificial Intelligence", "Python", "Teaching"]
    },
    {
      id: 3,
      title: "Research Assistance in Predictive Analytics",
      description: "Collaborated on academic research with professors focusing on predictive analytics and knowledge sharing.",
      image: "https://i.imgur.com/684hwOS.jpeg",
      category: "Research",
      company: "University of New Haven",
      technologies: ["Machine Learning", "Data Analysis", "Collaboration"]
    },
    {
      id: 4,
      title: "Community Data Analyst: Impact Through Insights",
      description: "Developed dashboards and data solutions to help optimize operations and support food programs in the community.",
      image: "https://i.imgur.com/4Wm8O3G.jpeg",
      category: "Data Analytics",
      company: "Downtown Evening Soup Kitchen",
      technologies: ["SQL", "Data Cleaning", "Power BI"]
    },
    {
      id: 5,
      title: "Operational Efficiency through Warehouse Analytics",
      description: "Created inventory flow automation and optimized donation logistics with data-driven workflows.",
      image: "https://i.imgur.com/GWmFzWC.jpeg",
      category: "Operations",
      company: "Downtown Evening Soup Kitchen",
      technologies: ["ETL", "Inventory Data", "Process Mapping"]
    },
    {
      id: 6,
      title: "Graduation Appreciation from Leadership",
      description: "Received appreciation gift from Manager Wendy McLeod upon completing graduation and internship.",
      image: "https://i.imgur.com/dj9nL5H.jpeg",
      category: "Achievement",
      company: "Downtown Evening Soup Kitchen",
      technologies: ["Leadership", "Community Impact"]
    },
    {
      id: 7,
      title: "Leadership Wisdom: Lessons from 'Make Your Bed'",
      description: "Gifted the inspiring book by Admiral McRaven highlighting discipline, resilience, and daily habits to lead.",
      image: "https://i.imgur.com/ALkm78T.jpeg",
      category: "Leadership",
      company: "Downtown Evening Soup Kitchen",
      technologies: ["Motivation", "Self-Leadership"]
    },
    {
      id: 8,
      title: "End-to-End Data Projects with Modern Tech Stack",
      description: "Led data initiatives independently—modernizing ETL pipelines, implementing AWS workflows, Power BI dashboards.",
      image: "https://i.imgur.com/yk0x1DD.jpeg",
      category: "Data Projects",
      company: "Downtown Evening Soup Kitchen",
      technologies: ["Informatica", "SQL", "Power BI", "Python", "AWS"]
    }
  ];

  const categories = ["All", ...new Set(galleryItems.map(item => item.category))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const openModal = (id: number) => setSelectedImage(id);
  const closeModal = () => setSelectedImage(null);

  const selectedItem = selectedImage ? galleryItems.find(item => item.id === selectedImage) : null;

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A visual journey through my leadership, academic, and professional engagements
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => openModal(item.id)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: item.id === 2 || item.id === 4 || item.id === 5 ? 'center 50%' : 'center 30%' }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{item.title}</h3>
                <p className="text-blue-600 font-medium text-sm mb-2">{item.company}</p>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
                <div className="flex flex-wrap gap-1">
                  {item.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && selectedItem && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: selectedItem.id === 2 || selectedItem.id === 4 || selectedItem.id === 5 ? 'center 50%' : 'center 30%' }}
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-200"
                >
                  <X size={24} />
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {selectedItem.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedItem.title}</h3>
                <p className="text-blue-600 font-medium mb-4">{selectedItem.company}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{selectedItem.description}</p>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Tags:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
