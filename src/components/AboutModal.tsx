import React from 'react';
import { X, Award, Shield, Users, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';
import { CLASSROOM_IMAGE } from '../data/schoolData';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAdmissions: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  onOpenAdmissions,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-surface rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl border border-outline-variant/40 my-6 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-primary text-white p-5 sm:p-6 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 bg-secondary/80 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
            <HeartHandshake className="w-3.5 h-3.5 text-tertiary-fixed" />
            <span>Turkish-Somali Friendship & Academic Alliance</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold font-h3 text-white">
            About Turkish Bright Schools
          </h2>
          <p className="text-xs sm:text-sm text-primary-fixed-dim mt-1">
            Mogadishu's premier K-12 learning institution since 2009
          </p>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto flex flex-col gap-6">
          <div className="rounded-xl overflow-hidden h-[200px] sm:h-[260px] relative">
            <img
              src={CLASSROOM_IMAGE}
              alt="Classroom and students at Turkish Bright Schools"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 text-white">
              <span className="text-xs font-bold uppercase tracking-wider text-tertiary-fixed">Inspiring Future Leaders</span>
              <p className="text-sm font-semibold">Educating over 2,500 students across two campuses</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-primary mb-2">Our Mission & Educational Vision</h3>
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
              Turkish Bright Schools (TBS) was founded with the vision of offering the youth of Somalia access to gold-standard international education without having to leave their homeland. We fuse the scientific discipline and pedagogical depth of the Turkish schooling model with the ethical traditions, spiritual roots, and vibrant cultural heritage of Somalia.
            </p>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/40">
              <Award className="w-6 h-6 text-secondary mb-2" />
              <h4 className="font-bold text-sm text-primary">Academic Rigor</h4>
              <p className="text-xs text-on-surface-variant mt-1">
                Rigorous preparation for Turkish Universities (YÖS) and international Cambridge certifications.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/40">
              <Shield className="w-6 h-6 text-secondary mb-2" />
              <h4 className="font-bold text-sm text-primary">Safety & Integrity</h4>
              <p className="text-xs text-on-surface-variant mt-1">
                Secure, supportive learning campuses with strict safety protocols and character-first mentorship.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/40">
              <Users className="w-6 h-6 text-secondary mb-2" />
              <h4 className="font-bold text-sm text-primary">Global Alumni</h4>
              <p className="text-xs text-on-surface-variant mt-1">
                Graduates thriving in medicine, engineering, diplomacy, and enterprise in Turkey, Europe, and Somalia.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-primary mb-2">The Turkish-Somali Educational Bridge</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-3">
              Through direct institutional connections with prestigious universities in Istanbul, Ankara, and Konya, our top high school graduates receive dedicated guidance and high eligibility rates for Türkiye Bursları (Turkish Government Scholarships), allowing them to pursue medicine, civil engineering, computer science, and aviation.
            </p>
            <div className="flex flex-col gap-2 text-xs sm:text-sm text-on-surface">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                <span>Dual-track certification meeting Somali Ministry of Education & international criteria</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                <span>Native Turkish educators working alongside distinguished Somali scholars</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                <span>Extracurricular robotics clubs, Turkish cultural exchange, and sports tournaments</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-surface-container-low border-t border-outline-variant/40 flex items-center justify-between gap-3 shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2.5 border border-outline-variant text-primary font-semibold text-sm rounded-xl hover:bg-surface-container transition-colors cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenAdmissions();
            }}
            className="px-6 py-2.5 bg-tertiary-fixed text-on-tertiary-fixed font-bold text-sm rounded-xl hover:bg-tertiary-fixed-dim transition-all shadow-sm flex items-center gap-2 cursor-pointer"
          >
            <span>Enroll for Academic Year</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
