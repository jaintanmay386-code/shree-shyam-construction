import React from 'react';
import { COMPANY, getWhatsAppUrl } from '../constants/company.ts';
import { Target, Compass, HeartHandshake, Eye, CheckCircle2, MessageSquare, Phone } from 'lucide-react';

export const AboutUs: React.FC = () => {
  const pillars = [
    {
      title: "Customer-Focused Planning",
      description: "Every home begins with an understanding of how your family lives. We plan layouts around natural light, cross-ventilation, and daily comfort.",
    },
    {
      title: "Quality-Conscious Construction",
      description: "From certified TMT steel grades to rigorous concrete water curing cycles, we uphold strict on-site building standards at every stage.",
    },
    {
      title: "Transparent Communication",
      description: "No hidden costs or sudden surprises. Every milestone, material specification, and progress stage is documented and communicated clearly.",
    },
    {
      title: "Thoughtful Execution",
      description: "Disciplined masonry joints, leak-tested concealed plumbing, and precise electrical conduit routes that prevent future maintenance hassles.",
    },
    {
      title: "Attention to Finishing Details",
      description: "Floor tile alignment, crisp edge plastering, multi-coat wall putty, and high-end paint finishes that give your home its refined character.",
    },
    {
      title: "Commitment to Customer Satisfaction",
      description: "Our reputation is built one house at a time. We prioritize your peace of mind and treat your plot as the foundation for a lifelong relationship.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#141417] text-[#F5F1E8] relative overflow-hidden border-t border-[#D4AF37]/15">
      {/* Decorative architectural watermarks / grid */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#D4AF37_1px,transparent_1px),linear-gradient(to_bottom,#D4AF37_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-18">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37] mb-2">
            About Shree Shyam Constructions
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F1E8] mb-6 leading-tight">
            Building More Than Houses. <br />
            <span className="text-[#D4AF37]">Building Trust.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A7A7A7] leading-relaxed">
            Shree Shyam Constructions is a newly established residential house construction company based in Mansarovar, Jaipur. We specialize exclusively in building tailor-made homes on customer-owned plots. Rather than selling pre-made properties or dealing in land, our sole focus is bringing your architectural vision to life with complete structural integrity and transparent craftsmanship.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          
          {/* Mission Card */}
          <div className="bg-[#1C1D24] border border-[#D4AF37]/25 rounded-lg p-7 sm:p-9 relative group hover:border-[#D4AF37]/50 transition-colors">
            <div className="w-12 h-12 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F5F1E8] mb-3">
              Our Mission
            </h3>
            <p className="text-sm sm:text-base text-[#A7A7A7] leading-relaxed">
              &ldquo;To help families turn their vision of a home into reality through thoughtful planning, quality-conscious construction, and transparent communication.&rdquo;
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-[#1C1D24] border border-[#D4AF37]/25 rounded-lg p-7 sm:p-9 relative group hover:border-[#D4AF37]/50 transition-colors">
            <div className="w-12 h-12 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F5F1E8] mb-3">
              Our Vision
            </h3>
            <p className="text-sm sm:text-base text-[#A7A7A7] leading-relaxed">
              &ldquo;To build lasting relationships and create homes that families can value for generations.&rdquo;
            </p>
          </div>

        </div>

        {/* Core Pillars Grid */}
        <div className="mb-14">
          <div className="mb-8">
            <h3 className="font-serif text-2xl font-bold text-[#F5F1E8] mb-2">
              Our Core Construction Principles
            </h3>
            <p className="text-sm text-[#A7A7A7]">
              How we approach every plot construction project across Jaipur.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="bg-[#181920] border border-[#2D2E37] hover:border-[#D4AF37]/40 rounded-lg p-6 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-mono font-bold text-[#D4AF37] px-2 py-0.5 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/25">
                    0{idx + 1}
                  </span>
                  <h4 className="font-serif text-base sm:text-lg font-bold text-[#F5F1E8]">
                    {pillar.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#A7A7A7] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Honest Business Statement Strip */}
        <div className="bg-[#0B0B0B] border border-[#D4AF37]/30 rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <HeartHandshake className="w-8 h-8 text-[#D4AF37] shrink-0 mt-1" />
            <div>
              <h4 className="font-serif text-lg font-bold text-[#F5F1E8] mb-1">
                Newly Established With Unwavering Dedication
              </h4>
              <p className="text-xs sm:text-sm text-[#A7A7A7] max-w-2xl">
                As a newly established construction practice in Jaipur, our founders and on-site engineering team bring fresh vigor, personal daily supervision, and complete accountability to every customer-owned plot.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={getWhatsAppUrl("Hello, I would like to know more about your house construction approach in Jaipur.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#25D366] text-white text-xs font-semibold rounded hover:brightness-105 transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Ask a Question</span>
            </a>
            <a
              href={COMPANY.phoneTel}
              className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#D4AF37]/50 text-[#D4AF37] text-xs font-semibold rounded hover:bg-[#D4AF37]/10 transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Team</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
