import React from "react";
import { Code2, Lightbulb, Users, Target, Award, Rocket } from "lucide-react";

const achievements = [
  { number: "5+", label: "Projects Completed" },
  { number: "3+", label: "Years Experience" },
  { number: "6+", label: "Technologies Mastered" },
  { number: "100%", label: "Client Satisfaction" }
];

const values = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and efficient code that stands the test of time.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Constantly exploring new technologies and pushing the boundaries of what's possible.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Building strong relationships and working effectively with diverse teams.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "Focused on delivering results that align with business objectives and user needs.",
    color: "from-purple-500 to-pink-500"
  }
];

const About: React.FC = () => (
  <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Passionate developer dedicated to crafting exceptional digital experiences through innovative technology solutions
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Profile & Story */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                  <Rocket size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">My Journey</h3>
                  <p className="text-purple-600 font-medium">Ultra Pro Max Developer</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                I'm Phani Chander Mallampalli, a passionate full-stack developer with over 5 years of experience 
                building cutting-edge web applications. My journey began with a curiosity for how things work 
                behind the scenes, which evolved into a deep love for creating digital solutions that make a real impact.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Specializing in React, Next.js, Python, and AI/ML integration, I bridge the gap between 
                innovative ideas and practical implementations. I believe in writing clean, maintainable code 
                and staying ahead of the technology curve.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I'm not coding, you'll find me exploring the latest tech trends, contributing to open-source 
                projects, or mentoring aspiring developers in the community.
              </p>
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Award size={24} className="text-purple-600 mr-3" />
                Key Achievements
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-gray-600 text-sm font-medium">
                      {achievement.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Currently</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                  <span>Available for new opportunities</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span>Building next-gen AI applications</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span>Contributing to open source</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            What Drives Me
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-3">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Let's Create Something Amazing Together
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm always excited to work on challenging projects that push the boundaries of technology. 
              Ready to bring your ideas to life?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start a Conversation
              </a>
              <a
                href="/cv.pdf"
                download
                className="px-8 py-3 border-2 border-purple-300 text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;