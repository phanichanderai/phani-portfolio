import React from "react";
import { ExternalLink, Github, Star, Eye } from "lucide-react";

// You can expand this array with more projects and fields as needed
const projects = [
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio built with React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/phanichanderai/phani-portfolio",
    demo: "https://phani-learnings.vercel.app/",
    image: "/portfolioimage.png",
    stars: 142,
    views: "2.3k"
  },
  {
    title: "Drone Project Website",
    description: "A productivity app to know about the prices and Drone models with their price.",
    tech: ["TypeScript", "Tailwind css", "React", "Git"],
    github: "https://github.com/phanichanderai/Droneproject",
    demo: "https://droneproject-delta.vercel.app/",
    image: "/droneproject.png",
    stars: 89,
    views: "1.8k"
  },
  {
    title: "Blog Platform",
    description: "A full-stack blog platform with Markdown support and user authentication.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/blog-platform",
    demo: "https://blog-platform-demo.vercel.app",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop",
    stars: 234,
    views: "4.1k"
  },
];

const Projects: React.FC = () => (
  <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="projects">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A showcase of innovative solutions and cutting-edge applications I've built
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Project Image */}
            <div className="relative overflow-hidden h-48">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4 flex space-x-2">
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                  <Star size={12} className="text-yellow-400 fill-current" />
                  <span className="text-white text-xs font-medium">{project.stars}</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                  <Eye size={12} className="text-white" />
                  <span className="text-white text-xs font-medium">{project.views}</span>
                </div>
              </div>
            </div>
            
            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Action Buttons */}
              <div className="flex space-x-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 border-2 border-gray-300 rounded-lg hover:border-purple-500 hover:text-purple-600 transition-all duration-300"
                >
                  <Github size={16} />
                  <span className="text-sm font-medium">Code</span>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                >
                  <ExternalLink size={16} />
                  <span className="text-sm font-medium">Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* View All Projects Button */}
      <div className="text-center mt-12">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          View All Projects on GitHub
        </a>
      </div>
    </div>
  </section>
);

export default Projects;
