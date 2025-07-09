import React from "react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const Navbar: React.FC = () => (
  <nav className="fixed top-0 w-full bg-white shadow z-50">
    <div className="container mx-auto flex justify-between items-center py-4 px-6">
      <span className="font-bold text-xl text-blue-600">MyPortfolio</span>
      <ul className="flex space-x-6">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default Navbar;
