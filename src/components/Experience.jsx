import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Drum Teacher",
      company: "Ascente Music Academy - Pallocan West Batangas City",
      date: "April 2026 - Present",
      descriptions: [
        "Provided structured drum lessons emphasizing rhythm, technique, and musical expression.",
        "Supported student growth through personalized instruction and performance preparation."
      ],
      tags: ["Music Education", "Performance Coaching"]
    },
    {
      role: "Full-Stack Dev & IT Support Intern",
      company: "Department of Information and Communications Technology Region 4A",
      date: "Feb 2026 - May 2026",
      descriptions: [
        "Perform OS Installation, Network Configuration and Troubleshooting",
        "Basic Hardware & Software Repair",
        "Cabling Management, WiFi Configuration and Radio/Satellite Set Up & Configuration",
        "Build a Web-Based System for HR Office and Excel (Script Automation)"
      ],
      tags: ["React", "TailWind CSS", "Node.js", "SQL"]
    },
    {
      role: "Photography Assistant",
      company: "DM’s Photography - Bauan, Province of Batangas, Philippines",
      date: "Aug 2024 - Mar 2026",
      descriptions: [
        "Applied essential editing techniques to images while coordinating overall page organization.",
        "Addressed customer inquiries and organized bookings to ensure seamless client experiences."
      ],
      tags: ["Moderator", "Detailing", "Editing"]
    },
    
    
    
  ];

  return (
    <section id="experience" className="space-y-8">
      <div>
        <p className="text-primary text-xs font-bold tracking-widest uppercase mb-2">Where I've worked</p>
        <h2 className="text-4xl font-bold text-textMain">Experience</h2>
      </div>

      <div className="relative border-l border-surfaceLight ml-4 space-y-8 pb-4">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-10">
            <div className="absolute -left-[17px] top-4 bg-primary p-2 rounded-full text-background">
              <Briefcase size={16} strokeWidth={3} />
            </div>
            
            <div className="glass-panel p-6 hover:border-primary/50 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-textMain">{exp.role}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <div className="text-sm bg-surfaceLight px-3 py-1 rounded-full text-textMuted w-fit">
                  {exp.date}
                </div>
              </div>
              
              <ul className="list-disc list-inside text-textMuted mb-6 leading-relaxed text-justify">
                {exp.descriptions.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-medium bg-surfaceLight text-textMuted px-3 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
