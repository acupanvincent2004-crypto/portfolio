import React from 'react';
import { Mail } from 'lucide-react';
import { FiFacebook, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="border-t border-surfaceLight mt-32 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-textMain font-bold">Vincent C. Acupan</h3>
          <p className="text-sm text-textMuted">© 2025 · Built with React & Tailwind</p>
        </div>

        <div className="flex items-center gap-4">
          {/* GitHub */}
          <a 
            href="https://github.com/acupanvincent2004-crypto" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-surfaceLight p-2 rounded-lg text-textMuted hover:text-primary hover:bg-primary/10 transition-colors"
          >
            <FiGithub size={18} />
          </a>

          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/vincent-acupan-34319431a/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-surfaceLight p-2 rounded-lg text-textMuted hover:text-primary hover:bg-primary/10 transition-colors"
          >
            <FiLinkedin size={18} />
          </a>

          {/* Facebook */}
          <a 
            href="https://www.facebook.com/vincent.acupan.2024" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-surfaceLight p-2 rounded-lg text-textMuted hover:text-primary hover:bg-primary/10 transition-colors"
          >
            <FiFacebook size={18} />
          </a>

          {/* Email */}
          <a 
            href="mailto:acupanvincent2004@gmail.com" 
            className="bg-surfaceLight p-2 rounded-lg text-textMuted hover:text-primary hover:bg-primary/10 transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
