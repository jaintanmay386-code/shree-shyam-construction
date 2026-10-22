import React, { useState } from 'react';
import { COMPANY, getWhatsAppUrl } from '../constants/company.ts';
import { ChevronDown, HelpCircle, MessageSquare, Phone, CheckCircle2 } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'timeline' | 'cost' | 'process' | 'quality';
  highlights?: string[];
}

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string>('faq-1');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'What is the typical timeline for a home construction project in Jaipur?',
      category: 'timeline',
      answer:
        'For a typical 100 to 200 Gaj plot with a Ground + 1 (Duplex) structure, complete residential construction usually takes between 6 to 9 months from excavation to key handover. The timeline is systematically divided into distinct phases: Foundation & Plinth (4–5 weeks), RCC Frame & Slabs (6–8 weeks), Brickwork & Plastering (5–6 weeks), and Interior Finishing, Tiling & Painting (6–8 weeks). Factors like curing cycles and customer-selected custom finishes are factored into the agreed schedule.',
      highlights: [
        'Average 6–9 months for a standard G+1 duplex',
        'Mandatory 14–21 day water curing cycles for concrete strength',
        'Transparent milestone schedules agreed before work starts',
      ],
    },
    {
      id: 'faq-2',
      question: 'How is the cost of construction estimated for a customer-owned plot?',
      category: 'cost',
      answer:
        'We estimate construction cost on a transparent square-foot built-up area basis, supported by an itemized Bill of Quantities (BOQ). The total investment depends on your plot dimensions, total covered built-up area across floors, and the chosen material specifications (such as TMT steel grade, cement brand, tile sizing, teak woodwork, and sanitary fittings). Our rates typically range from ₹1,450 to ₹1,650/sq ft for Standard Quality, ₹1,850 to ₹2,150/sq ft for Premium Quality, and ₹2,400+/sq ft for Luxury Villas.',
      highlights: [
        'Detailed item-by-item BOQ (Bill of Quantities)',
        'Zero hidden charges or unannounced escalations',
        'Material brand lists explicitly defined in the agreement',
      ],
    },
    {
      id: 'faq-3',
      question: 'Do you build on customer-owned plots across all areas in Jaipur?',
      category: 'process',
      answer:
        'Yes. Shree Shyam Constructions specializes exclusively in residential construction on plots owned by our customers. We do not act as property dealers or land brokers. We operate throughout Jaipur—including Mansarovar, Jagatpura, Vaishali Nagar, Nirman Nagar, Malviya Nagar, Sanganer, Tonk Road, Ajmer Road, Sirsi Road, and nearby developing colonies.',
      highlights: [
        '100% focused on customer-owned plots',
        'No property sales or broker affiliations',
        'Coverage across all major Jaipur localities',
      ],
    },
    {
      id: 'faq-4',
      question: 'How are payments structured during the construction period?',
      category: 'cost',
      answer:
        'We never ask for large upfront sums. Payments are strictly linked to verifiable physical construction milestones. A typical schedule includes an initial booking/mobilization advance, followed by installments upon completion of plinth casting, ground floor roof slab casting, first floor roof slab casting, brick masonry completion, internal/external plastering, flooring and tile work, and a final balance payment upon successful handover after joint snag-list verification.',
      highlights: [
        'Milestone-based stage payments only',
        'Pay after inspecting completed work on site',
        'Weekly photographic progress reports via WhatsApp',
      ],
    },
    {
      id: 'faq-5',
      question: 'What materials and structural brands do you use?',
      category: 'quality',
      answer:
        'Structural longevity is our primary commitment. We only procure grade-certified materials from trusted manufacturers. For structural RCC work, we use Fe500D/Fe550D primary TMT rebar (Kamdhenu, Jindal, or equivalent) and 43/53 grade OPC/PPC cement from UltraTech, Ambuja, or Shree Cement. Plumbing uses heavy-duty CPVC/UPVC pipes from Astral or Ashirvad, and electrical installations feature fire-resistant copper wiring and modular switchgear.',
      highlights: [
        'Certified Fe500D / Fe550D TMT rebar',
        'UltraTech / Ambuja certified cement grades',
        'Heavy-duty concealed plumbing with pressure leak testing',
      ],
    },
    {
      id: 'faq-6',
      question: 'Can I customize the floor plan and make changes during construction?',
      category: 'process',
      answer:
        'Absolutely. Before any physical excavation begins, we review your 2D floor plans, room ergonomics, Vastu preferences, and window placements to ensure your family is 100% satisfied. If minor adjustments are desired during masonry (such as electrical switch points, niche shelving, or door openings), our on-site team coordinates them seamlessly before plastering and conduit sealing to prevent rework or structural compromise.',
      highlights: [
        'Custom floor layouts tailored to your plot dimensions',
        'Vastu-compliant orientation guidance',
        'Transparent change-order documentation if scope evolves',
      ],
    },
    {
      id: 'faq-7',
      question: 'How do you monitor daily quality and ensure proper water curing?',
      category: 'quality',
      answer:
        'Water curing is the single most critical factor for RCC slab strength and crack prevention in Jaipur’s climate. We assign on-site supervision to maintain continuous ponding on roof slabs and burlap-wrap curing for columns for a minimum of 14 to 21 days. Furthermore, we maintain a dedicated WhatsApp project group with you, sharing high-resolution photos and video walkthroughs of every concrete pour and rebar grid before casting.',
      highlights: [
        'Dedicated water curing supervision (14–21 days)',
        'Direct founder oversight and on-site engineering presence',
        'Regular WhatsApp photo and video walkthroughs',
      ],
    },
    {
      id: 'faq-8',
      question: 'What is the first step to get started with Shree Shyam Constructions?',
      category: 'process',
      answer:
        'Getting started is simple and completely obligation-free. You can contact us via phone (9610448836), WhatsApp, or by filling out the consultation form below. We will arrange a free site inspection at your plot in Jaipur to examine soil condition, road access, and dimensions, followed by an initial layout discussion and a preliminary cost estimate.',
      highlights: [
        'Free initial plot inspection within Jaipur',
        'No obligation layout and budget discussion',
        'Direct phone consultation with our team',
      ],
    },
  ];

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'timeline', label: 'Timelines' },
    { id: 'cost', label: 'Estimates & Pricing' },
    { id: 'process', label: 'Process & Plot Work' },
    { id: 'quality', label: 'Materials & Quality' },
  ];

  const filteredFaqs =
    activeCategory === 'all'
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#0E0F14] text-[#F5F1E8] relative border-t border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37] mb-2">
            Clear Answers &amp; Honest Guidance
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F1E8] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-[#A7A7A7] leading-relaxed">
            Building a house on your plot is a major milestone. Here are direct, transparent answers to the questions homeowners in Jaipur ask us most frequently.
          </p>
        </div>

        {/* Category Filters (Clean functional buttons per Section 1.A) */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-[#22242E]">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded transition-colors cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#D4AF37] text-[#0B0B0B] font-semibold'
                  : 'bg-[#15161C] text-[#A7A7A7] hover:text-[#F5F1E8] hover:bg-[#1E2028] border border-[#2B2D38]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          
          {/* Main Accordion Column (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            {filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-lg border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-[#15161F] border-[#D4AF37]/50 shadow-lg shadow-[#D4AF37]/5'
                      : 'bg-[#121318] border-[#252733] hover:border-[#D4AF37]/30'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                  >
                    <span className="font-serif text-base sm:text-lg font-bold text-[#F5F1E8] pr-2 leading-snug">
                      {faq.question}
                    </span>
                    <span
                      className={`p-1.5 rounded bg-[#1C1D26] text-[#D4AF37] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-[#D4AF37]/20 text-[#D4AF37]' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${faq.id}`}
                      className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#A7A7A7] leading-relaxed border-t border-[#222430] animate-in fade-in duration-150"
                    >
                      <p className="mb-4 text-[#D1D1D1]">{faq.answer}</p>
                      
                      {faq.highlights && (
                        <div className="pt-3 border-t border-[#1F212C]">
                          <span className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-semibold block mb-2">
                            Key Takeaways:
                          </span>
                          <ul className="space-y-1.5">
                            {faq.highlights.map((h, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-[#A7A7A7]">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Support Card Column (4 cols) */}
          <div className="lg:col-span-4 bg-[#14151C] border border-[#D4AF37]/35 rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-5">
                <HelpCircle className="w-6 h-6" />
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F5F1E8] mb-3">
                Have a Specific Query About Your Plot?
              </h3>

              <p className="text-xs sm:text-sm text-[#A7A7A7] leading-relaxed mb-6">
                Every residential plot in Jaipur has unique soil, orientation, and layout possibilities. Our founders and engineers are happy to discuss your specific requirements.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2.5 text-xs text-[#F5F1E8]">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>No obligation technical guidance</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#F5F1E8]">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Free initial plot site evaluation</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#F5F1E8]">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Prompt response within a few hours</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-[#262836]">
              <a
                href={getWhatsAppUrl("Hello Shree Shyam Constructions, I have a question regarding house construction on my plot in Jaipur.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded bg-[#25D366] text-white text-xs sm:text-sm font-semibold hover:brightness-105 transition-all text-center shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Ask on WhatsApp</span>
              </a>

              <a
                href={COMPANY.phoneTel}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37]/10 text-xs sm:text-sm font-semibold transition-all text-center"
              >
                <Phone className="w-4 h-4" />
                <span>Call {COMPANY.displayPhone}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
