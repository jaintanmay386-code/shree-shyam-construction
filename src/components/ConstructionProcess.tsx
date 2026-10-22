import React, { useState } from 'react';
import { PROCESS_STEPS, getWhatsAppUrl } from '../constants/company.ts';
import {
  MessageSquare,
  MapPin,
  FileSpreadsheet,
  FileCheck,
  HardHat,
  KeyRound,
  Check,
  ArrowRight
} from 'lucide-react';

export const ConstructionProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const getStepIcon = (step: number) => {
    switch (step) {
      case 1:
        return <MessageSquare className="w-5 h-5" />;
      case 2:
        return <MapPin className="w-5 h-5" />;
      case 3:
        return <FileSpreadsheet className="w-5 h-5" />;
      case 4:
        return <FileCheck className="w-5 h-5" />;
      case 5:
        return <HardHat className="w-5 h-5" />;
      case 6:
      default:
        return <KeyRound className="w-5 h-5" />;
    }
  };

  const currentStepData = PROCESS_STEPS.find((s) => s.step === activeStep) || PROCESS_STEPS[0];

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#121316] text-[#F5F1E8] relative overflow-hidden border-t border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14 lg:mb-18">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37] mb-2">
            Structured &amp; Transparent
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F1E8] mb-4">
            Our 6-Step Construction Journey
          </h2>
          <p className="text-base sm:text-lg text-[#A7A7A7] leading-relaxed">
            From your raw plot to the moment you unlock your front door, our disciplined milestone roadmap ensures complete peace of mind, clear communication, and zero ambiguity.
          </p>
        </div>

        {/* Step Numbers Selector Tabs (Desktop / Tablet) */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-10">
          {PROCESS_STEPS.map((step) => {
            const isActive = step.step === activeStep;
            return (
              <button
                key={step.step}
                type="button"
                onClick={() => setActiveStep(step.step)}
                className={`text-left p-4 rounded-lg border transition-all cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#1C1D25] border-[#D4AF37] shadow-lg shadow-[#D4AF37]/10'
                    : 'bg-[#0E0F12] border-[#252630] hover:border-[#D4AF37]/40 text-[#A7A7A7]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
                      isActive
                        ? 'bg-[#D4AF37] text-[#0B0B0B]'
                        : 'bg-[#1C1D24] text-[#A7A7A7]'
                    }`}
                  >
                    0{step.step}
                  </span>
                  <span className={`${isActive ? 'text-[#D4AF37]' : 'text-[#666]'}`}>
                    {getStepIcon(step.step)}
                  </span>
                </div>
                <div>
                  <p className={`text-xs uppercase tracking-wider font-semibold ${isActive ? 'text-[#D4AF37]' : 'text-[#666]'}`}>
                    Step {step.step}
                  </p>
                  <p className={`text-xs sm:text-sm font-medium line-clamp-1 ${isActive ? 'text-[#F5F1E8]' : 'text-[#A7A7A7]'}`}>
                    {step.title}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Active Step Focus Card */}
        <div className="bg-[#171820] border border-[#D4AF37]/35 rounded-xl p-6 sm:p-10 mb-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30">
                  PHASE 0{currentStepData.step} OF 06
                </span>
                <span className="text-xs sm:text-sm text-[#A7A7A7]">
                  {currentStepData.subtitle}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F1E8] mb-4">
                {currentStepData.title}
              </h3>

              <p className="text-base sm:text-lg text-[#A7A7A7] leading-relaxed mb-6">
                {currentStepData.description}
              </p>

              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#D4AF37] mb-3">
                  Key Deliverables &amp; Milestones:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {currentStepData.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-3 rounded bg-[#0E1015] border border-[#2A2B35] text-xs sm:text-sm text-[#F5F1E8]"
                    >
                      <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-end border-t lg:border-t-0 lg:border-l border-[#2E303D] pt-6 lg:pt-0 lg:pl-8">
              <div className="text-center lg:text-right mb-5">
                <p className="text-xs text-[#A7A7A7] uppercase tracking-wider">Ready for this step?</p>
                <p className="font-serif text-lg font-bold text-[#F5F1E8]">Schedule Consultation</p>
              </div>

              <div className="flex flex-col gap-3 w-full sm:w-auto">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-[#0B0B0B] text-xs sm:text-sm font-semibold hover:brightness-105 transition-all text-center"
                >
                  <span>Request Plot Site Visit</span>
                  <ArrowRight className="w-4 h-4 text-[#0B0B0B]" />
                </a>
                <a
                  href={getWhatsAppUrl(`Hello Shree Shyam Constructions, I have a query regarding Step ${currentStepData.step} (${currentStepData.title}) for my plot.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-[#25D366]/20 border border-[#25D366]/50 text-[#25D366] text-xs font-semibold hover:bg-[#25D366]/30 transition-all text-center"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Discuss via WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Timeline Disclaimer Note */}
        <div className="text-center text-xs text-[#A7A7A7]/80 max-w-2xl mx-auto">
          * Note: Construction timelines and cost estimates depend on plot dimensions, municipal building sanction approvals, ground soil strata, and customer finishing selections. All details are formally documented in the signed agreement before commencement.
        </div>

      </div>
    </section>
  );
};
