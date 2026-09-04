import React, { useState } from 'react';
import { X, BookOpen, Clock, Languages, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';
import { ACADEMIC_PROGRAMS } from '../data/schoolData';

interface CurriculumModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProgramId?: string;
  onApplyForProgram: (level: string) => void;
}

export const CurriculumModal: React.FC<CurriculumModalProps> = ({
  isOpen,
  onClose,
  selectedProgramId = 'high-school',
  onApplyForProgram,
}) => {
  const [activeTab, setActiveTab] = useState<string>(selectedProgramId || 'high-school');

  if (!isOpen) return null;

  const currentProgram = ACADEMIC_PROGRAMS.find((p) => p.id === activeTab) || ACADEMIC_PROGRAMS[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-surface rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl border border-outline-variant/40 my-6 max-h-[90vh] flex flex-col">
        {/* Modal Top Header */}
        <div className="bg-primary text-white p-5 sm:p-6 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 bg-secondary/80 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
            <BookOpen className="w-3.5 h-3.5 text-tertiary-fixed" />
            <span>Learning Areas & Placement</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold font-h3 text-white">
            Learning Framework
          </h2>
          <p className="text-xs sm:text-sm text-primary-fixed-dim mt-1">
            Academic learning, Quranic education, and student development
          </p>

          {/* Program Tabs */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-1 hide-scrollbar">
            {ACADEMIC_PROGRAMS.map((prog) => (
              <button
                key={prog.id}
                onClick={() => setActiveTab(prog.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === prog.id
                    ? 'bg-tertiary-fixed text-primary shadow-sm'
                    : 'bg-white/15 text-white/90 hover:bg-white/25'
                }`}
              >
                {prog.name} ({prog.grades})
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex flex-col gap-6">
          {/* Header summary */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-surface-container-low border border-outline-variant/50">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-wider">
                <span>{currentProgram.grades}</span>
                <span>•</span>
                <span>{currentProgram.ageGroup}</span>
              </div>
              <h3 className="text-xl font-bold text-primary mt-0.5">
                {currentProgram.name} Academic Track
              </h3>
            </div>
            {currentProgram.weeklyHours > 0 && (
              <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-outline-variant/40 shrink-0">
                <Clock className="w-4 h-4 text-secondary" />
                <span className="text-xs sm:text-sm font-bold text-primary">
                  {currentProgram.weeklyHours} Academic Periods / Wk
                </span>
              </div>
            )}
          </div>

          {/* Overview description */}
          <div>
            <h4 className="text-sm font-bold text-on-surface-variant uppercase tracking-wider mb-2">
              Pedagogical Approach
            </h4>
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
              {currentProgram.curriculumOverview}
            </p>
          </div>

          {/* Core Subjects Grid */}
          <div>
            <h4 className="text-sm font-bold text-on-surface-variant uppercase tracking-wider mb-3">
              Core Subjects & Disciplines
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {currentProgram.coreSubjects.map((sub, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/50 shadow-xs"
                >
                  <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-primary">
                    {sub}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Multilingual Integration */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Languages className="w-4 h-4 text-secondary" />
              <h4 className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">
                Learning Focus
              </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentProgram.languages.map((lang, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/40 flex flex-col gap-1"
                >
                  <span className="text-xs font-bold text-secondary uppercase">
                    {lang.name}
                  </span>
                  <p className="text-xs text-on-surface-variant leading-normal">
                    {lang.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Advantages */}
          <div>
            <h4 className="text-sm font-bold text-on-surface-variant uppercase tracking-wider mb-3">
              Programme Highlights
            </h4>
            <ul className="flex flex-col gap-2">
              {currentProgram.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-on-surface-variant">
                  <Sparkles className="w-4 h-4 text-tertiary-fixed shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-6 bg-surface-container-low border-t border-outline-variant/40 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <span className="text-xs text-on-surface-variant text-center sm:text-left">
            Contact admissions for current programme and placement information.
          </span>
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-5 py-2.5 border border-outline-variant text-primary font-semibold text-sm rounded-xl hover:bg-surface-container transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onApplyForProgram(currentProgram.id);
              }}
              className="w-1/2 sm:w-auto px-6 py-2.5 bg-tertiary-fixed text-on-tertiary-fixed font-bold text-sm rounded-xl hover:bg-tertiary-fixed-dim transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Apply for {currentProgram.name}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
