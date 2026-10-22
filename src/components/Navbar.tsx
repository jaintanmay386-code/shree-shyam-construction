import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo.tsx';
import { COMPANY, getWhatsAppUrl } from '../constants/company.ts';
import { Phone, MessageSquare, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenConsultationModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultationModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleConsultationClick = () => {
    setMobileMenuOpen(false);
    if (onOpenConsultationModal) {
      onOpenConsultationModal();
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0B0B]/95 backdrop-blur-md border-b border-[#D4AF37]/25 shadow-2xl py-3'
          : 'bg-[#0B0B0B]/85 backdrop-blur-sm border-b border-[#D4AF37]/15 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: 3 distinct zones separated by gap-8 */}
        <div className="flex items-center justify-between gap-8">
          
          {/* ZONE 1: Brand Zone (Single element / wordmark with emblem) */}
          <a
            href="#hero"
            className="flex items-center gap-3 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-lg group"
            aria-label="Shree Shyam Constructions Home"
          >
            <BrandLogo size="md" />
          </a>

          {/* ZONE 2: 4–5 concise single-line nav links */}
          <nav
            className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#F5F1E8]/80"
            aria-label="Primary Navigation"
          >
            <a
              href="#about"
              className="hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#D4AF37]"
            >
              About Us
            </a>
            <a
              href="#services"
              className="hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#D4AF37]"
            >
              Services
            </a>
            <a
              href="#process"
              className="hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#D4AF37]"
            >
              Process
            </a>
            <a
              href="#projects"
              className="hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#D4AF37]"
            >
              Projects
            </a>
            <a
              href="#estimator"
              className="hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#D4AF37]"
            >
              Estimator
            </a>
            <a
              href="#faq"
              className="hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#D4AF37]"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#D4AF37]"
            >
              Contact
            </a>
          </nav>

          {/* ZONE 3: 1 Primary Action + Mobile hamburger toggle */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Direct Call Button (Quick Desktop Action) */}
            <a
              href={COMPANY.phoneTel}
              className="hidden xl:inline-flex items-center gap-2 text-xs font-semibold text-[#D4AF37] border border-[#D4AF37]/35 hover:bg-[#D4AF37]/10 px-3 py-2 rounded-md transition-colors whitespace-nowrap shrink-0"
              title="Call Shree Shyam Constructions"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{COMPANY.displayPhone}</span>
            </a>

            {/* Primary Action Button */}
            <button
              onClick={handleConsultationClick}
              className="relative inline-flex items-center justify-center px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-[#0B0B0B] bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] rounded-md shadow-md hover:shadow-[#D4AF37]/20 hover:brightness-105 active:scale-[0.98] transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              Get Free Consultation
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-[#F5F1E8] hover:text-[#D4AF37] hover:bg-[#171717] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0F0F12] border-b border-[#D4AF37]/30 px-5 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3 pt-2">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#F5F1E8] hover:text-[#D4AF37] font-medium py-2 border-b border-[#222]"
            >
              About Us
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#F5F1E8] hover:text-[#D4AF37] font-medium py-2 border-b border-[#222]"
            >
              Our Services
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#F5F1E8] hover:text-[#D4AF37] font-medium py-2 border-b border-[#222]"
            >
              Our Construction Process
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#F5F1E8] hover:text-[#D4AF37] font-medium py-2 border-b border-[#222]"
            >
              Our Projects &amp; Gallery
            </a>
            <a
              href="#estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#F5F1E8] hover:text-[#D4AF37] font-medium py-2 border-b border-[#222]"
            >
              Plot Cost Estimator
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#F5F1E8] hover:text-[#D4AF37] font-medium py-2 border-b border-[#222]"
            >
              Frequently Asked Questions
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#F5F1E8] hover:text-[#D4AF37] font-medium py-2 border-b border-[#222]"
            >
              Contact Us
            </a>

            <div className="pt-3 grid grid-cols-2 gap-2">
              <a
                href={COMPANY.phoneTel}
                className="flex items-center justify-center gap-2 px-3 py-2.5 rounded border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold hover:bg-[#D4AF37]/10"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-3 py-2.5 rounded bg-[#25D366] text-white text-xs font-semibold hover:brightness-105"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
