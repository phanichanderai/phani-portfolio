import React, { useState, useEffect } from "react";
import { Code, Database, Globe, Zap, Shield, Cpu } from "lucide-react";

const skills = [
  { name: "React & Next.js", level: 95, icon: Code, color: "from-blue-500 to-cyan-500" },
  { name: "Python & AI/ML", level: 90, icon: Cpu, color: "from-green-500 to-emerald-500" },
  { name: "Node.js & Express", level: 85, icon: Globe, color: "from-yellow-500 to-orange-500" },
  { name: "Database Design", level: 88, icon: Database, color: "from-purple-500 to-pink-500" },
  { name: "Cloud & DevOps", level: 82, icon: Zap, color: "from-indigo-500 to-blue-500" },
  { name: "Cybersecurity", level: 78, icon: Shield, color: "from-red-500 to-rose-500" },
];

const getProficiencyLabel = (level: number) => {
  if (level >= 90) return "Expert";
  if (level >= 80) return "Advanced";
  if (level >= 70) return "Intermediate";
  return "Beginner";
};

const Skills: React.FC = () => {
  const [animatedSkills, setAnimatedSkills] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const timer = setTimeout(() => {
      const animated = skills.reduce((acc, skill) => {
        acc[skill.name] = skill.level;
        return acc;
      }, {} as { [key: string]: number });
      setAnimatedSkills(animated);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mastering the latest technologies to build innovative solutions that make a difference.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const animatedLevel = animatedSkills[skill.name] || 0;

            return (
              <div
                key={skill.name}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} mr-4`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">Proficiency</span>
                    <span className="text-sm font-bold text-gray-800">{animatedLevel}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-sm`}
                      style={{ width: `${animatedLevel}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          i < Math.floor(skill.level / 20)
                            ? `bg-gradient-to-r ${skill.color}`
                            : "bg-gray-200"
                        }`}
                      ></div>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 font-medium">
                    {getProficiencyLabel(skill.level)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
