import React from 'react';
import { Star, ArrowRight, Compass } from 'lucide-react';
import { HERO_IMAGE } from '../data/schoolData';

interface HeroProps {
  onOpenAdmissions: () => void;
  onExplorePrograms: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAdmissions, onExplorePrograms }) => {
  return (
    <section className="relative w-full min-h-[680px] md:min-h-[760px] flex flex-col justify-end pb-12 md:pb-16 overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 bg-[#00346f]">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-60 mix-blend-overlay scale-105 transition-transform duration-1000"
          style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
          role="img"
          aria-label="Somali students in modern school uniforms at Turkish Bright Schools"
        />
        {/* Soft radial and directional gradients for flawless text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#00346f] via-[#00346f]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00346f]/90 via-[#00346f]/40 to-transparent hidden md:block" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col gap-5 md:gap-6 pt-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#006970]/85 backdrop-blur-sm text-white py-1.5 px-4 rounded-full w-max shadow-sm border border-white/10">
          <Star className="w-4 h-4 fill-[#ffe088] text-[#ffe088]" />
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white">
            Excellence in Education
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight md:leading-[1.15] tracking-tight max-w-3xl">
          Building Bright Minds.
          <br />
          Shaping Strong Futures.
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-[#abc7ff] leading-relaxed max-w-2xl font-normal">
          Empowering the next generation in Mogadishu with world-class academics, Turkish rigorous standards, and strong ethical foundations.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 w-full sm:w-auto mt-2 max-w-md sm:max-w-xl">
          <button
            onClick={onOpenAdmissions}
            id="hero-apply-btn"
            className="w-full sm:w-auto px-8 bg-[#ffe088] text-[#241a00] font-bold text-base md:text-lg py-4 rounded-xl shadow-lg hover:bg-[#e9c349] active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={onExplorePrograms}
            id="hero-explore-btn"
            className="w-full sm:w-auto px-8 border-2 border-[#d7e2ff] text-[#d7e2ff] font-semibold text-base md:text-lg py-3.5 rounded-xl hover:bg-[#d7e2ff]/15 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer backdrop-blur-xs"
          >
            <Compass className="w-5 h-5" />
            <span>Explore Programs</span>
          </button>
        </div>
      </div>
    </section>
  );
};
