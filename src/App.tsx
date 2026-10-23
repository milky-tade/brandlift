import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { ProjectMediaModal } from './components/ProjectMediaModal';
import type { ProjectItem } from './data/projects';

export const LandingPageContent: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleExploreWork = () => {
    const workElement = document.getElementById('work');
    if (workElement) {
      workElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Section A: Navigation */}
      <Navbar />

      <main style={{ flex: '1 0 auto' }}>
        {/* Section B: Hero */}
        <Hero onExploreWork={handleExploreWork} />

        {/* Section C: Featured Work / Portfolio (Primary Visual Focus) */}
        <Portfolio onSelectProject={(project) => setSelectedProject(project)} />

        {/* Section D: Services (Concise Capabilities Overview) */}
        <ServicesSection />

        {/* Section E: About NOIR Studio */}
        <AboutSection />

        {/* Section F: Final Call to Action */}
        <FinalCtaSection />
      </main>

      {/* Section G: Footer */}
      <Footer />

      {/* Interactive Media Lightbox & Video Player Modal */}
      <ProjectMediaModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Persistent Floating WhatsApp Action */}
      <WhatsAppFloatingButton />
    </div>
  );
};

export function App() {
  return (
    <ThemeProvider>
      <LandingPageContent />
    </ThemeProvider>
  );
}

export default App;
