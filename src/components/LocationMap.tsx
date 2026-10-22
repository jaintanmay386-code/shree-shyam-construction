import React from 'react';
import { COMPANY, getWhatsAppUrl } from '../constants/company.ts';
import { MapPin, Phone, MessageSquare, Clock, Compass, Navigation } from 'lucide-react';

export const LocationMap: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#121318] text-[#F5F1E8] relative border-t border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37] mb-2">
            Visit Our Office In Jaipur
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F1E8] mb-4">
            Office Location &amp; Service Coverage
          </h2>
          <p className="text-base sm:text-lg text-[#A7A7A7] leading-relaxed">
            Conveniently located in Mansarovar, Jaipur. We provide full on-site residential house construction services across all major localities in Jaipur.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Office Details */}
          <div className="lg:col-span-5 bg-[#171822] border border-[#2B2D3A] rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#D4AF37]/15 text-[#D4AF37] text-xs font-mono font-semibold mb-4 border border-[#D4AF37]/30">
                <MapPin className="w-3.5 h-3.5" />
                <span>Jaipur Head Office</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#F5F1E8] mb-2">
                Shree Shyam Constructions
              </h3>
              <p className="text-sm font-semibold text-[#D4AF37] mb-6">
                Residential House Construction on Customer-Owned Plots
              </p>

              <div className="space-y-4 mb-8 text-sm">
                <div className="flex items-start gap-3 text-[#A7A7A7]">
                  <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#F5F1E8] block">Address:</strong>
                    <span>Suman Nagar, Mansarovar, Jaipur, Rajasthan, India</span>
                    <span className="block text-xs text-[#A7A7A7]/70 mt-0.5">PIN: 302020</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-[#A7A7A7]">
                  <Phone className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#F5F1E8] block">Phone / Mobile:</strong>
                    <a href={COMPANY.phoneTel} className="text-[#D4AF37] hover:underline font-mono">
                      {COMPANY.displayPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-[#A7A7A7]">
                  <Clock className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#F5F1E8] block">Visiting &amp; Consultation Hours:</strong>
                    <span>{COMPANY.hours}</span>
                    <span className="block text-xs text-[#D4AF37]">{COMPANY.sunday}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-[#A7A7A7]">
                  <Compass className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#F5F1E8] block">Service Coverage Area:</strong>
                    <span>Mansarovar, Jagatpura, Vaishali Nagar, Nirman Nagar, Malviya Nagar, Sanganer, Tonk Road, Ajmer Road, and surrounding Jaipur colonies.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#2A2B38] flex flex-wrap gap-3">
              <a
                href={COMPANY.phoneTel}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-[#1C1E29] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold hover:bg-[#D4AF37]/10 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Before Visiting</span>
              </a>
              <a
                href={getWhatsAppUrl("Hello Shree Shyam Constructions, I would like to visit your Mansarovar office for a plot consultation.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-[#25D366] text-white text-xs font-semibold hover:brightness-105 transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Appointment</span>
              </a>
            </div>
          </div>

          {/* Right Column: Stylized Locality Map Representation */}
          <div className="lg:col-span-7 bg-[#0E0F14] border border-[#2B2D38] rounded-xl overflow-hidden relative flex flex-col justify-between">
            
            {/* Visual Vector Map of Mansarovar Jaipur District */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#121319] p-4 sm:p-6 overflow-hidden">
              <svg viewBox="0 0 600 350" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* City street grid patterns */}
                <defs>
                  <pattern id="streetGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="0" x2="40" y2="0" stroke="#1D202B" strokeWidth="1" />
                    <line x1="0" y1="0" x2="0" y2="40" stroke="#1D202B" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="600" height="350" fill="#13141B" />
                <rect width="600" height="350" fill="url(#streetGrid)" />

                {/* Major Arterial Roads in Jaipur */}
                {/* New Sanganer Road */}
                <line x1="50" y1="320" x2="550" y2="60" stroke="#2B2E3D" strokeWidth="14" strokeLinecap="round" />
                <line x1="50" y1="320" x2="550" y2="60" stroke="#D4AF37" strokeWidth="1" strokeDasharray="6 6" strokeOpacity="0.4" />
                <text x="400" y="115" fill="#A7A7A7" fontSize="10" fontFamily="sans-serif" transform="rotate(-28 400,115)">
                  New Sanganer Road
                </text>

                {/* VT Road / Patel Marg */}
                <line x1="120" y1="50" x2="480" y2="310" stroke="#2B2E3D" strokeWidth="10" strokeLinecap="round" />
                <text x="210" y="140" fill="#A7A7A7" fontSize="10" fontFamily="sans-serif" transform="rotate(35 210,140)">
                  VT Road / Patel Marg
                </text>

                {/* Mansarovar Metro Corridor */}
                <line x1="40" y1="120" x2="560" y2="120" stroke="#1F3A2A" strokeWidth="6" strokeDasharray="8 4" />
                <rect x="180" y="112" width="16" height="16" rx="3" fill="#25D366" opacity="0.8" />
                <text x="205" y="124" fill="#25D366" fontSize="10" fontFamily="monospace">
                  Mansarovar Metro Stn
                </text>

                {/* Suman Nagar Colony Block Highlight */}
                <rect x="250" y="160" width="150" height="100" rx="8" fill="#D4AF37" fillOpacity="0.08" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="4 4" />
                <text x="260" y="180" fill="#D4AF37" fontSize="11" fontFamily="sans-serif" fontWeight="bold">
                  Suman Nagar Sector
                </text>

                {/* Shree Shyam Constructions Office Pin */}
                <g transform="translate(320, 200)">
                  {/* Glowing pulse ring */}
                  <circle cx="0" cy="0" r="16" fill="#D4AF37" fillOpacity="0.25" />
                  <circle cx="0" cy="0" r="7" fill="#D4AF37" />
                  {/* Pin label callout */}
                  <rect x="-85" y="-42" width="170" height="28" rx="4" fill="#0B0B0B" stroke="#D4AF37" strokeWidth="1" />
                  <text x="0" y="-24" textAnchor="middle" fill="#F5F1E8" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                    Shree Shyam Constructions
                  </text>
                  {/* Callout triangle */}
                  <polygon points="-4,-14 4,-14 0,-9" fill="#0B0B0B" />
                </g>

                {/* Locality Compass */}
                <g transform="translate(540, 50)">
                  <circle cx="0" cy="0" r="18" fill="#1C1D26" stroke="#333" />
                  <line x1="0" y1="-14" x2="0" y2="14" stroke="#D4AF37" strokeWidth="1.5" />
                  <line x1="-14" y1="0" x2="14" y2="0" stroke="#666" strokeWidth="1" />
                  <text x="0" y="-6" textAnchor="middle" fill="#D4AF37" fontSize="8" fontWeight="bold">N</text>
                </g>
              </svg>
            </div>

            {/* Map Clarification & Directions Banner */}
            <div className="p-4 bg-[#14151C] border-t border-[#2A2B36] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div className="text-[#A7A7A7]">
                <strong className="text-[#F5F1E8]">Locality Map Representation: </strong>
                Located in Suman Nagar, off New Sanganer Road &amp; VT Road, Mansarovar, Jaipur.
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Suman Nagar, Mansarovar, Jaipur, Rajasthan")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#1F212C] text-[#D4AF37] border border-[#D4AF37]/30 hover:bg-[#D4AF37]/15 transition-colors whitespace-nowrap shrink-0"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
