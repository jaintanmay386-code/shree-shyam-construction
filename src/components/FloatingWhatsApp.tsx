import React, { useState } from 'react';
import { COMPANY, getWhatsAppUrl } from '../constants/company.ts';
import { MessageSquare, Phone, X, Sparkles } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Optional Help Bubble */}
      {showTooltip && (
        <div className="bg-[#14151B] border border-[#D4AF37]/50 rounded-lg p-3 shadow-2xl max-w-xs animate-in fade-in duration-200 text-right">
          <div className="flex items-center justify-between gap-3 mb-1">
            <span className="text-[11px] font-mono text-[#D4AF37] font-semibold">
              Shree Shyam Constructions
            </span>
            <button
              type="button"
              onClick={() => setShowTooltip(false)}
              className="text-[#A7A7A7] hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-xs text-[#F5F1E8] mb-2">
            Have a plot in Jaipur? Chat directly with our construction team.
          </p>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-[#25D366] font-semibold hover:underline"
          >
            <span>Open WhatsApp Chat</span>
            <span>&rarr;</span>
          </a>
        </div>
      )}

      <div className="flex items-center gap-2">
        {/* Floating Click-to-Call Quick Button (Mobile/Desktop) */}
        <a
          href={COMPANY.phoneTel}
          className="w-11 h-11 rounded-full bg-[#1A1B22] border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center shadow-xl hover:bg-[#D4AF37] hover:text-[#0B0B0B] transition-all hover:scale-105"
          title="Direct Call: 9610448836"
          aria-label="Call 9610448836"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* Floating WhatsApp Button */}
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          className="relative group flex items-center justify-center w-13 h-13 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-105 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
          aria-label="Chat on WhatsApp"
        >
          {/* Subtle pulse wave */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none group-hover:hidden" />
          <MessageSquare className="w-6 h-6 fill-white text-white relative z-10" />
        </a>
      </div>
    </div>
  );
};
