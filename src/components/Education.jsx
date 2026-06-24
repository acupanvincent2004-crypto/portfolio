import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const coursework = [
    "Data Structures & Algorithms",
    "Web Application Development",
    "Machine Learning Fundamentals",
    "Financial Analytics",
    "Database Management Systems",
    "Business Intelligence & Analytics",
    "Software Engineering Principles",
    "UX Design & Prototyping"
  ];

  return (
    <section id="education" className="space-y-8">
      <div>
        <p className="text-primary text-xs font-bold tracking-widest uppercase mb-2">My Background</p>
        <h2 className="text-4xl font-bold text-textMain">Education</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-panel p-8 flex items-start gap-6">
          <div className="bg-primary p-4 rounded-2xl text-background shrink-0">
            <GraduationCap size={32} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-textMain mb-1">BS in Information Technology</h3>
            <p className="text-primary font-medium mb-2">Major in Service Management</p>
            <p className="text-textMuted mb-6">Batangas State University TNEU · Graduated August 2026</p>
            
            <div className="flex gap-3">
              <span className="bg-surfaceLight text-textMain px-3 py-1 rounded-md text-sm font-medium border border-surfaceLight">
                GPA: 3.7
              </span>
              <span className="bg-surfaceLight text-textMain px-3 py-1 rounded-md text-sm font-medium border border-surfaceLight">
                Dean's List
              </span>
            </div>
          </div>
        </div>

        <div className="glass-panel p-8">
          <h4 className="text-lg font-bold text-textMain mb-6">Relevant Coursework</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
            {coursework.map((course, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-textMuted">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                {course}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;