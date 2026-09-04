import React from 'react';
import { ChevronRight, Globe2, ShieldCheck, Cpu } from 'lucide-react';
import { CLASSROOM_IMAGE } from '../data/schoolData';

interface AboutSectionProps {
  onOpenAbout: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenAbout }) => {
  return (
    <section id="about-section" className="py-12 md:py-16 px-4 sm:px-6 md:px-12 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 items-center">
          {/* Image */}
          <div className="w-full lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-xl h-[280px] sm:h-[360px] md:h-[420px] relative group bg-white border border-outline-variant/40 flex items-center justify-center">
              <img
                src={CLASSROOM_IMAGE}
                alt="Official Turkish Bright Schools logo"
                className="w-[72%] h-[72%] object-contain group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-outline-variant/40 shadow-md flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-white shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <span className="font-bold text-primary block">Official school identity</span>
                  <span className="text-on-surface-variant">Committed to excellence in Mogadishu</span>
                </div>
              </div>
            </div>
          </div>

          {/* Description & Features */}
          <div className="w-full lg:col-span-6 flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded-full w-max">
              <span>Committed to Excellence</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary font-h3 leading-snug">
              A school rooted in knowledge and values
            </h2>

            <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
              Turkish Bright Schools presents education as a complete journey: academic learning, Quranic education, Islamic manners, and activities that help students grow with confidence. The school serves families across Mogadishu from its Hodan and Daarusalaam locations.
            </p>

            {/* Micro Feature highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-surface border border-outline-variant/50">
                <div className="p-2 rounded-lg bg-secondary/10 text-secondary shrink-0 mt-0.5">
                  <Globe2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-primary">Academic & Religious Learning</h4>
                  <p className="text-xs text-on-surface-variant">School subjects are paired with Quranic and Islamic learning.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-surface border border-outline-variant/50">
                <div className="p-2 rounded-lg bg-secondary/10 text-secondary shrink-0 mt-0.5">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-primary">Character & Creativity</h4>
                  <p className="text-xs text-on-surface-variant">Activities help students build manners, confidence, and curiosity.</p>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={onOpenAbout}
                id="learn-more-btn"
                className="text-secondary font-semibold text-base inline-flex items-center gap-1.5 hover:gap-2.5 transition-all hover:underline cursor-pointer group mt-2"
              >
                <span>Learn More About the School</span>
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
