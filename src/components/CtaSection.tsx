import React from 'react';
import { BookOpen, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface CtaSectionProps {
  onStartEnrollment: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onStartEnrollment }) => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 bg-primary text-center flex flex-col items-center justify-center gap-6 relative overflow-hidden">
      {/* Decorative background ambient glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-tertiary-fixed/15 rounded-full blur-3xl pointer-events-none" />

      {/* Center Icon */}
      <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-inner">
        <BookOpen className="w-9 h-9 text-tertiary-fixed" />
      </div>

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-on-primary font-h2 tracking-tight max-w-2xl">
        Ready to Shape Their Future?
      </h2>

      {/* Subtitle */}
      <p className="text-base sm:text-lg text-primary-fixed-dim max-w-md mx-auto leading-relaxed">
        Admissions are now open for the upcoming academic year. Secure a spot for your child today.
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
          <ShieldCheck className="w-4 h-4 text-secondary-fixed" />
          <span>Transparent Entrance Assessments</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-tertiary-fixed" />
          <span>Merit Scholarships Available</span>
        </div>
      </div>
    </section>
  );
};
