import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import LatestPosts from './components/LatestPosts';
import Testimonials from './components/Testimonials';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-textMuted font-sans">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-32">
        <Hero />
        
        <Skills />
        <Projects />
        
        <Experience />
        <Education />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <LatestPosts />
          <Testimonials />
        </div>
        
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;