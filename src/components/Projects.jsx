import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: "InventoryIQ",
      badge: "CRUD App",
      description: "Full-stack CRUD inventory management app with real-time updates, role-based auth, and REST API. Built with React, Node.js, and PostgreSQL.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      tags: ["React", "Node.js", "PostgreSQL", "JWT"],
      codeLink: "#",
      demoLink: "#"
    },
    {
      title: "DataPulse Dashboard",
      badge: "Data Dashboard",
      description: "Business analytics dashboard visualizing KPIs, sales funnels, and cohort data. Integrated with live CSV uploads and Tableau embed.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      tags: ["React", "Python", "Tableau", "SQL"],
      codeLink: "#",
      demoLink: "#"
    },
    {
      title: "DevPortfolio (this site)",
      badge: "Portfolio",
      description: "Responsive developer portfolio built with React. Dark theme, smooth scroll, EmailJS contact form, and GitHub API integration.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop",
      tags: ["React", "Tailwind", "EmailJS", "GitHub API"],
      codeLink: "#",
      demoLink: "#"
    },
    {
      title: "SoundSched",
      badge: "Freelance",
      description: "Booking and scheduling platform for indie musicians. Venue discovery, calendar sync, and payment flow — built as a freelance project.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
      tags: ["React", "Node.js", "Stripe", "MongoDB"],
      codeLink: "#",
      demoLink: "#"
    }
  ];

  return (
    <section id="projects" className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <p className="text-primary text-xs font-bold tracking-widest uppercase mb-2">What I've built</p>
          <h2 className="text-4xl font-bold text-textMain">Featured Projects</h2>
        </div>
        <a href="#" className="flex items-center gap-2 px-4 py-2 border border-surfaceLight rounded-lg hover:bg-surfaceLight transition-colors text-textMuted hover:text-textMain text-sm font-medium w-fit">
          <FiGithub size={16} />
          View all on GitHub
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="glass-panel overflow-hidden group hover:border-primary/30 transition-colors flex flex-col">
            <div className="relative h-56 overflow-hidden border-b border-surfaceLight">
              <div className="absolute top-4 left-4 z-10 bg-primary text-background text-xs font-bold px-3 py-1 rounded-md">
                {project.badge}
              </div>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-textMain mb-3">{project.title}</h3>
              <p className="text-textMuted text-sm leading-relaxed mb-6 flex-1">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-medium bg-surfaceLight border border-surfaceLight text-textMuted px-3 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-6 pt-6 border-t border-surfaceLight/50 mt-auto">
                <a href={project.codeLink} className="flex items-center gap-2 text-sm text-textMuted hover:text-textMain transition-colors font-medium">
                  <FiGithub size={16} /> Code
                </a>
                <a href={project.demoLink} className="flex items-center gap-2 text-sm text-primary hover:opacity-80 transition-opacity font-medium">
                  <FiExternalLink size={16} /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;