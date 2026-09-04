import React from 'react';
import { Star, ArrowRight, Compass, Phone } from 'lucide-react';
import { HERO_IMAGE, OFFICIAL_FACEBOOK_URL, SCHOOL_PHONE_PRIMARY, SCHOOL_PHONE_SECONDARY } from '../data/schoolData';

interface HeroProps {
  onOpenAdmissions: () => void;
  onExplorePrograms: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAdmissions, onExplorePrograms }) => {
  return (
    <section className="relative w-full min-h-[680px] md:min-h-[760px] flex flex-col justify-end pb-12 md:pb-16 overflow-hidden">
      {/* Official brand image panel */}
      <div className="absolute inset-0 z-0 bg-[#0c2b57] overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-full md:w-[58%] bg-white flex items-center justify-center">
          <img
            src={HERO_IMAGE}
            alt="Official Turkish Bright Schools logo"
            className="w-[72%] max-w-[520px] md:w-[74%] object-contain opacity-95"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c2b57] via-[#0c2b57]/95 md:via-[#0c2b57]/90 to-transparent md:w-[72%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071a36]/75 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col gap-5 md:gap-6 pt-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#d92535]/90 backdrop-blur-sm text-white py-1.5 px-4 rounded-full w-max shadow-sm border border-white/10">
          <Star className="w-4 h-4 fill-[#ffe088] text-[#ffe088]" />
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white">
            Committed to Excellence
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight md:leading-[1.15] tracking-tight max-w-3xl">
          Building knowledge.
          <br />
          Growing character.
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-[#abc7ff] leading-relaxed max-w-2xl font-normal">
          Turkish Bright Schools brings academic learning, Quranic education, good manners, and joyful student activities together for families in Mogadishu.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 w-full sm:w-auto mt-2 max-w-md sm:max-w-xl">
          <button
            onClick={onOpenAdmissions}
            id="hero-apply-btn"
            className="w-full sm:w-auto px-8 bg-[#ffe088] text-[#241a00] font-bold text-base md:text-lg py-4 rounded-xl shadow-lg hover:bg-[#e9c349] active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>Ask About Admissions</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={onExplorePrograms}
            id="hero-explore-btn"
            className="w-full sm:w-auto px-8 border-2 border-[#d7e2ff] text-[#d7e2ff] font-semibold text-base md:text-lg py-3.5 rounded-xl hover:bg-[#d7e2ff]/15 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer backdrop-blur-xs"
          >
            <Compass className="w-5 h-5" />
            <span>Explore Learning</span>
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-white/80 pt-1">
          <span className="inline-flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#f6a800]" />
            {SCHOOL_PHONE_PRIMARY}
          </span>
          <span>{SCHOOL_PHONE_SECONDARY}</span>
          <a href={OFFICIAL_FACEBOOK_URL} target="_blank" rel="noreferrer" className="text-[#f6a800] font-semibold hover:text-white transition-colors">
            Official Facebook page
          </a>
        </div>
      </div>
    </section>
  );
};
