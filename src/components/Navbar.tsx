import React, { useState } from 'react';
import { Menu, X, ArrowRight, Phone, MapPin, Sparkles } from 'lucide-react';
import { SCHOOL_LOGO, SCHOOL_PHONE_PRIMARY } from '../data/schoolData';

interface NavbarProps {
  onOpenAdmissions: () => void;
  onOpenCurriculum: (programId?: string) => void;
  onOpenAbout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAdmissions,
  onOpenCurriculum,
  onOpenAbout,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="bg-surface/90 backdrop-blur-md dark:bg-inverse-surface/90 fixed top-0 w-full z-40 border-b border-outline-variant/30 shadow-xs">
        <div className="flex justify-between items-center h-[80px] px-4 md:px-8 max-w-7xl mx-auto w-full">
          {/* Brand */}
          <a
            href="#"
            className="flex items-center gap-2 group transition-transform active:scale-95"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-10 h-10 rounded-xl bg-white p-0.5 flex items-center justify-center shadow-xs border border-outline-variant/40 group-hover:border-secondary transition-colors overflow-hidden">
              <img src={SCHOOL_LOGO} alt="Turkish Bright Schools logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg md:text-xl text-primary leading-tight tracking-tight">
                Turkish Bright Schools
              </span>
              <span className="text-[11px] font-semibold text-secondary uppercase tracking-widest hidden sm:block">
                Mogadishu, Somalia
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-[15px] font-semibold text-on-surface-variant">
            <button
              onClick={() => scrollToSection('about-section')}
              className="hover:text-primary transition-colors cursor-pointer py-1"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('programs-section')}
              className="hover:text-primary transition-colors cursor-pointer py-1"
            >
              Academic Programs
            </button>
            <button
              onClick={() => scrollToSection('facilities-section')}
              className="hover:text-primary transition-colors cursor-pointer py-1"
            >
              Campus Life
            </button>
            <button
              onClick={() => onOpenCurriculum('high-school')}
              className="hover:text-primary transition-colors cursor-pointer py-1 flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5 text-secondary" />
              Curriculum
            </button>
            <button
              onClick={() => scrollToSection('contact-section')}
              className="hover:text-primary transition-colors cursor-pointer py-1"
            >
              Campuses
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenAdmissions}
              id="header-apply-btn"
              className="hidden sm:inline-flex items-center gap-1.5 bg-tertiary-fixed text-on-tertiary-fixed font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-tertiary-fixed-dim transition-all shadow-xs hover:shadow-md active:scale-95"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              aria-label="Toggle navigation menu"
              className="text-primary p-2 focus:ring-2 focus:ring-tertiary-fixed rounded-full hover:bg-surface-container transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-7 h-7 text-primary" />
              ) : (
                <Menu className="w-7 h-7 text-primary" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[80px] z-30 bg-black/40 backdrop-blur-xs transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-surface border-b border-outline-variant/40 shadow-xl px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-3 text-base font-semibold text-on-surface">
              <button
                onClick={() => scrollToSection('about-section')}
                className="text-left py-2.5 px-3 rounded-lg hover:bg-surface-container-low text-primary flex items-center justify-between"
              >
                <span>About Our School</span>
                <ArrowRight className="w-4 h-4 text-outline" />
              </button>
              <button
                onClick={() => scrollToSection('programs-section')}
                className="text-left py-2.5 px-3 rounded-lg hover:bg-surface-container-low text-primary flex items-center justify-between"
              >
                <span>Academic Programs</span>
                <ArrowRight className="w-4 h-4 text-outline" />
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCurriculum();
                }}
                className="text-left py-2.5 px-3 rounded-lg hover:bg-surface-container-low text-primary flex items-center justify-between"
              >
                <span>Detailed Curriculum & Syllabus</span>
                <span className="text-xs bg-secondary/15 text-secondary font-bold px-2 py-0.5 rounded-full">
                  Detailed
                </span>
              </button>
              <button
                onClick={() => scrollToSection('facilities-section')}
                className="text-left py-2.5 px-3 rounded-lg hover:bg-surface-container-low text-primary flex items-center justify-between"
              >
                <span>Learning & Activities</span>
                <ArrowRight className="w-4 h-4 text-outline" />
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAbout();
                }}
                className="text-left py-2.5 px-3 rounded-lg hover:bg-surface-container-low text-primary flex items-center justify-between"
              >
                <span>About the School</span>
                <ArrowRight className="w-4 h-4 text-outline" />
              </button>
              <button
                onClick={() => scrollToSection('contact-section')}
                className="text-left py-2.5 px-3 rounded-lg hover:bg-surface-container-low text-primary flex items-center justify-between"
              >
                <span>Locations (Hodan & Daarusalaam)</span>
                <MapPin className="w-4 h-4 text-outline" />
              </button>
            </div>

            <div className="pt-4 border-t border-outline-variant/30 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmissions();
                }}
                className="w-full bg-tertiary-fixed text-on-tertiary-fixed font-bold py-3.5 px-4 rounded-xl shadow-md hover:bg-tertiary-fixed-dim transition-colors flex items-center justify-center gap-2"
              >
                <span>Start Admissions Enrollment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-between px-2 text-xs text-on-surface-variant">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-secondary" />
                  {SCHOOL_PHONE_PRIMARY}
                </span>
                <span className="text-secondary font-medium">Mogadishu, Somalia</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
