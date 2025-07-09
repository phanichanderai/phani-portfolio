import React from "react";

const skills = [
  { name: "TypeScript", level: "Advanced" },
  { name: "React", level: "Advanced" },
  { name: "Tailwind CSS", level: "Advanced" },
  { name: "Node.js", level: "Intermediate" },
  { name: "Python", level: "Intermediate" },
];

const Skills: React.FC = () => (
  <section id="skills" className="min-h-screen flex flex-col items-center justify-center bg-blue-50 py-20">
    <h2 className="text-4xl font-bold text-blue-600 mb-8">Skills</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="bg-white shadow rounded-lg p-6 flex flex-col items-center"
        >
          <span className="text-xl font-semibold text-gray-800">{skill.name}</span>
          <span className="text-blue-500">{skill.level}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
