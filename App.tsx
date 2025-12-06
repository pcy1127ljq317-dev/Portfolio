
import React, { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import ProjectShowcase from './components/ProjectShowcase';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';
import { Project } from './types';
import { AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setSelectedProject(null);
  };

  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-[#4ade80] selection:text-black">
      <CustomCursor />
      
      {/* Fixed Background Mesh */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-mesh bg-no-repeat bg-contain blur-[100px] animate-pulse" />
      </div>

      <AnimatePresence mode="wait">
        {selectedProject ? (
          <ProjectDetail 
            key="detail" 
            project={selectedProject} 
            onBack={handleBackToHome} 
          />
        ) : (
          <div key="home" className="relative z-10">
            <Hero />
            <About />
            <ProjectShowcase onProjectSelect={handleProjectSelect} />
            <Gallery />
            <Contact />
          </div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default App;
