import React from 'react';
import { Quote, Sparkles, Building2, ShieldCheck, Info } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const sampleFeedbacks = [
    {
      format: "Representative Plot Owner Journey",
      location: "Mansarovar, Jaipur",
      scope: "G+1 Residential Duplex (150 Gaj)",
      reflection:
        "What plot owners appreciate most is the discipline in milestone reporting—knowing exactly when cement curing is done, when column steel ties are verified, and having zero hidden billing surprises.",
      standard: "Transparent BOQ & Direct Founder Access",
    },
    {
      format: "Representative Villa Owner Journey",
      location: "Jagatpura, Jaipur",
      scope: "G+2 Contemporary Villa (200 Gaj)",
      reflection:
        "Building on your own plot requires a team that respects your family's daily comfort and floor plan changes before masonry begins. Clear communication transforms construction from stressful into rewarding.",
      standard: "Daily Supervision & Structural Quality",
    },
    {
      format: "Representative Extension Journey",
      location: "Vaishali Nagar, Jaipur",
      scope: "First Floor Addition & Front Elevation",
      reflection:
        "Seamless integration with existing foundation columns, meticulous waterproofing on terrace slabs, and sharp finishing on elevation stone cladding.",
      standard: "Disciplined Finishing & Clean Handover",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#101115] text-[#F5F1E8] relative border-t border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-8">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37] mb-2">
            Client Experience &amp; Standards
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F1E8] mb-4">
            Our Quality Benchmarks
          </h2>
          <p className="text-base sm:text-lg text-[#A7A7A7] leading-relaxed">
            As a newly established construction firm in Jaipur, we hold ourselves to rigorous customer-first service benchmarks.
          </p>
        </div>

        {/* Transparent Notice */}
        <div className="mb-10 p-4 sm:p-5 rounded-lg bg-[#161822] border border-[#D4AF37]/30 flex items-start gap-3.5 text-xs sm:text-sm text-[#A7A7A7]">
          <Info className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#F5F1E8] font-semibold">Demo Notice: </strong>
            To maintain strict truth-in-advertising, we do not fabricate reviews or name artificial clients. Verified client testimonials will be published here as ongoing construction projects in Jaipur reach final handover. The cards below showcase our service commitments and benchmark standards.
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {sampleFeedbacks.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#151720] border border-[#2B2D3A] rounded-xl p-7 flex flex-col justify-between hover:border-[#D4AF37]/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                    <Quote className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-[#D4AF37] uppercase tracking-wider">
                    {item.format}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#F5F1E8]/90 italic leading-relaxed mb-6">
                  &ldquo;{item.reflection}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#252733]">
                <div className="text-xs font-semibold text-[#D4AF37]">
                  {item.scope}
                </div>
                <div className="text-[11px] text-[#A7A7A7] mt-0.5">
                  Location: {item.location}
                </div>
                <div className="text-[11px] text-[#A7A7A7]/70 mt-1 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Standard: {item.standard}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
