import React from 'react';
import { SERVICES, ServiceItem, getWhatsAppUrl } from '../constants/company.ts';
import {
  Home,
  Compass,
  Layers,
  Grid,
  Zap,
  Sparkles,
  RefreshCw,
  ClipboardList,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  HelpCircle
} from 'lucide-react';

interface ServicesProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'home':
        return <Home className="w-6 h-6" />;
      case 'compass':
        return <Compass className="w-6 h-6" />;
      case 'layers':
        return <Layers className="w-6 h-6" />;
      case 'grid':
        return <Grid className="w-6 h-6" />;
      case 'zap':
        return <Zap className="w-6 h-6" />;
      case 'sparkles':
        return <Sparkles className="w-6 h-6" />;
      case 'refresh':
        return <RefreshCw className="w-6 h-6" />;
      case 'clipboard':
      default:
        return <ClipboardList className="w-6 h-6" />;
    }
  };

  const handleDiscuss = (service: ServiceItem) => {
    if (onSelectService) {
      onSelectService(service.title);
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(
        getWhatsAppUrl(`Hello Shree Shyam Constructions, I am interested in discussing your "${service.title}" service for my plot in Jaipur.`),
        '_blank',
        'noopener,noreferrer'
      );
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#0B0B0B] text-[#F5F1E8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14 lg:mb-18">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37] mb-2">
            Tailored For Customer-Owned Plots
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F1E8] mb-4">
            Our Construction Services
          </h2>
          <p className="text-base sm:text-lg text-[#A7A7A7] leading-relaxed">
            Whether you need turnkey end-to-end house construction or specific structural masonry and interior finishing packages, we deliver disciplined execution per agreed project scope.
          </p>
        </div>

        {/* Services Grid (8 Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {SERVICES.map((service, index) => {
            const isFeatured = service.featured;
            return (
              <div
                key={service.id}
                className={`flex flex-col justify-between rounded-lg p-6 sm:p-7 border transition-all duration-200 relative group ${
                  isFeatured
                    ? 'bg-[#15161B] border-[#D4AF37]/50 shadow-lg shadow-[#D4AF37]/5'
                    : 'bg-[#121316] border-[#2A2B33] hover:border-[#D4AF37]/40'
                }`}
              >
                <div>
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded flex items-center justify-center border transition-colors ${
                        isFeatured
                          ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-[#D4AF37]'
                          : 'bg-[#1C1D24] border-[#333] text-[#D4AF37] group-hover:border-[#D4AF37]/60'
                      }`}
                    >
                      {getIcon(service.icon)}
                    </div>
                    <span className="text-xs font-mono text-[#A7A7A7]/70">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#F5F1E8] mb-3 group-hover:text-[#D4AF37] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A7A7A7] leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Key Scope List */}
                  <div className="border-t border-[#252630] pt-4 mb-6">
                    <p className="text-[11px] uppercase tracking-wider text-[#D4AF37]/90 font-semibold mb-2.5">
                      Scope Overview:
                    </p>
                    <ul className="space-y-1.5 text-xs text-[#A7A7A7]">
                      {service.scope.slice(0, 4).map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA: Discuss Your Project */}
                <div className="pt-2 border-t border-[#222]">
                  <button
                    type="button"
                    onClick={() => handleDiscuss(service)}
                    className="w-full inline-flex items-center justify-between text-xs sm:text-sm font-semibold text-[#D4AF37] hover:text-[#F3E5AB] py-2 transition-colors group/btn cursor-pointer"
                  >
                    <span>Discuss Your Project</span>
                    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform text-[#D4AF37]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scope Note Banner */}
        <div className="bg-[#121316] border border-[#2D2E37] rounded-lg p-5 flex items-start gap-3.5 text-xs sm:text-sm text-[#A7A7A7]">
          <HelpCircle className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
          <div>
            <span className="text-[#F5F1E8] font-medium">Important Project Note: </span>
            All services are subject to mutual project assessment, municipal guidelines, approved drawings, and a formal signed agreement detailing material grades, milestones, and payment stages.
          </div>
        </div>

      </div>
    </section>
  );
};
