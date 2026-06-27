import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 px-6 max-w-6xl mx-auto">
      <div>
        <h1 className="text-xl font-bold text-textMain">Vincent C. Acupan</h1>
        <p className="text-primary text-xs font-semibold tracking-wider uppercase">Web Developer & IT Support/Customer Service</p>
      </div>
      
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
        <a href="#about" className="hover:text-textMain transition-colors">About</a>
        <a href="#skills" className="hover:text-textMain transition-colors">Skills</a>
        <a href="#projects" className="hover:text-textMain transition-colors">Projects</a>
        <a href="#experience" className="hover:text-textMain transition-colors">Experience</a>
        <a href="#education" className="hover:text-textMain transition-colors">Education</a>
        <a href="#contact" className="hover:text-textMain transition-colors">Contact</a>
      </div>

      <button className="bg-primary text-background px-6 py-2 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity">
        Hire Mex
      </button>
    </nav>
  );
};

export default Navbar;