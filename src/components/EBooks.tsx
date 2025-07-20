import React from 'react';
import { BookOpen, Download, Star, Calendar, Users, ExternalLink } from 'lucide-react';

const EBooks = () => {
  const ebooks = [
    {
      id: 1,
      title: "Making It Add Up: Reporting Year 1 of Our Outreach Services",
      subtitle: "A Preliminary Report from Downtown Evening Soup Kitchen",
      description:
        "An analytical snapshot of DESK’s first year running its Outreach program for unhoused adults in New Haven. This report highlights client engagement trends, housing outcomes, and lessons learned from the field.",
      coverImage:
        "https://images.pexels.com/photos/6646914/pexels-photo-6646914.jpeg?auto=compress&cs=tinysrgb&w=400",
      publishDate: "2025",
      pages: 10,
      rating: 4.9,
      downloads: "500+",
      category: "Community Outreach",
      topics: [
        "Homelessness Intervention",
        "Client Engagement Metrics",
        "Outreach Impact",
        "Housing Transitions",
        "Program Evaluation",
        "Social Work in Practice"
      ],
      downloadLink: "https://drive.google.com/file/d/1-328fHHhhZn-8okdKSGvvnObhxgzTzv4/view",
      previewLink: "https://drive.google.com/file/d/1-328fHHhhZn-8okdKSGvvnObhxgzTzv4/preview",
      companyLink: "https://deskct.org/"
    }
  ];

  const stats = [
    { label: "Total Downloads", value: "500+", icon: <Download className="w-6 h-6" /> },
    { label: "Published Books", value: "1", icon: <BookOpen className="w-6 h-6" /> },
    { label: "Average Rating", value: "4.9", icon: <Star className="w-6 h-6" /> },
    { label: "Total Readers", value: "1.2K+", icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <section id="ebooks" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Published eBooks</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Highlighting data-driven outreach, compassion in action, and community impact from Downtown Evening Soup Kitchen.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-6 text-center">
              <div className="flex justify-center mb-3 text-blue-600">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* eBook Card */}
        <div className="grid md:grid-cols-2 gap-8">
          {ebooks.map((book) => (
            <div key={book.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {book.category}
                    </span>
                    <div className="flex items-center gap-1 text-amber-500">
                      <Star size={16} fill="currentColor" />
                      <span className="text-gray-700 text-sm font-medium">{book.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{book.title}</h3>
                  <p className="text-blue-600 font-medium text-sm mb-3">{book.subtitle}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{book.description}</p>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1"><Calendar size={14} />{book.publishDate}</div>
                    <div className="flex items-center gap-1"><BookOpen size={14} />{book.pages} pages</div>
                    <div className="flex items-center gap-1"><Download size={14} />{book.downloads}</div>
                  </div>

                  {/* Topics */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Topics:</h4>
                    <div className="flex flex-wrap gap-1">
                      {book.topics.slice(0, 4).map((topic, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">{topic}</span>
                      ))}
                      {book.topics.length > 4 && (
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          +{book.topics.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 mb-2">
                    <a
                      href={book.downloadLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                    >
                      <Download size={16} />
                      Download
                    </a>

                    <a
                      href={book.previewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      Preview
                    </a>

                    <a
                      href={book.companyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-teal-100 text-teal-800 px-4 py-2 rounded-lg text-sm font-medium hover:bg-teal-200 transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      Company Profile
                    </a>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EBooks;
