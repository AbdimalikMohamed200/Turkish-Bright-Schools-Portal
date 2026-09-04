import React from 'react';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { ACADEMIC_PROGRAMS } from '../data/schoolData';

interface AcademicProgramsProps {
  onViewCurriculum: (programId: string) => void;
}

export const AcademicPrograms: React.FC<AcademicProgramsProps> = ({ onViewCurriculum }) => {
  return (
    <section id="programs-section" className="py-12 md:py-16 px-4 sm:px-6 md:px-12 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded-full mb-3">
            <span>K-12 Comprehensive Education</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary font-h3">
            Our Academic Programs
          </h2>
          <p className="text-on-surface-variant text-sm sm:text-base mt-2">
            Structured educational pathways designed to cultivate intellectual curiosity, character, and global readiness at each developmental stage.
          </p>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-3 gap-6">
          {ACADEMIC_PROGRAMS.map((program) => {
            // Background color for header area per level
            let headerBg = 'bg-primary';
            let textColor = 'text-on-primary';
            if (program.id === 'primary') {
              headerBg = 'bg-secondary';
              textColor = 'text-on-secondary';
            } else if (program.id === 'high-school') {
              headerBg = 'bg-primary-container';
              textColor = 'text-on-primary-container';
            }

            return (
              <div
                key={program.id}
                className="bg-surface-container-highest rounded-2xl overflow-hidden shadow-[0px_12px_32px_rgba(0,0,0,0.08)] flex flex-col border border-outline-variant/40 hover:shadow-xl transition-all duration-300 group"
              >
                {/* Image & Header Area */}
                <div className={`h-[190px] sm:h-[210px] w-full ${headerBg} relative overflow-hidden`}>
                  <img
                    src={program.image}
                    alt={`${program.name} at Turkish Bright Schools Mogadishu`}
                    className="w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-90 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                  {/* Level Tag */}
                  <div className="absolute top-3.5 right-3.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full text-white text-xs font-semibold">
                    {program.grades}
                  </div>

                  <h3 className={`absolute bottom-4 left-4 font-bold text-xl sm:text-2xl ${textColor} z-10 font-h4 tracking-tight drop-shadow-sm`}>
                    {program.name}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-4 flex-1 justify-between bg-surface-container-lowest">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-secondary mb-2">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>{program.ageGroup}</span>
                      <span>•</span>
                      <span>{program.weeklyHours} hrs/wk</span>
                    </div>

                    <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                      {program.description}
                    </p>

                    {/* Subject Pill Previews */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {program.coreSubjects.slice(0, 3).map((sub, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-medium bg-surface-container-low text-primary px-2.5 py-1 rounded-md border border-outline-variant/30"
                        >
                          {sub.split('&')[0].trim()}
                        </span>
                      ))}
                      <span className="text-[11px] font-medium text-on-surface-variant/80 px-1 py-1">
                        +{program.coreSubjects.length - 3} more
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onViewCurriculum(program.id)}
                    id={`view-curriculum-${program.id}`}
                    className="w-full mt-3 border border-outline/80 text-primary font-semibold text-sm sm:text-base py-3 rounded-xl hover:bg-surface-container-high hover:border-primary active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer group/btn"
                  >
                    <span>View Curriculum</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
