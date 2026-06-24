import React from 'react';
import { SiReact, SiJavascript, SiHtml5, SiNodedotjs, SiPython, SiTailwindcss } from 'react-icons/si';
import { FiDatabase } from 'react-icons/fi';
import { FaTools, FaNetworkWired, FaMicrosoft, FaGoogle } from 'react-icons/fa';

const Skills = () => {
  const technicalSkills = [
    { name: "React.js", icon: <SiReact size={24} className="text-primary" /> },
    { name: "TailWind CSS", icon: <SiTailwindcss size={24} className="text-primary" /> },
    { name: "JavaScript", icon: <SiJavascript size={24} className="text-primary" /> },
    { name: "HTML / CSS", icon: <SiHtml5 size={24} className="text-primary" /> },
    { name: "Node.js", icon: <SiNodedotjs size={24} className="text-primary" /> },
    { name: "Python", icon: <SiPython size={24} className="text-primary" /> },
    { name: "MySQL", icon: <FiDatabase size={24} className="text-primary" /> },
    { name: "Firebase", icon: <FiDatabase size={24} className="text-primary" /> }
  ];

  const nonTechnicalSkills = [
    { name: "Hardware / Network Troubleshooting", icon: <FaTools size={24} className="text-primary" /> },
    { name: "Software Troubleshooting & Maintenance", icon: <FaTools size={24} className="text-primary" /> },
    { name: "Networking Fundamentals", icon: <FaNetworkWired size={24} className="text-primary" /> },
    { name: "Cybersecurity Fundamentals", icon: <FaNetworkWired size={24} className="text-primary" /> },
    { name: "Microsoft Office Tools", icon: <FaMicrosoft size={24} className="text-primary" /> },
    { name: "Excel Automation (Script)", icon: <FaMicrosoft size={24} className="text-primary" /> },
    { name: "WiFi Configurations & Cabling Management", icon: <FaNetworkWired size={24} className="text-primary" /> },
    { name: "AI Tools", icon: <FaTools size={24} className="text-primary" /> },
    { name: "Google Suite (Drive, Calendar, Outlook)", icon: <FaGoogle size={24} className="text-primary" /> }
  ];

  return (
    <section id="skills" className="space-y-12">
      {/* Technical Stack */}
      <div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <p className="text-primary text-xs font-bold tracking-widest uppercase mb-2">What I know</p>
            <h2 className="text-4xl font-bold text-textMain">Technical Stack</h2>
          </div>
          <p className="text-textMuted text-sm md:text-right max-w-sm">
            From UI to databases and data analytics — a versatile toolkit for full-stack product development.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {technicalSkills.map((skill, idx) => (
            <div key={idx} className="glass-panel p-6 flex items-center gap-4 group hover:border-primary/50 transition-colors">
              <div className="bg-surfaceLight p-3 rounded-xl group-hover:bg-primary/10 transition-colors">
                {skill.icon}
              </div>
              <span className="font-bold text-textMain text-lg">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Non-Technical Stack */}
      <div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <p className="text-primary text-xs font-bold tracking-widest uppercase mb-2">Other Skills</p>
            <h2 className="text-4xl font-bold text-textMain">Technical Skill</h2>
          </div>
          <p className="text-textMuted text-sm md:text-right max-w-sm">
            Practical IT support, troubleshooting, and productivity tools that strengthen business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {nonTechnicalSkills.map((skill, idx) => (
            <div key={idx} className="glass-panel p-6 flex items-center gap-4 group hover:border-primary/50 transition-colors">
              <div className="bg-surfaceLight p-3 rounded-xl group-hover:bg-primary/10 transition-colors">
                {skill.icon}
              </div>
              <span className="font-bold text-textMain text-lg">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
