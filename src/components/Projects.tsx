import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio built with React and Tailwind CSS.",
    link: "https://yourportfolio.com",
  },
  {
    title: "Task Manager App",
    description: "A productivity app to manage daily tasks, built with TypeScript and Firebase.",
    link: "https://github.com/yourusername/task-manager",
  },
  {
    title: "Blog Platform",
    description: "A full-stack blog platform with Markdown support and user authentication.",
    link: "https://github.com/yourusername/blog-platform",
  },
];

const Projects: React.FC = () => (
  <section id="projects" className="min-h-screen flex flex-col items-center justify-center bg-white py-20">
    <h2 className="text-4xl font-bold text-blue-600 mb-8">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
      {projects.map((project) => (
        <div
          key={project.title}
          className="bg-blue-50 rounded-lg shadow p-6 flex flex-col"
        >
          <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-700 mb-4">{project.description}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            View Project
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
