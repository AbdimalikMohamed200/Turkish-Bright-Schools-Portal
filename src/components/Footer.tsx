import React, { useState } from 'react';
import { School, MapPin, Phone, Mail, Clock, Calendar, Award, Shield, ArrowUp } from 'lucide-react';
import { CAMPUS_LOCATIONS } from '../data/schoolData';

interface FooterProps {
  onOpenAdmissions: () => void;
  onOpenCurriculum: () => void;
  onOpenAbout: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenAdmissions,
  onOpenCurriculum,
  onOpenAbout,
}) => {
  const [activeModalInfo, setActiveModalInfo] = useState<'calendar' | 'scholarships' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer
        id="contact-section"
        className="bg-primary dark:bg-on-surface w-full rounded-t-2xl px-4 sm:px-6 md:px-12 py-12 md:py-16 text-on-primary font-body-md text-body-md mt-auto relative"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1: School Identity */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-tertiary-fixed">
                <School className="w-5 h-5" />
              </div>
              <span className="font-h3 text-xl sm:text-2xl font-bold text-tertiary-fixed">
                Turkish Bright Schools
              </span>
            </div>
            <p className="text-on-primary/80 text-sm leading-relaxed">
              Excellence in Education, Rooted in Values. Empowering Somali youth through gold-standard international learning frameworks.
            </p>
            <div className="flex items-center gap-2 text-xs text-primary-fixed-dim mt-1">
              <Clock className="w-4 h-4 text-tertiary-fixed" />
              <span>Saturday – Thursday: 7:30 AM – 4:00 PM</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-2.5">
            <h4 className="font-h4 text-base sm:text-lg font-bold text-white mb-2">
              Quick Links
            </h4>
            <button
              onClick={onOpenAdmissions}
              className="text-left text-on-primary/80 hover:text-tertiary-fixed transition-colors text-sm cursor-pointer py-1"
            >
              Admissions
            </button>
            <button
              onClick={() => setActiveModalInfo('calendar')}
              className="text-left text-on-primary/80 hover:text-tertiary-fixed transition-colors text-sm cursor-pointer py-1 flex items-center gap-1.5"
            >
              <span>Academic Calendar</span>
            </button>
            <button
              onClick={() => setActiveModalInfo('scholarships')}
              className="text-left text-on-primary/80 hover:text-tertiary-fixed transition-colors text-sm cursor-pointer py-1 flex items-center gap-1.5"
            >
              <span>Scholarships</span>
            </button>
            <button
              onClick={onOpenCurriculum}
              className="text-left text-on-primary/80 hover:text-tertiary-fixed transition-colors text-sm cursor-pointer py-1"
            >
              Curriculum Tracks
            </button>
            <button
              onClick={onOpenAbout}
              className="text-left text-on-primary/80 hover:text-tertiary-fixed transition-colors text-sm cursor-pointer py-1"
            >
              About Turkish Bright Schools
            </button>
          </div>

          {/* Column 3: Hodan Main Campus */}
          <div className="flex flex-col gap-2.5">
            <h4 className="font-h4 text-base sm:text-lg font-bold text-white mb-2">
              Hodan Main Campus
            </h4>
            <p className="text-on-primary/80 text-xs sm:text-sm flex items-start gap-2">
              <MapPin className="w-4 h-4 text-secondary-fixed shrink-0 mt-0.5" />
              <span>Digfeer Hospital Rd, Hodan District, Mogadishu</span>
            </p>
            <p className="text-on-primary/80 text-xs sm:text-sm flex items-center gap-2">
              <Phone className="w-4 h-4 text-secondary-fixed shrink-0" />
              <span>+252 61 700 1122</span>
            </p>
            <p className="text-on-primary/80 text-xs sm:text-sm flex items-center gap-2">
              <Mail className="w-4 h-4 text-secondary-fixed shrink-0" />
              <span>hodan@turkishbrightschools.so</span>
            </p>
            <span className="text-[11px] font-semibold text-tertiary-fixed bg-white/10 px-2 py-0.5 rounded w-max">
              High School & Secondary Academy
            </span>
          </div>

          {/* Column 4: Wadajir Campus */}
          <div className="flex flex-col gap-2.5">
            <h4 className="font-h4 text-base sm:text-lg font-bold text-white mb-2">
              Wadajir Campus
            </h4>
            <p className="text-on-primary/80 text-xs sm:text-sm flex items-start gap-2">
              <MapPin className="w-4 h-4 text-secondary-fixed shrink-0 mt-0.5" />
              <span>Airport Road, Medina Gate, Wadajir, Mogadishu</span>
            </p>
            <p className="text-on-primary/80 text-xs sm:text-sm flex items-center gap-2">
              <Phone className="w-4 h-4 text-secondary-fixed shrink-0" />
              <span>+252 61 700 1133</span>
            </p>
            <p className="text-on-primary/80 text-xs sm:text-sm flex items-center gap-2">
              <Mail className="w-4 h-4 text-secondary-fixed shrink-0" />
              <span>wadajir@turkishbrightschools.so</span>
            </p>
            <span className="text-[11px] font-semibold text-tertiary-fixed bg-white/10 px-2 py-0.5 rounded w-max">
              Kindergarten & Primary School
            </span>
          </div>

          {/* Bottom Bar */}
          <div className="col-span-1 sm:col-span-2 md:col-span-4 mt-8 pt-6 border-t border-on-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
            <p className="text-on-primary/60 text-xs">
              © 2024 Turkish Bright Schools Mogadishu. All rights reserved.
            </p>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="inline-flex items-center gap-1.5 text-xs text-primary-fixed-dim hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </footer>

      {/* Quick Calendar & Scholarship Modal */}
      {activeModalInfo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-surface rounded-2xl w-full max-w-lg p-6 shadow-2xl border border-outline-variant/40 animate-in fade-in">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                {activeModalInfo === 'calendar' ? (
                  <Calendar className="w-5 h-5 text-secondary" />
                ) : (
                  <Award className="w-5 h-5 text-tertiary-fixed" />
                )}
                <h3 className="font-bold text-lg text-primary">
                  {activeModalInfo === 'calendar' ? '2025-2026 Academic Calendar' : 'Scholarships & Financial Aid'}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalInfo(null)}
                className="p-1 rounded-full hover:bg-surface-container"
              >
                ✕
              </button>
            </div>

            {activeModalInfo === 'calendar' ? (
              <div className="text-xs sm:text-sm text-on-surface-variant flex flex-col gap-3">
                <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/40">
                  <span className="font-bold text-primary block">Term 1 (Fall Semester):</span>
                  <span>August 25, 2025 – December 18, 2025 (Midterm Exams: Oct 19-23)</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/40">
                  <span className="font-bold text-primary block">Term 2 (Spring Semester):</span>
                  <span>January 5, 2026 – May 28, 2026 (Annual Science Fair: March 14)</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/40">
                  <span className="font-bold text-primary block">Placement & Entrance Exams:</span>
                  <span>Hosted every Saturday during July and August 2025 at both campuses.</span>
                </div>
              </div>
            ) : (
              <div className="text-xs sm:text-sm text-on-surface-variant flex flex-col gap-3">
                <p>
                  Turkish Bright Schools is committed to ensuring high-achieving Somali students have access to top-tier education regardless of economic background:
                </p>
                <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/40">
                  <span className="font-bold text-primary block">1. Academic Merit Scholarships:</span>
                  <span>Up to 100% tuition coverage for top 5% scorers on our annual entrance assessment.</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/40">
                  <span className="font-bold text-primary block">2. Türkiye Bursları Pathway:</span>
                  <span>Full undergraduate scholarship preparation for high school seniors studying in Turkey.</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/40">
                  <span className="font-bold text-primary block">3. Sibling Discounts:</span>
                  <span>15% deduction for families enrolling two or more siblings concurrently.</span>
                </div>
              </div>
            )}

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setActiveModalInfo(null)}
                className="px-5 py-2 bg-primary text-white font-semibold text-xs rounded-xl hover:bg-primary-container"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
