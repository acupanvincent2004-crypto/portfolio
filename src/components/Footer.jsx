import React from 'react';
import { Mail } from 'lucide-react';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="border-t border-surfaceLight mt-32 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-textMain font-bold">Vincent C. Acupan</h3>
          <p className="text-sm text-textMuted">© 2025 · Built with React & Tailwind</p>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="bg-surfaceLight p-2 rounded-lg text-textMuted hover:text-primary hover:bg-primary/10 transition-colors">
            <FiGithub size={18} />
          </a>
          <a href="#" className="bg-surfaceLight p-2 rounded-lg text-textMuted hover:text-primary hover:bg-primary/10 transition-colors">
            <FiLinkedin size={18} />
          </a>
          <a href="#" className="bg-surfaceLight p-2 rounded-lg text-textMuted hover:text-primary hover:bg-primary/10 transition-colors">
            <FiTwitter size={18} />
          </a>
          <a href="#" className="bg-surfaceLight p-2 rounded-lg text-textMuted hover:text-primary hover:bg-primary/10 transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;