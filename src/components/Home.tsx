import React from "react";
import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/phanichanderai",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/phanichander/",
    label: "LinkedIn",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/phanichander",
    label: "Twitter",
  },
];

const Home: React.FC = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden"
  >
    {/* Animated background elements */}
    <div className="absolute inset-0">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
    </div>

    <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
      {/* Profile Image or Initials */}
      <div className="mb-8 relative inline-block">
        <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-blue-400 p-1 animate-spin-slow">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-6xl font-bold">
            PC
          </div>
        </div>
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white animate-bounce"></div>
      </div>

      {/* Name and Title */}
      <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-fade-in">
        phani chander Mallampalli
      </h1>
      <h2 className="text-2xl md:text-3xl font-light mb-6 text-blue-200 animate-fade-in-delay">
        Developer
      </h2>
      <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-2">
        Passionate about building next-generation web experiences with cutting-edge technologies.
        Specializing in full-stack development, AI integration, and modern web architectures.
      </p>

      {/* Contact Info */}
      <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-gray-400">
        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-blue-400" />
          <span>Atlanta, GA</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail size={16} className="text-blue-400" />
          <span>phanimallampally@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone size={16} className="text-blue-400" />
          <span>+91 6301466859</span>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center space-x-6 mb-8">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
            aria-label={label}
          >
            <Icon size={20} className="text-white group-hover:text-blue-300 transition-colors duration-300" />
          </a>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#projects"
          className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          View My Work
        </a>
        <a
          href="/Phani_Chander_Resume_usa.pdf"
          download
          className="px-8 py-3 border-2 border-white/30 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
        >
          Download CV
        </a>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
        <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
      </div>
    </div>
  </section>
);

export default Home;
