import React from 'react';
import {
  Users,
  MessageCircle,
  PencilRuler,
  ShieldCheck,
  Sparkles,
  HeartHandshake
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: Users,
      title: "Customer-First Approach",
      description: "You are not dealing with distant sub-brokers or impersonal corporate layers. Our founders work directly with you from the initial soil review to key handover.",
    },
    {
      icon: MessageCircle,
      title: "Clear & Transparent Communication",
      description: "Weekly photographic WhatsApp updates, itemized Bill of Quantities (BOQ), and transparent milestone payments tied strictly to physical construction stages.",
    },
    {
      icon: PencilRuler,
      title: "Thoughtful Project Planning",
      description: "Custom floor layouts crafted specifically for your plot's dimensions, orientation, daylight paths, and your family's future lifestyle requirements.",
    },
    {
      icon: ShieldCheck,
      title: "Quality-Conscious Execution",
      description: "We use only branded grade-certified materials (TMT bars, cement, and CPVC piping) and enforce rigorous water curing cycles for structural endurance.",
    },
    {
      icon: Sparkles,
      title: "Attention to Detail",
      description: "From 90-degree plumb wall corners and level floorings to seamless concealed conduit lines, we obsess over details that matter for years to come.",
    },
    {
      icon: HeartHandshake,
      title: "Focus on Long-Term Trust",
      description: "As a newly established construction firm in Mansarovar, Jaipur, our priority is building generational trust and proud references through authentic work.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#14151B] text-[#F5F1E8] relative border-t border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14 lg:mb-18">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37] mb-2">
            The Shree Shyam Commitment
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F1E8] mb-4">
            Why Build With Us
          </h2>
          <p className="text-base sm:text-lg text-[#A7A7A7] leading-relaxed">
            Building a house on your plot is often a once-in-a-lifetime endeavor. Here is the disciplined approach we bring to your project.
          </p>
        </div>

        {/* 6 Restrained Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {points.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="bg-[#1A1C24] border border-[#2B2D38] hover:border-[#D4AF37]/50 rounded-lg p-7 transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-5 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#F5F1E8] mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A7A7A7] leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
