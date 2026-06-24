import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Alex delivered a clean, well-documented codebase and communicated proactively. Would absolutely hire again.",
      name: "Marcus T.",
      role: "Startup Founder",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
    },
    {
      text: "Rare combo of technical skill and business thinking. Alex's dashboard work directly influenced our Q3 strategy.",
      name: "Priya M.",
      role: "Product Manager, TechCore",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
    }
  ];

  return (
    <section className="space-y-8">
      <div>
        <p className="text-primary text-xs font-bold tracking-widest uppercase mb-2">Social Proof</p>
        <h2 className="text-4xl font-bold text-textMain">Testimonials</h2>
      </div>

      <div className="space-y-4">
        {testimonials.map((item, index) => (
          <div key={index} className="glass-panel p-8 space-y-6">
            <p className="text-textMuted italic leading-relaxed">
              "{item.text}"
            </p>
            <div className="flex items-center gap-4">
              <img 
                src={item.avatar} 
                alt={item.name} 
                className="w-12 h-12 rounded-full object-cover border border-surfaceLight"
              />
              <div>
                <h4 className="text-textMain font-bold">{item.name}</h4>
                <p className="text-sm text-textMuted">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;