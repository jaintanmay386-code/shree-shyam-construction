import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem, getWhatsAppUrl } from '../constants/company.ts';
import { VisualMap } from './ArchitecturalVisuals.tsx';
import { Eye, X, ArrowRight, MessageSquare, Info } from 'lucide-react';

export const ProjectsGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Samples' },
    { id: 'exterior', label: 'Exterior Design' },
    { id: 'structural', label: 'Construction Stage' },
    { id: 'interior', label: 'Interiors' },
    { id: 'finishing', label: 'Finishing' },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#0B0B0B] text-[#F5F1E8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37] mb-2">
            Architectural Portfolio &amp; Inspiration
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F1E8] mb-4">
            Design Standards &amp; Work Visuals
          </h2>
          <p className="text-base sm:text-lg text-[#A7A7A7] leading-relaxed">
            Explore our architectural design vocabulary, structural engineering standards, and finishing craftsmanship envisioned for modern plots in Jaipur.
          </p>
        </div>

        {/* Transparent Disclosure Notice (Mandatory honesty compliance) */}
        <div className="mb-10 p-4 sm:p-5 rounded-lg bg-[#14151B] border border-[#D4AF37]/30 flex items-start gap-3.5 text-xs sm:text-sm text-[#A7A7A7]">
          <Info className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#F5F1E8] font-semibold">Honest Disclosure: </strong>
            As a newly established construction company, the architectural designs and construction-stage renders displayed below represent our 
            <span className="text-[#D4AF37] font-medium"> Illustrative Design Inspiration &amp; Quality Benchmarks</span>. 
            Real on-site photographic archives will be published as customer projects in Jaipur reach completion milestones.
          </div>
        </div>

        {/* Category Filters (Clean functional buttons per Section 1.A) */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-[#222]">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded transition-colors cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#D4AF37] text-[#0B0B0B] font-semibold'
                  : 'bg-[#141416] text-[#A7A7A7] hover:text-[#F5F1E8] hover:bg-[#1E1F24] border border-[#2B2C33]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {filteredItems.map((item) => {
            const VisualComponent = VisualMap[item.id] || VisualMap['g-1'];
            return (
              <div
                key={item.id}
                className="group relative rounded-lg overflow-hidden bg-[#131418] border border-[#262832] hover:border-[#D4AF37]/60 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Artwork Container */}
                <div
                  className="aspect-[4/3] w-full overflow-hidden relative cursor-pointer"
                  onClick={() => setActiveItem(item)}
                >
                  <VisualComponent className="group-hover:scale-105 transition-transform duration-500" />
                  
                  {/* Subtle Scrim & Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Top Tag Notice */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-[#0B0B0B]/90 border border-[#D4AF37]/40 text-[#D4AF37]">
                      {item.tag}
                    </span>
                  </div>

                  {/* Hover Inspect Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-[#0B0B0B]/40 backdrop-blur-[2px]">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#0B0B0B]/90 text-xs font-semibold text-[#D4AF37] border border-[#D4AF37]">
                      <Eye className="w-3.5 h-3.5" />
                      View Detail
                    </span>
                  </div>
                </div>

                {/* Card Content Footer */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#F5F1E8] mb-1.5 group-hover:text-[#D4AF37] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#A7A7A7] leading-relaxed mb-3">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#22242D] flex items-center justify-between text-xs font-mono text-[#D4AF37]">
                    <span>{item.specs}</span>
                    <button
                      type="button"
                      onClick={() => setActiveItem(item)}
                      className="text-xs hover:underline cursor-pointer"
                    >
                      Enlarge
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Marquee Prominent CTA Box (As requested in Section 8) */}
        <div className="bg-gradient-to-r from-[#171822] via-[#20212E] to-[#171822] border border-[#D4AF37]/40 rounded-xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F5F1E8] mb-3">
              Have a Plot? Let&apos;s Discuss Your Home.
            </h3>
            <p className="text-sm sm:text-base text-[#A7A7A7] mb-8 leading-relaxed">
              Whether your plot is in Mansarovar, Jagatpura, Vaishali Nagar, or anywhere across Jaipur, our team is ready to evaluate ground conditions and prepare a customized plan.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-[#0B0B0B] text-sm font-semibold hover:brightness-105 transition-all shadow-lg shadow-[#D4AF37]/15"
              >
                <span>Schedule a Free Plot Visit</span>
                <ArrowRight className="w-4 h-4 text-[#0B0B0B]" />
              </a>
              <a
                href={getWhatsAppUrl("Hello Shree Shyam Constructions, I have a residential plot in Jaipur and would like to discuss building my home.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded bg-[#25D366] text-white text-sm font-semibold hover:brightness-105 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative bg-[#14151B] border border-[#D4AF37]/50 rounded-xl max-w-3xl w-full overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-[#2A2B36] flex items-center justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-mono">
                  Illustrative Reference: {activeItem.tag}
                </span>
                <h4 className="font-serif text-lg sm:text-xl font-bold text-[#F5F1E8]">
                  {activeItem.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="p-2 rounded text-[#A7A7A7] hover:text-[#F5F1E8] hover:bg-[#222] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="aspect-[16/10] sm:aspect-[16/9] w-full">
              {(() => {
                const ActiveVisual = VisualMap[activeItem.id] || VisualMap['g-1'];
                return <ActiveVisual />;
              })()}
            </div>

            {/* Modal Footer Description */}
            <div className="p-5 bg-[#0E0F14] border-t border-[#2A2B36] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs sm:text-sm text-[#A7A7A7]">
                  {activeItem.description}
                </p>
                <p className="text-xs font-mono text-[#D4AF37] mt-1">
                  {activeItem.specs}
                </p>
              </div>
              <a
                href={getWhatsAppUrl(`Hello, I liked the "${activeItem.title}" style from your gallery and would like to build something similar on my plot in Jaipur.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white text-xs font-semibold rounded shrink-0 hover:brightness-105"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Discuss This Style</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
