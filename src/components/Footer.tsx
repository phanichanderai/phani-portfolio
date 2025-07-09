import React from "react";
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp, Code, Coffee } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/johnportfolio",
    label: "GitHub",
    color: "hover:text-gray-800"
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/johnportfolio",
    label: "LinkedIn",
    color: "hover:text-blue-600"
  },
  {
    icon: Twitter,
    href: "https://twitter.com/johnportfolio",
    label: "Twitter",
    color: "hover:text-blue-400"
  },
  {
    icon: Mail,
    href: "mailto:phanimallampally@gmail.com",
    label: "Email",
    color: "hover:text-red-500"
  },
];

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand & Description */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                  Phani Chander Mallampalli
                </h3>
                <p className="text-gray-300 leading-relaxed max-w-md">
                  Ultra Pro Max Developer passionate about building next-generation web experiences 
                  with cutting-edge technologies. Let's create something amazing together.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 ${color}`}
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Get In Touch</h4>
              <div className="space-y-3 text-gray-300">
                <p className="flex items-center">
                  <Mail size={16} className="mr-2 text-blue-400" />
                  phanimallampally@gmail.com
                </p>
                <p className="flex items-center">
                  <span className="mr-2 text-blue-400">📍</span>
                  Atlanta, GA
                </p>
                <div className="flex items-center mt-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm text-green-400">Available for work</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 text-gray-300 text-sm mb-4 md:mb-0">
                <span>© 2024 Phani Chander Mallampalli. Made with</span>
                <Heart size={16} className="text-red-400 fill-current animate-pulse" />
                <span>and</span>
                <Coffee size={16} className="text-yellow-400" />
                <span>using</span>
                <Code size={16} className="text-blue-400" />
              </div>
              
              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                aria-label="Back to top"
              >
                <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform duration-300" />
                <span className="text-sm">Back to Top</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;