import React from 'react';
import { X, Award, Shield, Users, HeartHandshake, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';
import { SCHOOL_LOGO, OFFICIAL_FACEBOOK_URL, SCHOOL_PHONE_PRIMARY, SCHOOL_PHONE_SECONDARY } from '../data/schoolData';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAdmissions: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose, onOpenAdmissions }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-surface rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl border border-outline-variant/40 my-6 max-h-[90vh] flex flex-col">
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
            <span>Committed to Excellence</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold font-h3 text-white">About Turkish Bright Schools</h2>
          <p className="text-xs sm:text-sm text-primary-fixed-dim mt-1">Mogadishu, Somalia</p>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto flex flex-col gap-6">
          <div className="rounded-xl overflow-hidden h-[200px] sm:h-[260px] relative bg-white border border-outline-variant/40 flex items-center justify-center">
            <img src={SCHOOL_LOGO} alt="Official Turkish Bright Schools logo" className="w-[62%] h-[82%] object-contain" />
            <div className="absolute bottom-3 left-4 right-4 bg-primary/95 p-3 rounded-lg text-white">
              <span className="text-xs font-bold uppercase tracking-wider text-tertiary-fixed">School identity</span>
              <p className="text-sm font-semibold">Academic and religious learning in Mogadishu</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-primary mb-2">Our Educational Focus</h3>
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
              Turkish Bright Schools presents itself publicly as a school committed to excellence in Mogadishu. Its updates highlight academic education, Quranic learning, Islamic manners, creativity, and student development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/40">
              <Award className="w-6 h-6 text-secondary mb-2" />
              <h4 className="font-bold text-sm text-primary">Academic Learning</h4>
              <p className="text-xs text-on-surface-variant mt-1">Classroom learning and support for students as they progress through their school years.</p>
            </div>

            <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/40">
              <Shield className="w-6 h-6 text-secondary mb-2" />
              <h4 className="font-bold text-sm text-primary">Quran & Manners</h4>
              <p className="text-xs text-on-surface-variant mt-1">Religious learning and Islamic manners are presented alongside academic education.</p>
            </div>

            <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/40">
              <Users className="w-6 h-6 text-secondary mb-2" />
              <h4 className="font-bold text-sm text-primary">Student Development</h4>
              <p className="text-xs text-on-surface-variant mt-1">Activities help students grow in confidence, creativity, teamwork, and good conduct.</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-primary mb-2">Locations & Contact</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-3">
              The school lists locations in Hodan and Daarusalaam. Contact the admissions team directly for current intake, grade availability, and programme details.
            </p>
            <div className="flex flex-col gap-2 text-xs sm:text-sm text-on-surface">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                <span>Hodan: Wadada Cabdiqasim and behind Hodan Hospital</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                <span>Daarusalaam: near Buruuji</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                <span>Phone: {SCHOOL_PHONE_PRIMARY} / {SCHOOL_PHONE_SECONDARY}</span>
              </div>
            </div>
          </div>

          <a
            href={OFFICIAL_FACEBOOK_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-secondary font-semibold text-sm hover:text-primary transition-colors w-max"
          >
            <span>View the official Facebook page</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="p-4 sm:p-6 bg-surface-container-low border-t border-outline-variant/40 flex items-center justify-between gap-3 shrink-0">
          <button onClick={onClose} className="px-5 py-2.5 border border-outline-variant text-primary font-semibold text-sm rounded-xl hover:bg-surface-container transition-colors cursor-pointer">
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenAdmissions();
            }}
            className="px-6 py-2.5 bg-tertiary-fixed text-on-tertiary-fixed font-bold text-sm rounded-xl hover:bg-tertiary-fixed-dim transition-all shadow-sm flex items-center gap-2 cursor-pointer"
          >
            <span>Ask About Admissions</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
