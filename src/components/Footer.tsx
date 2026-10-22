import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo.tsx';
import { COMPANY, SERVICES, NAV_LINKS, getWhatsAppUrl } from '../constants/company.ts';
import { Phone, MessageSquare, MapPin, Mail, ArrowUp, X, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070709] text-[#F5F1E8] border-t border-[#D4AF37]/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Main Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#22242D]">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4">
            <BrandLogo size="md" className="mb-4" />
            <p className="font-serif text-sm font-semibold text-[#D4AF37] mb-2">
              &ldquo;{COMPANY.tagline}&rdquo;
            </p>
            <p className="text-xs sm:text-sm text-[#A7A7A7] leading-relaxed mb-6 max-w-sm">
              Shree Shyam Constructions is an honest, newly established residential house construction firm headquartered in Mansarovar, Jaipur. We specialize in building custom homes on customer-owned plots with transparent planning and quality execution.
            </p>
            <p className="text-xs font-mono text-[#D4AF37] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>{COMPANY.supportingStatement}</span>
            </p>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#F5F1E8] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#A7A7A7]">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-[#D4AF37] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Construction Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#F5F1E8] mb-4">
              Our Construction Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#A7A7A7]">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a href="#services" className="hover:text-[#D4AF37] transition-colors line-clamp-1">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Office (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#F5F1E8] mb-4">
              Contact &amp; Location
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#A7A7A7]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{COMPANY.officeAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={COMPANY.phoneTel} className="text-[#D4AF37] hover:underline font-mono">
                  {COMPANY.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{COMPANY.email}</span>
              </div>

              <div className="pt-3">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded bg-[#25D366] text-white text-xs font-semibold hover:brightness-105 transition-all shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A7A7A7]">
          <div>
            &copy; {currentYear} {COMPANY.name}. All rights reserved.
            <span className="block sm:inline sm:ml-2 text-[#666]">
              Jaipur, Rajasthan, India.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setActiveModal('privacy')}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setActiveModal('terms')}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded bg-[#171820] border border-[#2D2E38] hover:border-[#D4AF37] text-[#D4AF37] transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Privacy Policy & Terms Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#14151C] border border-[#D4AF37]/50 rounded-xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative text-[#F5F1E8]">
            <div className="flex items-center justify-between pb-4 border-b border-[#282A36] mb-4">
              <h3 className="font-serif text-xl font-bold text-[#D4AF37]">
                {activeModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
              </h3>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="p-1 rounded text-[#A7A7A7] hover:text-white"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs sm:text-sm text-[#A7A7A7] space-y-3 max-h-[60vh] overflow-y-auto pr-2 leading-relaxed">
              {activeModal === 'privacy' ? (
                <>
                  <p>
                    <strong>1. Information Collection:</strong> Shree Shyam Constructions collects customer-provided details such as name, contact number, plot area, and construction specifications strictly for direct communication and site-visit arrangements.
                  </p>
                  <p>
                    <strong>2. Confidentiality:</strong> We do not share, sell, or rent your plot details, architectural requirements, or phone numbers to third-party marketing entities or real estate brokers.
                  </p>
                  <p>
                    <strong>3. Consent:</strong> Submitting your mobile number authorizes our technical construction team to contact you via telephone call or WhatsApp for project consultations.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>1. Project Scope &amp; Estimates:</strong> Online cost estimates and sample visual representations provided on this website are indicative. All final construction commitments, payment milestones, timelines, and material brands are governed strictly by a physical signed agreement.
                  </p>
                  <p>
                    <strong>2. Plot Ownership:</strong> Services are offered specifically for residential construction on customer-owned plots with legal title and applicable local permissions.
                  </p>
                  <p>
                    <strong>3. Jurisdiction:</strong> Any mutual construction contracts are subject to the legal jurisdiction of Jaipur courts, Rajasthan, India.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-[#282A36] text-right">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 rounded bg-[#D4AF37] text-[#0B0B0B] text-xs font-bold hover:brightness-105"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
