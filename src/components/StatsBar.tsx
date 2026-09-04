import React from 'react';
import { GraduationCap, Users, Award, BookOpen } from 'lucide-react';
import { SCHOOL_STATS } from '../data/schoolData';

export const StatsBar: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'school':
        return <GraduationCap className="w-10 h-10 text-secondary" />;
      case 'groups':
        return <Users className="w-10 h-10 text-secondary" />;
      case 'workspace_premium':
        return <Award className="w-10 h-10 text-secondary" />;
      case 'award':
      default:
        return <BookOpen className="w-10 h-10 text-secondary" />;
    }
  };

  return (
    <section className="py-8 md:py-12 px-4 sm:px-6 md:px-12 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div
          className="flex md:grid md:grid-cols-4 overflow-x-auto gap-4 pb-4 md:pb-0 snap-x snap-mandatory hide-scrollbar"
          style={{ scrollbarWidth: 'none' }}
        >
          {SCHOOL_STATS.map((stat) => (
            <div
              key={stat.id}
              className="min-w-[220px] flex-1 snap-center bg-surface-container-low p-6 rounded-xl border border-outline-variant/60 flex flex-col items-center justify-center text-center gap-2 shadow-[0px_4px_20px_rgba(0,74,153,0.05)] hover:border-secondary/50 hover:shadow-md transition-all group"
            >
              <div className="p-2.5 rounded-full bg-surface-container group-hover:scale-110 transition-transform">
                {getIcon(stat.iconName)}
              </div>
              <span className="text-3xl md:text-4xl font-extrabold text-primary font-h2">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm font-bold text-on-surface-variant uppercase tracking-wider">
                {stat.label}
              </span>
              <span className="text-xs text-on-surface-variant/80 line-clamp-2 mt-1 hidden sm:block">
                {stat.subtext}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
