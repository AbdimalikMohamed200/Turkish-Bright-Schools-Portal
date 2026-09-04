import React from 'react';
import { MapPin, Phone, Clock, ArrowUp, ExternalLink } from 'lucide-react';
import {
  CAMPUS_LOCATIONS,
  OFFICIAL_FACEBOOK_URL,
  SCHOOL_HOURS,
  SCHOOL_LOGO,
  SCHOOL_PHONE_PRIMARY,
  SCHOOL_PHONE_SECONDARY,
} from '../data/schoolData';

interface FooterProps {
  onOpenAdmissions: () => void;
  onOpenCurriculum: () => void;
  onOpenAbout: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmissions, onOpenCurriculum, onOpenAbout }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact-section" className="bg-primary w-full rounded-t-2xl px-4 sm:px-6 md:px-12 py-12 md:py-16 text-on-primary mt-auto relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-white p-1 flex items-center justify-center overflow-hidden">
              <img src={SCHOOL_LOGO} alt="Turkish Bright Schools logo" className="w-full h-full object-contain" />
            </div>
            <span className="font-h3 text-xl sm:text-2xl font-bold text-tertiary-fixed">Turkish Bright Schools</span>
          </div>
          <p className="text-on-primary/80 text-sm leading-relaxed">
            Committed to excellence through academic learning, Quranic education, Islamic manners, and student development.
          </p>
          <div className="flex items-start gap-2 text-xs text-primary-fixed-dim mt-1">
            <Clock className="w-4 h-4 text-tertiary-fixed shrink-0" />
            <span>{SCHOOL_HOURS}</span>
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <h4 className="font-h4 text-base sm:text-lg font-bold text-white mb-2">Explore</h4>
          <button onClick={onOpenAdmissions} className="text-left text-on-primary/80 hover:text-tertiary-fixed transition-colors text-sm cursor-pointer py-1">Admissions</button>
          <button onClick={onOpenCurriculum} className="text-left text-on-primary/80 hover:text-tertiary-fixed transition-colors text-sm cursor-pointer py-1">Learning Pathways</button>
          <button onClick={onOpenAbout} className="text-left text-on-primary/80 hover:text-tertiary-fixed transition-colors text-sm cursor-pointer py-1">About the School</button>
          <a href={OFFICIAL_FACEBOOK_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-on-primary/80 hover:text-tertiary-fixed transition-colors text-sm py-1 w-max">
            <span>Official Facebook</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="flex flex-col gap-2.5">
          <h4 className="font-h4 text-base sm:text-lg font-bold text-white mb-2">Mogadishu Locations</h4>
          {CAMPUS_LOCATIONS.map((location) => (
            <div key={location.name} className="flex items-start gap-2 text-on-primary/80 text-xs sm:text-sm">
              <MapPin className="w-4 h-4 text-secondary-fixed shrink-0 mt-0.5" />
              <span><strong className="text-white">{location.name}</strong><br />{location.address}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2.5">
          <h4 className="font-h4 text-base sm:text-lg font-bold text-white mb-2">Contact Admissions</h4>
          <a href={`tel:${SCHOOL_PHONE_PRIMARY.replace(/\s/g, '')}`} className="text-on-primary/80 hover:text-white text-xs sm:text-sm flex items-center gap-2">
            <Phone className="w-4 h-4 text-secondary-fixed shrink-0" />
            <span>{SCHOOL_PHONE_PRIMARY}</span>
          </a>
          <a href={`tel:${SCHOOL_PHONE_SECONDARY.replace(/\s/g, '')}`} className="text-on-primary/80 hover:text-white text-xs sm:text-sm flex items-center gap-2">
            <Phone className="w-4 h-4 text-secondary-fixed shrink-0" />
            <span>{SCHOOL_PHONE_SECONDARY}</span>
          </a>
          <span className="text-[11px] font-semibold text-tertiary-fixed bg-white/10 px-2 py-1 rounded w-max">Call or WhatsApp</span>
        </div>

        <div className="col-span-1 sm:col-span-2 md:col-span-4 mt-8 pt-6 border-t border-on-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="text-on-primary/60 text-xs">Turkish Bright Schools, Mogadishu. All rights reserved.</p>
          <button onClick={scrollToTop} aria-label="Back to top" className="inline-flex items-center gap-1.5 text-xs text-primary-fixed-dim hover:text-white transition-colors cursor-pointer">
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
