import React from 'react';
import { Award } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "SPARK Technical Training Program",
      date: "DICT Region IV-A · 2026"
    },
    {
      title: "Hardware & Software Repair Essentials Training",
      date: "DICT Region IV-A · 2026"
    },
    {
      title: "Network Fundamentals, Troubleshooting, and Basic Configuration",
      date: "DICT Region IV-A · 2026"
    },
    {
      title: "Network Support & Security",
      date: "DICT-ITU DTC Initiative · 2026"
    },
    {
      title: "Introduction to Modern AI",
      date: "DICT-ITU DTC Initiative · 2026"
    },
    {
      title: "English for IT 1 & 2",
      date: "Batangas State University · 2026"
    }
  ];

  return (
    <section className="space-y-8">
      <div>
        <p className="text-primary text-xs font-bold tracking-widest uppercase mb-2">Credentials</p>
        <h2 className="text-4xl font-bold text-textMain">Certificates</h2>
      </div>

      <div className="space-y-4">
        {certificates.map((cert, index) => (
          <div key={index} className="glass-panel p-6 flex items-center justify-between group hover:border-primary/50 transition-colors">
            <div>
              <h3 className="text-textMain font-bold mb-2 group-hover:text-primary transition-colors">{cert.title}</h3>
              <p className="text-sm text-textMuted">{cert.date}</p>
            </div>
            <Award className="text-textMuted group-hover:text-primary transition-colors" size={20} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
