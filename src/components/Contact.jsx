import React from 'react';
import { Mail } from 'lucide-react';
import { FiLinkedin, FiGithub } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="space-y-8">
      <div>
        <p className="text-primary text-xs font-bold tracking-widest uppercase mb-2">Let's Talk</p>
        <h2 className="text-4xl font-bold text-textMain">Get In Touch</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12">
        <div className="space-y-8">
        <p className="text-textMuted text-sm max-w-md text-justify leading-relaxed">
  I’m actively seeking opportunities in full‑stack engineering, IT support, and customer service. 
  Whether it’s joining a growth‑stage company, collaborating on freelance projects, or connecting 
  for professional networking, I’m open to meaningful conversations. Let’s talk about how my skills 
  in web development, troubleshooting, and client support can contribute to your team’s success.
</p>
          <div className="space-y-4">
            <a href="mailto:alex.rivera@email.com" className="flex items-center gap-4 text-textMuted hover:text-primary transition-colors group">
              <div className="bg-surfaceLight p-3 rounded-xl group-hover:bg-primary/10 transition-colors">
                <Mail size={20} className="group-hover:text-primary" />
              </div>
              <span>acupanvincent2004@gmail.com</span>
            </a>
            
            <a href="#" className="flex items-center gap-4 text-textMuted hover:text-primary transition-colors group">
              <div className="bg-surfaceLight p-3 rounded-xl group-hover:bg-primary/10 transition-colors">
                <FiLinkedin size={20} className="group-hover:text-primary" />
              </div>
              <span>www.linkedin.com/in/vincent-acupan-34319431a</span>
            </a>
            
            <a href="#" className="flex items-center gap-4 text-textMuted hover:text-primary transition-colors group">
              <div className="bg-surfaceLight p-3 rounded-xl group-hover:bg-primary/10 transition-colors">
                <FiGithub size={20} className="group-hover:text-primary" />
              </div>
              <span>https://github.com/acupanvincent2004-crypto</span>
            </a>
          </div>
        </div>

        <div className="glass-panel p-8">
          <form className="space-y-6">
            <div classalexriveraName="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-textMuted font-medium">Name</label>
                <input 
                  type="text" 
                  placeholder="Your full name" 
                  className="w-full bg-surfaceLight border border-surfaceLight rounded-lg px-4 py-3 text-textMain placeholder:text-textMuted/50 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-textMuted font-medium">Email</label>
                <input 
                  type="email" 
                  placeholder="you@company.com" 
                  className="w-full bg-surfaceLight border border-surfaceLight rounded-lg px-4 py-3 text-textMain placeholder:text-textMuted/50 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-textMuted font-medium">Subject</label>
              <input 
                type="text" 
                placeholder="e.g. Engineering role at your company" 
                className="w-full bg-surfaceLight border border-surfaceLight rounded-lg px-4 py-3 text-textMain placeholder:text-textMuted/50 focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-textMuted font-medium">Message</label>
              <textarea 
                rows={5}
                placeholder="Tell me about the opportunity or project..." 
                className="w-full bg-surfaceLight border border-surfaceLight rounded-lg px-4 py-3 text-textMain placeholder:text-textMuted/50 focus:outline-none focus:border-primary transition-colors resize-none"
              ></textarea>
            </div>

            <button type="button" className="w-full bg-primary text-background font-bold py-4 rounded-lg hover:opacity-90 transition-opacity">
              Send Message via EmailJS
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;