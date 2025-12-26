import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Github } from 'lucide-react';

const PortfolioProjects = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    { id: 1, title: "E-Commerce Platform", category: "Web Development", tech: "React, Node.js, MongoDB" },
    { id: 2, title: "Mobile Banking App", category: "Mobile App", tech: "React Native, Firebase" },
    { id: 3, title: "AI Chat Assistant", category: "AI/ML", tech: "Python, TensorFlow, Flask" },
    { id: 4, title: "Social Media Dashboard", category: "Web Development", tech: "Vue.js, Express, PostgreSQL" },
    { id: 5, title: "Task Management System", category: "Productivity", tech: "Angular, .NET Core, SQL" },
    { id: 6, title: "Video Streaming Platform", category: "Media", tech: "React, AWS, Node.js" },
    { id: 7, title: "Real Estate Website", category: "Web Development", tech: "Next.js, Prisma, Tailwind" },
    { id: 8, title: "Fitness Tracking App", category: "Health & Fitness", tech: "Flutter, Firebase, ML Kit" },
    { id: 9, title: "Restaurant POS System", category: "Business", tech: "React, Node.js, MySQL" },
    { id: 10, title: "Crypto Trading Bot", category: "FinTech", tech: "Python, Binance API, Redis" },
    { id: 11, title: "Learning Management System", category: "Education", tech: "Django, React, PostgreSQL" },
    { id: 12, title: "Weather Forecast App", category: "Utility", tech: "React Native, OpenWeather API" },
    { id: 13, title: "Inventory Management", category: "Business", tech: "Vue.js, Laravel, MySQL" },
    { id: 14, title: "Blog Platform", category: "Content Management", tech: "Gatsby, GraphQL, Contentful" },
    { id: 15, title: "Music Player App", category: "Entertainment", tech: "React, Web Audio API, IndexedDB" },
    { id: 16, title: "Booking System", category: "Service", tech: "Next.js, Stripe, MongoDB" },
    { id: 17, title: "Portfolio Generator", category: "Developer Tools", tech: "React, Tailwind, Vercel" },
    { id: 18, title: "Chat Application", category: "Communication", tech: "Socket.io, React, Node.js" },
    { id: 19, title: "Image Gallery", category: "Media", tech: "React, Cloudinary, Firebase" },
    { id: 20, title: "Analytics Dashboard", category: "Data Visualization", tech: "D3.js, React, Express" }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950 to-black opacity-50"></div>
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.1) 0%, transparent 50%)',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        ></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-red-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                Portfolio
              </h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <button className="px-6 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/50">
                Home
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg bg-red-900/20 hover:bg-red-900/40 transition-all duration-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden bg-black/95 border-t border-red-900/30`}
        >
          <div className="px-4 py-4">
            <button className="w-full px-6 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-lg transition-all duration-300">
              Home
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-red-400 via-red-600 to-red-800 bg-clip-text text-transparent">
              My Projects
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A collection of 20 projects showcasing my skills and expertise
            </p>
            <div className="mt-6 h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden border border-red-900/30 hover:border-red-500/50 transition-all duration-500 transform hover:scale-105"
                style={{
                  animation: `slideUp 0.6s ease-out ${index * 0.05}s both`
                }}
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/20 to-red-600/0 transition-opacity duration-500 ${hoveredCard === project.id ? 'opacity-100' : 'opacity-0'}`}></div>
                
                {/* Card Content */}
                <div className="relative p-6 h-full flex flex-col">
                  {/* Project Number */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-red-600/20 rounded-full flex items-center justify-center text-red-400 font-bold text-sm">
                    {project.id}
                  </div>

                  {/* Category Badge */}
                  <div className="inline-block mb-4">
                    <span className="text-xs px-3 py-1 bg-red-900/30 text-red-400 rounded-full border border-red-700/30">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-red-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Tech Stack */}
                  <p className="text-gray-400 text-sm mb-6 flex-grow">
                    {project.tech}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-2 bg-red-600/20 hover:bg-red-600 text-red-400 hover:text-white rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm">
                      <ExternalLink size={16} />
                      <span>View</span>
                    </button>
                    <button className="px-4 py-2 bg-gray-800/50 hover:bg-gray-700 text-gray-400 hover:text-white rounded-lg transition-all duration-300 flex items-center justify-center">
                      <Github size={16} />
                    </button>
                  </div>
                </div>

                {/* Animated Border */}
                <div className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${hoveredCard === project.id ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-shimmer"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-500/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-100vh) translateX(50px);
            opacity: 0;
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-fade-in {
          animation: slideUp 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default PortfolioProjects;