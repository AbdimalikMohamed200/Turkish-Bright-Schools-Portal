import React from 'react';
import { FlaskConical, BookOpen, MonitorPlay, Trophy, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { FACILITIES } from '../data/schoolData';

interface FacilitiesSectionProps {
  onOpenAdmissions: () => void;
}

export const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({ onOpenAdmissions }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FlaskConical':
        return <FlaskConical className="w-6 h-6 text-secondary" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-secondary" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-secondary" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-secondary" />;
      case 'MonitorPlay':
        return <MonitorPlay className="w-6 h-6 text-secondary" />;
      case 'Trophy':
      default:
        return <Trophy className="w-6 h-6 text-secondary" />;
    }
  };

  return (
    <section id="facilities-section" className="py-12 md:py-16 px-4 sm:px-6 md:px-12 bg-surface-container-low border-y border-outline-variant/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded-full mb-2">
              <span>School Life & Values</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary font-h3">
              Learning beyond the classroom
            </h2>
          </div>
          <p className="text-sm sm:text-base text-on-surface-variant max-w-md">
            Turkish Bright Schools describes a balanced school experience built around academic learning, Quranic education, Islamic manners, creativity, and student confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FACILITIES.map((facility, index) => (
            <div
              key={index}
              className="bg-surface p-6 rounded-2xl border border-outline-variant/50 shadow-xs hover:shadow-lg hover:border-secondary/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {getIcon(facility.icon)}
                </div>
                <span className="text-[11px] font-bold text-secondary tracking-wider uppercase">
                  {facility.tag}
                </span>
                <h3 className="font-bold text-lg text-primary mt-1 mb-2 font-h4">
                  {facility.title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {facility.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-outline-variant/30 flex items-center gap-2 text-xs text-primary font-semibold">
                <CheckCircle2 className="w-4 h-4 text-secondary" />
                <span>Reflected in the school updates</span>
              </div>
            </div>
          ))}
        </div>

        {/* Campus Atmosphere Banner */}
        <div className="mt-8 bg-gradient-to-r from-primary to-primary-container text-white p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="flex flex-col gap-2 text-center sm:text-left">
            <span className="text-tertiary-fixed font-bold text-xs uppercase tracking-widest">
              Visit & Admissions
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-h3">
              Find the right location for your family
            </h3>
            <p className="text-primary-fixed-dim text-sm max-w-xl">
              Contact the school to confirm the current intake, programme details, and the location most convenient for you.
            </p>
          </div>

          <button
            onClick={onOpenAdmissions}
            className="shrink-0 bg-tertiary-fixed text-on-tertiary-fixed font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl hover:bg-tertiary-fixed-dim active:scale-95 transition-all shadow-md cursor-pointer"
          >
            Contact the School
          </button>
        </div>
      </div>
    </section>
  );
};
