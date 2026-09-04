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
            <div className="rounded-2xl overflow-hidden shadow-xl h-[280px] sm:h-[360px] md:h-[420px] relative group">
              <img
                src={CLASSROOM_IMAGE}
                alt="Bright modern classroom at Turkish Bright Schools Mogadishu with interactive smartboard and students engaging in learning"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-white/40 shadow-md flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-white shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <span className="font-bold text-primary block">Accredited Excellence</span>
                  <span className="text-on-surface-variant">Combining Turkish pedagogical mastery with Somali heritage</span>
                </div>
              </div>
            </div>
          </div>

          {/* Description & Features */}
          <div className="w-full lg:col-span-6 flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded-full w-max">
              <span>Established Academic Leadership</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary font-h3 leading-snug">
              A Legacy of Excellence in Mogadishu
            </h2>

            <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
              At Turkish Bright Schools, we combine the rigorous academic standards of the Turkish educational system with the rich cultural heritage of Somalia. Our state-of-the-art facilities provide a safe, inspiring environment where students are challenged to reach their full potential.
            </p>

            {/* Micro Feature highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-surface border border-outline-variant/50">
                <div className="p-2 rounded-lg bg-secondary/10 text-secondary shrink-0 mt-0.5">
                  <Globe2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-primary">Multilingual Immersion</h4>
                  <p className="text-xs text-on-surface-variant">Fluent English & Turkish alongside Somali and classical Arabic.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-surface border border-outline-variant/50">
                <div className="p-2 rounded-lg bg-secondary/10 text-secondary shrink-0 mt-0.5">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-primary">STEM & Robotics Lab</h4>
                  <p className="text-xs text-on-surface-variant">Practical labs preparing innovators for global competitive Olympiads.</p>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={onOpenAbout}
                id="learn-more-btn"
                className="text-secondary font-semibold text-base inline-flex items-center gap-1.5 hover:gap-2.5 transition-all hover:underline cursor-pointer group mt-2"
              >
                <span>Learn More About Us</span>
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
