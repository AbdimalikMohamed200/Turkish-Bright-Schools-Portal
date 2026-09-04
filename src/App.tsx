import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { AboutSection } from './components/AboutSection';
import { AcademicPrograms } from './components/AcademicPrograms';
import { FacilitiesSection } from './components/FacilitiesSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { AdmissionsModal } from './components/AdmissionsModal';
import { CurriculumModal } from './components/CurriculumModal';
import { AboutModal } from './components/AboutModal';
import { WhatsAppChat } from './components/WhatsAppChat';

export default function App() {
  const [admissionsOpen, setAdmissionsOpen] = useState(false);
  const [curriculumOpen, setCurriculumOpen] = useState(false);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [selectedProgramId, setSelectedProgramId] = useState<string>('high-school');
  const [admissionLevel, setAdmissionLevel] = useState<string>('primary');

  const handleOpenAdmissions = (level?: string) => {
    if (level) {
      setAdmissionLevel(level);
    }
    setAdmissionsOpen(true);
  };

  const handleViewCurriculum = (programId: string) => {
    setSelectedProgramId(programId);
    setCurriculumOpen(true);
  };

  const handleExplorePrograms = () => {
    const programsEl = document.getElementById('programs-section');
    if (programsEl) {
      programsEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      setCurriculumOpen(true);
    }
  };

  return (
    <div className="bg-background text-on-background font-body min-h-screen flex flex-col pt-[80px]">
      {/* Top Fixed Header */}
      <Navbar
        onOpenAdmissions={() => handleOpenAdmissions()}
        onOpenCurriculum={() => handleViewCurriculum('high-school')}
        onOpenAbout={() => setAboutModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow flex flex-col">
        {/* Hero Section */}
        <Hero
          onOpenAdmissions={() => handleOpenAdmissions('high_school')}
          onExplorePrograms={handleExplorePrograms}
        />

        {/* Quick Stats Horizontal Bar */}
        <StatsBar />

        {/* Legacy of Excellence About Section */}
        <AboutSection onOpenAbout={() => setAboutModalOpen(true)} />

        {/* Academic Programs (Kindergarten, Primary, High School) */}
        <AcademicPrograms onViewCurriculum={handleViewCurriculum} />

        {/* Campus Facilities & Laboratories */}
        <FacilitiesSection onOpenAdmissions={() => handleOpenAdmissions()} />

        {/* Ready to Shape Their Future Call To Action */}
        <CtaSection onStartEnrollment={() => handleOpenAdmissions()} />
      </main>

      {/* Floating WhatsApp Quick Inquiry Widget */}
      <WhatsAppChat />

      {/* Footer */}
      <Footer
        onOpenAdmissions={() => handleOpenAdmissions()}
        onOpenCurriculum={() => handleViewCurriculum('high-school')}
        onOpenAbout={() => setAboutModalOpen(true)}
      />

      {/* Interactive Modals */}
      <AdmissionsModal
        isOpen={admissionsOpen}
        onClose={() => setAdmissionsOpen(false)}
        initialLevel={admissionLevel}
      />

      <CurriculumModal
        isOpen={curriculumOpen}
        onClose={() => setCurriculumOpen(false)}
        selectedProgramId={selectedProgramId}
        onApplyForProgram={(levelId) => {
          let lvl = 'primary';
          if (levelId === 'kindergarten') lvl = 'kindergarten';
          if (levelId === 'high-school') lvl = 'high_school';
          handleOpenAdmissions(lvl);
        }}
      />

      <AboutModal
        isOpen={aboutModalOpen}
        onClose={() => setAboutModalOpen(false)}
        onOpenAdmissions={() => handleOpenAdmissions()}
      />
    </div>
  );
}
