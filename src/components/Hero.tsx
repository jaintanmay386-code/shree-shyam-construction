import React from 'react';
import { HeroVillaVisual } from './ArchitecturalVisuals.tsx';
import { COMPANY, getWhatsAppUrl } from '../constants/company.ts';
import { Phone, MessageSquare, ArrowRight, MapPin, ShieldCheck, Ruler, Clock } from 'lucide-react';

interface HeroProps {
  onOpenConsultation?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const scrollToContact = () => {
    if (onOpenConsultation) {
      onOpenConsultation();
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWork = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden bg-[#0B0B0B]">
      {/* Background Architectural Grid & Subtle Ambiance */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:32px_32px]" />
      
      {/* Radial gold gradient behind focal area */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#D4AF37]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Location Indicator & Business Classification */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-[#A7A7A7] mb-6">
          <span className="inline-flex items-center gap-1.5 text-[#D4AF37] font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Jaipur, Rajasthan</span>
          </span>
          <span className="text-[#A7A7A7]/50">·</span>
          <span>Mansarovar Office</span>
          <span className="text-[#A7A7A7]/50">·</span>
          <span className="text-[#F5F1E8]/90 font-medium">Residential Construction on Customer Plots</span>
        </div>

        {/* Hero Grid Split: Copy on Left, Architectural Visual Artwork on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37] mb-3">
              {COMPANY.name}
            </p>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#F5F1E8] leading-[1.15] mb-4 text-balance">
              Building Dreams. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37]">
                Creating Legacies.
              </span>
            </h1>

            <p className="font-serif text-lg sm:text-xl text-[#F5F1E8]/90 font-medium mb-4">
              Your Vision. Your Plot. Our Commitment to Quality Construction.
            </p>

            <p className="text-base sm:text-lg text-[#A7A7A7] leading-relaxed max-w-2xl mb-8">
              From the first foundation to the final finishing touches, we help transform your plot into a home designed around your vision, lifestyle, and needs.
            </p>

            {/* CTAs Cluster */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              {/* Primary Gold CTA */}
              <button
                type="button"
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-wide text-[#0B0B0B] bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] rounded-md shadow-lg shadow-[#D4AF37]/15 hover:shadow-[#D4AF37]/25 hover:brightness-105 active:scale-[0.99] transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#0B0B0B]" />
              </button>

              {/* Secondary CTA */}
              <button
                type="button"
                onClick={scrollToWork}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-[#F5F1E8] border border-[#D4AF37]/35 rounded-md hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Explore Our Work</span>
              </button>

              {/* WhatsApp Enquiry Button */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-medium text-white bg-[#25D366]/90 hover:bg-[#25D366] rounded-md transition-all shadow-sm whitespace-nowrap"
                title="Chat with us on WhatsApp"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>WhatsApp Enquiry</span>
              </a>

              {/* Direct Call Button */}
              <a
                href={COMPANY.phoneTel}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-medium text-[#D4AF37] hover:text-[#F5F1E8] bg-[#171717] hover:bg-[#222] border border-[#333] rounded-md transition-all whitespace-nowrap"
                title="Call 9610448836"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Call {COMPANY.displayPhone}</span>
              </a>
            </div>

            {/* Quiet Trust Pillars (Zero pills, clean typography with subtle separators) */}
            <div className="pt-6 border-t border-[#D4AF37]/15 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#A7A7A7]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Customer-Owned Plots Focus</span>
              </div>
              <span className="hidden sm:inline text-[#333]">·</span>
              <div className="flex items-center gap-2">
                <Ruler className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Architectural &amp; Structural Planning</span>
              </div>
              <span className="hidden sm:inline text-[#333]">·</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Transparent Milestone Pricing</span>
              </div>
            </div>

          </div>

          {/* Right Column: Architectural Visual Artwork & Blueprint Framing */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer decorative gold frame */}
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#D4AF37]/30 via-transparent to-[#D4AF37]/30 blur-sm group-hover:blur-md transition-all duration-300 opacity-60" />
              
              <div className="relative rounded-lg overflow-hidden border border-[#D4AF37]/40 shadow-2xl bg-[#14151B]">
                {/* Visual artwork component */}
                <div className="aspect-[16/10] sm:aspect-[4/3] w-full">
                  <HeroVillaVisual />
                </div>

                {/* Floating Architectural Annotation Card at bottom */}
                <div className="p-4 sm:p-5 bg-[#0E1015]/95 border-t border-[#D4AF37]/25 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-semibold">
                      Architectural Inspiration
                    </p>
                    <p className="text-sm font-medium text-[#F5F1E8]">
                      Contemporary Residential Villa · Jaipur
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-[11px] font-mono text-[#A7A7A7] block">
                      Plot Construction
                    </span>
                    <span className="text-xs font-semibold text-[#D4AF37] block">
                      Turnkey Solution
                    </span>
                  </div>
                </div>
              </div>

              {/* Architectural badge corner detail */}
              <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-1.5 px-3 py-1 bg-[#141414] border border-[#D4AF37] rounded text-[11px] text-[#D4AF37] font-mono shadow-md">
                <span>ESTD 2026</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
