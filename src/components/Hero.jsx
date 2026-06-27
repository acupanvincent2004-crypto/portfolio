import React from 'react';

const Hero = () => {
  const handleViewProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-12 pt-12">
      <div className="flex-1 space-y-8">
        <div className="flex items-center gap-2 text-primary text-xs font-bold tracking-widest uppercase">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
          Available for hire
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Full-Stack<br />
          Developer<br />
          <span className="text-primary">& IT Support/Customer Service</span>
        </h1>
        <p className="text-lg leading-relaxed text-justify">
          I'm Vincent C. Acupan — a BSIT graduated major in Service Management who builds 
          full‑stack web apps and turns data into decisions. Skilled in hardware/software troubleshooting, 
          networking fundamentals, cybersecurity, and customer service. I love bridging the gap between 
          engineering and business strategy while supporting clients with clear communication.
        </p>
        <div className="border-l-2 border-primary pl-4 text-sm text-textMuted italic max-w-lg text-justify">
          Career goal: Join a growth-stage company where I can architect scalable products 
          and drive data-informed engineering decisions.
        </div>
        <div className="flex flex-wrap items-center gap-4 pt-4">
          {/* View Projects Button */}
          <button 
            onClick={handleViewProjects}
            className="bg-primary text-background px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            View Projects
          </button>

          {/* Download Résumé Dropdown */}
          <div className="relative group">
            <button className="border border-surfaceLight text-textMain px-6 py-3 rounded-lg font-semibold hover:bg-surfaceLight transition-colors">
              Download Resume
            </button>
            <div className="absolute hidden group-hover:block bg-surfaceLight border border-surface rounded-lg mt-2 shadow-lg">
              <a href="/IT SUPPORT.pdf" download className="block px-4 py-2 hover:bg-surface">Resume (IT Support)</a>
              <a href="/WEB DEVELOPER.pdf" download className="block px-4 py-2 hover:bg-surface">Resume (Full-Stack Dev)</a>
              <a href="/CUSTOMER SERVICE.pdf" download className="block px-4 py-2 hover:bg-surface">Resume (Customer Service)</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex-1 relative flex justify-end">
        <div className="relative rounded-[2rem] overflow-hidden border-2 border-primary p-2 w-full max-w-md">
          <img 
            src="PIC 4.jpg" 
            alt="Vincent Acupan" 
            className="w-full h-auto rounded-[1.5rem] object-cover aspect-square"
          />
          <div className="absolute bottom-6 right-6 bg-surfaceLight border border-surface text-textMain text-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            Open to remote roles
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
