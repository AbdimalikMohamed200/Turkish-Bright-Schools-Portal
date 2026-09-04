import React from 'react';
import { BookOpen, Phone, ArrowRight, MapPin } from 'lucide-react';

interface CtaSectionProps {
  onStartEnrollment: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onStartEnrollment }) => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 bg-primary text-center flex flex-col items-center justify-center gap-6 relative overflow-hidden">
      {/* Center Icon */}
      <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-inner">
        <BookOpen className="w-9 h-9 text-tertiary-fixed" />
      </div>

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-on-primary font-h2 tracking-tight max-w-2xl">
        Start with the right information
      </h2>

      {/* Subtitle */}
      <p className="text-base sm:text-lg text-primary-fixed-dim max-w-md mx-auto leading-relaxed">
        Contact Turkish Bright Schools to confirm current admissions, programme availability, school hours, and the nearest Mogadishu location.
      </p>

      {/* Action Button */}
      <div className="w-full max-w-md mt-2">
        <button
          onClick={onStartEnrollment}
          id="cta-start-enrollment-btn"
          className="w-full bg-tertiary-fixed text-on-tertiary-fixed font-bold text-lg py-4 px-8 rounded-xl shadow-[0px_12px_32px_rgba(0,0,0,0.25)] hover:bg-tertiary-fixed-dim active:scale-98 transition-all flex items-center justify-center gap-3 cursor-pointer group"
        >
          <span>Start Enrollment</span>
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Trust micro-badges */}
      <div className="flex flex-wrap items-center justify-center gap-6 mt-4 text-xs font-medium text-primary-fixed-dim">
        <div className="flex items-center gap-1.5">
          <MapPin className="w-4 h-4 text-secondary-fixed" />
          <span>Hodan and Daarusalaam locations</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Phone className="w-4 h-4 text-tertiary-fixed" />
          <span>Call or WhatsApp admissions</span>
        </div>
      </div>
    </section>
  );
};
