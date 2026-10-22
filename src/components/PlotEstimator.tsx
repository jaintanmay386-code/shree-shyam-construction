import React, { useState, useMemo } from 'react';
import { getWhatsAppUrl, COMPANY } from '../constants/company.ts';
import { Calculator, Check, ArrowRight, MessageSquare, Info } from 'lucide-react';

export const PlotEstimator: React.FC = () => {
  const [plotSizeGaj, setPlotSizeGaj] = useState<number>(150);
  const [floors, setFloors] = useState<number>(2); // G+1 (2 floors)
  const [packageType, setPackageType] = useState<'standard' | 'premium' | 'luxury'>('premium');

  // 1 Gaj (sq yard) = 9 sq feet
  // Approximate built-up efficiency (e.g. 75% coverage per floor + setbacks)
  const groundBuiltUpSqFt = plotSizeGaj * 9 * 0.75;
  const totalBuiltUpSqFt = groundBuiltUpSqFt * floors;

  // Rate per sq ft approximate brackets in Jaipur
  const packageRates = {
    standard: {
      name: "Standard Quality",
      rateLow: 1450,
      rateHigh: 1650,
      features: [
        "First-grade red clay bricks / AAC blocks",
        "Ultratech / Ambuja certified 43/53 grade cement",
        "ISI certified Fe500D TMT reinforcement",
        "Premium vitrified flooring (2x2 ft)",
        "Standard CPVC plumbing & concealed wiring",
      ],
    },
    premium: {
      name: "Premium Quality (Most Popular)",
      rateLow: 1850,
      rateHigh: 2150,
      features: [
        "Fe550D primary steel & structural certification",
        "Large 4x2 ft double-charged vitrified tiles",
        "Granite kitchen platform with stainless sink",
        "Jaquar / Cera premium sanitary & CP fittings",
        "Asian Paints Royale luxury interior emulsion",
        "Modern front elevation 3D architectural styling",
      ],
    },
    luxury: {
      name: "Luxury Villa Package",
      rateLow: 2400,
      rateHigh: 2850,
      features: [
        "Italian marble / imported quartz accents",
        "Grohe / Kohler premium thermostatic fixtures",
        "Double-glazed soundproof UPVC / aluminium fenestration",
        "False ceiling with warm LED cove lighting throughout",
        "Teakwood main door with digital smart lock",
        "Architectural lighting & cantilevered facade detailing",
      ],
    },
  };

  const selectedPkg = packageRates[packageType];
  const lowCost = Math.round((totalBuiltUpSqFt * selectedPkg.rateLow) / 100000);
  const highCost = Math.round((totalBuiltUpSqFt * selectedPkg.rateHigh) / 100000);

  const formatLakhs = (val: number) => {
    return `₹${val} Lakhs`;
  };

  const estimatorWhatsAppMessage = `Hello Shree Shyam Constructions, I used your online plot estimator for my plot in Jaipur. Details: Plot Size: ${plotSizeGaj} Gaj (${plotSizeGaj * 9} sq ft), Floors: ${floors === 1 ? 'Ground Only' : floors === 2 ? 'Ground + 1' : 'Ground + 2'}, Package: ${selectedPkg.name}. Estimated Built-up: ~${Math.round(totalBuiltUpSqFt)} sq ft. Estimated Range: ${formatLakhs(lowCost)} - ${formatLakhs(highCost)}. I would like to arrange a site visit.`;

  return (
    <section id="estimator" className="py-20 lg:py-28 bg-[#0B0B0B] text-[#F5F1E8] relative border-t border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37] mb-2">
            Jaipur Plot Construction Calculator
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F1E8] mb-4">
            Estimate Your Construction Budget
          </h2>
          <p className="text-base sm:text-lg text-[#A7A7A7] leading-relaxed">
            Quickly estimate the approximate built-up area and construction cost for your residential plot in Jaipur based on your desired floor count and material package.
          </p>
        </div>

        {/* Interactive Estimator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-[#14151B] border border-[#2B2D38] rounded-xl p-6 sm:p-8">
            
            {/* 1. Plot Size (Gaj) */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold text-[#F5F1E8]">
                  1. Plot Size (in Gaj / Square Yards):
                </label>
                <div className="text-right">
                  <span className="font-mono text-lg font-bold text-[#D4AF37]">
                    {plotSizeGaj} Gaj
                  </span>
                  <span className="text-xs text-[#A7A7A7] block">
                    ({plotSizeGaj * 9} sq. ft.)
                  </span>
                </div>
              </div>

              {/* Slider */}
              <input
                type="range"
                min="50"
                max="400"
                step="10"
                value={plotSizeGaj}
                onChange={(e) => setPlotSizeGaj(Number(e.target.value))}
                className="w-full h-2 bg-[#252630] rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
              />

              {/* Quick Select Buttons */}
              <div className="flex flex-wrap gap-2 mt-3">
                {[100, 150, 200, 250, 300].map((gaj) => (
                  <button
                    key={gaj}
                    type="button"
                    onClick={() => setPlotSizeGaj(gaj)}
                    className={`px-3 py-1 text-xs rounded font-mono transition-colors cursor-pointer ${
                      plotSizeGaj === gaj
                        ? 'bg-[#D4AF37] text-[#0B0B0B] font-bold'
                        : 'bg-[#1F2028] text-[#A7A7A7] hover:text-[#F5F1E8]'
                    }`}
                  >
                    {gaj} Gaj
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Floors */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-[#F5F1E8] mb-3">
                2. Number of Floors:
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: 1, label: "Ground Floor", sub: "G Only" },
                  { value: 2, label: "Ground + 1", sub: "Duplex (G+1)" },
                  { value: 3, label: "Ground + 2", sub: "Triplex (G+2)" },
                ].map((f) => (
                  <button
                    key={f.value}
                    type="button"
                    onClick={() => setFloors(f.value)}
                    className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                      floors === f.value
                        ? 'bg-[#1F212B] border-[#D4AF37] text-[#F5F1E8]'
                        : 'bg-[#111216] border-[#2B2D38] text-[#A7A7A7] hover:border-[#D4AF37]/40'
                    }`}
                  >
                    <span className="block text-xs sm:text-sm font-bold text-[#F5F1E8]">
                      {f.label}
                    </span>
                    <span className="text-[11px] text-[#D4AF37]">{f.sub}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Construction Package */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-[#F5F1E8] mb-3">
                3. Material &amp; Specification Package:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'standard', name: "Standard", rate: "₹1,450 - ₹1,650/sqft" },
                  { id: 'premium', name: "Premium", rate: "₹1,850 - ₹2,150/sqft", badge: "Popular" },
                  { id: 'luxury', name: "Luxury Villa", rate: "₹2,400 - ₹2,850/sqft" },
                ].map((pkg) => (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setPackageType(pkg.id as any)}
                    className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer relative ${
                      packageType === pkg.id
                        ? 'bg-[#1F212B] border-[#D4AF37] shadow-sm'
                        : 'bg-[#111216] border-[#2B2D38] text-[#A7A7A7] hover:border-[#D4AF37]/40'
                    }`}
                  >
                    {pkg.badge && (
                      <span className="absolute -top-2 -right-1 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-[#D4AF37] text-[#0B0B0B]">
                        {pkg.badge}
                      </span>
                    )}
                    <span className="block text-xs sm:text-sm font-bold text-[#F5F1E8] mb-1">
                      {pkg.name}
                    </span>
                    <span className="block text-xs font-mono text-[#D4AF37]">
                      {pkg.rate}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Package Inclusions */}
            <div className="p-4 rounded-lg bg-[#0E0F14] border border-[#23242E]">
              <span className="text-xs uppercase font-semibold text-[#D4AF37] block mb-2">
                What&apos;s Included in {selectedPkg.name}:
              </span>
              <ul className="space-y-1.5 text-xs text-[#A7A7A7]">
                {selectedPkg.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Results & Summary Column */}
          <div className="lg:col-span-5 bg-[#171822] border border-[#D4AF37]/40 rounded-xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D4AF37] mb-2">
                <Calculator className="w-4 h-4" />
                <span>Estimated Estimate Summary</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#F5F1E8] mb-6">
                Your Construction Estimate
              </h3>

              <div className="space-y-4 pb-6 border-b border-[#2C2E3B] mb-6 text-sm">
                <div className="flex justify-between items-center text-[#A7A7A7]">
                  <span>Total Plot Area:</span>
                  <span className="font-mono text-[#F5F1E8] font-medium">
                    {plotSizeGaj} Gaj ({plotSizeGaj * 9} Sq. Ft.)
                  </span>
                </div>
                <div className="flex justify-between items-center text-[#A7A7A7]">
                  <span>Floors Planned:</span>
                  <span className="font-mono text-[#F5F1E8] font-medium">
                    {floors === 1 ? 'Ground Only' : floors === 2 ? 'G + 1 (Duplex)' : 'G + 2 (Triplex)'}
                  </span>
                </div>
                <div className="flex justify-between items-center text-[#A7A7A7]">
                  <span>Approx. Built-Up Area:</span>
                  <span className="font-mono text-[#F5F1E8] font-semibold">
                    ~{Math.round(totalBuiltUpSqFt)} Sq. Ft.
                  </span>
                </div>
                <div className="flex justify-between items-center text-[#A7A7A7]">
                  <span>Specification Level:</span>
                  <span className="font-mono text-[#D4AF37] font-semibold">
                    {selectedPkg.name}
                  </span>
                </div>
              </div>

              {/* Big Price Range Banner */}
              <div className="p-5 rounded-lg bg-[#0B0C0F] border border-[#D4AF37]/30 text-center mb-6">
                <span className="text-xs uppercase font-mono tracking-wider text-[#A7A7A7] block mb-1">
                  Estimated Project Cost Range
                </span>
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#D4AF37] tracking-tight block">
                  {formatLakhs(lowCost)} – {formatLakhs(highCost)}*
                </span>
                <span className="text-[11px] text-[#A7A7A7]/70 mt-1 block">
                  Inclusive of structural masonry, RCC, plaster &amp; finishing
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3">
              <a
                href={getWhatsAppUrl(estimatorWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded bg-[#25D366] text-white text-xs sm:text-sm font-semibold hover:brightness-105 transition-all shadow-md text-center"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Estimate to WhatsApp</span>
              </a>

              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded border border-[#D4AF37]/60 text-[#D4AF37] hover:bg-[#D4AF37]/10 text-xs sm:text-sm font-semibold transition-all text-center"
              >
                <span>Book Site Visit for Exact BOQ</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <p className="text-[11px] text-[#A7A7A7]/70 text-center flex items-center justify-center gap-1.5 pt-2">
                <Info className="w-3.5 h-3.5 shrink-0" />
                <span>*Estimates are indicative. Exact costs are confirmed upon physical site visit &amp; approved drawings.</span>
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
